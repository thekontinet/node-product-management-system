const { validationResult} = require('express-validator');
module.exports =  function(req, res, cb){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        req.flash('errors', errors.mapped())
        return res.redirect('back')
    }
    cb()
}