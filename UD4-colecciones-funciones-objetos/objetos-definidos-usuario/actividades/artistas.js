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

let opcion = -1;

do {
    opcion = Number(menu());

    switch (opcion) {
        case 1:

            break;

        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 8:

            break;
        case 9:

            break;
        case 10:
        console.log("Fin.");
            break;
        default:
            console.log("");
            break;
    }

} while (opcion != 10);