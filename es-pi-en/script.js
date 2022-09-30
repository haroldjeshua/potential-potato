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

let notification
let interval

document.addEventListener('visibilitychange', () => {
	if (document.visibilityState === 'hidden') {
		const leaveDate = new Date()
		interval = setInterval(() => {
			notification = new Notification("Don't leave me hanging, bro", {
				body: `youve been out for ${Math.round(new Date() - leaveDate)} seconds`,
				tag: 'Come back, bro',
			})
		})
	} else {
		if (interval) clearInterval(interval)
		if (notification) notification.close()
	}
})
