import { Router } from 'express';
import { mainController } from '../controllers/mainController.js';
import { authController } from '../controllers/authController.js';
import { signupController } from '../controllers/signupController.js';

export const router = Router();

router.get('/', mainController.index);
router.get('/signup', signupController.index);
router.get('/login', authController.showForm);
router.get('/forecast', mainController.forecastHome);
router.get('/forecast/:city', mainController.showWeatherCity);

router.post('/signup', signupController.signup)
router.post('/login', authController.login);
router.post('/forecast', mainController.showWeather);



// router.post('/', mainController.showWeather);
