# 🌙 Dark Mode Implementation

This document explains the dark mode feature implementation for your Jekyll academic website.

## ✨ Features

### 🎨 **Complete Theme System**
- **CSS Custom Properties**: Uses CSS variables for easy theme management
- **Smooth Transitions**: 0.3s transitions between light and dark themes
- **System Preference Detection**: Automatically detects and follows system dark mode preference
- **Persistent Storage**: Remembers user's theme choice across sessions

### 🖱️ **User Interaction**
- **Toggle Button**: Fixed position button in top-right corner (🌙/☀️)
- **Keyboard Shortcut**: `Ctrl+Shift+D` (or `Cmd+Shift+D` on Mac)
- **Mobile Responsive**: Touch-friendly toggle button for mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 🎯 **Comprehensive Coverage**
- Navigation bar and header
- Floating navigation menu
- All text and typography
- Social media buttons
- Publication sections
- Code blocks and pre elements
- Form elements
- Scrollbars
- Bootstrap components

## 📁 Files Added/Modified

### **New Files:**
- `stylesheets/dark-mode.css` - Main dark mode styles and CSS variables
- `js/dark-mode.js` - JavaScript functionality for theme switching
- `dark-mode-demo.html` - Demo page showcasing the feature
- `DARK_MODE_README.md` - This documentation

### **Modified Files:**
- `_includes/head.html` - Added dark mode CSS link
- `_includes/footer.html` - Added dark mode JavaScript
- `stylesheets/nak.css` - Updated to use CSS custom properties
- `index.html` - Added keyboard shortcut tip to floating nav

## 🎨 CSS Architecture

### **CSS Custom Properties (Variables)**
```css
:root {
  /* Light Mode Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f6f6f6;
  --text-primary: #333333;
  --accent-color: #337ab7;
  /* ... more variables */
}

[data-theme="dark"] {
  /* Dark Mode Colors */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #e0e0e0;
  --accent-color: #4a9eff;
  /* ... more variables */
}
```

### **Theme Application**
- Uses `data-theme` attribute on `<html>` element
- All styles automatically switch based on this attribute
- Fallback values provided for older browsers

## ⚙️ JavaScript Functionality

### **DarkModeToggle Class**
```javascript
class DarkModeToggle {
  constructor() {
    this.init();
  }
  
  init() {
    this.createToggleButton();
    this.initializeTheme();
    this.bindEvents();
    this.watchSystemTheme();
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
}
```

### **Key Features:**
- **Theme Persistence**: Uses `localStorage` to remember preference
- **System Detection**: Watches `prefers-color-scheme` media query
- **Smooth Animation**: Button animation feedback on toggle
- **Mobile Optimization**: Touch-friendly interactions

## 🎮 How to Use

### **For Users:**
1. **Click the toggle button** (🌙/☀️) in the top-right corner
2. **Use keyboard shortcut** `Ctrl+Shift+D` (or `Cmd+Shift+D` on Mac)
3. **System preference** is automatically detected on first visit
4. **Theme persists** across browser sessions

### **For Developers:**

#### **Programmatic Control:**
```javascript
// Get current theme
const currentTheme = window.darkModeToggle.getCurrentTheme();

// Set theme programmatically
window.darkModeToggle.setTheme('dark');

// Check if dark mode is active
const isDark = window.darkModeToggle.isDarkMode();
```

#### **Adding New Dark Mode Styles:**
```css
/* Use CSS custom properties */
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

/* Dark mode specific styles */
[data-theme="dark"] .my-component {
  /* Override specific properties if needed */
}
```

## 🔧 Customization

### **Color Scheme:**
Edit CSS variables in `stylesheets/dark-mode.css`:

```css
:root {
  --bg-primary: #ffffff;      /* Light background */
  --text-primary: #333333;    /* Light text */
  --accent-color: #337ab7;    /* Light accent */
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;      /* Dark background */
  --text-primary: #e0e0e0;    /* Dark text */
  --accent-color: #4a9eff;    /* Dark accent */
}
```

