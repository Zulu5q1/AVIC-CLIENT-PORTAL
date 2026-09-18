import SideNav from "./SideNav";

const NotFound = () => {
    return <div className="flex text-yellow-300 bg-blue-950">
        <SideNav className="border-none"/>
        <div className=" w-full h-screen items-center flex justify-center text-2xl text-yellow-300 bg-blue-950">
            <p>NOT FOUND</p>
        </div>
    </div>
};





export default NotFound;