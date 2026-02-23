const errorHandler=(err,req,res,next)=>{
    let statusCode=res.statusCode
    let message=err.message

    if(err.name==='CastError'){
        statusCode=404
        message="Resource not found"
    }
    res.status(statusCode).json({
        message:message,
        stack:
        process.env.NODE_ENV==="production"
        ? null
        :err.stack,
    })

}
export default errorHandler