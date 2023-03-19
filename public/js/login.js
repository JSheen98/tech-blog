const loginFormHandler = async (event) => {
    event.preventDefault()

    // Query selectors for html elements
    const username = document.querySelector('#login-username').value.trim()
    const password = document.querySelector('#login-password').value.trim()

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert("Username or password is incorrect")
        }
    }
}

// Finds login-form class in html, and adds event listener to submit button with the above function
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler)