const button = document.querySelector("button")

button.addEventListener("click", () => {
	Notification.requestPermission().then(perm => {
		if (perm === 'granted') {
			const notif = new Notification('Example Notif', {
				body: `This is a body text ${Math.random()}`,
				data: { hello: "world"},
				icon: "harv-logo.png",
				// tag: 'Welcome Message'
			})

			notif.addEventListener('click', e => {
				console.log(e)
			})
		}
	})
})
