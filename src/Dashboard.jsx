import { StatCard } from "./components/StatCard";
import { stats } from "./data/MockData";
import { ShipmentCard } from "./components/ShipmentCard";
import { Shipments } from './data/MockData';
import { useState } from "react";

const Dashboard = () => {
    const [selectedShipment, setSelectedShipment] = useState(null);
    return <div className= "flex flex-col gap-4 p-4">
        <div className=" font-bold text-lg text-blue-900 ">Welcome Back</div>
        <div className= "flex gap-4">
            {stats.map((stat, index) => (
                <StatCard key={index} title={stat.title} value={stat.value} />
            ))}
        </div>
        <div className= "flex gap-4 flex-wrap ">
            <div className= " bg-blue-900 p-4 rounded-md mb-4">
                <p className=" font-bold text-lg text-white">Recent Shipments</p>
                <hr className= "border border-yellow-300 my-6 mb-10"/>
                {Shipments.map((shipment, index) => (
                    <div className= " mt-2  items-center" key={index}>
                        <ShipmentCard key={index} shipment={shipment} 
                        onClick={() => setSelectedShipment(shipment)} />
                    </div>
                ))}
            </div>
            {
                selectedShipment && selectedShipment != null ? (
                    <div className=" bg-white drop-shadow-md p-4 rounded-md mb-4 w-100">
                        <h3 className=" font-bold text-lg ">Details</h3>
                        <div className="  flex justify-between border-b border-gray-300 mb-2 pb-4">
                            <p className="bg-slate-200 p-1 text-sm rounded-md">{selectedShipment.id}</p>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 mb-2 py-5">
                            <div>
                                <p>Route </p>
                                <p className="font-bold">{selectedShipment.location} --+ {selectedShipment.destination}</p>
                            </div>
                            <div className="text-right">
                                <p>Status </p>
                                <p className={` rounded-full p-1 border text-sm ${selectedShipment.status === "In Transit" ? "bg-yellow-200 border-yellow-500 text-yellow-800" 
                                    : selectedShipment.status === "Processing" ? "bg-red-200 border-red-500 text-red-800" 
                                    : "bg-green-200 border-green-500 text-green-800"} font-bold hover:shadow-md transition`}>{selectedShipment.status}</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-between border-b border-gray-300 mb-2 py-5">
                            <div>
                                <p>Customer </p>
                                <p className="font-bold">{selectedShipment.customer}</p>
                            </div>
                            <div className="text-right">
                                <p>Weight </p>
                                <p className="font-bold">{selectedShipment.weight}</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-between border-b border-gray-300 mb-2 py-5">
                            <div>
                                <p>Service </p>
                                <p className="font-bold">{selectedShipment.service}</p>
                            </div>
                            <div className="text-right">
                                <p>ETA</p>
                                <p className="font-bold">{selectedShipment.eta}</p>
                            </div>
                            
                        </div>
                        
                        <button className="hover:cursor-pointer w-full font-bold bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => setSelectedShipment(null)}>Close</button>
                    </div>
                ) : null
            }
        </div>
        
    </div>
};





export default Dashboard;


