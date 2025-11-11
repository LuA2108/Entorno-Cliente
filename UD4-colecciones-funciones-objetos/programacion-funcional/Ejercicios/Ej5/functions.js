function addItems(notas, item) {
    var nuevos = item.split(",");
    for (var i = 0; i < nuevos.length; i++) {
        nuevos[i] = nuevos[i].trim();
    }
    return notas.concat(nuevos);
}

// 2. Limpiar el array: convertir a número y dejar solo 0-10
function clearItems(notas) {
    return notas
        .map(function(n) { return Number(n); })
        .filter(function(n) { return !isNaN(n) && n >= 0 && n <= 10; });
}

// 3. Primer suspenso (nota < 5)
function primerSuspenso(notas) {
    return notas.find(function(n) { return n < 5; });
}

// 4. Aprobados (nota >= 5)
function aprobados(notas) {
    return notas.filter(function(n) { return n >= 5; });
}

// 5. Nota media, redondeada a 2 decimales
function notaMedia(notas) {
    if (notas.length === 0) return 0;
    var suma = notas.reduce(function(acc, n) { return acc + n; }, 0);
    return Math.round((suma / notas.length) * 100) / 100;
}

// 6. Cambiar notas por un incremento porcentual y redondear a entero
function cambiaNotas(notas, incremento) {
    return notas.map(function(n) {
        return Math.round(n * (1 + incremento / 100));
    });
}

export { addItems, clearItems, primerSuspenso, aprobados, notaMedia, cambiaNotas };
