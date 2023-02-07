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

//Edit Comment
const editCommentBtns = document.querySelectorAll('.editCommentBtn');

const editComment = async (e) => {
    try {
        
    const commentInput = document.querySelector('#editCommentBody').value;
    const editCommentId = parseInt(e.target.id);
    
    const response = await fetch('/api/comment/edit', {
        method: 'POST',
        body: JSON.stringify({commentInput, editCommentId}),
        headers: {'Content-Type': 'application/json'}
    });

    if(!response.ok) {
        console.log('There has been an error updating your comment.');
        return;
    };

    document.location.reload();

     } catch (error) {
        console.log(error);    
    };
};

for(let commentBtn of editCommentBtns) {
    commentBtn.addEventListener('click', editComment);
};
//Delete comments (ifOwner)
const deleteBtns = document.querySelectorAll('.deleteComment');

const deleteComment = async (e) => {
    e.preventDefault();
    commentId = parseInt(e.target.id) ;
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