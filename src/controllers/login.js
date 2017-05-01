import {Router} from 'express';
import {verifyUser} from '../service/userServices';

let router = Router();
router.get('/',function (req,res,next) {

    res.render('adminlogin');
});

router.post('/adminlogin', function (req,res,next) {
        let userForm=req.body;
        console.log(userForm);
        verifyUser(userForm)
           .then((response) =>{
            console.log(response);
            if(response[0].AdminName=='Admin')
            {
                return res.render('place');
            }
            res.render('adminlogin',{error:'Incorrect Username/Password'})
        })
        .catch((error)=>{
            res.render('adminlogin',{error:'Incorrect Username/Password'})
        })
});
export default router;