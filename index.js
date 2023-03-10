const email = document.getElementById("email_id");
const error = document.getElementById("error_div");
const buttonSubmit = document.getElementById("arrow_div");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input, errorPara) {

    if (mailRegex.test(input.value)) {
        console.log("this is true");
        input.classList.add('success');
        input.classList.remove('error');
        errorPara.firstElementChild.style.display = "none";
        errorPara.lastElementChild.style.display = "block";
    } else if (!mailRegex.test(input.value)) {
        console.log('this is false');
        input.classList.add('error');
        input.classList.remove('success');
        errorPara.firstElementChild.style.display = "block";
        errorPara.lastElementChild.style.display = "none";
    }


}

buttonSubmit.addEventListener('click', (Event)=> {
    Event.preventDefault()
    testMail(email, error);
    console.log("clicked");
})