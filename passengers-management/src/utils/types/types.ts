type coordinates = Array<number>

interface IDriver {
    name: string,
    lastname: string,
    gender: string,
    phone: string,
    email: string,
    isAvailable: boolean,
    controller: object,
    location : location
}

enum HTTP_METHODS {
    GET ='get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete' 
}

type location = {
    type: string,
    coordinates: coordinates
}

export {
    location,
    coordinates,
    HTTP_METHODS,
    IDriver
}

