function menu() {
    const menu = "---- Menú de opciones ----\n" +
        "1. Artistas solistas\n" +
        "2. Artista por edad\n" +
        "3. Artistas por instrumento\n" +
        "4. Artistas por género\n" +
        "5. Artistas con más discos\n" +
        "6. Artistas con más entradas vendidas\n" +
        "7. Artista con mayor recaudación\n" +
        "8. Artistas según año del disco\n" +
        "9. Artista con más copias\n" +
        "10. Salir\n"+
        "Elige una opcion: ";
    
    return prompt(menu);
}

do {
    opcion = Number(menu());

    switch (opcion) {
        case 1:
            console.log("Artistas solistas:");
            console.log(artistasSolistas(artistas));
            break;

        case 2:
            const edad = Number(prompt("Introduce la edad del artista: "));
            console.log(`Artistas con ${edad} años:`);
            console.log(artistaSegunEdad(edad, artistas));
            break;

        case 3:
            console.log("Artistas por instrumento:");
            console.log(artistaPorInstrumento(artistas));
            break;

        case 4:
            console.log("Artistas por género:");
            console.log(artistaPorGenero(artistas));
            break;

        case 5:
            const num = Number(prompt("Mostrar artistas con más de cuántos discos?"));
            console.log(`Artistas con más de ${num} discos:`);
            console.log(artistasMasDiscosQue(num, artistas));
            break;

        case 6:
            console.log("Artista con más entradas vendidas:");
            console.log(artistaMasEntradasVendidas(artistas));
            break;

        case 7:
            console.log("Artista con mayor recaudación:");
            console.log(artistaMayorRecaudacion(artistas));
            break;

        case 8:
            const anyo = Number(prompt("Introduce el año del recital: "));
            console.log(`Artistas con recital en el año ${anyo}:`);
            console.log(artistaConDiscoEspecificoAño(artistas, anyo));
            break;

        case 9:
            console.log("Artista con más copias vendidas:");
            console.log(artistaConMasCopiasVendidas(artistas));
            break;

        case 10:
            console.log("Fin del programa.");
            break;

        default:
            console.log("Opción no válida, intenta nuevamente.");
            break;
    }

} while (opcion !== 10);