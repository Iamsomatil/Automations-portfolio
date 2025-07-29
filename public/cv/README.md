# Adding Your CV

To add your CV to the website:

1. Place your CV file (PDF format recommended) in this directory.
2. Rename it to `Samson-Akinsanya-CV.pdf` to match the expected filename in the code.
3. If you use a different filename, make sure to update the `cvUrl` constant in `src/components/CVButton.tsx`.

Example:
```
// In CVButton.tsx
const cvUrl = '/cv/Your-Filename-Here.pdf';
```

The CV will be accessible at `/cv/Samson-Akinsanya-CV.pdf` once the file is added.
