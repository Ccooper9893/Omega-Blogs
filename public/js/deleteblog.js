const deleteBlogBtn = document.querySelector('#deleteBlog');

const deleteBlog = async(e) => {
    e.preventDefault();
    blogId = parseInt(e.target.id);
    const response = await fetch('/api/blog/delete', {
        method: 'POST',
        body: JSON.stringify({blogId}),
        headers: {'Content-Type': 'application/json'}
    });

    if(!response.ok) {
        console.log('There has been an error deleting your blog.');
    } else {
        document.location.replace('/dashboard');
    };
};

deleteBlogBtn.addEventListener('click', deleteBlog);