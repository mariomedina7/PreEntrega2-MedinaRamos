let peliculas = [
    { titulo: "Matrix", genero: "Ciencia ficción", anio: 1999 },
    { titulo: "Inception", genero: "Ciencia ficción", anio: 2010 },
    { titulo: "Forrest Gump", genero: "Drama", anio: 1994 },
    { titulo: "Sueños de Libertad", genero: "Drama", anio: 1994 },
    { titulo: "Superbad", genero: "Comedia", anio: 2007 },
    { titulo: "La Máscara", genero: "Comedia", anio: 1994 },
    { titulo: "El Padrino", genero: "Crimen", anio: 1972 },
    { titulo: "Tiempos Violentos", genero: "Crimen", anio: 1994 },
    { titulo: "Gladiador", genero: "Acción", anio: 2000 },
    { titulo: "El Caballero Oscuro", genero: "Acción", anio: 2008 }
];

function agregarPelicula() {
    let titulo = prompt("Ingresa el nombre de la película");
    let genero = prompt("Ingresa el género de la película");
    let anio;
    while (true) {
        anio = prompt("Ingresa el año de la película");
        if (!isNaN(anio) && anio.trim() !== "" && Number.isInteger(parseFloat(anio))) {
            anio = parseInt(anio);
            break;
        } else {
            alert("Por favor, ingresa un año válido (solo números enteros).");
        }
    }
    let nuevaPelicula = { titulo, genero, anio };
    peliculas.push(nuevaPelicula);
    alert(`Película "${titulo}" agregada correctamente`);
}

function eliminarPelicula() {
    while(true) {
        let titulo = prompt("Ingresa el título de la película a eliminar:");
        let indice = peliculas.findIndex(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
        if (indice !== -1) {
            let confirmar = confirm(`¿Seguro que quieres eliminar la película "${peliculas[indice].titulo}"?`);
            if (confirmar) {
                let tituloEliminado = peliculas[indice].titulo;
                peliculas.splice(indice, 1);
                alert(`Película "${tituloEliminado}" eliminada correctamente`);
                break;
            }
        } else {
            alert("No se encontraron películas con ese título");
        }
    }
}

function buscarPelicula() {
    let titulo = prompt("Ingresa el título de la película a buscar:");
    let peliculasEncontradas = peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (peliculasEncontradas.length > 0) {
        let resultado = "Películas encontradas:\n";
        peliculasEncontradas.forEach(pelicula => {
            resultado += `Título: ${pelicula.titulo}, Género: ${pelicula.genero}, Año: ${pelicula.anio}\n`;
        });
        alert(resultado);
    } else {
        alert("No se encontraron películas con ese título");
    }
}

function filtrarPeliculasPorGenero() {
    let genero = prompt("Ingresa el género de la película a filtrar:");
    let peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero.toLowerCase().includes(genero.toLowerCase()));

    if (peliculasFiltradas.length > 0) {
        let resultado = "Películas filtradas:\n";
        peliculasFiltradas.forEach(pelicula => { 
            resultado += `Título: ${pelicula.titulo}, Género: ${pelicula.genero}, Año: ${pelicula.anio}\n`;
        });
        alert(resultado);
    } else {
        alert("No se encontraron películas con ese género");
    }
}

function mostrarTodasPeliculas() {
    if (peliculas.length > 0) {
        let resultado = "Todas las películas:\n";
        peliculas.forEach(pelicula => {
            resultado += `Título: ${pelicula.titulo}, Género: ${pelicula.genero}, Año: ${pelicula.anio}\n`;
        });
        alert(resultado);
    } else {
        alert("No hay películas disponibles");
    }
}

function mostrarMenu() {
    while(true) {
        let opcion = prompt("Bienvenido al sistema de administración de películas.\nIngresa una opción:\n1. Agregar película\n2. Eliminar película\n3. Mostrar todas las películas\n4. Buscar película\n5. Filtrar Películas por Género\n6. Salir");
        switch (opcion) {
            case "1":
                agregarPelicula();
                break;
            case "2":
                eliminarPelicula();
                break;
            case "3":
                mostrarTodasPeliculas();
                break;
            case "4":
                buscarPelicula();
                break;
            case "5":
                filtrarPeliculasPorGenero();
                break;
            case "6":
                alert("Nos vemos!");
                return;
            default:
                alert("Opción inválida. Intenta de nuevo por favor.");
        }    
    }
}

mostrarMenu();
