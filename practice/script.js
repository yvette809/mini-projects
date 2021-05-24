const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-z]{6,12}$/
//const username= document.querySelector("#username")

form.addEventListener('submit', e=>{
    e.preventDefault()
    //console.log(username.value)
    // validation
   const username=  form.username.value
   

   if(usernamePattern.test(username)){
       // feedback good info
       feedback.textContent ='the username is valid'
   }else{
       //feedback help info
       feedback.textContent= 'username must contain letters and be between 6 and 12 characters long'
   }
})


// live feedback
form.username.addEventListener('keyup', e=>{
    if(usernamePattern.test(e.target.value)){
       form.username.setAttribute('class', 'success')
    }else{
        form.username.setAttribute('class', 'error')
    }

})