/**
 * JavaScript principal para funcionalidades del sitio
 */

// Dark mode functionality
class ThemeManager {
  constructor() {
    this.init();
  }

  init() {
    // Cargar tema guardado o detectar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (prefersDark) {
      this.setTheme('dark');
    }

    // Event listeners
    this.setupEventListeners();
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Actualizar toggle si existe
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.checked = theme === 'dark';
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setupEventListeners() {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.addEventListener('change', () => this.toggleTheme());
    }
  }
}

// Utility functions para renderizar shortcuts
class ShortcutRenderer {
  static renderTable(shortcuts, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !shortcuts) return;

    const table = document.createElement('table');
    table.className = 'shortcut-table w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden';
    
    // Header
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr class="bg-gray-50 dark:bg-gray-700">
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Acción</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Atajo</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Descripción</th>
      </tr>
    `;
    table.appendChild(thead);

    // Body
    const tbody = document.createElement('tbody');
    tbody.className = 'divide-y divide-gray-200 dark:divide-gray-600';
    
    shortcuts.forEach((shortcut, index) => {
      const row = document.createElement('tr');
      row.className = index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700';
      
      row.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
          ${shortcut.action}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
          <code class="kbd">${shortcut.shortcut}</code>
        </td>
        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
          ${shortcut.description}
        </td>
      `;
      
      tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
  }

  static renderCards(categories, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !categories) return;

    categories.forEach(category => {
      const card = document.createElement('div');
      card.className = 'card-hover bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700';
      
      card.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          ${category.title}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          ${category.description}
        </p>
        <a href="${category.link}" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
          Ver atajos
          <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      `;
      
      container.appendChild(card);
    });
  }
}

// Search functionality
class SearchManager {
  constructor() {
    this.setupSearch();
  }

  setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });
  }

  performSearch(query) {
    if (query.length < 2) return;

    // Aquí se podría implementar búsqueda en tiempo real
    // Por ahora, simple filtrado de tablas visibles
    const tables = document.querySelectorAll('.shortcut-table tbody tr');
    
    tables.forEach(row => {
      const text = row.textContent.toLowerCase();
      const matches = text.includes(query.toLowerCase());
      row.style.display = matches ? '' : 'none';
    });
  }
}

// Analytics y tracking (opcional)
class Analytics {
  static trackPageView(page) {
    // Implementar tracking si es necesario
    console.log(`Page view: ${page}`);
  }

  static trackShortcutClick(shortcut) {
    // Tracking de clicks en atajos
    console.log(`Shortcut clicked: ${shortcut}`);
  }
}

// Mobile menu management
class MobileMenu {
  constructor() {
    this.isOpen = false;
    this.init();
  }

  init() {
    const toggleButton = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('mobileMenu');
    
    if (toggleButton && menu) {
      toggleButton.addEventListener('click', () => this.toggle());
      
      // Cerrar menú al hacer click fuera
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
          this.close();
        }
      });
    }
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.remove('hidden');
      this.isOpen = true;
    }
  }

  close() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.add('hidden');
      this.isOpen = false;
    }
  }
}

// Lazy loading para imágenes
class LazyLoader {
  static init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('skeleton');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new SearchManager();
  new MobileMenu();
  LazyLoader.init();
  
  // Track page view
  Analytics.trackPageView(window.location.pathname);
});

// Export for use in other files
window.ShortcutRenderer = ShortcutRenderer;
window.Analytics = Analytics;