const newBlogHandler = async (event) => {
    event.preventDefault()

    const blogTitle = document.querySelector('#create-post-title').value
    const blogContents = document.querySelector('#create-post-contents').value

    if (blogTitle && blogContents) {
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title: blogTitle, contents: blogContents }),
            headers: { 'Content-type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Blog post could not be created')
        }
    }
}

document
    .querySelector('.create-post-form')
    .addEventListener('submit', newBlogHandler)