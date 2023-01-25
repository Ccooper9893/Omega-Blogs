const newBlogBtn = document.querySelector('#newBlogBtn');

const createBlog = async (e) => {
    e.preventDefault();

    const blogTitle = document.querySelector('#newBlogTitle').value;
    const blogBody = document.querySelector('#newBlogBody').value;


    if(blogTitle && blogBody) {
        try {
            const response = await fetch('/api/user/newblog', {
                method: 'POST',
                body: JSON.stringify({blogTitle, blogBody}),
                headers: {'Content-Type': 'application/json'}
            });
    
            if(!response.ok) {
                console.log('An error has occurred with redirection.');
            } else {
                document.location.replace('/dashboard');
            };

        } catch (error) {
            console.log(error);
        }
    }
};

newBlogBtn.addEventListener('click', createBlog);