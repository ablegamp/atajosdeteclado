/**
 * Blog Manager - Sistema de filtrado por categorías para el blog de atajos de teclado
 * Gestiona la funcionalidad de filtrado y contadores de artículos por categoría
 */

class BlogManager {
    constructor() {
        this.articles = [];
        this.categories = new Map();
        this.currentFilter = 'all';
        this.init();
    }

    async init() {
        await this.loadArticles();
        this.setupCategoryButtons();
        this.updateCategoryCounters();
    }

    async loadArticles() {
        // En lugar de hacer fetch, extraemos la información de los artículos del DOM
        const articleElements = document.querySelectorAll('.articles-grid article');

        articleElements.forEach(articleElement => {
            const categoriesString = articleElement.getAttribute('data-categories');
            if (categoriesString) {
                const categories = categoriesString.split(',').map(cat => cat.trim());

                const titleElement = articleElement.querySelector('h3');
                const descriptionElement = articleElement.querySelector('p');
                const linkElement = articleElement.querySelector('a[href]');
                const readingTimeElement = articleElement.querySelector('.text-gray-500');

                const article = {
                    element: articleElement,
                    categories: categories,
                    title: titleElement ? titleElement.textContent.trim() : 'Título no disponible',
                    description: descriptionElement ? descriptionElement.textContent.trim() : 'Descripción no disponible',
                    url: linkElement ? linkElement.getAttribute('href') : '#',
                    readingTime: readingTimeElement ? readingTimeElement.textContent.trim() : '5 min lectura'
                };

                this.articles.push(article);
                this.categorizeArticle(article);
            }
        });
    }

    categorizeArticle(article) {
        article.categories.forEach(category => {
            if (!this.categories.has(category)) {
                this.categories.set(category, {
                    count: 0,
                    articles: []
                });
            }
            this.categories.get(category).count++;
            this.categories.get(category).articles.push(article);
        });
    }

    setupCategoryButtons() {
        const categoryButtons = document.querySelectorAll('.category-button');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const category = button.getAttribute('data-category');
                this.filterArticles(category);
            });
        });
    }

    filterArticles(category) {
        this.currentFilter = category;

        // Actualizar estado visual de botones
        this.updateCategoryButtons();

        // Filtrar artículos
        let filteredArticles;
        if (category === 'all') {
            filteredArticles = this.articles;
        } else {
            filteredArticles = this.articles.filter(article =>
                article.categories.some(cat =>
                    cat.toLowerCase().includes(category.toLowerCase())
                )
            );
        }

        this.displayArticles(filteredArticles);
    }

    updateCategoryButtons() {
        const categoryButtons = document.querySelectorAll('.category-button');
        categoryButtons.forEach(button => {
            const category = button.getAttribute('data-category');
            const isActive = (category === 'all' && this.currentFilter === 'all') ||
                           (category !== 'all' && this.currentFilter === category);

            button.classList.toggle('active', isActive);
        });
    }

    displayArticles(articles) {
        const articlesContainer = document.querySelector('.articles-grid');
        if (!articlesContainer) return;

        // Ocultar todos los artículos primero
        this.articles.forEach(article => {
            article.element.style.display = 'none';
        });

        if (articles.length === 0) {
            // Si no hay artículos, mostrar mensaje
            let noResultsMsg = articlesContainer.querySelector('.no-results');
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results col-span-full text-center py-12';
                noResultsMsg.innerHTML = `
                    <div class="text-gray-500 text-lg mb-4">
                        <i class="fas fa-search text-4xl mb-4"></i>
                        <p>No se encontraron artículos para esta categoría.</p>
                    </div>
                    <button onclick="blogManager.filterArticles('all')"
                            class="btn-primary">
                        Ver todos los artículos
                    </button>
                `;
                articlesContainer.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
            return;
        }

        // Ocultar mensaje de no resultados si existe
        const noResultsMsg = articlesContainer.querySelector('.no-results');
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }

        // Mostrar artículos filtrados con animación
        articles.forEach((article, index) => {
            article.element.style.display = 'block';
            article.element.style.opacity = '0';
            article.element.style.transform = 'translateY(20px)';

            setTimeout(() => {
                article.element.style.transition = 'all 0.3s ease';
                article.element.style.opacity = '1';
                article.element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    getCategoryConfig(category) {
        const configs = {
            'Excel': {
                bgColor: 'bg-gradient-to-r from-green-400 to-green-600',
                hoverColor: 'text-green-600',
                icon: 'fas fa-table'
            },
            'Windows': {
                bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
                hoverColor: 'text-blue-600',
                icon: 'fab fa-windows'
            },
            'Photoshop': {
                bgColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
                hoverColor: 'text-purple-600',
                icon: 'fas fa-paint-brush'
            },
            'Mac': {
                bgColor: 'bg-gradient-to-r from-gray-400 to-gray-600',
                hoverColor: 'text-gray-600',
                icon: 'fab fa-apple'
            },
            'Navegadores': {
                bgColor: 'bg-gradient-to-r from-orange-400 to-orange-600',
                hoverColor: 'text-orange-600',
                icon: 'fas fa-globe'
            },
            'Productividad': {
                bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
                hoverColor: 'text-indigo-600',
                icon: 'fas fa-rocket'
            },
            'Capturas': {
                bgColor: 'bg-gradient-to-r from-red-400 to-red-600',
                hoverColor: 'text-red-600',
                icon: 'fas fa-camera'
            },
            'Tips': {
                bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-600',
                hoverColor: 'text-orange-600',
                icon: 'fas fa-lightbulb'
            },
            'Contabilidad': {
                bgColor: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
                hoverColor: 'text-emerald-600',
                icon: 'fas fa-calculator'
            }
        };

        // Buscar configuración por coincidencia parcial
        for (const [key, config] of Object.entries(configs)) {
            if (category.toLowerCase().includes(key.toLowerCase())) {
                return config;
            }
        }

        // Configuración por defecto
        return {
            bgColor: 'bg-gradient-to-r from-gray-400 to-gray-600',
            hoverColor: 'text-gray-600',
            icon: 'fas fa-file-alt'
        };
    }

    updateCategoryCounters() {
        // Actualizar contadores en los botones de categorías
        this.categories.forEach((data, category) => {
            const button = document.querySelector(`[data-category="${category}"] .category-count`);
            if (button) {
                button.textContent = `${data.count} artículos`;
            }
        });

        // Actualizar botón "Ver todos"
        const allButton = document.querySelector('[data-category="all"] .category-count');
        if (allButton) {
            allButton.textContent = `${this.articles.length} artículos`;
        }
    }

    getArticlesByCategory(category) {
        return this.articles.filter(article =>
            article.categories.some(cat =>
                cat.toLowerCase().includes(category.toLowerCase())
            )
        );
    }
}

// Inicializar el Blog Manager cuando se carga la página
let blogManager;
document.addEventListener('DOMContentLoaded', () => {
    blogManager = new BlogManager();
});
