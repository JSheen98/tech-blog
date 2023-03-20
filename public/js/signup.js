// Frontend request function for sign up
const signupFormHandler = async (event) => {
    event.preventDefault()

    const username = document.querySelector('#signup-username').value.trim()
    const password = document.querySelector('#signup-password').value.trim()

    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert("Account could not be created")
        }
    }
}

// Event listener for form submit
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler)