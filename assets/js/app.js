// -- Instacia de elementos
let targetRegister = document.querySelector('#targetRegister'); // Desktop - Acción registro 
let targetLogin = document.querySelector('#targetLogin'); // Mobile - Acción registro
let cardRegister = document.querySelector('.target-card-register'); // Desktop - Sección de registro
let contentRegister = document.querySelector('#contentRegister'); // Desktop - Contenido de registro
let iconView = document.querySelector('.icon-view'); // - Visualizar contraseña
let inputPassword = document.querySelectorAll('#password'); // - Entrada tipo contraseña
let createAccount = document.querySelector('#create-account'); // - Boton de crear cuenta
let alert = document.querySelector('.alert'); // - Alerta
let mobile = document.querySelector('.mobile'); // Punto - Mobile
let loginMobile = document.querySelector('#loginMobile'); // Mobile - Inicio de sesión
let body = document.querySelector('body'); // Body
let cardMobileHome = document.querySelector('.card-mobile-home'); // Mobile Home
let cardLoginMobile = document.querySelector('.card-login-mobile'); // Mobile - Sección Inicio de sesión
 // Botón atrás
let backOne = document.querySelector('#backOne')
let backTwo = document.querySelector('#backTwo')
// -----
// Botón crear cuenta - Mobile
let createAccountMobile = document.querySelector('#createAccountMobile');
let targetRegisterMobile = document.querySelector('.create-account-mobile');
// -----
let cardRegisterMobile = document.querySelector('.card-register-mobile'); // Mobile - Sección de registro
let targetLoginMobile = document.querySelector('.target-login-mobile') // Botón para mostrar inicio de sesión - Mobile
let registerAccountMobile = document.querySelector('#register-account-mobile') // Boton para mostrar alert mobile
let accountsOthers = document.querySelector('.accounts-others'); // Punto - Otras cuentas
let contentAccountsOthers = document.querySelector('.content-accounts-others'); // Punto - Contenido de otras cuentas

// Botones de inicio y registro para elegir otras cuentas - Mobile
let sessionOtherAccount = document.querySelector('#sessionOtherAccount');
let sessionOtherAccountB = document.querySelector('#sessionOtherAccountB');
let registerOtherAccount = document.querySelector('#registerOtherAccount');
// -----
let closeAccountsOthers = document.querySelector('.close-accounts-others'); // Botón para cerrar tarjeta para elegir otras cuentas
// Font change
let nunito = document.querySelector('.nunito');
let avenir = document.querySelector('.avenir');
// -----

// -- Eventos del DOM
// - Acción registro
targetRegister.addEventListener('click', () => {
    register()
});

// - Acción inicio de sesión
targetLogin.addEventListener('click', () => {
    login()
});

// - Acción para mostrar alerta
createAccount.addEventListener('click', () => {
    createAccountDesktop()
})

// Acción para mostrar registro mobile
loginMobile.addEventListener('click', () => {
    mobileLogin()
})

// Atras login
backOne.addEventListener('click', () => {
    MbackOne()
})

backTwo.addEventListener('click', () => {
    MbackTwo()
})

// Crear cuenta - Mobile
createAccountMobile.addEventListener('click', () => {
    setAccountMobile()
})
targetRegisterMobile.addEventListener('click', () => {
    setAccountMobile()
})

// Inicio de sesión Mobile desde register
targetLoginMobile.addEventListener('click', () => {
    setLoginMobile()
})

// Mostrar alerta mobile
registerAccountMobile.addEventListener('click', () => {
    alertMobile()
})

// Abrir para seleccionar otras cuentas
sessionOtherAccount.addEventListener('click', () => {
    openCardOtherAccounts()
})
sessionOtherAccountB.addEventListener('click', () => {
    openCardOtherAccounts()
})
registerOtherAccount.addEventListener('click', () => {
    openCardOtherAccounts()
})

// Cerrar para seleccionar otras cuentas
closeAccountsOthers.addEventListener('click', () => {
    closeCardOtherAccounts()
})

// Cambiar fuente
nunito.addEventListener('click', () => {
    changeFont('Nunito')
})
avenir.addEventListener('click', () => {
    changeFont('Avenir')
})

// Cambiando fondo
window.addEventListener('resize', () => { changeBackground() })

// -- Funciones
// Registro desktop
const register = () => {
    cardRegister.classList.add('expand-register')
    setTimeout(() => {
        contentRegister.classList.remove('hidden')
    }, 289)
}
// Inicio de sesión desktop
const login = () => {
    cardRegister.classList.remove('expand-register')
    contentRegister.classList.add('hidden')
}
// Mostrar alerta desktop
const createAccountDesktop = () => {
    login()
    alert.classList.add('top-0')
    setTimeout(() => { alert.classList.remove('top-0') }, 4000)
}
// Inicio de sesión mobile
const mobileLogin = () => {
    body.style.backgroundColor = '#FFFFFF';
    cardMobileHome.style.display = 'none'
    cardLoginMobile.style.display = 'block'
}
// Devolver desde inicio de sesión mobile
const MbackOne = () => {
    body.style.backgroundColor = '#FBEFEC';
    cardMobileHome.style.display = 'flex'
    cardLoginMobile.style.display = 'none'
}
// Devolver desde regitro mobile
const MbackTwo = () => {
    body.style.backgroundColor = '#FBEFEC';
    cardMobileHome.style.display = 'flex'
    cardLoginMobile.style.display = 'none'
    cardRegisterMobile.style.display = 'none'
}
// Registrarse en mobile
const setAccountMobile = () => {
    body.style.backgroundColor = '#FFFFFF';
    cardRegisterMobile.style.display = 'block'
    cardMobileHome.style.display = 'none'
    cardLoginMobile.style.display = 'none'
}
// Iniciar sesión en mobile
const setLoginMobile = () => {
    body.style.backgroundColor = '#FFFFFF';
    cardRegisterMobile.style.display = 'none'
    cardMobileHome.style.display = 'none'
    cardLoginMobile.style.display = 'block'
}
// Mostrando alerta mobile
const alertMobile = () => {
    setLoginMobile()
    alert.classList.add('top-605')
    setTimeout(() => { alert.classList.remove('top-605') }, 4000)
}
// Abrir sección para seleccionar otras cuentas
const openCardOtherAccounts = () => {
    accountsOthers.style.display = 'block'
    contentAccountsOthers.classList.add('bottom-0')
}
// Cerrar sección para seleccionar otras cuentas
const closeCardOtherAccounts = () => {
    contentAccountsOthers.classList.remove('bottom-0')
    setTimeout(() => { accountsOthers.style.display = 'none' },500)
}
// Cambiar fuente
const changeFont = (font) => {
    const attr = body.setAttribute('font-family', font)
}
// Fondo
const changeBackground = () => {
    if (window.innerWidth > 1034 ) {
        body.style.backgroundColor = '#FFFFFF'
    } else {
        body.style.backgroundColor = '#FBEFEC'
    }
} 