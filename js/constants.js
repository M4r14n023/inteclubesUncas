export const ID_PROYECTO = 'nombre_del_equipo'; // Asegúrate de que coincida con tu Firebase

export const CATEGORIAS_DISPONIBLES = [
    { value: 'caballeros_2da', label: 'Caballeros 2da', max: 5 },
    { value: 'caballeros_3ra', label: 'Caballeros 3ra', max: 5 },
    { value: 'caballeros_4ta', label: 'Caballeros 4ta', max: 5 },
    { value: 'caballeros_5ta', label: 'Caballeros 5ta', max: 5 },
    { value: 'damas_a',        label: 'Damas A',        max: 3 },
    { value: 'damas_b',        label: 'Damas B',        max: 4 },
    { value: 'damas_c',        label: 'Damas C',        max: 4 },
];

export const MAX_POR_CATEGORIA = Object.fromEntries(CATEGORIAS_DISPONIBLES.map(c => [c.value, c.max]));
export const NOMBRES_CATS = Object.fromEntries(CATEGORIAS_DISPONIBLES.map(c => [c.value, c.label]));
export const ORDEN_CATS = CATEGORIAS_DISPONIBLES.map(c => c.value);
export const EQUIPOS_POR_DEFECTO = [ 'Uncas', 'El Rojo', 'Ferro', 'Tercer Tiempo', 'Tres Arroyos', 'Head', 'La Cardoneta', 'La Sede', 'Tiro Federal' ];
window.AppConstants = { 
    ID_PROYECTO, 
    CATEGORIAS_DISPONIBLES, 
    MAX_POR_CATEGORIA, 
    NOMBRES_CATS, 
    ORDEN_CATS, 
    EQUIPOS_POR_DEFECTO 
};