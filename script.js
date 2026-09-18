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
        asignatura: "Curso: Ofimática 1.",
        aula: "Laboratorio 01 (Piso 04).",
        horario: "📆 Lunes, de 08:15 am a 10:30 am (Lab. 01).",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    "Gutierrez": {
        nombre: "Prof. Gutierrez",
        asignatura: "Herramientas para Análisis de Datos.",
        aula: "405 - IIA - Diurno (Piso 04).",
        horario: "📆 Lunes, De 10:30 am a 13:00 pm.",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    "Huertas": {
        nombre: "Prof. Gina Huertas C.",
        asignatura: "Curso: Fundamentos De Interfaces Web Interactivas.",
        aula: "405 - IIA - Diurno & Lab. 01 (Piso 04).",
        horario: "📆 Martes, de 09.00 am a 11:15 am.",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    "De La Cruz": {
        nombre: "Prof. Pedro De La Cruz",
        asignatura: "Curso: Lenguaje De Programación 1.",
        aula: "405 - IIA - Diurno & Lab. 01 (Piso 04).",
        horario: "<p>📆 Martes, de 11:30 am a 13:45 pm (Lab. 01).</p><p>📆 Miércoles, de 08:15 am a 09:45 am (Aula 405).</p><p></p>",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    "Padilla": {
        nombre: "Prof. Edwin Padilla Obregon",
        asignatura: "Cursos: Reparación De Equipos Tecnológicos & Diseño y Configuración De Redes.",
        aula: "405 - IIA - Diurno (Piso 04).",
        horario: "<p>📆 Miércoles, de 10:30 am a 13:00 pm.</p><p>📆 Jueves, de 08:15 am a 10:30 am.</p><p>📆 Viernes, de 08:15 am a 09:45 am.</p><p></p>",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

     "Palomino": {
        nombre: "Prof. Palomino",
        asignatura: "Curso: Programación de Macros.",
        aula: "405 - IIA - Diurno & Lab. 01 (Piso 04).",
        horario: "<p>📆 Jueves, de 08:15 am am a 09:45 am.</p><p>📆 Viernes, de 08:15 am a 10:30 am.</p><p></p>",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    "Castillo": {
        nombre: "Prof. Castillo.",
        asignatura: "Comunicación Oral",
        aula: "405 - IIA - Diurno (Piso 04)",
        horario: "📆 Jueves, de 11:30 am  a 13:45 pm.",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    "Libre": {
        nombre: "¡HORARIO LIBRE!",
        asignatura: "No tienes nada por ahora. 😄",
        aula: "",
        horario: "",
        delegado: "",
        contacto: "https://wa.me/+51900930053",
        foto: "Logo_ISTPA_001.png",
    },

    "Salida": {
        nombre: "¡HORA DE SALIDA!",
        asignatura: "Sales temprano hoy. 😄",
        aula: "",
        horario: "",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },

    // Agrega más profesores aquí...
};

document.addEventListener('DOMContentLoaded', () => {

    // Abrir modal al hacer clic en cualquier celda de asignatura
    document.querySelectorAll('.asignatura').forEach(celda => {
        celda.style.cursor = "pointer";
        celda.addEventListener('click', () => {


            const texto = celda.textContent.trim();
            let profesorKey = "Libre"; // Por defecto

            if (texto.includes("Barnett")) profesorKey = "Barnett";
            if (texto.includes("Gutierrez")) profesorKey = "Gutierrez";
            if (texto.includes("Huertas")) profesorKey = "Huertas";
            if (texto.includes("De La Cruz")) profesorKey = "De La Cruz";
            if (texto.includes("Padilla")) profesorKey = "Padilla";
            if (texto.includes("Palomino")) profesorKey = "Palomino";
            if (texto.includes("Castillo")) profesorKey = "Castillo";
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
