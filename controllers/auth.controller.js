
const signIn = (req, res) =>{
    res.render('auth/signin', {
        page: 'Iniciar Sesión'
    });
}

const signUp = (req, res) =>{
    res.render('auth/signup', {
        page: 'Crear Cuenta'
    });
}

const forgotMyPassword = (req, res) =>{
    res.render('auth/forgot-my-password', {
        page: 'Recuperar Contraseña'
    });
}


export {
    signIn,
    signUp,
    forgotMyPassword
}