const logOut = (res,req) => {
    res.cookies('jwt', '');
    res.userId = ''
    res.redirect('/api/v1/user/login')
}

module.exports = logOut