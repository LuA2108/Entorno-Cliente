
function artistasSolistas(listaArtistas) {
            return listaArtistas.filter(artista => artista.solista === true);
        }

        console.log(artistasSolistas(artistas));

        function artistaSegunEdad(edad, listaArtistas) {
            return listaArtistas.filter(artista => artista.edad === edad);
        }

        console.log(artistaSegunEdad(20, artistas));

        function artistaPorInstrumento(listaArtistas) {
            return listaArtistas.reduce((acum, artista) => {
                acum[artista.instrumento] = (acum[artista.instrumento] || 0) + 1;
                return acum;
            }, {});
        }

        console.log(artistaPorInstrumento(artistas));

        function artistaPorGenero(listaArtistas) {
            return listaArtistas.reduce((acum, artista) => {
                acum[artista.genero] = (acum[artista.genero] || 0) + 1;
                return acum;
            }, {});
        }

        console.log(artistaPorGenero(artistas));

        function artistasMasDiscosQue(num, listaArtistas) {
            return listaArtistas.filter(artista => artista.discos.length > num).sort((a, b) => b.discos.length - a.discos.length);
        }

        console.log(artistasMasDiscosQue(8, artistas));

        function artistaMasEntradasVendidas(listaArtistas) {
            return listaArtistas.reduce((max, artista) => {
                const total = artista.ultimoRecital ? artista.ultimoRecital.entradasVendidas : 0;

                if (!max) return artista; // Primer artista

                const totalMax = max.ultimoRecital ? max.ultimoRecital.entradasVendidas : 0;

                return total > totalMax ? artista : max; // Devuelve el artista con más entradas
            }, null);
        }

        console.log(artistaMasEntradasVendidas(artistas));

        function artistaMayorRecaudacion(listaArtistas) {
            return listaArtistas.reduce((max, artista) => {
                const total = artista.ultimoRecital ? artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas : 0;

                if(!max) return artista;

                const totalMax = max.ultimoRecital ? max.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas : 0;

                return total > totalMax ? artista : max;
            }, null);
        }

        console.log(artistaMayorRecaudacion(artistas));

        function artistaConDiscoEspecificoAño(listaArtistas, anyo) {
            return listaArtistas.filter(artista => (artista.ultimoRecital && artista.ultimoRecital.anio === anyo));
        }

        console.log(artistaConDiscoEspecificoAño(artistas, 2019));

        function artistaConMasCopiasVendidas(listaArtistas) {
            return listaArtistas.reduce((max, artista) => {
                const totalCopiasVendidas = artista.discos.reduce((sum, disco) => sum + disco.copiasVendidas, 0);
                
                if(!max) return artista;

                const maxTotalCopiasVendidas = max.discos.reduce((sumMax, disco) => sumMax + disco.copiasVendidas, 0);

                return totalCopiasVendidas > maxTotalCopiasVendidas ? artista : max;
            }, null);
        }

        console.log(artistaConMasCopiasVendidas(artistas));