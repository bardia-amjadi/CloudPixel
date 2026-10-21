import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (cloudpix.ir) is served from the root, so base stays "/".
export default defineConfig({ base: '/', plugins: [react()] })
