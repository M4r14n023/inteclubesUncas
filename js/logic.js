// js/logic.js
window.AppLogic = {
    calcularTablaZona: function(equiposDeLaZona, partidos, resultados, miEquipoNombre) {
        // Valores por defecto por si llega vacío
        const equipos = equiposDeLaZona || [];
        const matches = partidos || [];
        const res = resultados || {};
        const miEquipo = miEquipoNombre || '';

        const tabla = {};
        
        equipos.forEach((nombre, index) => {
            if (nombre) {
                tabla[nombre] = { 
                    nombre: nombre, pj: 0, ganados: 0, perdidos: 0, 
                    puntosFavor: 0, puntosContra: 0, diferencia: 0, 
                    puntosTotales: 0, originalIndex: index 
                };
            }
        });

        if (matches.length === 0) return Object.values(tabla);

        matches.forEach((p) => {
            if (!p.jugadores || p.jugadores.length === 0) return;
            
            const key = `${p.fechaIdx}-${p.id}`;
            const ganado = res[key] || false;
            const puntos = p.esBonus ? 20 : 10;
            const rival = p.rivalNombre;

            if (tabla[miEquipo] && tabla[rival]) {
                if (ganado) {
                    tabla[miEquipo].puntosTotales += puntos;
                    tabla[miEquipo].ganados += 1;
                    tabla[rival].perdidos += 1;
                } else {
                    tabla[rival].puntosTotales += puntos;
                    tabla[rival].ganados += 1;
                    tabla[miEquipo].perdidos += 1;
                }
            }
        });

        return Object.values(tabla).sort((a, b) => b.puntosTotales - a.puntosTotales || b.diferencia - a.diferencia);
    }
};