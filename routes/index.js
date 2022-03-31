import express from 'express';
import {paginaInicio, 
        paginaNostros, 
        paginaTestimoniales, 
        paginaViajes, 
        paginaDetalleViaje} 
        from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio); 

router.get('/nosotros', paginaNostros);

router.get('/testimoniales', paginaTestimoniales);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

export default router; 
