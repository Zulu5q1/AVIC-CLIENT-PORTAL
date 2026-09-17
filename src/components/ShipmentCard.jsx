

export const ShipmentCard = ({ shipment, onClick }) => {
    return <div className= "flex gap-4 justify-between hover:cursor-pointer p-6 rounded-md items-center mb-6 bg-white shadow-md" onClick={onClick}>
                <p>{shipment.id}</p>
                <p>{shipment.location}</p>
                <p>{shipment.destination}</p>
                <p className={`rounded-md p-2 border 
                    ${shipment.status === "In Transit" ? "bg-yellow-200 border-yellow-500 text-yellow-800" 
                    : shipment.status === "Processing" ? "bg-red-200 border-red-500 text-red-800" 
                    : "bg-green-200 border-green-500 text-green-800"} font-bold hover:shadow-md transition `
                    }>{shipment.status}</p>
            </div>
}