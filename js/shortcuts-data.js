// ==========================================================================
// Dataset Centralizado de Atajos de Teclado
// ==========================================================================

// Configuración global
const shortcutsConfig = {
    version: '1.0.0',
    lastUpdated: '2024-01-15',
    categories: ['windows', 'excel', 'word', 'mac', 'navegadores', 'photoshop', 'general']
};

// ============ ATAJOS DE WINDOWS ============
const windowsShortcuts = {
    general: [
        { action: 'Copiar', keys: 'Ctrl + C', description: 'Copia el elemento seleccionado al portapapeles', category: 'basico' },
        { action: 'Pegar', keys: 'Ctrl + V', description: 'Pega el contenido del portapapeles', category: 'basico' },
        { action: 'Cortar', keys: 'Ctrl + X', description: 'Corta el elemento seleccionado', category: 'basico' },
        { action: 'Deshacer', keys: 'Ctrl + Z', description: 'Deshace la última acción', category: 'basico' },
        { action: 'Rehacer', keys: 'Ctrl + Y', description: 'Rehace la acción deshecha', category: 'basico' },
        { action: 'Seleccionar todo', keys: 'Ctrl + A', description: 'Selecciona todo el contenido', category: 'basico' },
        { action: 'Buscar', keys: 'Ctrl + F', description: 'Abre el cuadro de búsqueda', category: 'basico' },
        { action: 'Guardar', keys: 'Ctrl + S', description: 'Guarda el archivo actual', category: 'basico' },
        { action: 'Imprimir', keys: 'Ctrl + P', description: 'Abre el cuadro de diálogo de impresión', category: 'basico' },
        { action: 'Nuevo', keys: 'Ctrl + N', description: 'Crea un nuevo archivo o ventana', category: 'basico' }
    ],
    
    windows10: [
        { action: 'Menú Inicio', keys: 'Win', description: 'Abre o cierra el menú Inicio', category: 'navegacion' },
        { action: 'Centro de actividades', keys: 'Win + A', description: 'Abre el centro de actividades', category: 'sistema' },
        { action: 'Configuración', keys: 'Win + I', description: 'Abre la aplicación Configuración', category: 'sistema' },
        { action: 'Explorador de archivos', keys: 'Win + E', description: 'Abre el Explorador de archivos', category: 'navegacion' },
        { action: 'Escritorio', keys: 'Win + D', description: 'Muestra u oculta el escritorio', category: 'navegacion' },
        { action: 'Administrador de tareas', keys: 'Ctrl + Shift + Esc', description: 'Abre el Administrador de tareas', category: 'sistema' },
        { action: 'Bloquear PC', keys: 'Win + L', description: 'Bloquea el equipo', category: 'sistema' },
        { action: 'Cambiar aplicación', keys: 'Alt + Tab', description: 'Cambia entre aplicaciones abiertas', category: 'navegacion' },
        { action: 'Cerrar ventana', keys: 'Alt + F4', description: 'Cierra la ventana activa', category: 'ventanas' },
        { action: 'Minimizar ventana', keys: 'Win + M', description: 'Minimiza todas las ventanas', category: 'ventanas' }
    ],
    
    windows11: [
        { action: 'Widgets', keys: 'Win + W', description: 'Abre el panel de widgets', category: 'nuevas' },
        { action: 'Chat de Teams', keys: 'Win + C', description: 'Abre Microsoft Teams Chat', category: 'nuevas' },
        { action: 'Diseños de ventana', keys: 'Win + Z', description: 'Abre los diseños de ajuste de ventana', category: 'ventanas' },
        { action: 'Búsqueda', keys: 'Win + S', description: 'Abre la búsqueda', category: 'navegacion' },
        { action: 'Centro de notificaciones', keys: 'Win + N', description: 'Abre el centro de notificaciones', category: 'sistema' },
        { action: 'Configuración rápida', keys: 'Win + A', description: 'Abre configuración rápida', category: 'sistema' },
        { action: 'Escritorios virtuales', keys: 'Win + Tab', description: 'Abre la vista de tareas y escritorios virtuales', category: 'ventanas' },
        { action: 'Crear escritorio virtual', keys: 'Win + Ctrl + D', description: 'Crea un nuevo escritorio virtual', category: 'ventanas' },
        { action: 'Cerrar escritorio virtual', keys: 'Win + Ctrl + F4', description: 'Cierra el escritorio virtual actual', category: 'ventanas' },
        { action: 'Cambiar escritorio', keys: 'Win + Ctrl + ←/→', description: 'Cambia entre escritorios virtuales', category: 'ventanas' }
    ]
};

