const url = window.location.pathname
const filterNumber = url.match(/(\d+)/)
const id = filterNumber[1]

console.log(id)

const createCommentHandler = async (event) => {
    event.preventDefault()

    const commentContents = document.querySelector('#comment-form').value

    if (commentContents) {
        const response = await fetch(`/api/comment`, {
            method: 'POST', 
            body: JSON.stringify({ blog_id: id, content: commentContents }),
            headers: { 'Content-type': 'application/json' }
        })

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Comment could not be added')
        }
    }
}

document
    .querySelector('.create-comment-form')
    .addEventListener('submit', createCommentHandler)