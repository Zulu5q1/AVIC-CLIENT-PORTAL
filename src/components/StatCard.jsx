

export const StatCard = ({ title, value }) => {
    return <div className="bg-[#001f4d] text-[#ffb300] drop-shadow-sm p-4 text-center rounded-md w-30">
                <p className="font-bold ">{title}</p>
                <p>{value}</p>
            </div>
}