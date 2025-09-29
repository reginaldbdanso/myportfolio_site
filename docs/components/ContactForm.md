## ContactForm

Animated contact form with basic client-side validation and submit handler.

### Import

```tsx
import ContactForm from "src/components/ContactForm";
```

### Props

- None

### Validation Rules

- Name: required, non-empty
- Email: required, must match simple email pattern
- Project Type: required selection
- Description: required, non-empty

### Usage Notes

- On submit, logs form data to the console by default. Replace with your own submit logic.

### Example

```tsx
<ContactForm />
```

