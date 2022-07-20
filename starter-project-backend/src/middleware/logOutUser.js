const logOut = (res,req) => {
    res.cookie('jwt','');
    res.redirect('/')
}

module.exports = logOut