import {Router} from 'express';

let router=Router();

router.get('/',function (req,res,next) {
    res.render('info');
});

export default router;