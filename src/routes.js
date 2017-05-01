
import {Router} from 'express';
import user from './controllers/login';
import places from './controllers/placeController';

import route from './controllers/apiController/calculate';
import place from './controllers/apiController/placeAPI';




let router = Router();
router.use('/', user);
router.use('/place',places);

router.use('/apiController/calculate', route);
router.use('/apiController/placeAPI', place);


export default router;