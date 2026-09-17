import { Link } from 'react-router'
 
const SideNav = () => {
    return <div className= "border-r border-gray-300 flex flex-col min-w-35  pt-4 pl-4 gap-4">
        <h2>AVIC</h2>
        <ul>
            <Link to='/' >Dashboard</Link>
            <li>Request Quote</li>
            <li>Shipments</li>
            <li>Support</li>
            <li>Profile</li>
        </ul>
    </div>
}



export default SideNav;