module.exports = (res, {statusCode, message}) => {
    console.log(message);
    return res.status(statusCode || 500).json({
        message: message || "error",
        error: true
    });
}