
let menu = true;

while (menu) {
    var opcion = prompt(
    "Selecciona una opción:\n1. Ventas por Vendedor (componentes) \n2. Ventas por Sucursal (número) \n3. Cantidad Ventas Componente\n4. Presupuesto PC \n5. Ventas Totales por Vendedor (número) \n6. Salir");
    switch (opcion) {
        case "1":
            let vendedor = prompt("Ingrese el nombre de un vendedor: ");

            console.log(ventasVendedore(vendedor, ventas));

        break;
        
        case "2":
            let sucursal = prompt("Ingrese el nombre de una sucursal: ");

            console.log("Ventas de sucursal"+ sucursal + " : "+ ventasSucursal(ventas, sucursal));
        break;

        case "3":
            let componente = prompt("Ingrese el nombre de un componente de PC: ");
        break;

        case "4":
            let componentes = prompt("Ingrese una lista de componente de PC (separadas `,`)");
            componentes = componentes.replace("\"", "");
            let listaComponentes = componentes.split(",");

            console.log(presupuestoPC(listaComponentes, ventas));
        break;
        
        case "5":
            let vendedore = prompt("Ingrese el nombre del vendedor: ");

            console.log(ventasTotalesVendedore(ventas, vendedore));
        break;
        
        case "6":
            alert("Adiós!");
            menu = false;
        break;

    }
}

