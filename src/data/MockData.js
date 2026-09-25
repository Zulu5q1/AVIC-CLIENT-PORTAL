

export const stats = [
    { title: "Shipments", value: 12 },
    { title: "Quotes", value: 9 },
    { title: "Status", value: "Active" }
]


export const Shipments = [
    { 
        id: "AV-001", 
        location: "Lagos", 
        destination: "London", 
        status: "In Transit",
        customer: "Daniel Adeyemi",
        weight: "12kg",
        service:"Van Freight",
        eta: "2 days" 
    },
    { 
        id: "AV-002", 
        location: "Abuja", 
        destination: "USA", 
        status: "Processing",
        customer: "John Smith",
        weight: "20kg",
        service:"Air Freight",
        eta: "3 days" 
    },
    { 
        id: "AV-003", 
        location: "Port-Harcourt", 
        destination: "China", 
        status: "Delivered",
        customer: "Mary Johnson",
        weight: "50kg",
        service:"Cargo",
        eta: "10 days" 
    },
    { 
        id: "AV-004", 
        location: "Lagos", 
        destination: "Abidjan", 
        status: "In Transit",
        customer: "Daniel Ibogun",
        weight: "17kg",
        service:"Van Freight",
        eta: "4 days" 
    },
    { 
        id: "AV-005", 
        location: "London", 
        destination: "USA", 
        status: "Processing",
        customer: "Jonathan Henry",
        weight: "60kg",
        service:"Air Freight",
        eta: "9 days" 
    },
    { 
        id: "AV-006", 
        location: "Ijebu", 
        destination: "Canadi", 
        status: "Delivered",
        customer: "Musa Aboki",
        weight: "20kg",
        service:"Cargo",
        eta: "14 days" 
    }
]



export const Notifications = [
    {
        id: 1,
        title: "Quote Submitted",
        message: "AVQ-2026-001 is awaiting review.",
        time: "2 mins ago",
        unread: true
    },
    {
        id: 2,
        title: "Shipment Update",
        message: "AV-001 is now In Transit.",
        time: "1 hour ago",
        unread: false
    }
]