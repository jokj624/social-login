import { Router } from 'express';
import { googleController } from '../controllers';

const router = Router();

router.post('/signin/google', googleController.getGoogleUser);

export default router;