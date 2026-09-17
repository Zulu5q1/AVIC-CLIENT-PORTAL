

export const StatCard = ({ title, value }) => {
    return <div className="bg-blue-900 text-white drop-shadow-sm p-4 text-center rounded-md w-30">
                <p className="font-bold ">{title}</p>
                <p className="text-yellow-300">{value}</p>
            </div>
}