import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://kwinkich.github.io/HolidayCountdownUpdateVersion',
	plugins: [react()],
});
