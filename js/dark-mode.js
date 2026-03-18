/**
 * Dark Mode Toggle Functionality
 * Handles theme switching, persistence, and system preference detection
 */

class DarkModeToggle {
  constructor() {
    this.themeToggle = null;
    this.currentTheme = 'light';
    this.init();
  }

  init() {
    this.createToggleButton();
    this.initializeTheme();
    this.bindEvents();
    this.watchSystemTheme();
  }

  createToggleButton() {
    const toggleButton = document.createElement('div');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('title', 'Toggle Dark Mode');
    toggleButton.innerHTML = '<i class="fa-regular fa-moon"></i>';
    document.body.appendChild(toggleButton);
    this.themeToggle = toggleButton;
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      this.currentTheme = systemPrefersDark ? 'dark' : 'light';
    }

    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('i');
      if (theme === 'dark') {
        icon.className = 'fa-regular fa-sun';
        this.themeToggle.setAttribute('title', 'Switch to Light Mode');
      } else {
        icon.className = 'fa-regular fa-moon';
        this.themeToggle.setAttribute('title', 'Switch to Dark Mode');
      }
    }

    this.updateMetaThemeColor(theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

  updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }

    metaThemeColor.content = theme === 'dark' ? '#1a1a1a' : '#ffffff';
  }

  bindEvents() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);

    if (this.themeToggle) {
      this.themeToggle.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.themeToggle.style.transform = 'scale(1)';
      }, 150);
    }
  }

  watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        this.applyTheme(newTheme);
      }
    });
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.applyTheme(theme);
    }
  }

  isDarkMode() {
    return this.currentTheme === 'dark';
  }
}

// Initialize dark mode when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.darkModeToggle = new DarkModeToggle();
  });
} else {
  window.darkModeToggle = new DarkModeToggle();
}
