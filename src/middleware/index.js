module.exports = {
    makeLog: (req, res, next) => {
        console.log('hello from middleware');
        next();
    }
}