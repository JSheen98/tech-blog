// These variables go through and grab the id by taking the url and using a regex to grab only the number (id), then putting that in a variable
const url = window.location.pathname
const filterNumber = url.match(/(\d+)/)
const id = filterNumber[1]

// Frontend request to update a blog post
const updateBlogHandler = async (event) => {
    event.preventDefault()

    const blogTitle = document.querySelector('#edit-post-title').value
    const blogContents = document.querySelector('#edit-post-contents').value

    if (blogTitle && blogContents) {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT', 
            body: JSON.stringify({ title: blogTitle, contents: blogContents }),
            headers: { 'Content-type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Blog post could not be updated')
        }
    }
}

// Frontend request to delete a blog post
const deleteBlogHandler = async (event) => {
    event.preventDefault()

    const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Blog post could not be deleted')
    }
    
}

// Event listeners for form submit/delete
document
    .querySelector('.edit-post-form')
    .addEventListener('submit', updateBlogHandler)

document
    .querySelector('#delete-post-button')
    .addEventListener('click', deleteBlogHandler)