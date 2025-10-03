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
    // Create theme toggle button
    this.createToggleButton();
    
    // Initialize theme
    this.initializeTheme();
    
    // Bind events
    this.bindEvents();
    
    // Listen for system theme changes
    this.watchSystemTheme();
  }

  createToggleButton() {
    // Create the toggle button element
    const toggleButton = document.createElement('div');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('title', 'Toggle Dark Mode');
    toggleButton.innerHTML = '<i class="fa fa-moon-o"></i>';
    
    // Add to page
    document.body.appendChild(toggleButton);
    this.themeToggle = toggleButton;
  }

  initializeTheme() {
    // Check for saved theme preference or default to system preference
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
    // Update data attribute on html element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update toggle button icon
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('i');
      if (theme === 'dark') {
        icon.className = 'fa fa-sun-o';
        this.themeToggle.setAttribute('title', 'Switch to Light Mode');
      } else {
        icon.className = 'fa fa-moon-o';
        this.themeToggle.setAttribute('title', 'Switch to Dark Mode');
      }
    }
    
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(theme);
    
    // Save preference
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
    
    // Set theme color based on current theme
    metaThemeColor.content = theme === 'dark' ? '#1a1a1a' : '#ffffff';
  }

  bindEvents() {
    // Toggle button click event
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
    
    // Keyboard shortcut (Ctrl/Cmd + Shift + D)
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
    
    // Add a subtle animation feedback
    if (this.themeToggle) {
      this.themeToggle.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.themeToggle.style.transform = 'scale(1)';
      }, 150);
    }
  }

  watchSystemTheme() {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addListener((e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        this.applyTheme(newTheme);
      }
    });
  }

  // Public method to get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Public method to set theme programmatically
  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.applyTheme(theme);
    }
  }

  // Public method to check if dark mode is active
  isDarkMode() {
    return this.currentTheme === 'dark';
  }
}

// Initialize dark mode when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.darkModeToggle = new DarkModeToggle();
});

// Also initialize immediately if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.darkModeToggle = new DarkModeToggle();
  });
} else {
  window.darkModeToggle = new DarkModeToggle();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DarkModeToggle;
}

