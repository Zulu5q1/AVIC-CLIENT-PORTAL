import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useState } from 'react'
import SideNav from './SideNav.jsx'
import { stats, Shipments } from "./data/MockData.js";



const Profile= () => {

    const [name, setName] = useState("Joel Oluwa")
    const [email, setEmail] = useState("zulucorp@example.com")
    const [phone, setPhone] = useState(9020339588)
    const [country, setCountry] = useState("Nigeria")
    const [company, setCompany] = useState("Zulu Corp.")
    const [status] = useState("Individual")
    const [ran] = useState(() => Math.floor(Math.random() * 10000) +1)
    const [edit, setEdit] = useState(true)

    const ship = Shipments.filter((item) => item.status==="Delivered").length

    


    const handleSubmit = () => {
        return setEdit(true)
    }


    return <div className="ml-45">
        <SideNav/>
        <div className=" px-2 bg-linear-to-t from-[#001f4d] to-white  flex flex-col items-center justify-center w-full">
            <h1 className="mt-5 text-[#001f4d] font-black text-2xl mb-2">PROFILE</h1>
            <div className="mb-5 flex items-center gap-14 px-2  w-full justify-center">
                <span><UserCircleIcon className="w-25 text-[#001f4d]"/></span>
                <div className="text-[#001f4d]">
                    <h1 className="font-extrabold">{name}</h1>
                    <p className="font-bold">Client ID: AVIC-{ran}</p>
                    <p className="font-bold text-[#ffb300]">{status}</p>
                </div>
                <button className="p-2 bg-[#001f4d] text-[#ffb300] font-bold rounded-md cursor-pointer" onClick={() => setEdit(false)}>Edit</button>
            </div>
            <hr className="w-full border text-[#ffb300] rounded-full"/>
            <form action={handleSubmit}>
                <h1 className="mt-2 font-black text-lg text-[#001f4d] ">Personal Information</h1>
                <div className=" w-full flex  gap-1 mt-2 flex-wrap">
                    <div className=" grow ">
                        <div className="m-2 bg-[#001f4d] p-2 rounded-lg ">
                            <h1 className="text-[#ffb300] font-extrabold">Full Name</h1>
                            <input className={`${edit ? "text-white" : "bg-blue-950 text-[#ffb300] rounded-lg"} w-full outline-none font-semibold p-1 `} disabled={edit}  value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="m-2 bg-[#001f4d] p-2 rounded-lg">
                            <h1 className="text-[#ffb300] font-extrabold">Phone Number</h1>
                            <p className={`${edit ? "text-white" : "bg-blue-950 text-[#ffb300] rounded-lg"} w-full  font-semibold p-1 `}><a>+234 </a><input className="outline-none" disabled={edit} type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/></p>
                        </div>
                    </div>
                    <div className=" grow   ">
                        <div className="m-2 bg-[#001f4d] p-2 rounded-lg">
                            <h1 className="text-[#ffb300] font-extrabold">Email</h1>
                            <input className={`${edit ? "text-white" : "bg-blue-950 text-[#ffb300] rounded-lg"} w-full outline-none font-semibold p-1 `} disabled={edit} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="m-2 bg-[#001f4d] p-2 rounded-lg">
                            <h1 className="text-[#ffb300] font-extrabold">Country</h1>
                            <input className={`${edit ? "text-white" : "bg-blue-950 text-[#ffb300] rounded-lg"} w-full outline-none font-semibold p-1 `} disabled={edit} value={country} onChange={(e) => setCountry(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <h1 className="mt-2 font-black text-lg text-[#001f4d] ">Company Information</h1>
                <div className="m-2 bg-[#001f4d] p-2 rounded-lg">
                    <h1 className="text-[#ffb300] font-extrabold">Comapny Name</h1>
                    <input className={`${edit ? "text-white" : "bg-blue-950 text-[#ffb300] rounded-lg"} w-full outline-none font-semibold p-1 `} disabled={edit} value={company} onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <button className=" cursor-pointer w-full mt-2 p-2 bg-[#ffb300] font-bold text-[#001f4d] rounded-lg" type="submit">Save Changes</button>
            </form>

            <div className="mt-4 text-start  w-full">
                    <h1 className=" font-black text-lg text-[#ffb300] ">Account Overview</h1>
                    <ul className="text-white font-bold pr-4">
                        <li className="flex justify-between items-center"><p>Active Shipments</p> <p>{stats[0].value}</p></li>
                        <li className="flex justify-between items-center"><p>Pending Quotes</p> <p>{stats[1].value}</p></li>
                        <li className="flex justify-between items-center"><p>Completed Shipments</p> <p>{ship}</p></li>
                    </ul>
            </div>

            <div className="mt-4 text-start w-full">
                    <h1 className=" font-black text-lg text-[#ffb300] ">Account Settings</h1>
                    <ul className="text-white font-bold pr-4">
                        <li className="flex justify-between items-center"><p>Email notifications</p> <button>On</button></li>
                        <li className="flex justify-between items-center"><p>Shipments Update</p> <button>On</button></li>
                    </ul>
            </div>
            
        </div>
    </div>
};




export default Profile;