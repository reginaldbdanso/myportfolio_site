## ProjectCard

Animated project card showing title, description, technology tags, and links.

### Import

```tsx
import ProjectCard from "src/components/ProjectCard";
```

### Props

- **title**: string — Project title.
- **description**: string — Short description.
- **technologies**: Array<{ name: string; color: string; }> — Labels shown as colored chips.
- **imageUrl?**: string — Optional image URL displayed at the top.
- **githubUrl**: string — Link to source code.
- **liveUrl**: string — Link to live demo.
- **index**: number — Zero-based index used to stagger entrance animation.

### Example

```tsx
<ProjectCard
  title="E-Commerce Platform"
  description="Full-featured e-commerce with real-time inventory"
  technologies={[
    { name: "React", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", color: "bg-green-100 text-green-800" },
  ]}
  imageUrl="https://example.com/hero.jpg"
  githubUrl="https://github.com/acme/shop"
  liveUrl="https://shop.example.com"
  index={0}
/>
```

