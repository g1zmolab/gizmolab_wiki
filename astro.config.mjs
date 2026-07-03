// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	devToolbar: { enabled: false },
	integrations: [
		starlight({
			title: 'gizmo_lab wiki',
			favicon: '/A_logo_orange.png',
			logo: {
				dark: './src/assets/gizmolab-logo-small.png',
				light: './src/assets/gizmolab-logo-light.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/g1zmolab/' }
			],
			sidebar: [
				{
					label: 'Workshops',
					items: [
						{ label: 'Workshops', link: '/workshops/' },
						{
							label: 'Opsec Workshop',
							collapsed: true,
							items: [{ autogenerate: { directory: 'workshops/opsec' } }],
						},
						{
							label: 'Privacy Tools Workshop',
							collapsed: true,
							items: [{ autogenerate: { directory: 'workshops/privacy-tools' } }],
						},
						{
							label: 'TailsOS Workshop',
							collapsed: true,
							items: [{ autogenerate: { directory: 'workshops/tails-os' } }],
						},
						{
							label: 'Android Debloat Workshop',
							collapsed: true,
							items: [{ autogenerate: { directory: 'workshops/android-debloat' } }],
						},
						{
							label: 'Ad Blocking Workshop',
							collapsed: true,
							items: [{ autogenerate: { directory: 'workshops/ad-blocking' } }],
						},
						{
							label: 'Linux Mint Workshop',
							collapsed: true,
							items: [{ autogenerate: { directory: 'workshops/linux-mint' } }],
						},
					],
				},
				{
					label: 'Guides & Resources',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Εξοπλισμός Εργαστηρίου',
					items: [{ autogenerate: { directory: 'equipment' } }],
				},
				{
					label: 'Community Projects',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
			],
		}),
	],
});
