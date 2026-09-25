import { NavLink } from 'react-router-dom'
 
const SideNav = () => {
    const activeStyle = "border-l-3 px-1"
    return <div className= "  border-r border-yellow-300 text-amber-300 font-bold flex flex-col min-w-40  pt-4 pl-4 gap-4">
        <h2>AVIC</h2>
        <ul className="flex flex-col">
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/' >Dashboard</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/quote'>Request Quote</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/shipments'>Shipments</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/support'>Support</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/profile'>Profile</NavLink>
        </ul>
    </div>
}



export default SideNav;