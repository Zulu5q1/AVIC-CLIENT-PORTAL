

export const StatCard = ({ title, value }) => {
    return <div className="border border-black p-4 text-center rounded-md w-30">
                <p className="font-bold">{title}</p>
                <p>{value}</p>
            </div>
}