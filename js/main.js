// ==========================================================================
// Atajos de Teclado - JavaScript Principal
// ==========================================================================

class KeyboardShortcutsApp {
    constructor() {
        this.initTheme();
        this.initNavigation();
        this.initShortcutSearch();
        this.initAnimations();
        this.initBackToTop();
        this.addGlobalInterlinks();
        this.loadShortcuts();
    }

    // ============ Gestión de Tema (Dark Mode) ============
    initTheme() {
        // Forzar tema claro y desactivar modo oscuro completamente
        document.documentElement.setAttribute('data-theme', 'light');
        // Limpiar cualquier preferencia persistida anterior (si existiera)
        try { localStorage.removeItem('theme'); } catch (e) {}
    }

    setTheme(theme) {
        // Mantener por compatibilidad, pero solo fija el atributo de tema
        document.documentElement.setAttribute('data-theme', theme);
    }


    // ============ Navegación ============
    initNavigation() {
        // Marcar enlace activo basado en la URL actual
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (currentPath.includes(href.replace('.html', '')) || 
                        (currentPath === '/' && href === 'index.html'))) {
                link.classList.add('active');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // ============ Búsqueda de Atajos ============
    initShortcutSearch() {
        const searchInput = document.getElementById('shortcut-search');
        const tableBodies = document.querySelectorAll('.shortcuts-table tbody');
        
        if (!searchInput || !tableBodies.length) return;

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const term = e.target.value.toLowerCase();
            searchTimeout = setTimeout(() => {
                tableBodies.forEach(tb => this.filterShortcuts(term, tb));
            }, 300);
        });
    }

    filterShortcuts(searchTerm, tableBody) {
        const rows = tableBody.querySelectorAll('tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
                row.classList.add('animate-fade-in');
            } else {
                row.style.display = 'none';
                row.classList.remove('animate-fade-in');
            }
        });
    }

    // ============ Animaciones ============
    initAnimations() {
        // Intersection Observer para animaciones al scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observar elementos que deben animarse
        const animatedElements = document.querySelectorAll('.card, .shortcuts-table, .hero-section');
        animatedElements.forEach(el => observer.observe(el));
    }

    // ============ Carga de Atajos ============
    async loadShortcuts() {
        try {
            // Cargar datos de atajos si existe un contenedor para ellos
            const shortcutContainer = document.getElementById('shortcuts-data');
            if (shortcutContainer && window.shortcutsData) {
                this.renderShortcuts(window.shortcutsData);
            }
        } catch (error) {
            console.error('Error cargando atajos:', error);
        }
    }

    renderShortcuts(data) {
        const tableBody = document.querySelector('.shortcuts-table tbody');
        if (!tableBody || !data) return;

        tableBody.innerHTML = '';
        
        data.forEach(shortcut => {
            const row = this.createShortcutRow(shortcut);
            tableBody.appendChild(row);
        });
    }

    createShortcutRow(shortcut) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="font-medium">${shortcut.action}</td>
            <td class="key-combo">${this.formatKeyCombo(shortcut.keys)}</td>
            <td class="text-sm text-gray-600">${shortcut.description}</td>
        `;
        
        return row;
    }

    formatKeyCombo(keys) {
        if (Array.isArray(keys)) {
            return keys.map(key => `<span class="key">${key}</span>`).join(' + ');
        }
        
        // Si es string, separar por + y formatear
        return keys.split(' + ')
            .map(key => `<span class="key">${key.trim()}</span>`)
            .join(' + ');
    }

    // ============ Utilidades ============
    
    // Copiar atajo al clipboard
    copyShortcut(element) {
        const keyCombo = element.querySelector('.key-combo');
        if (keyCombo) {
            const text = keyCombo.textContent.replace(/\s+/g, ' ').trim();
            
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('¡Atajo copiado!');
            }).catch(() => {
                // Fallback para navegadores sin soporte
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showToast('¡Atajo copiado!');
            });
        }
    }

    // Mostrar notificación toast
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `
            fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg
            ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} 
            text-white font-medium animate-fade-in
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    // Botón global "Volver arriba"
    initBackToTop() {
        // Evitar duplicados
        if (document.getElementById('back-to-top')) return;
        const btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.className = 'hidden';
        btn.setAttribute('aria-label', 'Volver arriba');
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(btn);

        const toggle = () => {
            const show = window.scrollY > 300;
            btn.classList.toggle('show', show);
            btn.classList.toggle('hidden', !show);
        };
        window.addEventListener('scroll', toggle, { passive: true });
        toggle();

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Interlinking automático global (ligero)
    addGlobalInterlinks() {
        try {
            if (document.getElementById('global-interlinks')) return;
            const main = document.querySelector('main');
            if (!main) return;

            const path = window.location.pathname.toLowerCase();
            // Detectar si estamos dentro de una carpeta de sección, funciona con rutas locales file:// y http(s)
            const sections = ['windows', 'excel', 'word', 'mac', 'navegadores', 'photoshop', 'blog'];
            const inSubdir = sections.some(s => path.includes(`/${s}/`));
            const prefix = inSubdir ? '../' : '';

            const links = [];
            const add = (href, label) => links.push({ href, label });

            // Enlace a Inicio relativo a raíz
            add(prefix + 'index.html', 'Inicio');

            // Enlaces comunes desde subpáginas
            add(prefix + 'windows/index.html', 'Atajos Windows');
            add(prefix + 'excel/index.html', 'Atajos Excel');
            add(prefix + 'word/index.html', 'Atajos Word');
            add(prefix + 'mac/index.html', 'Atajos Mac');
            add(prefix + 'navegadores/index.html', 'Atajos Navegadores');
            add(prefix + 'photoshop/index.html', 'Atajos Photoshop');

            // Eliminar duplicados por label
            const seen = new Set();
            const dedup = links.filter(l => !seen.has(l.label) && seen.add(l.label));

            const section = document.createElement('section');
            section.id = 'global-interlinks';
            section.className = 'py-12';
            section.innerHTML = `
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="bg-white rounded-2xl shadow-lg p-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Explora también</h2>
                        <div class="flex flex-wrap gap-3">
                            ${dedup.map(l => `<a href="${l.href}" class="btn-secondary">${l.label}</a>`).join('')}
                        </div>
                    </div>
                </div>`;

            const footer = document.querySelector('footer');
            if (footer && footer.parentNode === document.body) {
                document.body.insertBefore(section, footer);
            } else {
                main.appendChild(section);
            }
        } catch (e) {
            console.warn('Interlinking no añadido:', e);
        }
    }

    // Analytics básico (sin tracking externo)
    trackEvent(category, action, label = '') {
        console.log(`Event: ${category} - ${action} - ${label}`);
        // Aquí podrías integrar Google Analytics u otra solución
    }
}