// ============ ATAJOS DE EXCEL ============
const excelShortcuts = {
    basico: [
        { action: 'Nueva celda', keys: 'Enter', description: 'Confirma entrada y se mueve a la celda inferior', category: 'navegacion' },
        { action: 'Cancelar entrada', keys: 'Esc', description: 'Cancela la entrada en la celda', category: 'edicion' },
        { action: 'Editar celda', keys: 'F2', description: 'Edita la celda activa', category: 'edicion' },
        { action: 'Insertar fila', keys: 'Ctrl + Shift + +', description: 'Inserta una nueva fila', category: 'estructura' },
        { action: 'Eliminar fila', keys: 'Ctrl + -', description: 'Elimina la fila seleccionada', category: 'estructura' },
        { action: 'Autoajustar columna', keys: 'Alt + H + O + I', description: 'Ajusta el ancho de columna automáticamente', category: 'formato' },
        { action: 'Formato de celdas', keys: 'Ctrl + 1', description: 'Abre el cuadro de formato de celdas', category: 'formato' },
        { action: 'Insertar función', keys: 'Shift + F3', description: 'Abre el cuadro de insertar función', category: 'formulas' },
        { action: 'Calcular ahora', keys: 'F9', description: 'Calcula todas las hojas de todos los libros abiertos', category: 'formulas' },
        { action: 'Buscar y reemplazar', keys: 'Ctrl + H', description: 'Abre buscar y reemplazar', category: 'edicion' }
    ],
    
    avanzado: [
        { action: 'Nombres definidos', keys: 'Ctrl + F3', description: 'Abre el administrador de nombres', category: 'formulas' },
        { action: 'Tabla dinámica', keys: 'Alt + N + V', description: 'Inserta una tabla dinámica', category: 'analisis' },
        { action: 'Filtros automáticos', keys: 'Ctrl + Shift + L', description: 'Activa/desactiva filtros automáticos', category: 'datos' },
        { action: 'Ordenar datos', keys: 'Alt + A + S + S', description: 'Abre cuadro de ordenar', category: 'datos' },
        { action: 'Formato condicional', keys: 'Alt + H + L', description: 'Aplica formato condicional', category: 'formato' },
        { action: 'Validación de datos', keys: 'Alt + A + V + V', description: 'Configura validación de datos', category: 'datos' },
        { action: 'Auditoría de fórmulas', keys: 'Alt + M + P', description: 'Rastrea precedentes de fórmula', category: 'formulas' },
        { action: 'Mostrar fórmulas', keys: 'Ctrl + `', description: 'Muestra/oculta fórmulas en lugar de valores', category: 'formulas' },
        { action: 'Consolidar datos', keys: 'Alt + A + N', description: 'Abre herramienta de consolidación', category: 'analisis' },
        { action: 'Subtotales automáticos', keys: 'Alt + A + B', description: 'Inserta subtotales automáticos', category: 'analisis' }
    ]
};

