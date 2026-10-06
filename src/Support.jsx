
import { useState } from 'react'

const Support=() => {

    const [alert, setAlert] = useState(false)


    const handleSubmit = () => {

        setAlert(true)

        setTimeout(() => {setAlert(false)}, 3000);

    };

    return <div className=" relative">
        {
            alert && (
                <div>
                    <div className="z-50 backdrop-blur-md text-white transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-t from-[#001f4d] to-[#ffb300] text-lg font-bold flex items-center p-15 shadow-md justify-between absolute top-1/2 left-1/2">
                        <span>Support request successfully submitted</span>
                        <button className=" bg-blue-300 px-3 py-1 rounded-full border-none cursor-pointer ml-2" onClick={() => setAlert(false)}> &times; </button>
                    </div>
                </div>
                
            )
        }

        <div className=" ">
            <h1 className="text-3xl text-center my-4 text-[#ffb300] font-extrabold ml-6">CUSTOMER SUPPORT</h1>
            <form action={handleSubmit} className="w-full flex justify-center items-center  flex-col  gap-6 ">
                <div className=" w-[70%] flex flex-col gap-4">
                    <label className="flex  flex-col font-bold text-xl text-[#ffb300]">
                        Subject:
                        <input required className=" text-base text-[#001f4d] bg-white outline-none rounded-md my-3 p-3 " type='text' name='subject' placeholder="Enter subject . . ." />
                    </label>
                    <label className="flex  flex-col font-bold text-xl text-[#ffb300]">
                        Details:
                        <textarea required className="text-base text-[#001f4d] bg-white h-80 outline-none rounded-md my-3 p-2" name='body'placeholder='Describe your problem . . .'/>
                    </label>
                </div>
                <div className=" w-[70%] text-end">
                    <button type='submit' className="bg-[#ffb300] rounded-md p-2 w-40 font-bold hover:cursor-pointer text-lg text-[#001f4d]">submit</button>
                </div>
                
            </form>
            <div className="ml-6 text-[#ffb300]">
                <p className="font-bold text-xl">CONTACT US:</p>
                <p className="font-bold">Phone: <a className="font-normal">+234 907-346-9754</a></p>
                <p className="font-bold">Email: <a className="font-normal">support@avicglobal.com</a></p>
            </div>
        </div>

    </div>
};





export default Support;