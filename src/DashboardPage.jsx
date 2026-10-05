import SideNav from './SideNav.jsx';
import Dashboard from './Dashboard.jsx';
import Header from './Header.jsx';



const DashboardPage = () => {
    return <div className= "ml-45">

        <SideNav/>
        <div className="flex-1 flex flex-col">
            <Header/>
            <Dashboard/>
        </div>
            
        
    </div>
};





export default DashboardPage;