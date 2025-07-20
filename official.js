document.querySelector("#talk-btn").addEventListener("click", function talkfunction(){
    let userName = prompt("What's your name?");
    alert("Nice to meet you, " + userName + "😎");
})


names = document.querySelector(".name")
email = document.querySelector(".email")
messages = document.querySelector(".message-btn")

document.querySelector(".contact-btn").addEventListener("click", function myFunction(){
    
        console.log("Name :" + names.value)
        console.log("Email :" + email.value)
        console.log("Message :" + messages.value)

    })

    document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
  });

