

export const ShipmentCard = ({ location, destination, status }) => {
    return <div className= "flex gap-4">
                <p>{location}</p>
                <p>{destination}</p>
                <p>{status}</p>
            </div>
}