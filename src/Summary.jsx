import { useLocation, Link } from 'react-router-dom'
import logo from './assets/logo.png'
import logoFull from './assets/avic full.png'
import { useState } from 'react';


const Summary = () => {

    const location = useLocation()

    const formData = location.state

    const name= location.state?.name
    const company = location.state?.company
    const phone= location.state?.phone
    const email= location.state?.email
    const origin= location.state?.origin
    const destination= location.state?.destination
    const weight= location.state?.weight
    const shipment= location.state?.shipment
    const service= location.state?.service
    const text= location.state?.text
    const [currentDate] = useState(new Date())
    const [ranNum] = useState(() => Math.floor(Math.random() * 1000) +1);

    const validUntil = new Date(currentDate)

    validUntil.setDate(currentDate.getDate() + 30)

    
    

    


    if (!location.state) {
        return(
            <main className="h-screen items-center justify-center flex flex-col text-xl font-bold bg-[#001f4d] text-[#ffb300]">
                <h2>No Summary Found</h2>
                <Link className="bg-[#ffb300] text-[#001f4d] p-2 rounded-md mt-2" to='/quote'>Go back to Form</Link>
            </main>
        );
    }

    return (
        <div className="flex flex-col ">
            <h2 className="text-center text-4xl text-[#ffb300] font-extrabold mt-15 mb-10">Quote Summary</h2>
            <div className="">
                <div className=" bg-white mx-5 sm:mx-50 p-4 rounded-md shadow-lg">
                    <div className=" items-center flex flex-col justify-center mb-20">
                        <div className=" px-2 max-w-[550px]">
                            <div className=" items-center justify-center flex"><img className="w-150"src={logoFull}/></div>
                            <hr className="border-b-2 border-[#ffb300] rounded-full"/>
                            <div className="px-2 font-medium">
                                <p>Head Office: 1, Oba Moshood Alani Oyede Shopping Complex, Opp. Post Office Ota LGA, Ogun State.</p>
                                <p>Operational Base: Sahco Export Shed, Muritala Muhammad International Airport, Ikeja Lagos.</p>
                                <p>Tel: +234 802 309 5238, +234 810 538 1952</p>
                                <p>Email: avicglobal@gmail.com</p>
                            </div>    
                        </div>
                        

                    </div>
                    
                    <div className="flex flex-col justify-between mx-2 gap-6 md:flex-row">
                        <div className=" font-bold flex gap-1 w-[75%] ">
                            <div className="font-black">Bill To:</div>
                            <div className="break-all">
                                <h2 className="border-b border-[#ffb300]">{name}</h2>
                                <h2 className="border-b border-[#ffb300]">{company}</h2>
                                <h2 className="border-b border-[#ffb300]">{email}</h2>
                                <h2 className="border-b border-[#ffb300]">+234 {phone} </h2>
                            </div>
                            
                        </div>
                        <div className=" font-bold ">
                            <div className="font-black text-right ">Quote</div>
                                <div className="text-right">
                                    <h2>Quote No: AVIC-{ranNum}</h2>
                                    <h2>Date: {currentDate.toLocaleDateString()}</h2>
                                    <h2>Valid Until: {validUntil.toLocaleDateString()}</h2>
                                </div>
                        </div>
                    </div>
                    
                    <div className="mt-15 border-[#ffb300] text-[#001f4d] font-extrabold border-b-2 px-2 flex justify-between ">
                        <h1 className="mb-2  py-2 text-lg">Description</h1>
                        <h1 className="mb-2 py-2 text-lg">Quantity</h1>
                    </div>
                    <div className="py-5 border-[#ffb300] border-b-2 px-2 flex justify-between">
                        <h3 className="font-bold text-[#001f4d]">Route</h3>
                        <h2 className="break-all w-[70%] ml-4 text-end"> {origin} ----+ {destination}</h2>

                    </div>
                    <div className="py-5 border-[#ffb300] border-b-2 px-2 flex justify-between ">
                        <h3 className="font-bold text-[#001f4d]">Weight</h3>
                        <h2 className="break-all w-[70%] ml-4 text-end"> {weight}kg </h2>
                    </div>
                    <div className="py-5 border-[#ffb300] border-b-2 px-2 flex justify-between">
                        <h3 className="font-bold text-[#001f4d]">Shipment Type</h3>
                        <h2 className="break-all w-[70%] ml-4 text-end">  {shipment.toUpperCase()} </h2>
                    </div>
                    <div className="py-5 border-[#ffb300] border-b-2 px-2 flex justify-between">
                        <h3 className="font-bold text-[#001f4d]">Service</h3>
                        <h2 className="break-all w-[70%] ml-4 text-end">  {service.toUpperCase()} </h2>
                    </div>
                    <div className="py-5 border-[#ffb300] border-b-2 px-2 flex justify-between">
                        <h3 className="font-bold text-[#001f4d]">Additional Information</h3>
                        <h2 className="break-all w-[70%] ml-4 text-end"> {text}</h2>
                    </div>
                    <h2 className="mt-20 ml-3 font-bold">Terms & Condition</h2>
                    <p className=" ml-3">10% discount for new customers</p>
                    <p className=" ml-3">This quote expires in one month on {validUntil.toLocaleDateString()}</p>
                    <div className="flex justify-end">
                        <img className="w-20 mr-5 "src={logo}/>
                    </div>
                    

                </div>
                <div className="flex justify-around w-full items-center my-10">
                    <Link to="/quote" state={formData} className="text-center text-white bg-[#ffb300] p-2 font-bold rounded-md ">Go back to Form</Link>
                    <Link to="/success" state={{ Num : ranNum}} className="text-center text-white bg-[#ffb300] p-2 font-bold rounded-md ">Submit Quote</Link>
                </div>
            </div>
            
        </div>
    )

};




export default Summary;