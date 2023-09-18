import React from 'react';

function Inicio() {
  return (
    <div>
      <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
      

          <a class="navbar-brand" href="index.html"><img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg" /></a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}class="card-img-top" alt="Bandera argentina"/></span>
                          
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}class="card-img-top" alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>  
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img"a/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      </div>
        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
          </div>
           <title>Matriz Profesional | Bienvenido</title>
   <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/flag-argentina.svg'}class="card-img-top" alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>
        
        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
   </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="navbar-brand" lt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"> <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}class="language-active" alt="Bandera argentina"/>
                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'} class="tutorial-intro-img"alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>
        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
          
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}class="language-active" alt="Bandera argentina"/>
                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
     </div>
     </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="navbar-brand"  alt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"> <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"> <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>     
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>
          </a>
       <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'} alt="eLeg"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'} alt="Bandera argentina"/>

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>      
    </div>
  <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>
        </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/>

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/>

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                           <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'} class="card-img-top" alt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/>

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images//desktop-laptop.png'}class="tutorial-intro-img" alt=""/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>    
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>

          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina"/>

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} alt="Bandera argentina" />

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}class="tutorial-intro-img" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>    
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/>
                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/>

                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img class="tutorial-intro-img" alt="" src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>   
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'} class="card-img-top"alt="eLeg"/>
            </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                          <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/>
                          </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'} class="tutorial-intro-img"alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>   
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
          <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'} class="card-img-top" alt="eLeg"/>
          </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active"><img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/></span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                          <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/desktop-laptop.png'} class="tutorial-intro-img" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>   
    </div>
    <nav class="app-navbar navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={process.env.PUBLIC_URL + '/images/logo-eleg-matriz-pro.svg'}class="card-img-top" alt="eLeg"/>
            </a>
          <div class="d-flex align-items-center">
              <ul class="list-unstyled d-flex mb-0 align-items-center d-lg-none">
                  <li class="nav-item me-5">
                      <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                          <i class="bi bi-bell fs-4"></i>
                          <span class="position-absolute start-50 ms-2 translate-middle">
                              <span class="bubble bg-danger rounded-circle">25</span>
                              <span class="visually-hidden">mensajes sin leer</span>
                          </span>
                      </button>
                  </li>
                  <li class="nav-item me-5 dropdown language">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                            <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/>
                            </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                         <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav py-5 py-lg-0 ms-auto mb-2 mb-lg-0 text-center text-lg-start">
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" aria-current="page" href="#">Matrices</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Empresas</a>
                  </li>
                  <li class="nav-item ms-lg-4">
                      <a class="nav-link text-uppercase" href="#">Plantas</a>
                  </li>
                  <li class="nav-item ms-lg-4 d-none d-lg-flex">
                  <button type="button" class="nav-link py-0 d-flex align-items-center position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-bell fs-4"></i>
                      <span class="position-absolute start-50 ms-2 translate-middle">
                          <span class="bubble bg-danger rounded-circle">25</span>
                          <span class="visually-hidden">mensajes sin leer</span>
                      </span>
                  </button>
                  </li>
                  <li class="nav-item ms-lg-4 dropdown language d-none d-lg-flex">
                      <a href="#" class="nav-link position-relative dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="language-active">
                            <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'}alt="Bandera argentina"/>
                            </span>
                      </a>
                      <ul class="dropdown-menu border-0 shadow dropdown-menu-end">
                        <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/español.png'}class="card-img-top" alt="Bandera española"/></span><span>Español</span></a></li>
                        <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/ingles.png'}class="card-img-top" alt="Bandera inglesa"/></span><span>English</span></a></li>
                        <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/portugues.png'}class="card-img-top" alt="Bandera portuguesa"/></span><span>Português</span></a></li>
                        <li><a class="dropdown-item" href="#"><span class="me-2"><img src={process.env.PUBLIC_URL + '/images/frances.png'}class="card-img-top" alt="Bandera francesa"/></span><span>Français</span></a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <section class="app-lead shadow">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">¡Hola usuario!</h2>
            <p class="lead text-white mb-0">Te damos la bienvenida al software de Matriz Profesional</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-card mx-auto my-md-4">
      <div class="app-card-body">
        <div class="container-lg py-4 py-lg-0">
          <div class="row pb-4 pb-md-0">
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-6 py-4 py-md-0 d-flex flex-column align-items-center justify-content-center">
              <h1 class="title mb-4 mb-lg-5 px-3 px-md-0">Aún no hay matrices creadas</h1>
              <a href="index-resumen.html" class="btn btn-eleg btn-large">Comenzar</a>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
              
              <div class="tutorial-intro">
                <div class="tutorial-intro-txt">
                  <h3 class="mb-3 mb-lg-4 px-4 px-md-0">Mira el video tutorial para crear tu primer matriz online facilmente</h3>
                  <a href="#" class="btn btn-eleg btn-large mx-auto">Ver Video</a>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/flag-argentina.svg'} class="tutorial-intro-img"alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Notificaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="toast show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-info-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>ayer</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-warning show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-exclamation-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small>hace 11 minutos</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>

        <div class="toast text-bg-primary show w-100 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <i class="bi bi-check-circle me-2"></i>
            <strong class="me-auto">Título</strong>
            <small class="text-body-secondary">Recién</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hola, este es un mensaje o notificación
          </div>
        </div>
        </div>  
    </div>
    </div>
    )
    }




export default Inicio; 
