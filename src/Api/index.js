import axios from "axios"

const client = axios.create({
    baseURL: "test.com/api/"
});

const createUser = async ({fullname, password, gender}) => {
    const user = {fullname, password, gender};
    const {data} = await client.post(`/users/testadd`, user);
    return data
};
const createProduct = async ({productname, count}) => {
    const product = {productname, count};
    const {data} = await client.post(`/product/testadd`, product);
    return data
};

export {
    createUser,
    createProduct
}