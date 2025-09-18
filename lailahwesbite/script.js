;(function () {
	const yearEl = document.getElementById('year')
	if (yearEl) {
		yearEl.textContent = String(new Date().getFullYear())
	}

	const container = document.querySelector('.bubbles')
	if (!container) return

	const bubbleCount = Math.min(40, Math.max(20, Math.floor(window.innerWidth / 25)))

	function random(min, max) {
		return Math.random() * (max - min) + min
	}

	function createBubble() {
		const bubble = document.createElement('span')
		bubble.className = 'bubble'

		const size = random(8, 60)
		bubble.style.setProperty('--size', size + 'px')
		bubble.style.left = random(-10, 100) + 'vw'
		bubble.style.setProperty('--sway', random(-30, 50) + 'px')
		bubble.style.setProperty('--duration', random(9, 18) + 's')
		bubble.style.setProperty('--sway-duration', random(3, 7) + 's')
		bubble.style.setProperty('--opacity', random(0.4, 0.95))

		container.appendChild(bubble)

		bubble.addEventListener('animationiteration', () => {
			bubble.style.left = random(-10, 100) + 'vw'
			bubble.style.setProperty('--duration', random(9, 18) + 's')
			bubble.style.setProperty('--sway-duration', random(3, 7) + 's')
			bubble.style.setProperty('--size', random(8, 60) + 'px')
		})
	}

	for (let i = 0; i < bubbleCount; i++) {
		createBubble()
	}

	// Contact form handler (mailto draft)
	const form = document.getElementById('contact-form')
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			const data = new FormData(form)
			const name = (data.get('name') || '').toString().trim()
			const email = (data.get('email') || '').toString().trim()
			const subject = (data.get('subject') || 'New message').toString().trim()
			const message = (data.get('message') || '').toString().trim()

			const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
			const mailto = `mailto:lailahkhalida@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
			window.location.href = mailto
			const note = document.getElementById('contact-note')
			if (note) note.textContent = 'Opening your email app with a pre-filled draft...'
		})
	}

	let resizeTimeout
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout)
		resizeTimeout = setTimeout(() => {
			const desired = Math.min(40, Math.max(20, Math.floor(window.innerWidth / 25)))
			const current = container.querySelectorAll('.bubble').length
			if (desired > current) {
				for (let i = 0; i < desired - current; i++) createBubble()
			} else if (desired < current) {
				for (let i = 0; i < current - desired; i++) {
					const last = container.querySelector('.bubble:last-child')
					if (last) last.remove()
				}
			}
		}, 150)
	})
})()


