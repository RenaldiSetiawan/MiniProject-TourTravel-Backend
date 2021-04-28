import { Router } from 'express';
import IndexCtrl from '../controller/IndexController'

const router = Router();
router.post('/', IndexCtrl.UserCtrl.create);
router.get('/', IndexCtrl.UserCtrl.findAll);
router.get('/:id', IndexCtrl.UserCtrl.findOne);
router.put('/:id', IndexCtrl.UserCtrl.update);
router.delete('/:id', IndexCtrl.UserCtrl.remove);
router.get('/rawSQL/:id', IndexCtrl.UserCtrl.rawSQL);

export default router;