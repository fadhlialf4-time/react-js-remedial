import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [react(),
  tailwindcss(),
  ]
>>>>>>> 2ee6cef9bf28ebe98a7db42ec6bd6e75398b16cc
})
