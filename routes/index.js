import express from 'express';
import {paginaInicio, paginaNostros, paginaTestimoniales, paginaViajes} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio); 

router.get('/nosotros', paginaNostros);

router.get('/testimoniales', paginaTestimoniales);

router.get('/viajes', paginaViajes);

export default router; 
