import { StatCard } from "./components/StatCard";
import { stats } from "./data/MockData";
import { ShipmentCard } from "./components/ShipmentCard";
import { Shipments } from './data/MockData';

const Dashboard = () => {
    return <div className= "flex flex-col gap-4 p-4">
        <div>Welcome Back</div>
        <div className= "flex gap-4">
            {stats.map((stat, index) => (
                <StatCard key={index} title={stat.title} value={stat.value} />
            ))}
        </div>
        <div className= "border border-black p-4 rounded-md">
            <p>Recent Shipments</p>
            <hr className= "border border-black my-6"/>
            {Shipments.map((shipment, index) => (
                <ShipmentCard key={index} location={shipment.location} destination={shipment.destination} status={shipment.status} />
            ))}
        </div>
    </div>
};





export default Dashboard;


