import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://cyber-uni.github.io',
	base: '/project-tracker',
	vite: { plugins: [tailwindcss()] },
	integrations: [
		starlight({
			title: 'project-tracker',
			description: 'Agent skills to file issues and plan epics and initiatives on your project tracker.',
			// The cyber-* family mark. The favicon self-themes; the header logo is a light/dark pair
			// because Starlight switches on data-theme, not on the OS setting.
			favicon: '/img/logo.svg',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				alt: 'project-tracker',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cyber-uni/project-tracker',
				},
			],
			customCss: ['./src/styles/global.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: '' },
						{ label: 'Getting Started', slug: 'getting-started' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/cyber-uni/project-tracker/edit/main/apps/web/',
			},
		}),
	],
})
