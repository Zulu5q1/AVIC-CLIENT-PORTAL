
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


const Quote = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const location = useLocation();

    const savedData = location.state || {};

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleFormSubmit = (formData) => {
        //gather data
        const formFields= Object.fromEntries(formData)

        navigate('/summary', {state: formFields})
    }

    return <div className="min-w-[320px]">
        
        <div className="m-4 justify-center flex flex-col items-center ">
            <span className="mb-8 mt-2 text-4xl font-extrabold text-[#ffb300] ">Quote Form</span>
            <form action={handleFormSubmit} className="w-full flex flex-col gap-3">
                <label className=" flex flex-col font-bold text-[#ffb300]" >
                    Full Name:
                    <input required defaultValue={savedData.name  || ""} placeholder="Full Name" name="name" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Company Name:
                    <input required defaultValue={savedData.company  || ""} placeholder="Company (optional)" name="company" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Email:
                    <input required defaultValue={savedData.email  || ""} placeholder="Email" type="email" name="email" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Phone Number:
                    <input required maxLength={10} defaultValue={savedData.phone  || ""} placeholder="Phone" type="tel" name="phone"  className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Origin:
                    <input required defaultValue={savedData.origin  || ""} placeholder="Origin" name="origin" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Destination:
                    <input required defaultValue={savedData.destination  || ""} placeholder="Destination" name="destination" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Weight:
                    <input required maxLength={4} defaultValue={savedData.weight  || ""} placeholder="Weight (kg)" name="weight" type="tel" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <div className="flex ">
                    <label className="flex flex-col w-1/2 font-bold text-[#ffb300]" >
                        Shipment Type:
                        <select required defaultValue={savedData.shipment  || ""} className="bg-white text-blue-950 rounded-lg p-2 mx-1 outline-none" name="shipment" >
                            <option value="" disabled>--- Choose a Type ---</option>
                            <option value="sea">Sea</option>
                            <option value="air">Air</option>
                            <option value="road">Road</option>
                            <option value="rail">Rail</option>
                        </select>
                    </label>
                    
                    <label className="flex flex-col w-1/2 font-bold text-[#ffb300]" >
                        Service:
                        <select required defaultValue={savedData.service  || ""} className="bg-white text-blue-950 rounded-lg p-2 mx-1 outline-none" name="service" >
                            <option value="" disabled>--- Choose a Service ---</option>
                            <option value="standard">Standard</option>
                            <option value="express">Express</option>
                            <option value="economy">Economy</option>
                            <option value="same-day">Same-Day Delivery</option>
                        </select>
                    </label>
                </div>
                
                <label className="flex flex-col font-bold text-[#ffb300]" >
                    Additional Message:
                    <textarea maxLength={100} onChange={handleChange} required defaultValue={savedData.text  || ""} placeholder="Message" name="text" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                    <p>{text.length}/100</p>
                </label>
                
                <button type="submit" className="bg-[#ffb300] p-3 text-blue-950 font-bold text-lg rounded-lg hover:cursor-pointer">Request Quote</button>
            </form>
        </div>
    </div>
};





export default Quote;