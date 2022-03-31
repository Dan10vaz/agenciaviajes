
const guardarTestimonial = (req, res) => {

    //Validar el formulario
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0) {

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            correo,
            nombre,
            mensaje
        })
    }else {
        //Almacenarlo en la base de datos
    }
}

export {
    guardarTestimonial
}