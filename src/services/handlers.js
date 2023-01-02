export const successHandler = res => res.data;

export const errorHandler = err => {
    console.log(err.message);
    throw err;
}