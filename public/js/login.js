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
    
        if (response.ok) {
            console.log('Successfully signed in!');
            document.location.replace('/')
            }
        } else {
            alert('Bad credentials!')
        };
};

const signInBtn = document.querySelector('.login-form');
signInBtn.addEventListener('submit', userLoginForm);