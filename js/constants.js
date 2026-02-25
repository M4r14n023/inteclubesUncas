window.AppConstants = {
    ID_PROYECTO: 'nombre_del_equipo', // Cambia esto por el tuyo
    
    CATEGORIAS_DISPONIBLES: [
        { value: 'caballeros_2da', label: 'Caballeros 2da', max: 5 },
        { value: 'caballeros_3ra', label: 'Caballeros 3ra', max: 5 },
        { value: 'caballeros_4ta', label: 'Caballeros 4ta', max: 5 },
        { value: 'caballeros_5ta', label: 'Caballeros 5ta', max: 5 },
        { value: 'damas_a',        label: 'Damas A',        max: 3 },
        { value: 'damas_b',        label: 'Damas B',        max: 4 },
        { value: 'damas_c',        label: 'Damas C',        max: 4 },
    ],

    MAX_POR_CATEGORIA: {
        'caballeros_2da': 5, 'caballeros_3ra': 5, 'caballeros_4ta': 5, 'caballeros_5ta': 5,
        'damas_a': 3, 'damas_b': 4, 'damas_c': 4
    },

    NOMBRES_CATS: {
        'caballeros_2da': 'Caballeros 2da', 'caballeros_3ra': 'Caballeros 3ra', 'caballeros_4ta': 'Caballeros 4ta', 'caballeros_5ta': 'Caballeros 5ta',
        'damas_a': 'Damas A', 'damas_b': 'Damas B', 'damas_c': 'Damas C'
    },

    ORDEN_CATS: ['damas_a', 'damas_b', 'damas_c', 'caballeros_2da', 'caballeros_3ra', 'caballeros_4ta', 'caballeros_5ta'],

    EQUIPOS_POR_DEFECTO: ['Uncas', 'El Rojo', 'Ferro', 'Tercer Tiempo', 'Tres Arroyos', 'Head', 'La Cardoneta', 'La Sede', 'Tiro Federal']
};
