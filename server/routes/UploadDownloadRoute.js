import { Router } from 'express';
import IndexCtrl from '../controller/IndexController'

const router = Router();
router.post('/', IndexCtrl.UploadDownloadCtrl.upload); 
router.post('/toim_filename/:id', IndexCtrl.UploadDownloadCtrl.upload, IndexCtrl.Tour_ImagesCtrl.updateimg);
router.post('/multipart/', IndexCtrl.UploadDownloadCtrl.uploadMultipart, 
    IndexCtrl.Tour_ImagesCtrl.createimg,
    IndexCtrl.Tour_ImagesCtrl.findAll);
router.get('/:filename', IndexCtrl.UploadDownloadCtrl.download); 

export default router;