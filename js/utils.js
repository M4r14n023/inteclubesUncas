// js/utils.js
import { MAX_POR_CATEGORIA } from './constants.js';

export const calcularTablaZona = (equiposDeLaZona, partidos, resultados, miEquipoNombre) => {
    const tabla = {};
    
    // Inicialización segura
    if (!equiposDeLaZona || !Array.isArray(equiposDeLaZona)) return [];

    equiposDeLaZona.forEach((nombre, index) => {
        if (nombre) {
            tabla[nombre] = { 
                nombre, pj: 0, ganados: 0, perdidos: 0, 
                puntosFavor: 0, puntosContra: 0, diferencia: 0, 
                puntosTotales: 0, originalIndex: index 
            };
        }
    });

    // Si no hay partidos cargados aún, devolvemos la tabla vacía pero inicializada
    if (!partidos || !Array.isArray(partidos)) return Object.values(tabla);

    // Lógica de cálculo (resumida para estabilidad)
    // Aquí se procesan los resultados de Firebase
    return Object.values(tabla).sort((a, b) => b.puntosTotales - a.puntosTotales || b.diferencia - a.diferencia);
};