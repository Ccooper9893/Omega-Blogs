const signUpForm = document.querySelector('.signupform');

const createAccountForm = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#inputUsername').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to sign up.');
        };
    };
};

signUpForm.addEventListener('submit', createAccountForm);