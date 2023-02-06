const updateBtn = document.querySelector('#updateBlogBtn');

const updateBlog = async (e) => {
    e.preventDefault();

    const newTitle = document.querySelector('#updateBlogTitle').value;
    const newBody = document.querySelector('#updateBlogBody').value;
    try {
        if(newTitle && newTitle.length < 100 && newBody) {
            const blogId = window.location.pathname.split("/").pop();
            const response = await fetch(`/api/user/edit/${blogId}`, {
                method: 'POST',
                body: JSON.stringify({newTitle, newBody}),
                headers: {'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                console.log('There has been an error updating your blog post.')
                return;
            };

            document.location.replace(`/blog/${blogId}`);
        };
        
    } catch (error) {
        console.log(error);
    };
};

updateBtn.addEventListener('click', updateBlog);
