
import {Router} from 'express';
import user from './controllers/login';
import places from './controllers/placeController';
import dashboard from './controllers/infoController';
import fare from './controllers/FareController';

import route from './controllers/apiController/calculate';
import place from './controllers/apiController/placeAPI';

let router = Router();
router.use('/', user);
router.use('/places',places);
router.use('/info',dashboard);
router.use('/fare',fare);

router.use('/apiController/calculate', route);
router.use('/apiController/placeAPI', place);


export default router;