export const getProducts = async () => {
    try{
        const promise = await fetch('https://fakestoreapi.com/products');
        return promise.json();
    }catch(err){
        return err;
    }
};