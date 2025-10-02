/**
 * Dataset centralizado de atajos de teclado
 * Estructura escalable para facilitar el mantenimiento y expansión
 */

const shortcutsData = {
  windows: {
    general: [
      { action: "Copiar", shortcut: "Ctrl + C", description: "Copia el elemento seleccionado al portapapeles" },
      { action: "Pegar", shortcut: "Ctrl + V", description: "Pega el contenido del portapapeles" },
      { action: "Cortar", shortcut: "Ctrl + X", description: "Corta el elemento seleccionado" },
      { action: "Deshacer", shortcut: "Ctrl + Z", description: "Deshace la última acción" },
      { action: "Rehacer", shortcut: "Ctrl + Y", description: "Rehace la acción deshecha" },
      { action: "Seleccionar todo", shortcut: "Ctrl + A", description: "Selecciona todo el contenido" },
      { action: "Buscar", shortcut: "Ctrl + F", description: "Abre el cuadro de búsqueda" },
      { action: "Imprimir", shortcut: "Ctrl + P", description: "Abre el cuadro de diálogo de impresión" },
      { action: "Guardar", shortcut: "Ctrl + S", description: "Guarda el documento actual" },
      { action: "Nuevo documento", shortcut: "Ctrl + N", description: "Crea un nuevo documento" }
    ],
    navigation: [
      { action: "Abrir Explorador", shortcut: "Win + E", description: "Abre el Explorador de archivos" },
      { action: "Escritorio", shortcut: "Win + D", description: "Muestra u oculta el escritorio" },
      { action: "Cambiar ventana", shortcut: "Alt + Tab", description: "Cambia entre ventanas abiertas" },
      { action: "Cerrar ventana", shortcut: "Alt + F4", description: "Cierra la ventana activa" },
      { action: "Minimizar ventana", shortcut: "Win + ↓", description: "Minimiza la ventana actual" },
      { action: "Maximizar ventana", shortcut: "Win + ↑", description: "Maximiza la ventana actual" },
      { action: "Ventana izquierda", shortcut: "Win + ←", description: "Ajusta ventana a la mitad izquierda" },
      { action: "Ventana derecha", shortcut: "Win + →", description: "Ajusta ventana a la mitad derecha" }
    ],
    windows10: [
      { action: "Centros de actividades", shortcut: "Win + A", description: "Abre el centro de actividades" },
      { action: "Configuración", shortcut: "Win + I", description: "Abre la aplicación Configuración" },
      { action: "Escritorios virtuales", shortcut: "Win + Tab", description: "Vista de tareas y escritorios virtuales" },
      { action: "Nuevo escritorio", shortcut: "Ctrl + Win + D", description: "Crea un nuevo escritorio virtual" },
      { action: "Cortana", shortcut: "Win + C", description: "Activa Cortana en modo escucha" }
    ],
    windows11: [
      { action: "Widgets", shortcut: "Win + W", description: "Abre el panel de widgets" },
      { action: "Microsoft Teams", shortcut: "Win + C", description: "Abre Microsoft Teams Chat" },
      { action: "Centros de actividades", shortcut: "Win + N", description: "Abre el centro de notificaciones" },
      { action: "Configuración rápida", shortcut: "Win + A", description: "Abre la configuración rápida" },
      { action: "Grupos", shortcut: "Win + Z", description: "Muestra las zonas de ajuste de ventanas" }
    ]
  },
  excel: {
    basic: [
      { action: "Nueva hoja", shortcut: "Shift + F11", description: "Inserta una nueva hoja de cálculo" },
      { action: "Guardar como", shortcut: "F12", description: "Abre el cuadro de diálogo Guardar como" },
      { action: "Insertar función", shortcut: "Shift + F3", description: "Abre el cuadro de diálogo Insertar función" },
      { action: "Formato de celdas", shortcut: "Ctrl + 1", description: "Abre el cuadro de diálogo Formato de celdas" },
      { action: "Rellenar hacia abajo", shortcut: "Ctrl + D", description: "Rellena la selección hacia abajo" },
      { action: "Rellenar hacia derecha", shortcut: "Ctrl + R", description: "Rellena la selección hacia la derecha" },
      { action: "Insertar filas", shortcut: "Ctrl + Shift + +", description: "Inserta filas o columnas" },
      { action: "Eliminar filas", shortcut: "Ctrl + -", description: "Elimina filas o columnas seleccionadas" }
    ],
    advanced: [
      { action: "Tabla dinámica", shortcut: "Alt + N + V", description: "Crea una tabla dinámica" },
      { action: "Filtro automático", shortcut: "Ctrl + Shift + L", description: "Activa o desactiva el filtro automático" },
      { action: "Buscar y reemplazar", shortcut: "Ctrl + H", description: "Abre buscar y reemplazar" },
      { action: "Referencia absoluta", shortcut: "F4", description: "Cambia entre referencias relativas y absolutas" },
      { action: "Calcular ahora", shortcut: "F9", description: "Calcula todas las hojas abiertas" },
      { action: "Macro", shortcut: "Alt + F8", description: "Ejecuta macros" },
      { action: "Editor VBA", shortcut: "Alt + F11", description: "Abre el editor de Visual Basic" },
      { action: "Validación de datos", shortcut: "Alt + A + V + V", description: "Abre validación de datos" }
    ],
    formulas: [
      { action: "Suma automática", shortcut: "Alt + =", description: "Inserta función SUMA automáticamente" },
      { action: "Mostrar fórmulas", shortcut: "Ctrl + `", description: "Alterna entre mostrar fórmulas y resultados" },
      { action: "Evaluar fórmula", shortcut: "Alt + M + V", description: "Evalúa paso a paso una fórmula" },
      { action: "Nombres definidos", shortcut: "Ctrl + F3", description: "Administrador de nombres" }
    ]
  },
  word: {
    general: [
      { action: "Negrita", shortcut: "Ctrl + B", description: "Aplica formato de negrita" },
      { action: "Cursiva", shortcut: "Ctrl + I", description: "Aplica formato de cursiva" },
      { action: "Subrayado", shortcut: "Ctrl + U", description: "Aplica subrayado" },
      { action: "Centrar texto", shortcut: "Ctrl + E", description: "Centra el párrafo" },
      { action: "Justificar texto", shortcut: "Ctrl + J", description: "Justifica el párrafo" },
      { action: "Alinear izquierda", shortcut: "Ctrl + L", description: "Alinea el párrafo a la izquierda" },
      { action: "Alinear derecha", shortcut: "Ctrl + R", description: "Alinea el párrafo a la derecha" },
      { action: "Buscar y reemplazar", shortcut: "Ctrl + H", description: "Abre buscar y reemplazar" }
    ],
    mac: [
      { action: "Negrita", shortcut: "Cmd + B", description: "Aplica formato de negrita en Mac" },
      { action: "Cursiva", shortcut: "Cmd + I", description: "Aplica formato de cursiva en Mac" },
      { action: "Subrayado", shortcut: "Cmd + U", description: "Aplica subrayado en Mac" },
      { action: "Copiar", shortcut: "Cmd + C", description: "Copia la selección en Mac" },
      { action: "Pegar", shortcut: "Cmd + V", description: "Pega el contenido en Mac" },
      { action: "Deshacer", shortcut: "Cmd + Z", description: "Deshace la última acción en Mac" }
    ]
  },
  mac: {
    general: [
      { action: "Copiar", shortcut: "Cmd + C", description: "Copia el elemento seleccionado" },
      { action: "Pegar", shortcut: "Cmd + V", description: "Pega el contenido del portapapeles" },
      { action: "Cortar", shortcut: "Cmd + X", description: "Corta el elemento seleccionado" },
      { action: "Deshacer", shortcut: "Cmd + Z", description: "Deshace la última acción" },
      { action: "Spotlight", shortcut: "Cmd + Space", description: "Abre la búsqueda Spotlight" },
      { action: "Cambiar app", shortcut: "Cmd + Tab", description: "Cambia entre aplicaciones" },
      { action: "Cerrar ventana", shortcut: "Cmd + W", description: "Cierra la ventana actual" },
      { action: "Salir aplicación", shortcut: "Cmd + Q", description: "Cierra completamente la aplicación" },
      { action: "Minimizar", shortcut: "Cmd + M", description: "Minimiza la ventana al Dock" },
      { action: "Ocultar aplicación", shortcut: "Cmd + H", description: "Oculta la aplicación actual" }
    ],
    system: [
      { action: "Captura de pantalla", shortcut: "Cmd + Shift + 3", description: "Captura toda la pantalla" },
      { action: "Captura área", shortcut: "Cmd + Shift + 4", description: "Captura un área seleccionada" },
      { action: "Mission Control", shortcut: "F3", description: "Muestra todas las ventanas y espacios" },
      { action: "Launchpad", shortcut: "F4", description: "Abre el Launchpad" },
      { action: "Preferencias", shortcut: "Cmd + ,", description: "Abre preferencias de la aplicación" }
    ]
  },
  browsers: {
    chrome: [
      { action: "Nueva pestaña", shortcut: "Ctrl + T", description: "Abre una nueva pestaña" },
      { action: "Cerrar pestaña", shortcut: "Ctrl + W", description: "Cierra la pestaña actual" },
      { action: "Reabrir pestaña", shortcut: "Ctrl + Shift + T", description: "Reabre la última pestaña cerrada" },
      { action: "Cambiar pestaña", shortcut: "Ctrl + Tab", description: "Cambia a la siguiente pestaña" },
      { action: "Ventana incógnito", shortcut: "Ctrl + Shift + N", description: "Abre ventana de incógnito" },
      { action: "Herramientas desarrollador", shortcut: "F12", description: "Abre las herramientas de desarrollador" },
      { action: "Actualizar página", shortcut: "F5", description: "Actualiza la página actual" },
      { action: "Actualizar sin caché", shortcut: "Ctrl + F5", description: "Actualiza ignorando la caché" }
    ],
    firefox: [
      { action: "Nueva pestaña", shortcut: "Ctrl + T", description: "Abre una nueva pestaña en Firefox" },
      { action: "Ventana privada", shortcut: "Ctrl + Shift + P", description: "Abre ventana privada en Firefox" },
      { action: "Marcadores", shortcut: "Ctrl + Shift + O", description: "Abre el administrador de marcadores" },
      { action: "Historial", shortcut: "Ctrl + H", description: "Abre el historial de navegación" }
    ],
    edge: [
      { action: "Nueva pestaña", shortcut: "Ctrl + T", description: "Abre una nueva pestaña en Edge" },
      { action: "InPrivate", shortcut: "Ctrl + Shift + N", description: "Abre ventana InPrivate en Edge" },
      { action: "Colecciones", shortcut: "Ctrl + Shift + Y", description: "Abre el panel de colecciones" }
    ]
  },
  photoshop: {
    tools: [
      { action: "Herramienta Mover", shortcut: "V", description: "Selecciona la herramienta de mover" },
      { action: "Herramienta Selección", shortcut: "M", description: "Herramienta de selección rectangular" },
      { action: "Herramienta Lazo", shortcut: "L", description: "Herramienta de selección de lazo" },
      { action: "Herramienta Pincel", shortcut: "B", description: "Herramienta de pincel" },
      { action: "Herramienta Borrador", shortcut: "E", description: "Herramienta borrador" },
      { action: "Herramienta Texto", shortcut: "T", description: "Herramienta de texto" },
      { action: "Herramienta Zoom", shortcut: "Z", description: "Herramienta de zoom" },
      { action: "Herramienta Mano", shortcut: "H", description: "Herramienta mano para desplazar" }
    ],
    layers: [
      { action: "Nueva capa", shortcut: "Ctrl + Shift + N", description: "Crea una nueva capa" },
      { action: "Duplicar capa", shortcut: "Ctrl + J", description: "Duplica la capa seleccionada" },
      { action: "Combinar hacia abajo", shortcut: "Ctrl + E", description: "Combina con la capa inferior" },
      { action: "Aplanar imagen", shortcut: "Ctrl + Shift + E", description: "Combina todas las capas visibles" },
      { action: "Grupo de capas", shortcut: "Ctrl + G", description: "Agrupa las capas seleccionadas" },
      { action: "Desagrupar capas", shortcut: "Ctrl + Shift + G", description: "Desagrupa las capas" }
    ],
    general: [
      { action: "Deshacer", shortcut: "Ctrl + Z", description: "Deshace la última acción" },
      { action: "Paso atrás", shortcut: "Ctrl + Alt + Z", description: "Retrocede varios pasos en el historial" },
      { action: "Transformar libre", shortcut: "Ctrl + T", description: "Activa la transformación libre" },
      { action: "Rellenar", shortcut: "Shift + F5", description: "Abre el cuadro de diálogo de relleno" },
      { action: "Ajuste de color", shortcut: "Ctrl + L", description: "Abre ajustes de niveles" }
    ]
  }
};

