

export const NotificationCard = ({notification})=> {
    return <div className={`bg-[#001f4d] shadow shadow-yellow-300 text-[#ffb300] rounded-lg m-4 p-2`}>
        {notification.unread ? <div className="border-3 h-0 w-0 rounded-full border-red-900"></div> : ''}
        <p className="font-black">{notification.title}</p>
        <p className="font-medium">{notification.message}</p>
        <p>{notification.time}</p>
    </div>
}