// ============ ATAJOS DE WORD ============
const wordShortcuts = {
    general: [
        { action: 'Negrita', keys: 'Ctrl + B', description: 'Aplica o quita formato de negrita', category: 'formato' },
        { action: 'Cursiva', keys: 'Ctrl + I', description: 'Aplica o quita formato de cursiva', category: 'formato' },
        { action: 'Subrayado', keys: 'Ctrl + U', description: 'Aplica o quita subrayado', category: 'formato' },
        { action: 'Centrar texto', keys: 'Ctrl + E', description: 'Centra el párrafo', category: 'alineacion' },
        { action: 'Justificar texto', keys: 'Ctrl + J', description: 'Justifica el párrafo', category: 'alineacion' },
        { action: 'Alinear izquierda', keys: 'Ctrl + L', description: 'Alinea el párrafo a la izquierda', category: 'alineacion' },
        { action: 'Alinear derecha', keys: 'Ctrl + R', description: 'Alinea el párrafo a la derecha', category: 'alineacion' },
        { action: 'Insertar hipervínculo', keys: 'Ctrl + K', description: 'Inserta un hipervínculo', category: 'insertar' },
        { action: 'Salto de página', keys: 'Ctrl + Enter', description: 'Inserta un salto de página', category: 'insertar' },
        { action: 'Vista preliminar', keys: 'Ctrl + F2', description: 'Muestra vista preliminar del documento', category: 'vista' }
    ],
    
    mac: [
        { action: 'Negrita', keys: 'Cmd + B', description: 'Aplica o quita formato de negrita', category: 'formato' },
        { action: 'Cursiva', keys: 'Cmd + I', description: 'Aplica o quita formato de cursiva', category: 'formato' },
        { action: 'Subrayado', keys: 'Cmd + U', description: 'Aplica o quita subrayado', category: 'formato' },
        { action: 'Copiar formato', keys: 'Cmd + Shift + C', description: 'Copia el formato del texto seleccionado', category: 'formato' },
        { action: 'Pegar formato', keys: 'Cmd + Shift + V', description: 'Pega el formato copiado', category: 'formato' },
        { action: 'Mostrar caracteres no imprimibles', keys: 'Cmd + 8', description: 'Muestra/oculta caracteres especiales', category: 'vista' },
        { action: 'Diccionario/Sinónimos', keys: 'Cmd + Ctrl + D', description: 'Busca definiciones y sinónimos', category: 'herramientas' },
        { action: 'Insertar comentario', keys: 'Cmd + Alt + A', description: 'Inserta un comentario', category: 'revision' },
        { action: 'Control de cambios', keys: 'Cmd + Shift + E', description: 'Activa/desactiva control de cambios', category: 'revision' },
        { action: 'Navegador de documentos', keys: 'Cmd + Alt + D', description: 'Abre el navegador de documentos', category: 'navegacion' }
    ]
};

// ============ ATAJOS DE MAC ============
const macShortcuts = {
    general: [
        { action: 'Copiar', keys: 'Cmd + C', description: 'Copia el elemento seleccionado', category: 'basico' },
        { action: 'Pegar', keys: 'Cmd + V', description: 'Pega el contenido del portapapeles', category: 'basico' },
        { action: 'Cortar', keys: 'Cmd + X', description: 'Corta el elemento seleccionado', category: 'basico' },
        { action: 'Deshacer', keys: 'Cmd + Z', description: 'Deshace la última acción', category: 'basico' },
        { action: 'Rehacer', keys: 'Cmd + Shift + Z', description: 'Rehace la acción deshecha', category: 'basico' },
        { action: 'Spotlight', keys: 'Cmd + Space', description: 'Abre la búsqueda de Spotlight', category: 'sistema' },
        { action: 'Cambiar aplicación', keys: 'Cmd + Tab', description: 'Cambia entre aplicaciones abiertas', category: 'navegacion' },
        { action: 'Cerrar ventana', keys: 'Cmd + W', description: 'Cierra la ventana actual', category: 'ventanas' },
        { action: 'Salir de aplicación', keys: 'Cmd + Q', description: 'Cierra completamente la aplicación', category: 'aplicaciones' },
        { action: 'Mission Control', keys: 'F3', description: 'Muestra todas las ventanas y espacios', category: 'navegacion' }
    ],
    
    sistema: [
        { action: 'Preferencias del Sistema', keys: 'Cmd + ,', description: 'Abre preferencias de la aplicación actual', category: 'configuracion' },
        { action: 'Forzar cierre', keys: 'Cmd + Alt + Esc', description: 'Fuerza el cierre de aplicaciones', category: 'sistema' },
        { action: 'Captura de pantalla', keys: 'Cmd + Shift + 3', description: 'Captura toda la pantalla', category: 'utilidades' },
        { action: 'Captura de área', keys: 'Cmd + Shift + 4', description: 'Captura un área seleccionada', category: 'utilidades' },
        { action: 'Captura de ventana', keys: 'Cmd + Shift + 4 + Space', description: 'Captura una ventana específica', category: 'utilidades' },
        { action: 'Bloquear pantalla', keys: 'Cmd + Ctrl + Q', description: 'Bloquea la pantalla', category: 'seguridad' },
        { action: 'Papelera vacía', keys: 'Cmd + Shift + Delete', description: 'Vacía la papelera', category: 'sistema' },
        { action: 'Finder', keys: 'Cmd + Shift + A', description: 'Abre la carpeta Aplicaciones', category: 'navegacion' },
        { action: 'Utilidades', keys: 'Cmd + Shift + U', description: 'Abre la carpeta Utilidades', category: 'navegacion' },
        { action: 'Escritorio', keys: 'Cmd + F3', description: 'Muestra el escritorio', category: 'navegacion' }
    ]
};

