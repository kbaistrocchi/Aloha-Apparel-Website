console.log("it's alive!");

document.addEventListener('DOMContentLoaded', function() {
    
    const flkty = new Flickity( '.carousel-container', {
    // options
    cellAlign: 'left',
    contain: true,
    });

    // form validation

    const subscriptionForm = document.querySelector('form');
    
    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let userEmail = document.querySelector('.email');
        let test = userEmail.value.split('');
       
        if (
            test.includes('@') &&
            test.includes('.') &&
            !test.includes(' ')
        ) {
            alert("Thanks for subscribing!")
        }
        else {
            alert("Please enter a valid email address")
        };



    })

    

    





});