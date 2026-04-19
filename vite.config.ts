import { defineConfig } from 'vite'
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tanstackRouter(),
    tanstackStart(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
})

