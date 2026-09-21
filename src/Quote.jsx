import SideNav from "./SideNav";


const Quote = () => {
    return <div className="flex">
        <SideNav/>
        <div className="m-4 justify-center flex items-center w-300">
            <form className=" w-200 flex flex-col gap-3">
                <label className=" flex flex-col font-bold text-yellow-300" >
                    Full Name:
                    <input placeholder="Full Name" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Company Name:
                    <input placeholder="Company (optional)" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Email:
                    <input placeholder="Email" type="email" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Phone Number:
                    <input placeholder="Phone" type="number"  className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Origin:
                    <input placeholder="Origin" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Destination:
                    <input placeholder="Destination" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <label className="flex flex-col font-bold text-yellow-300" >
                    Weight:
                    <input placeholder="Weight (kg)" type="number" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                <div className="flex">
                    <label className="flex flex-col w-1/2 font-bold text-yellow-300" >
                        Shipment Type:
                        <select className="bg-white text-blue-950 rounded-lg p-2 mx-1 outline-none" >
                            <option value="" disabled>--- Choose a Type ---</option>
                            <option value="sea">Sea</option>
                            <option value="air">Air</option>
                            <option value="road">Road</option>
                            <option value="rail">Rail</option>
                        </select>
                    </label>
                    
                    <label className="flex flex-col w-1/2 font-bold text-yellow-300" >
                        Service:
                        <select className="bg-white text-blue-950 rounded-lg p-2 mx-1 outline-none" >
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
                    <textarea placeholder="Message" className="bg-white shadow-md text-blue-950 p-2 rounded-lg my-2 outline-none" />
                </label>
                
                <button type="submit" className="bg-yellow-300 p-3 text-blue-950 font-bold text-lg rounded-lg">Request Quote</button>
            </form>
        </div>
    </div>
};





export default Quote;