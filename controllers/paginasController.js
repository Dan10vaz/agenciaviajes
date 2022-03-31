import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, res) =>{ // req - lo que enviamos : res - lo que express nos responde
    res.render('inicio', {
        pagina: "Inicio"
    });
};

const paginaNostros = (req, res) =>{

    res.render('nosotros', {
        pagina: "Nosotros"
    });
};

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: "Testimoniales"     
    });
};

const paginaViajes = async (req, res) => {
    //Consultar base de datos
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: "Proximos Viajes",
        viajes,
    });
};

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) =>{
    
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: "Informacion del Viaje",
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}   

export {
    paginaInicio,
    paginaNostros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}