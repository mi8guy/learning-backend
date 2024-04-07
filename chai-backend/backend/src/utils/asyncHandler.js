//using promises
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch( err => next(err))
    }
}

export { asyncHandler }

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


//Higher order function, accepts a function  as a parameter and may also return a function
// using try catch

// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500) // err, that was passed 
//         res.json({
//             success: false,
//             message: err.message
//         })
//     }   
// }