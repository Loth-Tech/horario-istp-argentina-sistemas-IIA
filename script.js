// script.js
//document.addEventListener('DOMContentLoaded', () => {
    //console.log("✅ Horario cargado correctamente");

    // Opcional: hacer clic en una asignatura para ver más info
    //document.querySelectorAll('.asignatura').forEach(celda => {
        //celda.addEventListener('click', () => {
            //const texto = celda.textContent.trim();
           // alert(`📌 Asignatura:\n${texto}`);
        //});
    //});
//});



// Datos de ejemplo (puedes agregar más)
const profesores = {
    "Barnett": {
        nombre: "Prof. Oscar A. Barnett C.",
        asignatura: "Curso: Ofimática 1",
        aula: "Laboratorio 01 (Piso 04)",
        horario: "Lunes, De 08:15 am a 10:30 am",
        delegado: "Juan Romario Campos Machaca",
        contacto: "https://wa.me/+51900930053",
        foto: "Imgs/Profs/Barnett.jpg",
    },

    "Padilla": {
        nombre: "Ing. Edwin Padilla Obregon",
        asignatura: "Networking de la Comunicación / Lógica Computacional",
        aula: "405 - IA - Diurno (Piso 04)",
        horario: "Lunes, de 09:45 am a 12:15 pm.<br>Miércoles, de 08:15 am a 09:45 am",
        delegado: "Juan Romario Campos Machaca",
        contacto: "https://wa.me/+51900930053",
        foto: "https://via.placeholder.com/150"
    },

    "Gutierrez": {
        nombre: "Prof. Gutierrez",
        asignatura: "Herramientas para análisis de datos.",
        aula: "405 - IIA - Diurno (Piso 04)",
        horario: "Lunes, De 10:30 am a 13:00 pm",
        delegado: "Jair Moreno P.",
        contacto: "https://wa.me/+51923563342",
        foto: "https://via.placeholder.com/150"
    },

     "Palomino": {
        nombre: "Prof. Palomino",
        asignatura: "Programación de Macrtos",
        aula: "405 - IIA - Lab. 01 (Piso 04)",
        horario:  "Jueves, de 08:15 am a 09:45 am // Viernes, de 10:30 am a 13:45 pm",
        delegado: "Juan Romario Campos Machaca",
        contacto: "https://wa.me/+51900930053",
        foto: "https://via.placeholder.com/150"
    },
    
"Galindo": {
        nombre: "Ing. Juan Luis Galindo Rojas",
        asignatura: "Fundamentos De Interfaces Web Interactivas",
        aula: "405 - IA - Diurno (Piso 04)",
        horario: "08:15 a 10:30 h",
        delegado: "Juan Romario Campos Machaca",
        contacto: "https://wa.me/+51900930053",
        foto: "https://via.placeholder.com/150"
    },

    "Castillo": {
        nombre: "Prof. Castillo.",
        asignatura: "Comunicación Oral",
        aula: "405 - IIA - Diurno (Piso 04)",
        horario: "Jueves, de 11:30 am  a 13:45 pm",
        delegado: "Juan Romario Campos Machaca",
        contacto: "https://wa.me/+51900930053",
        foto: "https://via.placeholder.com/150"
    },

    "Libre": {
        nombre: "¡HORARIO LIBRE!",
        asignatura: "No tienes nada por ahora. 😄",
        aula: "",
        horario: "",
        delegado: "",
        contacto: "https://wa.me/+51900930053",
        foto: "https://via.placeholder.com/150"
    },

    "Salida": {
        nombre: "¡HORA DE SALIDA!",
        asignatura: "Sales temprano hoy. 😄",
        aula: "",
        horario: "",
        delegado: "Juan Romario Campos Machaca",
        contacto: "https://wa.me/+51900930053",
        foto: "https://via.placeholder.com/150"
    },

    // Agrega más profesores aquí...
};

document.addEventListener('DOMContentLoaded', () => {

    // Abrir modal al hacer clic en cualquier celda de asignatura
    document.querySelectorAll('.asignatura').forEach(celda => {
        celda.style.cursor = "pointer";
        celda.addEventListener('click', () => {


            const texto = celda.textContent.trim();
            let profesorKey = "Barnett"; // Por defecto

            if (texto.includes("Padilla")) profesorKey = "Padilla";
            if (texto.includes("Gutierrez")) profesorKey = "Gutierrez";
            if (texto.includes("Palomino")) profesorKey = "Palomino";
            if (texto.includes("Galindo")) profesorKey = "Galindo";
            if (texto.includes("Castillo")) profesorKey = "Castillo";
            if (texto.includes("LIBRE")) profesorKey = "Libre";
            if (texto.includes("SALIDA")) profesorKey = "Salida";

            // Agrega más condiciones según necesites

            const data = profesores[profesorKey] || profesores["Barnett"];

            // Llenar modal
            document.getElementById('prof-foto').src = data.foto;
            document.getElementById('modal-profesor').textContent = data.nombre;
            document.getElementById('modal-asignatura').textContent = data.asignatura;
            document.getElementById('modal-aula').textContent = data.aula;
            document.getElementById('modal-horario').innerHTML = data.horario;

            document.getElementById('modal-delegado').textContent = data.delegado;
            document.getElementById('modal-contacto').href = data.contacto;
            document.getElementById('modal-contacto').textContent = data.contacto;

            document.getElementById('modal').style.display = 'flex';
        });
    });

    // Cerrar modal
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        if (e.target === modal) modal.style.display = 'none';
    });
});