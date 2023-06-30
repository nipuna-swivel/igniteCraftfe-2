import { axiosInstence } from "@/http.common";

const getAll = () =>
{
    return axiosInstence.get( "/orders" );
};

const get = ( id: string ) =>
{
    return axiosInstence.get( `/orders/${ id }` );
};

const create = ( data: any ) =>
{
    return axiosInstence.post( "/orders", data );
};
const update = ( id: string, data: any ) =>
{
    return axiosInstence.put( `/orders/${ id }`, data );
};

const remove = ( id: string ) =>
{
    return axiosInstence.delete( `/orders/${ id }` );
};
const findById = ( id: string ) =>
{
    return axiosInstence.get( `/orders/${ id }` );
};

const OrderService = {
    getAll,
    get,
    create,
    update,
    remove,
    findById,
};

export default OrderService;
