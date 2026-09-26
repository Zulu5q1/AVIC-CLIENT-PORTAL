import SideNav from './SideNav';
import  {ShipmentCard}  from './components/ShipmentCard';
import  {Shipments}  from './data/MockData';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';


// const ShipmentsPage= () => {
//     const [search, setSearch] = useState("")
//     const [button , setButton] = useState("")


//     const filtered = Shipments.filter((shipment) => {
//        return ( 
//         shipment.id.toLowerCase().includes(search.toLowerCase().trim())  ||
//         shipment.location.toLowerCase().includes(search.toLowerCase().trim()) ||
//         shipment.destination.toLowerCase().includes(search.toLowerCase().trim()) ||
//         shipment.status.toLowerCase().includes(button.toLowerCase().trim())
//      )
//     });


    const ShipmentsPage= () => {
    const [search, setSearch] = useState("")
    const [button , setButton] = useState("")


    const filtered = Shipments.filter((shipment) => {
    const searchTerm = search.toLowerCase().trim();
    const buttonTerm = button.toLowerCase().trim();

    // 1. Text Search Logic (matches ID, location, or destination)
    const matchesSearch = 
        shipment.id.toLowerCase().includes(searchTerm) ||
        shipment.location.toLowerCase().includes(searchTerm) ||
        shipment.destination.toLowerCase().includes(searchTerm);

    // 2. Button Status Logic (If no button is clicked, match everything. If clicked, match exact status)
    const matchesStatus = buttonTerm === "" || shipment.status.toLowerCase() === buttonTerm;

    // Both conditions must be met
    return matchesSearch && matchesStatus;
    });
    

    return <div className="flex ">
        <SideNav/>
        <div className=" w-full m-6">
            <div className=" justify-between flex items-center ">
                <div>
                    <button onClick={() => setButton("")} className={`p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2`}>All</button>
                    <button onClick={() => setButton("Delivered")} className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">Delivered</button>
                    <button onClick={() => setButton("In Transit")} className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">In Transit</button>
                    <button onClick={() => setButton("Processing")} className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">Processing</button>
                </div>
                <form className="bg-blue-900 text-white flex items-center p-2 px-4 rounded-full">
                    <MagnifyingGlassIcon className=" h-5 w-5 text-yellow-300"/>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className=" outline-none  w-full  placeholder:text-white px-2" id="Search" type="text" placeholder="Search..."/>
                    {/* <button type="submit">Search</button> */}
                </form>
            </div>
            <hr className="my-8 border-gray-300"/>
            <div className="">

                {
                    filtered?.length > 0 ? filtered.map((item) => (
                        <ShipmentCard key={item.id} shipment={item} />
                    )): (

                    <p className="text-gray-500 mt-2">No shipments found matching "{search}"</p>
                )}
                
            </div>
        </div>
    </div>
};





export default ShipmentsPage;