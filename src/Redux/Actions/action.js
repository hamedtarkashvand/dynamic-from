export const actionType = {
    CREATE_USERS_LIST:'CREATE_USERS_LIST',
    FAILED_USERS_LIST:'FAILED_USERS_LIST',

    CREATE_PRODUCT_LIST:'CREATE_PRODUCT_LIST',
    FAILED_PRODUCT_LIST:'FAILED_PRODUCT_LIST',

};

 const createUser = (dataUser) => ({
    type: actionType.CREATE_USERS_LIST,
    payload: dataUser,
  });
  
 const failedUser = (dataUser) => ({
    type: actionType.FAILED_USERS_LIST,
    payload: dataUser,
  });


 const createProduct = (dataProduct) => ({
    type: actionType.CREATE_PRODUCT_LIST,
    payload: dataProduct,
  });

const failedProduct = (dataProduct) => ({
    type: actionType.FAILED_PRODUCT_LIST,
    payload: dataProduct,
  });

export {
    createUser,
    failedUser,
    createProduct,
    failedProduct
}

