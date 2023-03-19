const signupFormHandler = async (event) => {
    event.preventDefault()

    const username = document.querySelector('#signup-username').value.trim()
    const password = document.querySelector('#signup-password').value.trim()

    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

// if (document.querySelector('.signup-form')) {
//     document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler)
// }

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler)