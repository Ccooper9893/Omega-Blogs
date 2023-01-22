const signInForm = document.querySelector('.signinform')

const userLoginForm = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#inputUsername').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if(username && password) {
        const response = await fetch('/api/user/signin', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/')
        } else {
            console.log(response.message);
        }
    };
};

signInForm.addEventListener('submit', userLoginForm);