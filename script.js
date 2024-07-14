function validateForm(event) {
    event.preventDefault();

    // Reset previous error messages
    clearErrors();

    // Fetch form inputs
    var fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    var password = document.getElementById('password').value;
    var ConfirmPassword = document.getElementById('confirmPassword').value;
    var strength = document.getElementById("strength");
    
    

    // Validation flags
    let isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent 
        alert('Name must be at least 5 characters');
        isValid = false;
    }

    // Validate Email
    
    if (email.includes('@')) {
 
    }
    else {
        document.getElementById('emailError').textContent 
        alert('Enter a valid email address');
        isValid = false;
    }
    
   

    // Validate Phone Number
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent ;
        alert( 'Enter a valid 10-digit phone number');
        isValid = false;
    }


    //Validate Password
        // Reset strength indicator
        strength.innerHTML = ""; 

        // Check length
         if (password.length < 8) {
          alert("Password should be at least 8 characters long.");
          return;
        }

        // Validate Confirm Password
       if(password !== ConfirmPassword) {
        document.getElementById('confirmPasswordError').textContent 
        alert( 'Passwords do not match');
        isValid = false;
    } else {

    
        // Check for presence of different character types
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasDigit = /\d/.test(password);
        var hasSpecial = /[!@#$%^&*()\-_=+{};:',<.>/?\\[\]`~]/.test(password);
      
        // Determine strength based on criteria
        if (hasUpperCase && hasLowerCase && hasDigit && hasSpecial) {
          alert ( "Strong: Password is strong.");
        } else {
             
                alert("Weak: Password is Weak!");
                alert("Password could be stronger with a mix of uppercase, lowercase, digits, and special characters.");
        } 
      
      
    
    }

    
    // If all validations pass, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            document.getElementById('registrationForm').reset(); // Optionally reset the form
        }


    }
    function clearErrors() {
    // Clear all error messages
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}