### **Toggle Button Position:**
```css
.theme-toggle {
  position: fixed;
  top: 20px;        /* Distance from top */
  right: 20px;      /* Distance from right */
  z-index: 1000;    /* Layer order */
}
```

### **Transition Speed:**
```css
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

## 📱 Mobile Optimization

### **Responsive Design:**
- Smaller toggle button on mobile devices
- Touch-friendly button size (45px on mobile)
- Proper viewport handling
- Optimized for both portrait and landscape

### **Mobile-Specific Styles:**
```css
@media (max-width: 768px) {
  .theme-toggle {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
}
```

## ♿ Accessibility Features

### **ARIA Support:**
- Proper `title` attributes for screen readers
- Semantic button elements
- Keyboard navigation support
- High contrast ratios in both themes

### **Keyboard Navigation:**
- `Tab` key navigation to toggle button
- `Enter` or `Space` to activate toggle
- Custom keyboard shortcut `Ctrl+Shift+D`

## 🖨️ Print Optimization

### **Print Styles:**
```css
@media print {
  [data-theme="dark"] {
    /* Force light mode for printing */
    --bg-primary: #ffffff;
    --text-primary: #333333;
  }
  
  .theme-toggle {
    display: none !important;
  }
}
```

## 🧪 Testing

### **Manual Testing:**
1. Visit the site and test toggle functionality
2. Check theme persistence across page reloads
3. Test keyboard shortcuts
4. Verify mobile responsiveness
5. Test system preference detection

### **Browser Compatibility:**
- ✅ Chrome 49+
- ✅ Firefox 31+
- ✅ Safari 9.1+
- ✅ Edge 16+
- ✅ iOS Safari 9.3+
- ✅ Android Chrome 49+

### **Demo Page:**
Visit `/dark-mode-demo.html` to see all features in action.

## 🚀 Performance

### **Optimizations:**
- **Minimal CSS**: Only essential styles, no bloat
- **Efficient JavaScript**: Event delegation and minimal DOM manipulation
- **CSS Variables**: Native browser support, no polyfills needed
- **Lazy Loading**: Scripts load after DOM is ready

### **Bundle Size:**
- CSS: ~8KB (dark-mode.css)
- JavaScript: ~3KB (dark-mode.js)
- Total overhead: ~11KB

## 🔮 Future Enhancements

### **Potential Additions:**
- **Multiple Themes**: Additional color schemes (blue, green, etc.)
- **Theme Scheduling**: Automatic theme switching based on time
- **User Preferences**: More granular theme customization
- **Animation Options**: Configurable transition speeds
- **Theme Sync**: Sync across devices using user accounts

## 🐛 Troubleshooting

### **Common Issues:**

1. **Toggle button not visible:**
   - Check if `dark-mode.css` is loaded
   - Verify JavaScript is executing
   - Check for CSS conflicts

2. **Theme not persisting:**
   - Check browser's localStorage support
   - Verify no privacy mode blocking storage
   - Check for JavaScript errors

3. **Styles not applying:**
   - Verify CSS custom properties support
   - Check for CSS syntax errors
   - Ensure proper CSS specificity

### **Debug Steps:**
1. Open browser developer tools
2. Check console for JavaScript errors
3. Inspect `<html>` element for `data-theme` attribute
4. Verify CSS custom properties are defined
5. Test in different browsers

## 📊 Analytics Integration

### **Theme Usage Tracking:**
```javascript
// Track theme usage (example)
function trackThemeUsage(theme) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'theme_change', {
      'theme': theme,
      'page_title': document.title
    });
  }
}
```

## 🎉 Conclusion

The dark mode implementation provides a modern, accessible, and user-friendly theme switching experience. It enhances user experience while maintaining excellent performance and compatibility across all devices and browsers.

**Key Benefits:**
- ✅ Improved accessibility and user preference support
- ✅ Modern web development practices (CSS custom properties)
- ✅ Excellent performance and minimal overhead
- ✅ Comprehensive coverage of all site elements
- ✅ Mobile-optimized and touch-friendly
- ✅ Future-proof and easily customizable

---

**Note**: This implementation follows modern web standards and best practices for theme switching, ensuring compatibility and maintainability for years to come.

