const newBlogBtn = document.querySelector('#newBlogBtn');

const createBlog = async (e) => {
    e.preventDefault();

    const blogTitle = document.querySelector('#newBlogTitle').value;
    const blogBody = document.querySelector('#newBlogBody').value;


    if(blogTitle && blogBody) {
        try {
            const response = await fetch('/api/blog/new', {
                method: 'POST',
                body: JSON.stringify({blogTitle, blogBody}),
                headers: {'Content-Type': 'application/json'}
            });
    
            if(!response.ok) {
                alert('There has been an error creating your blog post.')
            } else {
                document.location.replace('/dashboard');
            };

        } catch (error) {
            console.log(error);
        }
    }
};

newBlogBtn.addEventListener('click', createBlog);