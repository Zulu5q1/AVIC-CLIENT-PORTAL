import SideNav from "./SideNav";
import { useNavigate, useLocation } from "react-router-dom";


const Quote = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const savedData = location.state || {};

    const handleFormSubmit = (formData) => {
        //gather data
        const formFields= Object.fromEntries(formData)

        navigate('/summary', {state: formFields})
    }

    return <div className="flex">
        <SideNav/>
        <div className="m-4 justify-center flex items-center w-300">
            <form action={handleFormSubmit} className=" w-200 flex flex-col gap-3">
                <label className=" flex flex-col font-bold text-yellow-300" >
                    Full Name:
                    <input required defaultValue={savedData.name  || ""} placeholder="Full Name" name="name" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Company Name:
                    <input required defaultValue={savedData.company  || ""} placeholder="Company (optional)" name="company" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Email:
                    <input required defaultValue={savedData.email  || ""} placeholder="Email" type="email" name="email" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Phone Number:
                    <input required defaultValue={savedData.phone  || ""} placeholder="Phone" type="number" name="phone"  className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Origin:
                    <input required defaultValue={savedData.origin  || ""} placeholder="Origin" name="origin" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Destination:
                    <input required defaultValue={savedData.destination  || ""} placeholder="Destination" name="destination" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Weight:
                    <input required defaultValue={savedData.weight  || ""} placeholder="Weight (kg)" name="weight" type="number" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <div className="flex">
                    <label className="flex flex-col w-1/2 font-bold text-yellow-300" >
                        Shipment Type:
                        <select required defaultValue={savedData.shipment  || ""} className="bg-white text-blue-950 rounded-lg p-2 mx-1 outline-none" name="shipment" >
                            <option value="" disabled>--- Choose a Type ---</option>
                            <option value="sea">Sea</option>
                            <option value="air">Air</option>
                            <option value="road">Road</option>
                            <option value="rail">Rail</option>
                        </select>
                    </label>
                    
                    <label className="flex flex-col w-1/2 font-bold text-yellow-300" >
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
                
                <label className="flex flex-col font-bold text-yellow-300" >
                    Additional Message:
                    <textarea required defaultValue={savedData.text  || ""} placeholder="Message" name="text" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                
                <button type="submit" className="bg-yellow-300 p-3 text-blue-950 font-bold text-lg rounded-lg hover:cursor-pointer">Request Quote</button>
            </form>
        </div>
    </div>
};





export default Quote;