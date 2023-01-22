const signOutBtn = document.querySelector('#signout');

const userSignOut = async() => {
    const response = await fetch('/api/user/signout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/login');
    } else {
        console.log('Failed to sign out!')
    }
};

signOutBtn.addEventListener('click', userSignOut);