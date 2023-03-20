// Frontend request to logout
const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

// Event listener for form submit
document.querySelector('#logout').addEventListener('click', logout)