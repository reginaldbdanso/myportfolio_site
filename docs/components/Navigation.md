## Navigation

Responsive top navigation bar with dark mode toggle and mobile drawer.

### Import

```tsx
import Navigation from "src/components/Navigation";
```

### Props

- **isDarkMode**: boolean — Whether dark mode is currently enabled.
- **toggleDarkMode**: () => void — Callback to toggle dark mode.

### Behavior

- Shows desktop links on medium+ screens; collapses into a slide-in drawer on mobile.
- Dark mode button switches icon between sun and moon and toggles theme classes on the root element (handled by `App`).

### Example

```tsx
function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Navigation
      isDarkMode={isDarkMode}
      toggleDarkMode={() => setIsDarkMode(v => !v)}
    />
  );
}
```

