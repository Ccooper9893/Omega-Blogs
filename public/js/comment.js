//Post comment
const commentBtn = document.querySelector('#commentBtn');
const newComment = async (e) => {
    e.preventDefault();

    try {
        const comment = document.querySelector('#comment').value;
        if(comment) {
            const blogId = window.location.pathname.split("/").pop();
            const response = await fetch(`/api/comment/${blogId}`, {
                method: 'POST',
                body: JSON.stringify({comment}),
                headers: {'Content-Type': 'application/json'},
            });

            if(!response.ok) {
                console.log('There has been an error posting your comment.');
                return;
            };

            document.location.replace(`/blog/${blogId}`);
        }
    } catch (error) {
        console.log(error);
    };
};

//Delete comments (ifOwner)
const deleteBtns = document.querySelectorAll('.deleteComment');

const deleteComment = async (e) => {
    e.preventDefault();
    commentId = parseInt(e.target.id);
    console.log(typeof commentId);
    try {
        const response = await fetch('/api/comment/delete', {
            method: 'POST',
            body: JSON.stringify({commentId}),
            headers: {'Content-Type': 'application/json'}
        });
        
        if(!response.ok) {
            console.log('There has been an error deleting your comment');
            return;
        };

        document.location.reload();
    } catch (error) {
        console.log(error);
    };
};

//Event Listeners
commentBtn.addEventListener('click', newComment);

for(btn of deleteBtns) {
    btn.addEventListener('click', deleteComment);
};

