// Espera a que el DOM esté completamente cargado
//Content JS es para la funcionalidad del boton en el body
window.addEventListener("load", function() {
    console.log("DOM completamente cargado y analizado");


// Crear el círculo flotante
var circleButton = document.createElement("div");
circleButton.style.position = "fixed";
circleButton.style.bottom = "20px";
circleButton.style.left = "20px";
circleButton.style.width = "50px";
circleButton.style.height = "50px";
circleButton.style.backgroundColor = "black";
circleButton.style.borderRadius = "50%";
circleButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
circleButton.style.cursor = "pointer";
circleButton.style.zIndex = 1000;
circleButton.style.display = "flex";
circleButton.style.justifyContent = "center";
circleButton.style.alignItems = "center";
circleButton.style.color = "white";
circleButton.innerHTML = "+";
circleButton.style.fontSize = "24px";
circleButton.style.transition = "background-color 0.3s, transform 0.3s";

// Efecto hover
circleButton.onmouseover = function() {
    circleButton.style.backgroundColor = "gray";
};
circleButton.onmouseout = function() {
    circleButton.style.backgroundColor = "black";
};

// Agregar el círculo al body
document.body.appendChild(circleButton);


    

    // Crear un botón
    var button = document.createElement("button");
    button.innerHTML = "Auto Fill";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.left = "10px";
    button.style.zIndex = 1000;
    button.style.padding = "8px 16px";
    button.style.color = "white";
    button.style.backgroundColor = "black";
    button.style.border = "none";
    button.style.borderRadius = "20px";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";
    button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    button.style.transition = "background-color 0.3s, color 0.3s, box-shadow 0.3s";
    
    // Efecto hover para el botón
    button.onmouseover = function() {
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    };
    button.onmouseout = function() {
        button.style.backgroundColor = "black";
        button.style.color = "white";
        button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    };


    // Crear el contenedor del menú desplegable
var menuContainer = document.createElement("div");
menuContainer.style.position = "fixed";
menuContainer.style.bottom = "80px";
menuContainer.style.left = "20px";
menuContainer.style.width = "200px";
menuContainer.style.backgroundColor = "white";
menuContainer.style.borderRadius = "10px";
menuContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
menuContainer.style.zIndex = 1000;
menuContainer.style.padding = "10px";
menuContainer.style.display = "none";
menuContainer.style.flexDirection = "column";
menuContainer.style.gap = "10px";

// Agregar el contenedor del menú al body
document.body.appendChild(menuContainer);

// Mostrar/Ocultar el menú al hacer clic en el círculo
circleButton.addEventListener("click", function() {
    if (menuContainer.style.display === "none") {
        menuContainer.style.display = "flex";
        circleButton.style.transform = "rotate(45deg)";
    } else {
        menuContainer.style.display = "none";
        circleButton.style.transform = "rotate(0deg)";
    }
});
    
    // Agregar el botón al body
    document.body.appendChild(button);
    console.log("Botón agregado al documento");

    // Template de AutoFill
    var textToInsert = `
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI: N/A
------------------------
DESCRIPTION:
------------------------
TROUBLESHOOTING STEPS:
------------------------
RESOLUTION NOTES:
------------------------
NEXT STEPS: N/A `;

    // Función para insertar texto en el div y modificar CSS
    function insertTextAndModifyCSS() {
        console.log("Intentando insertar texto en el div...");
        var editArea = document.querySelector("#editArea");
        if (editArea) {
            editArea.innerText = textToInsert; // Usa innerText para preservar el formato del texto
            console.log("Texto insertado correctamente en el div");

            // Modificar la altura de la caja de texto en Assyst
            var elements = document.querySelectorAll(".tundra .restClient .axios-edit-area-autocomplete-container .axios-edit-area-autocomplete");
            elements.forEach(function(element) {
                element.style.height = "400px";
            });
            console.log("CSS modificado correctamente");
        } else {
            console.error("No se encontró el div con el selector proporcionado.");
        }
    }

    // Agregar evento de clic al botón
    button.addEventListener("click", insertTextAndModifyCSS);
    console.log("Evento de clic agregado al botón");
});
