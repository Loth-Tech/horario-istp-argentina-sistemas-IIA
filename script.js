// Datos de profesores y asignaturas
const profesores = {
    "Barnett": {
        nombre: "Prof. Oscar A. Barnett C.",
        asignatura: "Curso: Ofimática 1.",
        aula: "🚪 Laboratorio 01 (Piso 04).",
        horario: "📆 Lunes, de 08:15 am a 10:30 am (Lab. 01).",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },
    "Gutierrez": {
        nombre: "Prof. Gutierrez",
        asignatura: "Herramientas para Análisis de Datos.",
        aula: "🚪 405 - IIA - Diurno (Piso 04).",
        horario: "📆 Lunes, De 10:30 am a 13:00 pm.",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },
    "Huertas": {
        nombre: "Prof. Gina Huertas C.",
        asignatura: "Curso: Fundamentos De Interfaces Web Interactivas.",
        aula: "🚪 405 - IIA - Diurno & Lab. 01 (Piso 04).",
        horario: "📆 Martes, de 09.00 am a 11:15 am.",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },
    "De La Cruz": {
        nombre: "Prof. Pedro De La Cruz",
        asignatura: "Curso: Lenguaje De Programación 1.",
        aula: "🚪 405 - IIA - Diurno & Lab. 01 (Piso 04).",
        horario: "<p>📆 Martes, de 11:30 am a 13:45 pm (Lab. 01).</p><p>📆 Miércoles, de 08:15 am a 09:45 am (Aula 405).</p>",
        delegado: "Jair Moreno P.",
        contacto: "https://wa.me/+51923563342",
        foto: "Logo_ISTPA_001.png",
    },
    "Padilla": {
        nombre: "Prof. Edwin Padilla Obregon",
        asignatura: "Cursos: Reparación De Equipos Tecnológicos & Diseño y Configuración De Redes.",
        aula: "🚪 405 - IIA - Diurno (Piso 04).",
        horario: "<p>📆 Miércoles, de 10:30 am a 13:00 pm.</p><p>📆 Jueves, de 08:15 am a 10:30 am.</p><p>📆 Viernes, de 08:15 am a 09:45 am.</p>",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },
    "Palomino": {
        nombre: "Prof. Palomino",
        asignatura: "Curso: Programación de Macros.",
        aula: "🚪 405 - IIA - Diurno & Lab. 01 (Piso 04).",
        horario: "<p>📆 Jueves, de 08:15 am a 09:45 am.</p><p>📆 Viernes, de 08:15 am a 10:30 am.</p>",
        delegado: "",
        contacto: "https://wa.me/+51xxxxxxxxx",
        foto: "Logo_ISTPA_001.png",
    },
    "Castillo": {
        nombre: "Prof. Castillo.",
        asignatura: "Comunicación Oral",
        aula: "🚪 405 - IIA - Diurno (Piso 04)",
        horario: "📆 Jueves, de 11:30 am a 13:45 pm.",
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
    }
};

// Estructura de horarios dinámicos por carrera/ciclo
const horariosData = {
    "sistemas_405": {
        titulo: "📅 Horario - Sistemas De Información - IIA 405 - Diurno - ISTPA 2026",
        htmlTabla: `
            <tr>
                <td class="hora">08:15 a 09:00</td>
                <td class="asignatura amarillo" rowspan = "3">OFIMÁTICA<br><small><B>(Prof. Barnett - Lab. 01)</B></small></td>
                <td class="asignatura blanco"><B>LIBRE</B></td>
                <td class="asignatura melocoton" rowspan="2">LENGUAJE DE PROGRAMACIÓN<br><small><B>(Prof. De La Cruz - Lab. 01)</B></small></td>                   
                <td class="asignatura lila" rowspan="2">PROGRAMACIÓN DE MACROS<br><small><B>(Prof. Palomino - Lab. 01)</B></small></td>
                <td class="asignatura morado-oscuro" rowspan="3">DISEÑO Y CONFIGURACIÓN DE REDES<br><small><B>(Prof. Padilla - Aula 405)</B></small></td>
            </tr>
            <tr>
                <td class="hora">09:00 a 09:45</td> 
                <td class="asignatura verde" rowspan = "3">DESARROLLO DE INTERFACES WEB DINÁMICAS<br><small><B>(Prof. Huertas - Lab. 01)</B></small></td>
            </tr>
            <tr>
                <td class="hora">09:45 a 10:30</td>
                <td class="asignatura blanco"><B>LIBRE</B></td>
                <td class="asignatura morado" rowspan="2">REPARACIÓN DE EQUIPOS TECNOLÓGICOS<br><small><B>(Prof. Padilla - Aula 405)</B></small></td>
            </tr>
            <tr>
                <td class="hora">10:30 a 11:15</td>
                <td class="asignatura rojo">HERRAMIENTAS PARA ANÁLISIS DE DATOS<br><small><B>(Prof. Gutierrez - Lab. 01)</B></small></td>
                <td class="asignatura morado" rowspan="1">REPARACIÓN DE EQUIPOS TECNOLÓGICOS<br><small><B>(Prof. Padilla - Aula 405)</B></small></td> 
                <td class="asignatura lila" rowspan="1">PROGRAMACIÓN DE MACROS<br><small><B>(Prof. Palomino - Lab. 01)</B></small></td>                
            </tr>
            <tr>
                <td class="hora">11:15 a 11:30</td>
                <td colspan="5" class="asignatura negro"><B>RECESO / DESCANSO</B></td>
            </tr>
            <tr>
                <td class="hora">11:30 a 12:15</td>
                <td class="asignatura rojo" rowspan="2">HERRAMIENTAS PARA ANÁLISIS DE DATOS<br><small><B>(Prof. Gutierrez - Lab. 01)</B></small></td>
                <td class="asignatura melocoton" rowspan="3">LENGUAJE DE PROGRAMACIÓN<br><small><B>(Prof. De La Cruz - Lab. 01)</B></small></td>
                <td class="asignatura morado" rowspan="2">REPARACIÓN DE EQUIPOS TECNOLÓGICOS<br><small><B>(Prof. Padilla - Aula 405)</B></small></td> 
                <td class="asignatura lila-rojo" rowspan="3">INTERPRETACIÓN Y PRODUCCIÓN DE TEXTOS<br><small><B>(Prof. Castillo - Aula 405)</B></small></td>                 
                <td class="asignatura lila" rowspan="2">PROGRAMACIÓN DE MACROS<br><small><B>(Prof. Palomino - Lab. 01)</B></small></td>
            </tr>
            <tr>
                <td class="hora">12:15 a 13:00</td>
            </tr>
            <tr>
                <td class="hora">13:00 a 13:45</td>
                <td class="asignatura blanco"><B>SALIDA</B></td>
                <td class="asignatura blanco"><B>SALIDA</B></td>
                <td class="asignatura blanco"><B>SALIDA</B></td>
            </tr>
        `
    }
};

