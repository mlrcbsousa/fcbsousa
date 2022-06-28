---
layout: home
head:
  - - script
    - src: https://identity.netlify.com/v1/netlify-identity-widget.js
hero:
  name: Miscellanea
  text: Musings from a voracious reader's mind
  tagline: Eschew obfuscation
  actions:
    - theme: brand
      text: About
      link: /about
    - theme: alt
      text: View on LinkedIn
      link: https://www.linkedin.com/in/francisco-b-sousa-5204a712b/
features:
  - icon: ⚡️
    title: Epic feature 1 title
    details: Epic feature 1 details
  - icon: 🖖
    title: Epic feature 2 title
    details: Epic feature 2 details
  - icon: 🛠️
    title: Epic feature 3 title
    details: Epic feature 3 details
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	if (window.netlifyIdentity) {
		window.netlifyIdentity.on("init", user => {
			if (!user) {
				window.netlifyIdentity.on("login", () => {
					document.location.href = "/admin/";
				});
			}
		});
	}
})
</script>
