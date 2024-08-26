import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import vue from "@astrojs/vue"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Titania",
			logo: {
				src: "/src/assets/titania_logo.png",
			},
			favicon: "/titania_logo.png",
			social: {
				github: "https://github.com/Mohamed-Kaizen/titania-ui",
				discord: "https://discord.gg/YuY5rMH23X",
			},
			editLink: {
				baseUrl: "https://github.com/Mohamed-Kaizen/titania-ui/tree/main",
			},
			sidebar: [
				{
					collapsed: true,

					label: "Guides",
					autogenerate: { directory: "guides" },
				},
				{
					collapsed: true,

					label: "Components",
					autogenerate: { directory: "components" },
				},
			],
			customCss: ["./src/assets/landing.css"],
			lastUpdated: true,
		}),
		svelte(),
		vue(),
		sitemap(),
	],
	image: {
		service: {
			entrypoint: "astro/assets/services/sharp",
		},
	},
})
