export interface Hotel {
    id: number,
    name: string,
    location: Location,
    stars: number,
    checkIn: FromToHours,
    checkOut: FromToHours,
    contact: Contact,
    gallery: string[],
    userRating: number,
    price: string,
    currency: string,
}

export interface Location {
    address: string,
    city: string,
    latitude: number,
    longitude: number
}

export interface FromToHours {
    from: string,
    to: string,
}

export interface Contact {
    phoneNumber: string,
    email: string,
}