// ============ ATAJOS DE NAVEGADORES ============
const browserShortcuts = {
    chrome: [
        { action: 'Nueva pestaña', keys: 'Ctrl + T', description: 'Abre una nueva pestaña', category: 'pestañas' },
        { action: 'Cerrar pestaña', keys: 'Ctrl + W', description: 'Cierra la pestaña actual', category: 'pestañas' },
        { action: 'Reabrir pestaña', keys: 'Ctrl + Shift + T', description: 'Reabre la última pestaña cerrada', category: 'pestañas' },
        { action: 'Cambiar pestaña', keys: 'Ctrl + Tab', description: 'Cambia a la siguiente pestaña', category: 'pestañas' },
        { action: 'Pestaña específica', keys: 'Ctrl + 1-9', description: 'Cambia a una pestaña específica (1-8) o última (9)', category: 'pestañas' },
        { action: 'Actualizar página', keys: 'F5', description: 'Actualiza la página actual', category: 'navegacion' },
        { action: 'Actualizar forzada', keys: 'Ctrl + F5', description: 'Actualiza ignorando caché', category: 'navegacion' },
        { action: 'Historial', keys: 'Ctrl + H', description: 'Abre el historial de navegación', category: 'herramientas' },
        { action: 'Descargas', keys: 'Ctrl + J', description: 'Abre la página de descargas', category: 'herramientas' },
        { action: 'Herramientas de desarrollador', keys: 'F12', description: 'Abre las herramientas de desarrollador', category: 'desarrollo' }
    ],
    
    edge: [
        { action: 'Colecciones', keys: 'Ctrl + Shift + Y', description: 'Abre el panel de Colecciones', category: 'herramientas' },
        { action: 'Búsqueda vertical', keys: 'Ctrl + Shift + A', description: 'Abre búsqueda en la barra lateral', category: 'busqueda' },
        { action: 'Modo inmersivo', keys: 'F11', description: 'Activa/desactiva modo de pantalla completa', category: 'vista' },
        { action: 'Favoritos', keys: 'Ctrl + Shift + O', description: 'Abre el administrador de favoritos', category: 'herramientas' },
        { action: 'Lectura en voz alta', keys: 'Ctrl + Shift + U', description: 'Inicia la lectura en voz alta', category: 'accesibilidad' },
        { action: 'Modo privado', keys: 'Ctrl + Shift + N', description: 'Abre ventana de navegación privada', category: 'privacidad' },
        { action: 'Buscar en página', keys: 'Ctrl + F', description: 'Busca texto en la página actual', category: 'busqueda' },
        { action: 'Zoom aumentar', keys: 'Ctrl + +', description: 'Aumenta el zoom de la página', category: 'vista' },
        { action: 'Zoom disminuir', keys: 'Ctrl + -', description: 'Disminuye el zoom de la página', category: 'vista' },
        { action: 'Zoom original', keys: 'Ctrl + 0', description: 'Restaura el zoom al 100%', category: 'vista' }
    ],
    
    firefox: [
        { action: 'Marcadores', keys: 'Ctrl + Shift + B', description: 'Muestra/oculta la barra de marcadores', category: 'herramientas' },
        { action: 'Biblioteca', keys: 'Ctrl + Shift + O', description: 'Abre la biblioteca de marcadores', category: 'herramientas' },
        { action: 'Modo privado', keys: 'Ctrl + Shift + P', description: 'Abre ventana de navegación privada', category: 'privacidad' },
        { action: 'Complementos', keys: 'Ctrl + Shift + A', description: 'Abre el administrador de complementos', category: 'herramientas' },
        { action: 'Consola web', keys: 'Ctrl + Shift + K', description: 'Abre la consola web para desarrolladores', category: 'desarrollo' },
        { action: 'Inspector', keys: 'Ctrl + Shift + I', description: 'Abre el inspector de elementos', category: 'desarrollo' },
        { action: 'Red', keys: 'Ctrl + Shift + E', description: 'Abre el monitor de red', category: 'desarrollo' },
        { action: 'Responsive Design', keys: 'Ctrl + Shift + M', description: 'Activa el modo de diseño responsive', category: 'desarrollo' },
        { action: 'Página de inicio', keys: 'Alt + Home', description: 'Va a la página de inicio', category: 'navegacion' },
        { action: 'Buscar texto', keys: 'Ctrl + G', description: 'Busca la siguiente coincidencia', category: 'busqueda' }
    ]
};

