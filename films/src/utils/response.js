module.exports = (res, statusCode, data) => {
    //send response to the server:
    res.status(statusCode).json({
        error: false,
        data,
    });
};
