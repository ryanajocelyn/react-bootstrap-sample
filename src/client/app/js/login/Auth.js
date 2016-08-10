module.exports = {
		login (email, pass, cb) {
			cb = arguments[arguments.length - 1]

			pretendRequest(email, pass, (res) => {
				console.log ('Authenticated?? - ' + res.authenticated);
				if (res.authenticated) {
					localStorage.token = res.token
					if (cb) cb(true)
				} else {
					if (cb) cb(false)
				}
			})
		},
		
		loggedIn() {
			return !!localStorage.token
		}
}

function pretendRequest(email, pass, cb) {
	setTimeout(() => {
		if (email == 'a@a.com' && pass == 'pass') {
			cb({
				authenticated: true,
				token: Math.random().toString(36).substring(7)
			})
		} else {
			cb({ authenticated: false })
		}
	}, 0)
}
