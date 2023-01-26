const commentBtn = document.querySelector('#commentBtn');

const newComment = async (e) => {
    e.preventDefault();

    try {
        const comment = document.querySelector('#comment').value;
        if(comment) {
            const blogId = window.location.pathname.split("/").pop();
            const response = await fetch(`/api/user/comment/${blogId}`, {
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

commentBtn.addEventListener('click', newComment);

