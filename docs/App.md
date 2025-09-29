## App

Root application component that sets up routing, dark mode state, and global layout.

### Import

```tsx
import App from "src/App";
```

### Behavior

- Manages `isDarkMode` state and applies `dark` class to `document.documentElement`.
- Configures routes for `/`, `/backend`, and `/fullstack`.
- Renders `Navigation`, page routes, `ContactForm`, and `Footer`.

### Example

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