function inicializarEventosCeldas() {
    document.querySelectorAll('.asignatura').forEach(celda => {
        celda.style.cursor = "pointer";
        celda.addEventListener('click', () => {
            const texto = celda.textContent.trim();
            let profesorKey = "Libre"; 

            if (texto.includes("Barnett")) profesorKey = "Barnett";
            if (texto.includes("Gutierrez")) profesorKey = "Gutierrez";
            if (texto.includes("Huertas")) profesorKey = "Huertas";
            if (texto.includes("De La Cruz")) profesorKey = "De La Cruz";
            if (texto.includes("Padilla")) profesorKey = "Padilla";
            if (texto.includes("Palomino")) profesorKey = "Palomino";
            if (texto.includes("Castillo")) profesorKey = "Castillo";
            if (texto.includes("SALIDA")) profesorKey = "Salida";

            const data = profesores[profesorKey] || profesores["Barnett"];

            document.getElementById('prof-foto').src = data.foto;
            document.getElementById('modal-profesor').textContent = data.nombre;
            document.getElementById('modal-asignatura').textContent = data.asignatura;
            document.getElementById('modal-aula').innerHTML = data.aula;
            document.getElementById('modal-horario').innerHTML = data.horario;
            document.getElementById('modal-delegado').textContent = data.delegado;
            document.getElementById('modal-contacto').href = data.contacto;
            document.getElementById('modal-contacto').textContent = data.contacto;

            document.getElementById('modal').style.display = 'flex';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const pantallaRegistro = document.getElementById('pantalla-registro');
    const appContainer = document.getElementById('app-container');
    const formRegistro = document.getElementById('form-registro');
    const saludoDiv = document.getElementById('saludo-estudiante');

    // URL de tu Google Apps Script Web App (Reemplaza con la tuya)
    const WEB_APP_URL = 'AQUÍ_PEGAS_TU_URL_DE_APPS_SCRIPT';

    // Verificar si el usuario ya se registró previamente en este dispositivo
    const alumnoGuardado = localStorage.getItem('istpa_alumno');

    if (alumnoGuardado) {
        const datos = JSON.parse(alumnoGuardado);
        pantallaRegistro.style.display = 'none';
        appContainer.style.display = 'block';
        saludoDiv.innerHTML = `👋 ¡Hola, <b>${datos.nombre}</b>! Bienvenido a tu panel de horarios de ${datos.carrera}.`;
    }

    // Manejar envío del formulario de registro
    formRegistro.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btnEntrar = document.getElementById('btn-entrar');
        btnEntrar.textContent = "Registrando...";
        btnEntrar.disabled = true;

        const nombre = document.getElementById('input-nombre').value.trim();
        const dni = document.getElementById('input-dni').value.trim();
        const correo = document.getElementById('input-correo').value.trim();
        const selectorCarrera = document.getElementById('selector-horario');
        const carreraTexto = selectorCarrera.options[selectorCarrera.selectedIndex].text;

        const payload = {
            nombre: nombre,
            dni: dni,
            correo: correo,
            carrera: carreraTexto
        };

        // Guardar localmente
        localStorage.setItem('istpa_alumno', JSON.stringify(payload));

        // Enviar datos en segundo plano al Google Sheet
        try {
            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.error("Error al registrar en Google Sheets:", error);
        }

        // Ocultar registro y mostrar app
        pantallaRegistro.style.display = 'none';
        appContainer.style.display = 'block';
        saludoDiv.innerHTML = `👋 ¡Hola, <b>${nombre}</b>! Bienvenido a tu panel de horarios de ${carreraTexto}.`;
        
        inicializarEventosCeldas();
    });

    // Inicializar eventos iniciales si ya estaba logueado
    if (alumnoGuardado) {
        inicializarEventosCeldas();
    }

    // Cambio de horario mediante selector
    const selector = document.getElementById('selector-horario');
    if (selector) {
        selector.addEventListener('change', (e) => {
            const seleccion = e.target.value;
            const horarioInfo = horariosData[seleccion];
            
            if (horarioInfo) {
                document.getElementById('titulo-horario').textContent = horarioInfo.titulo;
                document.getElementById('cuerpo-tabla').innerHTML = horarioInfo.htmlTabla;
                inicializarEventosCeldas();
            }
        });
    }

    // Cerrar modal
    const closeModal = document.querySelector('.close');
    if(closeModal) {
        closeModal.addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        if (e.target === modal) modal.style.display = 'none';
    });
});
