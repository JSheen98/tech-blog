// These variables go through and grab the id by taking the url and using a regex to grab only the number (id), then putting that in a variable
const url = window.location.pathname
const filterNumber = url.match(/(\d+)/)
const id = filterNumber[1]

// Frontend request to create a comment
const createCommentHandler = async (event) => {
    event.preventDefault()

    const commentContents = document.querySelector('#comment-form').value

    if (commentContents) {
        const response = await fetch(`/api/comment`, {
            method: 'POST', 
            body: JSON.stringify({ blog_id: id, contents: commentContents }),
            headers: { 'Content-type': 'application/json' }
        })

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Comment could not be added')
        }
    }
}

// Event listener for form submit
document
    .querySelector('.create-comment-form')
    .addEventListener('submit', createCommentHandler)