const userLoginForm = async (e) => {
    e.preventDefault();
    try {
        const username = document.querySelector('#inputUsername').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if(username && password) {
        const response = await fetch('/api/user/signin', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        
        if (!response.ok) {
            window.alert('Invalid username/password');
            return;
        };

        console.log('Successfully signed in!');
        document.location.replace('/');
        };
    } catch (error) {
        console.log(error);
    };
    
};

const signInBtn = document.querySelector('.login-form');
signInBtn.addEventListener('submit', userLoginForm);