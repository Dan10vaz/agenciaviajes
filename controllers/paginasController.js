
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

const paginaViajes = (req, res) => {
    
    res.render('viajes', {
        pagina: "Viajes"
    });
};

export {
    paginaInicio,
    paginaNostros,
    paginaTestimoniales,
    paginaViajes
}