// ============ ATAJOS DE PHOTOSHOP ============
const photoshopShortcuts = {
    general: [
        { action: 'Nueva imagen', keys: 'Ctrl + N', description: 'Crea un nuevo documento', category: 'archivo' },
        { action: 'Abrir imagen', keys: 'Ctrl + O', description: 'Abre un archivo existente', category: 'archivo' },
        { action: 'Guardar', keys: 'Ctrl + S', description: 'Guarda el archivo actual', category: 'archivo' },
        { action: 'Guardar como', keys: 'Ctrl + Shift + S', description: 'Guarda con otro nombre o formato', category: 'archivo' },
        { action: 'Exportar como', keys: 'Ctrl + Alt + Shift + W', description: 'Exporta para web y dispositivos', category: 'archivo' },
        { action: 'Cerrar', keys: 'Ctrl + W', description: 'Cierra el documento actual', category: 'archivo' },
        { action: 'Salir', keys: 'Ctrl + Q', description: 'Sale de Photoshop', category: 'archivo' },
        { action: 'Zoom ajustar', keys: 'Ctrl + 0', description: 'Ajusta la imagen a la ventana', category: 'vista' },
        { action: 'Zoom 100%', keys: 'Ctrl + 1', description: 'Muestra la imagen al 100%', category: 'vista' },
        { action: 'Pantalla completa', keys: 'F', description: 'Cambia entre modos de pantalla', category: 'vista' }
    ],
    
    herramientas: [
        { action: 'Herramienta Mover', keys: 'V', description: 'Selecciona la herramienta Mover', category: 'seleccion' },
        { action: 'Herramienta Marco rectangular', keys: 'M', description: 'Selecciona herramienta de selección rectangular', category: 'seleccion' },
        { action: 'Herramienta Lazo', keys: 'L', description: 'Selecciona herramienta de lazo', category: 'seleccion' },
        { action: 'Herramienta Varita mágica', keys: 'W', description: 'Selecciona herramienta de selección automática', category: 'seleccion' },
        { action: 'Herramienta Recortar', keys: 'C', description: 'Selecciona herramienta de recorte', category: 'transformacion' },
        { action: 'Herramienta Pincel', keys: 'B', description: 'Selecciona herramienta de pincel', category: 'pintura' },
        { action: 'Herramienta Borrador', keys: 'E', description: 'Selecciona herramienta borrador', category: 'pintura' },
        { action: 'Herramienta Texto', keys: 'T', description: 'Selecciona herramienta de texto', category: 'texto' },
        { action: 'Herramienta Zoom', keys: 'Z', description: 'Selecciona herramienta de zoom', category: 'navegacion' },
        { action: 'Herramienta Mano', keys: 'H', description: 'Selecciona herramienta de desplazamiento', category: 'navegacion' }
    ],
    
    capas: [
        { action: 'Nueva capa', keys: 'Ctrl + Shift + N', description: 'Crea una nueva capa', category: 'capas' },
        { action: 'Duplicar capa', keys: 'Ctrl + J', description: 'Duplica la capa actual', category: 'capas' },
        { action: 'Eliminar capa', keys: 'Delete', description: 'Elimina la capa seleccionada', category: 'capas' },
        { action: 'Agrupar capas', keys: 'Ctrl + G', description: 'Agrupa las capas seleccionadas', category: 'capas' },
        { action: 'Desagrupar', keys: 'Ctrl + Shift + G', description: 'Desagrupa las capas', category: 'capas' },
        { action: 'Combinar hacia abajo', keys: 'Ctrl + E', description: 'Combina con la capa inferior', category: 'capas' },
        { action: 'Aplanar imagen', keys: 'Ctrl + Shift + E', description: 'Combina todas las capas visibles', category: 'capas' },
        { action: 'Bloquear transparencia', keys: '/', description: 'Bloquea píxeles transparentes', category: 'capas' },
        { action: 'Seleccionar capa superior', keys: 'Alt + ]', description: 'Selecciona la capa de arriba', category: 'navegacion' },
        { action: 'Seleccionar capa inferior', keys: 'Alt + [', description: 'Selecciona la capa de abajo', category: 'navegacion' }
    ]
};

