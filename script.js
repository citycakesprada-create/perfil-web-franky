document.addEventListener("DOMContentLoaded", () => {

    // BOTON CONTACTAR
    const boton = document.querySelector("#btn-contacto");

    boton.addEventListener("click", () => {
        alert("gracias por contactar");
    });

    // MODO OSCURO
    const botonModo = document.querySelector("#modoOscuro");

    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // FRASES ANIMADAS
    const frases = [
        "Desarrollador en formación ",
        "Apasionado por la tecnología ",
        "Aprendiendo cada día ",
        "Amante del desarrollo web "
    ];

    let i = 0;

    const fraseHTML = document.querySelector("#frase");

    setInterval(() => {

        fraseHTML.textContent = frases[i];

        i++;

        if (i >= frases.length) {
            i = 0;
        }

    }, 2000);

    // PROYECTOS DINAMICOS
    const proyectos = [

        {
            nombre: "Sistema de Inventario",
            descripcion: "Proyecto realizado con HTML, CSS y JavaScript."
        },

        {
            nombre: "CALCIFER3D",
            descripcion: "Sistema de ventas online para productos 3D."
        },

        {
            nombre: "Perfil Profesional",
            descripcion: "Portafolio personal responsive."
        }

    ];

    const contenedor = document.querySelector("#contenedor-proyectos");

    proyectos.forEach(proyecto => {

        const card = document.createElement("div");

        card.classList.add("card-proyecto");

        card.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
        `;

        contenedor.appendChild(card);

    });

});