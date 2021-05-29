module.exports = {
    responseInitialRoute: (req, res) => {
        console.log(req)
        res.send('hello from game controller');
    },
    reposnePost: (req, res) => {
        res.json(req.body)
    }
}