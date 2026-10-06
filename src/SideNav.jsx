import { NavLink } from 'react-router-dom'
import logo from './assets/logo.png'
 
const SideNav = () => {
    const activeStyle = "bg-blue-100 border-[#ffb300] border-l-4 mr-4 text-center p-2 rounded"
    return <div className= " overflow-y-auto fixed top-0 left-0 bottom-0 bg-linear-to-t from-[#001f4d] to-white text-[#001f4d] min-h-screen  border-r border-yellow-300  font-bold flex flex-col min-w-45  pt-4 pl-4 gap-4">
        <img className="w-29" src={logo}/>
        <ul className="flex flex-col gap-4 text-lg mt-4">
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/' >Dashboard</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/quote'>Request Quote</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/shipments'>Shipments</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/support'>Support</NavLink>
            <NavLink className={({isActive}) => `${isActive && activeStyle}`} to='/profile'>Profile</NavLink>
        </ul>
    </div>
}



export default SideNav;