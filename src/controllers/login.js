import {Router} from 'express';
import {verifyUser} from '../service/userServices';

let router = Router();
router.get('/',function (req,res,next) {
    res.render('adminlogin');
});

router.post('/adminlogin', function (req,res,next) {
        let userForm=req.body;
        verifyUser(userForm)
           .then((response) =>{
            if(response[0].AdminName=='Admin')
            {
                return res.redirect('/places/getInfo');
            }
            res.render('adminlogin',{error:'Incorrect Username/Password'})
        })
        .catch((error)=>{
            res.render('adminlogin',{error:'Incorrect Username/Password'})
        })
});
export default router;