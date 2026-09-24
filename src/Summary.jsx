import { useLocation, Link } from 'react-router-dom'
import logo from './assets/logo.png'
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
            <main className="h-screen items-center justify-center flex flex-col text-xl font-bold text-yellow-300">
                <h2>No Summary Found</h2>
                <Link className="bg-yellow-300 text-blue-950 p-2 rounded-md mt-2" to='/quote'>Go back to Form</Link>
            </main>
        );
    }

    return (
        <div className="">
            <h2 className="text-center text-4xl text-yellow-300 font-bold mt-15 mb-10">Quote Summary</h2>
            <div className=" items-center justify-center flex flex-col gap-4">
                <div className="border bg-white w-200">
                    <img className="w-50 "src={logo}/>
                    
                    <div className="flex justify-between mx-6">
                        <div className=" font-bold flex gap-2">
                            <div className="font-black ">Bill To:</div>
                            <div>
                                <h2>{name}</h2>
                                <h2>{company}</h2>
                                <h2>{email}</h2>
                                <h2> {phone} </h2>
                            </div>
                            
                        </div>
                        <div className=" font-bold">
                            <div className="font-black text-right ">Quote</div>
                                <div className="text-right">
                                    <h2>Quote No: AVIC-{ranNum}</h2>
                                    <h2>Date: {currentDate.toLocaleDateString()}</h2>
                                    <h2>Valid Until: {validUntil.toLocaleDateString()}</h2>
                                </div>
                        </div>
                    </div>
                    <div className=" mt-10 font-bold flex justify-between mx-15">
                        <div className="w-1/2">
                            <h1 className="mb-2 border-y py-2 text-lg">Description</h1>
                            <h3 className="border-b">Route</h3>
                            <h3 className="border-b">Weight</h3>
                            <h3 className="border-b">Shipment Type</h3>
                            <h3 className="border-b">Service</h3>
                            <h3 className="border-b">Additional Information</h3>
                        </div>
                        <div className="w-1/2 text-right">
                            <h1 className="mb-2 border-y py-2 text-lg">Quantity</h1>
                            <h2 className="border-b"> {origin} ----+ {destination}</h2>
                            <h2 className="border-b"> {weight}kg </h2>
                            <h2 className="border-b">  {shipment.toUpperCase()} </h2>
                            <h2 className="border-b">  {service.toUpperCase()} </h2>
                            <h2 className="border-b"> {text}</h2>
                        </div>
                        
                    </div>
                    <h2 className="mt-20 ml-6 font-bold">Terms & Condition</h2>
                    <p className=" ml-6">10% discount for new customers</p>
                    <p className=" ml-6">This quote expires in one month on {validUntil.toLocaleDateString()}</p>
                    <div className="flex justify-end">
                        <img className="w-20 mr-5 "src={logo}/>
                    </div>
                    

                </div>
                <div className="flex justify-around w-full items-center">
                    <Link to="/quote" state={formData} className="text-center text-white bg-yellow-300 p-2 font-bold rounded-md ">Go back to Form</Link>
                    <Link to="/success" state={{ Num : ranNum}} className="text-center text-white bg-yellow-300 p-2 font-bold rounded-md ">Submit Quote</Link>
                </div>
            </div>
            
        </div>
    )

};




export default Summary;