// init github
const github = new Github()

// search input

const searchUser = document.getElementById("searchUser")

//search input event listener

searchUser.addEventListener('keyup', (e) => {
    // get input text

    const userText = e.target.value;
    if (userText !== "") {
        //make an http call to github
        github.getUser(userText)
            .then(data => {
                if(data.profile.message==='Not found'){

                    // show alert
                }else{
                    //show profile
                }
            })
    }else{
        // clear profile
    }
})