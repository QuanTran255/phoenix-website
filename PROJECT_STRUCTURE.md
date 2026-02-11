# DolphyAI Website - Project Structure

## Overview
DolphyAI is a professional landing page for a real-time safety intelligence platform. The codebase has been refactored into a modular, maintainable structure with separated concerns.

## Directory Structure

```
phonex-website/
├── index.html              # Main HTML file with page structure
├── styles/
│   ├── global.css         # Global styles, variables, and resets
│   ├── components.css     # Reusable component styles (buttons, cards, forms)
│   └── layout.css         # Layout and structural styles (nav, hero, sections)
├── js/
│   └── main.js            # JavaScript functionality (navigation, carousel, forms)
├── CNAME                  # GitHub Pages custom domain
└── README.md              # This file
```

## File Descriptions

### HTML Structure (`index.html`)

The main HTML file is organized into clear sections:

- **Navigation**: Fixed navigation bar that appears on mouse movement
- **Home Page**: Hero section with video carousel and feature highlights
- **Products Page**: Detailed product offerings and capabilities
- **Use Cases Page**: Industry-specific applications (Commercial, Industrial, Residential, etc.)
- **Development Updates**: Team updates and YouTube video placeholder
- **Contact Page**: Contact form for inquiries
- **Footer**: Company information and links

**Key Features:**
- Clean semantic HTML with comments dividing major sections
- Links to external CSS files for styling
- Single JavaScript file for all functionality
- Responsive design for mobile and desktop

### CSS Files

#### `styles/global.css`
Contains foundational styles and design system variables:
- **CSS Custom Properties**: Color palette, spacing scale, typography, transitions
- **Reset Styles**: Global box-sizing and base element styles
- **Typography**: Base font sizes and line heights
- **Utility Classes**: Reusable helper classes like `.section-description`
- **Animations**: Fade-in effects for smooth transitions

**Key Variables:**
```css
--color-primary: #FF6B35           /* Orange accent color */
--color-dark: #0f172a              /* Dark background */
--color-text: #1a1a1a              /* Main text color */
--spacing-md: 1rem                 /* Base spacing unit */
--border-radius-full: 50px         /* Rounded button radius */
```

#### `styles/components.css`
Styles for reusable UI components:
- **Buttons** (`.cta-button`, `.submit-btn`): Call-to-action buttons with hover effects
- **Cards** (`.product-card`, `.usecase-card`): Content cards with shadow and hover animations
- **Forms** (`.contact-form`, `.form-group`): Contact form styling and focus states
- **Carousel Controls**: Buttons and indicators for video carousel

**Benefits:**
- Components are self-contained and easy to extend
- Hover states and transitions provide visual feedback
- Form elements have clear focus states for accessibility

#### `styles/layout.css`
Structural and layout styles:
- **Navigation Bar**: Fixed positioning with blur backdrop
- **Hero Section**: Large banner with grid layout for text and video
- **Sections**: Container widths and backgrounds
- **Grids**: Responsive grid layouts for products and use cases
- **Development Update Container**: Split layout for text and video
- **Page Visibility**: Show/hide animation for page transitions

**Responsive Design:**
All layouts adjust for tablets and mobile devices with media queries.

### JavaScript (`js/main.js`)

Organized JavaScript with clear function documentation:

**Navigation Functions:**
- `navigateTo(pageId)`: Switch between pages with smooth transitions
- Page management: Show/hide pages without page reloads

**Carousel Functions:**
- `carouselNext()`: Display next video slide
- `carouselPrev()`: Display previous video slide
- `showSlide(n)`: Internal function to render specific slide

**Navigation Bar Behavior:**
- Auto-hide after 3 seconds of mouse inactivity
- Auto-show on mouse movement
- Smooth opacity transitions

**Form Handling:**
- `handleFormSubmit(event)`: Process contact form submissions
- Show confirmation to user
- Reset form after submission

## Design System

### Color Palette
- **Primary**: `#FF6B35` (Orange) - Used for accents and CTAs
- **Primary Light**: `#F7931E` (Gold) - For gradients
- **Dark Background**: `#0f172a` - Hero section
- **Text**: `#1a1a1a` - Main content
- **Light Background**: `#f8f9fa` - Alternate sections

### Spacing Scale
- `--spacing-xs`: 0.5rem (small gaps)
- `--spacing-sm`: 0.75rem (form inputs)
- `--spacing-md`: 1rem (standard spacing)
- `--spacing-lg`: 1.5rem (section padding)
- `--spacing-xl`: 2rem (large gaps)
- `--spacing-2xl`: 2.5rem (component padding)
- `--spacing-3xl`: 3rem (hero gaps)

### Typography
- **Font Family**: System fonts (Apple/Android optimized)
- **Headings**: Bold weight (700) with 1.2 line height
- **Body Text**: 1rem font size with 1.6-1.7 line height
- **Font Sizes**: Scaled from 0.9rem to 3.5rem

### Responsive Breakpoints
- **Desktop**: 1400px max-width for content
- **Tablet/Mobile**: 768px and below - adjusted layouts and font sizes

## How to Customize

### Adding a New Page
1. Add a new `<div class="page" id="newpage">` in HTML
2. Add navigation link in the navbar
3. Create styles in appropriate CSS file
4. Use existing functions or create new ones in `main.js`

### Updating Colors
1. Modify CSS custom properties in `styles/global.css`
2. All components using `var(--color-primary)` will update automatically

### Adding New Components
1. Create component styles in `styles/components.css`
2. Use consistent naming: `.component-name`
3. Include hover/focus states for interactivity
4. Reference color and spacing variables

### Improving Accessibility
- Form inputs have clear focus states with border-color change
- Navigation links use pointer cursor
- Video carousel has keyboard-accessible buttons
- Alt text and semantic HTML used throughout

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS Custom Properties support required
- ES6 JavaScript (arrow functions, const/let)

## Performance Considerations

- **CSS**: Split into 3 files for better caching and parallel loading
- **JavaScript**: Single 4KB file loaded once
- **Images**: Placeholder divs reduce initial load
- **Animations**: GPU-accelerated transforms and opacity changes
- **Mobile**: Responsive breakpoints prevent unnecessary loading

## Future Enhancements

- Add actual video content
- Implement backend form submission
- Add email validation and spam protection
- Create dedicated mobile menu for small screens
- Add lazy loading for images
- Implement analytics tracking
- Add dark mode toggle
- Create team member profiles page
