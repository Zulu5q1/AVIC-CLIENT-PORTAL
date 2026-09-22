import { useLocation, Link } from 'react-router'
import logo from './assets/logo.png'

const Summary = () => {
    const location = useLocation()

    const name= location.state?.name
    const company = location.state?.company
    const phone= location.state?.phone
    const email= location.state?.email
    const origin= location.state?.origin
    const destination= location.state?.destination
    const weight= location.state?.weight
    const shipment= location.state?.shipment
    const service= location.state?.service
    const text= location.state?.text


    if (!location.state) {
        return(
            <main>
                <h2>No Summary Found</h2>
                <Link to='/quote'>Go back to Form</Link>
            </main>
        );
    }

    return (
        <div className="">
            <h2 className="text-center text-4xl text-yellow-300 font-bold mt-15 mb-10">Quote Summary</h2>
            <div className=" items-center justify-center flex flex-col gap-4">
                <div className="border bg-white w-200">
                    <img className="w-50 "src={logo}/>
                    <div className="pl-4 font-bold">
                        <h2>{name}</h2>
                        <h2>{company}</h2>
                        <h2>{email}</h2>
                        <h2> {phone} </h2>
                    </div>
                    <div className=" text-center mt-10 font-bold text-lg">
                        <h2>Route: {origin} ----+ {destination}</h2>
                        <h2>Weight: {weight}kg </h2>
                        <h2>Shipment Type:  {shipment.toUpperCase()} </h2>
                        <h2>Service:  {service.toUpperCase()} </h2>
                        <h2>Additional Information: {text}</h2>
                    </div>
                </div>
                <Link to='/quote' className="text-center text-white bg-yellow-300 p-2 font-bold rounded-md ">Go back to Form</Link>
            </div>
            
        </div>
    )

};




export default Summary;