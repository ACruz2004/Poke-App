Day 1: Starting out 
<img width="1470" alt="Screenshot 2024-10-08 at 1 12 10 AM" src="https://github.com/user-attachments/assets/56fe729c-5f56-4cd4-b764-a501a3a3e8a1">

Day 2: Added clickable items and CSS
<img width="1470" alt="Screenshot 2024-10-08 at 8 46 59 PM" src="https://github.com/user-attachments/assets/8635d0fa-00bc-4f2d-a473-877500f50b9d">

Day 3: Starting Parallax, it looks okay right now
<img width="1470" alt="Screenshot 2024-10-10 at 5 22 55 PM" src="https://github.com/user-attachments/assets/8608e212-e594-4308-b26c-f9cd012a9576">

DAY 4 (CRAZYYYY WORRRRKKKKK)
The Parallax and the card hovers are soooooo goooooooooooooood
<img width="1470" alt="Screenshot 2024-10-10 at 8 43 00 PM" src="https://github.com/user-attachments/assets/010744aa-c6a4-4f5b-9be6-e61cd1467aac">

DAY ?: Added view switching between tabs. Better get to work, Anthony!!!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
