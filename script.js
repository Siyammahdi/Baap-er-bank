document.getElementById('login-btn').addEventListener('click', function(){
    // user email calling
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;
    
    // user pass calling
    const passField = document.getElementById('user-pass')
    const userPass = passField.value;
    console.log(userPass)

    if(userEmail === 'vejaillabaap@gmail.com' && userPass === 'bolajabena'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Shala chorer baccha vag')
    }

})

