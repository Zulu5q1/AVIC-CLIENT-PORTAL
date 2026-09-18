import SideNav from './SideNav'
import  {ShipmentCard}  from './components/ShipmentCard'
import  {Shipments}  from './data/MockData'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';


const ShipmentsPage= () => {
    return <div className="flex ">
        <SideNav/>
        <div className=" w-full m-6">
            <div className=" justify-between flex items-center ">
                <div>
                    <button className="p-2 rounded-full px-4 bg-blue-900 text-white font-medium shadow-sm m-2">All</button>
                    <button className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">Shipped</button>
                    <button className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">In Transit</button>
                    <button className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">Delayed</button>
                    <button className="p-2 rounded-full px-4 bg-white font-medium shadow-sm m-2">Out of Delivery</button>
                </div>
                <form className="bg-blue-900 text-white flex items-center p-2 px-4 rounded-full">
                    <MagnifyingGlassIcon className=" h-5 w-5 text-yellow-300"/>
                    <input className=" outline-none  w-full  placeholder:text-white px-2" id="Search" type="text" placeholder="Search..."/>
                    {/* <button type="submit">Search</button> */}
                </form>
            </div>
            <hr className="my-8 border-gray-300"/>
            <div className="">
                {Shipments.map((shipment, index) => (
                    <div className="mt-2 items-center">
                        <ShipmentCard key={index} shipment={shipment}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
};





export default ShipmentsPage;