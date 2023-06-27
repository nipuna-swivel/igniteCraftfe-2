import { axiosInstence } from "@/http.common";

const getAll = () =>
{
    return axiosInstence.get( "/products" );
};

const get = ( id: string ) =>
{
    return axiosInstence.get( `/products/${ id }` );
};

const create = ( data: any ) =>
{
    return axiosInstence.post( "/products", data );
};
const update = ( id: string, data: any ) =>
{
    return axiosInstence.put( `/products/${ id }`, data );
};

const remove = ( id: string ) =>
{
    return axiosInstence.delete( `/products/${ id }` );
};
const findById = ( id: string ) =>
{
    return axiosInstence.get( `/products/${ id }` );
};

const ProductService = {
    getAll,
    get,
    create,
    update,
    remove,
    findById,
};

export default ProductService;