// Datos del blog
const blogArticles = [
  {
    slug: "10-atajos-excel-contabilidad",
    title: "10 Atajos de Excel Imprescindibles para Contabilidad",
    excerpt: "Descubre los atajos de Excel más útiles para profesionales de contabilidad que te ahorrarán horas de trabajo.",
    date: "2024-01-15",
    category: "Excel",
    readTime: "5 min"
  },
  {
    slug: "como-hacer-captura-pantalla-atajos",
    title: "Cómo Hacer Capturas de Pantalla con Atajos de Teclado",
    excerpt: "Guía completa para hacer capturas de pantalla rápidas en Windows, Mac y Linux usando atajos de teclado.",
    date: "2024-01-10",
    category: "General",
    readTime: "3 min"
  },
  {
    slug: "atajos-ocultos-photoshop",
    title: "Atajos Ocultos de Photoshop que Todo Diseñador Debe Conocer",
    excerpt: "Explora atajos avanzados de Photoshop que no aparecen en los menús pero que pueden revolucionar tu flujo de trabajo.",
    date: "2024-01-05",
    category: "Photoshop",
    readTime: "7 min"
  }
];

// Configuración SEO por página
const seoData = {
  index: {
    title: "Atajos de Teclado - Guía Completa para Aumentar tu Productividad",
    description: "Aprende los mejores atajos de teclado para Windows, Mac, Excel, Word, Photoshop y navegadores. Guías completas con ejemplos prácticos.",
    keywords: "atajos de teclado, shortcuts, productividad, Windows, Mac, Excel, Word, Photoshop"
  },
  windows: {
    title: "Atajos de Teclado para Windows - Guía Completa 2024",
    description: "Domina los atajos de teclado de Windows 10 y 11. Mejora tu productividad con shortcuts para navegación, gestión de ventanas y más.",
    keywords: "atajos Windows, shortcuts Windows, Windows 10, Windows 11, productividad Windows"
  },
  excel: {
    title: "Atajos de Excel - Shortcuts Básicos y Avanzados para Profesionales",
    description: "Aprende los atajos de Excel más útiles para trabajar más rápido. Desde básicos hasta avanzados, con ejemplos prácticos.",
    keywords: "atajos Excel, shortcuts Excel, Excel básico, Excel avanzado, fórmulas Excel"
  }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { shortcutsData, blogArticles, seoData };
}