// ============ FUNCIONES DE UTILIDAD ============

// Obtener atajos por categoría
function getShortcutsByCategory(app, category = 'all') {
    const appData = getAppData(app);
    if (!appData) return [];
    
    if (category === 'all') {
        return Object.values(appData).flat();
    }
    
    return appData[category] || [];
}

// Obtener datos de aplicación
function getAppData(app) {
    const appMap = {
        'windows': windowsShortcuts,
        'excel': excelShortcuts,
        'word': wordShortcuts,
        'mac': macShortcuts,
        'navegadores': browserShortcuts,
        'photoshop': photoshopShortcuts
    };
    
    return appMap[app];
}

// Buscar atajos por texto
function searchShortcuts(query, app = 'all') {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    const appsToSearch = app === 'all' ? 
        ['windows', 'excel', 'word', 'mac', 'navegadores', 'photoshop'] : 
        [app];
    
    appsToSearch.forEach(appName => {
        const appData = getAppData(appName);
        if (appData) {
            Object.values(appData).flat().forEach(shortcut => {
                if (shortcut.action.toLowerCase().includes(searchTerm) ||
                    shortcut.description.toLowerCase().includes(searchTerm) ||
                    shortcut.keys.toLowerCase().includes(searchTerm)) {
                    results.push({
                        ...shortcut,
                        app: appName
                    });
                }
            });
        }
    });
    
    return results;
}

// Obtener estadísticas
function getShortcutsStats() {
    const stats = {
        total: 0,
        byApp: {},
        byCategory: {}
    };
    
    const apps = ['windows', 'excel', 'word', 'mac', 'navegadores', 'photoshop'];
    
    apps.forEach(app => {
        const appData = getAppData(app);
        if (appData) {
            const appTotal = Object.values(appData).flat().length;
            stats.byApp[app] = appTotal;
            stats.total += appTotal;
            
            // Contar por categorías
            Object.values(appData).flat().forEach(shortcut => {
                const category = shortcut.category;
                stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
            });
        }
    });
    
    return stats;
}

// Exportar datos para uso global
window.shortcutsData = {
    config: shortcutsConfig,
    windows: windowsShortcuts,
    excel: excelShortcuts,
    word: wordShortcuts,
    mac: macShortcuts,
    navegadores: browserShortcuts,
    photoshop: photoshopShortcuts,
    
    // Funciones de utilidad
    getShortcutsByCategory,
    getAppData,
    searchShortcuts,
    getShortcutsStats
};

console.log('📋 Dataset de atajos cargado:', window.shortcutsData.getShortcutsStats());