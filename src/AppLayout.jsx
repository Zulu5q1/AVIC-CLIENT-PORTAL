import SideNav from './SideNav.jsx'
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';



const AppLayout = () => {
    return (
        <>
            <SideNav/>
            <div className="ml-45 min-w-100">
                <Header/>
                <Outlet/>
            </div>
        </>
    )
};




export default AppLayout;