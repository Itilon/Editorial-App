module.exports = (data) => {
    const getHome = (req, res) => {
        res.render('home');
    };

    return {
        getHome
    };
}