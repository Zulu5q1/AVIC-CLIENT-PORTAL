import { Link } from 'react-router'
 
const SideNav = () => {
    return <div className= "border-r border-gray-300 flex flex-col min-w-35  pt-4 pl-4 gap-4">
        <h2>AVIC</h2>
        <ul className="flex flex-col">
            <Link to='/' >Dashboard</Link>
            <Link to='/quote'>Request Quote</Link>
            <Link to='/shipments'>Shipments</Link>
            <Link to='/support'>Support</Link>
            <Link to='/profile'>Profile</Link>
        </ul>
    </div>
}



export default SideNav;