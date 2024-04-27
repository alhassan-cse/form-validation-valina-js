const  form = document.getElementById("form");
const  username = document.getElementById("username");
const  email = document.getElementById("email");
const  password = document.getElementById("password");
const  password_confirmation = document.getElementById("password_confirmation");


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'input input-error';
    const small = formControl.querySelector('small');
    //alert();
    small.innerText = message;
    console.log(message);
}


function successError(input){
    const formControl = input.parentElement;
    formControl.className = 'input input-success';
    const small = formControl.querySelector('small');
    small.innerText = '';
     
}

function isvalidEmail(email){
     
    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(String(email.value).toLowerCase() )) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() ===''){
            showError(username, `${getFieldName(input) is required');
        }
        else{
            successError(username);
        }
    })
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(username.value ===''){
        showError(username, "Username is required");
    }
    else{
        successError(username);
    }

    if(email.value ===''){
        showError(email, "Email is required");
    }
    else if(!isvalidEmail(email.value)){
        showError(email, "Email is not Valid");
    }
    else{
        successError(email);
    }

    if(password.value ===''){
        showError(password, "Password is required");
    }
    else{
        successError(password);
    }

    if(password_confirmation.value ===''){
        showError(password_confirmation, "Password confirmation is required");
    }
    else{
        successError(password_confirmation);
    }

});


// class FormValidator {

//     constructor(form, fields) {
//         this.form = form
//         this.fields = fields
//     }


//     initialize() {
//         this.validateOnEntry()
//         this.validateOnSubmit()
//     }

//     validateOnSubmit() {
//         let self = this;
    
//         this.form.addEventListener('submit', e => {
//             e.preventDefault()
//             self.fields.forEach(field => {
//             const input = document.querySelector(`#${field}`)
//             self.validateFields(input)
//           })
//         })
//     }

//     validateOnEntry() {
//         let self = this;
//         // alert(this.fields);
//         this.fields.forEach(field => {

//             alert(field);
            
//           const input = document.querySelector(`#${field}`);
          
//           input.addEventListener('input', event => {
//             self.validateFields(input)
//           })
//         })
//     }


//     validateFields(field) {
// alert(field);
//         // Check presence of values
//         if (field.value.trim() === "") {
//           this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error")
//         } else {
//           this.setStatus(field, null, "success")
//         }
    
//         // check for a valid email address
//         if (field.type === "email") {
//           const re = /\S+@\S+\.\S+/
//           if (re.test(field.value)) {
//             this.setStatus(field, null, "success")
//           } else {
//             this.setStatus(field, "Please enter valid email address", "error")
//           }
//         }
    
//         // Password confirmation edge case
//         if (field.id === "password_confirmation") {
//           const passwordField = this.form.querySelector('#password')
    
//           if (field.value.trim() == "") {
//             this.setStatus(field, "Password confirmation required", "error")
//           } else if (field.value != passwordField.value) {
//             this.setStatus(field, "Password does not match", "error")
//           } else {
//             this.setStatus(field, null, "success")
//           }
//         }
//     }

//     setStatus(field, message, status) {
//         const successIcon = field.parentElement.querySelector('.icon-success')
//         const errorIcon = field.parentElement.querySelector('.icon-error')
//         const errorMessage = field.parentElement.querySelector('.error-message')
    
//         if (status === "success") {
//           if (errorIcon) { errorIcon.classList.add('hidden') }
//           if (errorMessage) { errorMessage.innerText = "" }
//           successIcon.classList.remove('hidden')
//           field.classList.remove('input-error')
//         }
    
//         if (status === "error") {
//           if (successIcon) { successIcon.classList.add('hidden') }
//           field.parentElement.querySelector('.error-message').innerText = message
//           errorIcon.classList.remove('hidden')
//           field.classList.add('input-error')
//         }
//     }
// }

//     const form = document.querySelector('.form')
//     const fields = ["username", "email", "password", "password_confirmation"]

//     const validator = new FormValidator(form, fields)
//     validator.initialize()


    


