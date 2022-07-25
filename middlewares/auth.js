exports.auth =  function(req, res, next){
    if(!req.session.user){
        return res.redirect('/login')
    }

    next()
}


exports.guest =  function(req, res, next){
    if(req.session.user){
        return res.redirect('/dashboard')
    }

    next()
}