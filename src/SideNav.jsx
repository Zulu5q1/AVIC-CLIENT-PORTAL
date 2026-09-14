import { Link } from 'react-router'
 
const SideNav = () => {
    return <div className= "border border-black flex flex-col w-35 h-screen pt-4 pl-4 gap-4">
        <h2>AVIC</h2>
        <ul>
            <Link to='/'>Dashboard</Link>
            <li>Request Quote</li>
            <li>Shipments</li>
            <li>Support</li>
            <li>Profile</li>
        </ul>
    </div>
}



export default SideNav;