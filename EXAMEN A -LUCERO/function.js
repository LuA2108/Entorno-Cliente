function ventasVendedore(vendedor, listaVentas) {
    return listaVentas.vendedores.filter(v => v = vendedor); //Devuelve obj ventas donde su vendedor es el pasado por parametro
}

function ventasSucursal(ventas, sucursal) {
    return ventas.detalle.filter(d => d.sucursal === sucursal).length;
}

function cantidadVentasComponente(ventas, componente) {
    return ventas.detalle.filter(d => d.componentesPC == componente).length;
}

function presupuestoPC(componentes, ventas) {

    const prec = ventas.precios.reduce((acum, p) => {

        Object.values(componentes).forEach( valor => {

            acum = (!acum || p.componente == valor) ? p.precio + acum : 0;
        });

        return acum;
    }, {});

    return prec;
}

function ventasTotalesVendedore(ventas, vendedore) {

    return ventas.detalle.filter(d => d.vendedore == vendedore).reduce((cant, d) => {

        const cantVentComp = ventas.detalle.filter(d =>
            d.componentesPC.filter(pc => pc === d[componentesPC]).length);

        const preciosComp = ventas.precios.filter(p => p.componente);

        const precioTot = cantVentComp * preciosComp.precio;
        return precioTot;
    }, {});
}
