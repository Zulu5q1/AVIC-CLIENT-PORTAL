

const Dashboard = () => {
    return <div className= "flex flex-col gap-4 p-4">
        <div>Welcome Back</div>
        <div className= "flex gap-4">
            <div className="border border-black p-4 text-center rounded-md w-30">
                <p>Shipments</p>
                <p>12</p>
            </div>
            <div className="border border-black p-4 text-center rounded-md w-30">
                <p>Quotes</p>
                <p>4</p>
            </div>
            <div className="border border-black p-4 text-center rounded-md w-30">
                <p>Status</p>
                <p>Active</p>
            </div>
        </div>
        <div className= "border border-black p-4 rounded-md">
            <p>Recent Shipments</p>
            <hr className= "border border-black my-6"/>
            <div className= "flex gap-4">
                <p>Lagos</p>
                <p>Abuja</p>
                <p>In Transit</p>
            </div>
            <div className= "flex gap-4">
                <p>London</p>
                <p>Dubai</p>
                <p>Processing</p>
            </div>
            <div className= "flex gap-4">
                <p>Port-Harcourt</p>
                <p>China</p>
                <p>Delivered</p>
            </div>
        </div>
    </div>
};





export default Dashboard;


