import SideNav from './SideNav.jsx'
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';



const AppLayout = () => {
    return (
        <div className="flex">
            <SideNav/>
            <div className="ml-45 flex-1">
                <Header/>
                <Outlet/>
            </div>
        </div>
    )
};




export default AppLayout;