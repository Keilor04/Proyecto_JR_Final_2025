

//la crea array  
//lo -- crea objeto
//kv -- crea key : value 

//Se crea el menú de navegación de la página web con la variable Datos_LiNav 
//export es para usar el array Datos_LiNav en otro archivo   
export let Datos_LiNav = [

    {
        Id: 1,
        Nombre: "Inicio", //Nombre que ve el usuario
        Detalle: "Proyecto", //Práctica o si es del proyecto 
        Url: "Inicio.html",  //Ruta de la página 
        Activo: true     //Para visualizar (true) o ocultar (false) del menú de la página web
    },
    {   Id: 2,
        Nombre: "Calculadora",
        Detalle: "Practica",      
        Url: "/Practica_Calculadora.html",
        Activo: false 
    },
    {   Id: 3,
        Nombre: "Listado Clientes", 
        Detalle: "Practica",     
        Url: "/Practica_Listado_Clientes.html",
        Activo: true  //se pone en true para clase del 05-02-2025
    },
    {   Id: 4,
        Nombre: "Tarea Pokemon",   
        Detalle: "Practica",  
        Url: "/Practica_TareaPokemon.html",
        Activo: false//se pone en true para clase del 05-02-2025, se pone en false para clase del 10-02-2025
    },
    {   Id: 5,
        Nombre: "Tarea Netflix",    
        Detalle: "Practica", 
        Url: "/Practica_TareaNetflix.html",
        Activo: false
    },
    {   Id: 7,
        Nombre: "API_TareaPokemon",    
        Detalle: "Proyecto", 
        Url: "/API_TareaPokemon.html",
        Activo: false
    },
    {   Id: 8,
        Nombre: "API_Listado_Cliente",    
        Detalle: "Proyecto", 
        Url: "/API_Listado_Clientes.html",
        Activo: false //se pone en false para clase del 10-02-2025
    },
    {   Id: 9,
        Nombre: "API_VerUsuario",    
        Detalle: "Proyecto", 
        Url: "/API_VerUsuario.html",
        Activo: false
    },
    {   Id: 10,
        Nombre: "API_Contacto",    
        Detalle: "Proyecto", 
        Url: "/API_Contacto.html",
        Activo: false
    },
    {   Id: 11,
        Nombre: "Practica IF",    
        Detalle: "Practica ", 
        Url: "/Practica_IF.html",
        Activo: false
    },
    {   Id: 12,
        Nombre: "Practica CICLO",    
        Detalle: "Practica ", 
        Url: "/Practica_CICLO.html",
        Activo: false //se pone en true para clase del 05-02-2025 y el 10-02-2025 se pone en false
    },
];

export let urlCompleta = window.location.href; // Obtiene la URL completa
export let nombrePagina = window.location.pathname.split("/").pop().replace(".html", ""); //
// Elimina ".html" 



