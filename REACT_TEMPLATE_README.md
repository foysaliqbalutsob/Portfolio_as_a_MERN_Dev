# React Portfolio Template

This is a modern React portfolio template built with:
- ⚛️ **React 19** - Latest React with modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ⚡ **Vite** - Fast build tool and dev server
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in theme switching

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Hero section
│   ├── Navbar.jsx      # Navigation bar
│   ├── About.jsx       # About section
│   └── ...
├── templates/          # Component templates
│   └── ComponentTemplate.jsx
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Component Best Practices

### 1. Component Structure
```jsx
import React from 'react';

const ComponentName = () => {
  // 1. State management at the top
  // const [state, setState] = useState(initialValue);

  // 2. Event handlers
  // const handleEvent = () => { ... };

  // 3. Effects
  // useEffect(() => { ... }, []);

  return (
    // 4. JSX with semantic HTML
    <section className="component-name">
      {/* Component content */}
    </section>
  );
};

export default ComponentName;
```

### 2. Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Files**: PascalCase matching component name
- **CSS Classes**: kebab-case (e.g., `user-profile`)
- **Functions**: camelCase (e.g., `handleClick`)

### 3. Props & State
- Use props for parent-to-child communication
- Use state for component-internal data
- Consider `useReducer` for complex state logic

### 4. Styling with Tailwind
- Use utility classes for rapid development
- Create custom classes for repeated patterns
- Leverage Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Adding New Components

1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to JSX structure
4. Style with Tailwind classes

## Customization

- **Colors**: Modify `tailwind.config.js`
- **Fonts**: Update `src/index.css` imports
- **Layout**: Adjust component spacing and sizing
- **Animations**: Add Tailwind animation classes

## Performance Tips

- Use `React.memo()` for expensive components
- Implement lazy loading for large components
- Optimize images and assets
- Use `useCallback` and `useMemo` appropriately

Happy coding! 🚀