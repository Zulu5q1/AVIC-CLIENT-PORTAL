import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from 'react-router-dom'
import {useState} from 'react'

const SuccessPage = () => {

    const location= useLocation();
    const number = location.state?.Num || 'No Number'
    const [date] = useState(new Date())


    if (!location.state) {
            return(
                <main className="h-screen items-center justify-center flex flex-col text-xl font-bold text-yellow-300">
                    <h2>No Quote</h2>
                    <Link className="bg-yellow-300 text-blue-950 p-2 rounded-md mt-2" to='/quote'>Go back to Form</Link>
                </main>
            );
        }

    return <div className="h-screen flex flex-col items-center justify-center">
        <div className=" text-yellow-300 rounded-md px-15 pt-15 border-3 border-[#0054d1] shadow-[0_0_10px_#0054d1]  w-110 text-center flex flex-col items-center">
            <CheckBadgeIcon className="w-40 mb-4"/>
            <h1 className="font-extrabold text-xl mb-2"> Quote Submitted</h1>
            <h2 className="mb-2 mt-2 font-bold">Your quote request has been submitted succesfully.</h2>
            <p>Quote Number: AVIC-{number}</p>
            <p>Date Submitted: {date.toDateString()}.</p>
            <p>Timestamp: {date.toLocaleTimeString()}</p>
            <p className="mt-15 mb-10 font-medium">Our team wil review your request and contact you shortly.</p>

            
        </div>
        <div className="flex justify-between w-120 mt-10 items-center">
            <Link to='/' className="font-bold text-yellow-300"> ← Back to Dashboard</Link>
            <Link to='/quote' className="bg-yellow-300 p-2 rounded-lg font-bold text-[#001f4d]">Submit Another Quote</Link>
        </div>
        
    </div>
};








export default SuccessPage