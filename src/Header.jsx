import { BellIcon } from "@heroicons/react/20/solid";
import { Notifications } from "./data/MockData.js"
import { NotificationCard } from './components/NotificationCard.jsx'
import { useState } from 'react'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)


    const handleNotify = () => {
        setIsOpen(!isOpen)
    }
    
    const trueCount = Notifications.filter((item) => item.unread).length

    return <div className="bg-white relative flex justify-between items-center px-4 py-2">
        <div className=" font-bold text-xl text-[#001f4d] ">Hi, Joel</div>

        <div  className=" ">
            <div onClick={handleNotify} className=" hover:cursor-pointer">
                <BellIcon  className=" relative w-9 text-[#ffb300]"/>
                {trueCount ? <div className="absolute bg-red-500 top-2 right-5 text-white rounded-full w-4 h-4 text-center flex items-center justify-center text-[11px]">{trueCount}</div> : ""}
            </div>
            

            {isOpen && (<div className=" absolute right-2 mt-2 w-80 bg-[#001f4d] shadow-yellow-300 rounded-lg shadow z-50 
                            before:content-[''] 
                            before:absolute before:bottom-full before:right-5 
                            before:border-8 before:border-transparent before:border-b-[#ffb300]">
                {Notifications.map((notify ) => (
                    <NotificationCard notification={notify} key={notify.id} />
                ))}
            </div>)
        }
        </div>

        

    </div>
};





export default Header








