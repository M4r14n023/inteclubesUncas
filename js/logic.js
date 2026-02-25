window.AppLogic = {
    calcularTablaZona: (equiposDeLaZona = [], partidos = [], resultados = {}, miEquipoNombre = '') => {
        const tabla = {};
        
        equiposDeLaZona.forEach((nombre, index) => {
            if (nombre) {
                tabla[nombre] = { 
                    nombre, pj: 0, ganados: 0, perdidos: 0, 
                    puntosFavor: 0, puntosContra: 0, diferencia: 0, 
                    puntosTotales: 0, originalIndex: index 
                };
            }
        });

        if (!partidos || partidos.length === 0) return Object.values(tabla);

        partidos.forEach((p) => {
            if (!p.jugadores || p.jugadores.length === 0) return;
            
            const key = `${p.fechaIdx}-${p.id}`;
            const ganado = resultados[key] || false;
            const puntos = p.esBonus ? 20 : 10;
            const rival = p.rivalNombre;

            if (tabla[miEquipoNombre] && tabla[rival]) {
                if (ganado) {
                    tabla[miEquipoNombre].puntosTotales += puntos;
                    tabla[miEquipoNombre].ganados += 1;
                    tabla[rival].perdidos += 1;
                } else {
                    tabla[rival].puntosTotales += puntos;
                    tabla[rival].ganados += 1;
                    tabla[miEquipoNombre].perdidos += 1;
                }
            }
        });

        return Object.values(tabla).sort((a, b) => b.puntosTotales - a.puntosTotales || b.diferencia - a.diferencia);
    }
};
window.AppLogic = { calcularTablaZona };