// ============ Utilidades Globales ============

// Formatear teclas especiales
function formatSpecialKeys(text) {
    const keyMap = {
        'cmd': '⌘',
        'ctrl': 'Ctrl',
        'alt': 'Alt',
        'shift': '⇧',
        'enter': '↵',
        'tab': '⇥',
        'esc': 'Esc',
        'space': 'Space',
        'up': '↑',
        'down': '↓',
        'left': '←',
        'right': '→'
    };
    
    let formatted = text.toLowerCase();
    Object.keys(keyMap).forEach(key => {
        formatted = formatted.replace(new RegExp(key, 'gi'), keyMap[key]);
    });
    
    return formatted;
}

// Detectar sistema operativo
function detectOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('mac')) return 'mac';
    if (userAgent.includes('win')) return 'windows';
    if (userAgent.includes('linux')) return 'linux';
    
    return 'unknown';
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar aplicación principal
    window.keyboardApp = new KeyboardShortcutsApp();
    
    // Añadir clase de OS para estilos específicos
    document.body.classList.add(`os-${detectOS()}`);
    
    // Configurar eventos globales
    document.addEventListener('click', (e) => {
        // Copiar atajos al hacer clic
        if (e.target.closest('.shortcuts-table tr')) {
            const row = e.target.closest('tr');
            if (row && !e.target.closest('a')) {
                window.keyboardApp.copyShortcut(row);
            }
        }
    });
    
    console.log('🎹 Atajos de Teclado App iniciada correctamente');
});