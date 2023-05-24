const FORM = document.querySelector(".form")

const FORM_INPUT_NAME = FORM.querySelector("#inputName")
const FORM_INPUT_PHONE = FORM.querySelector("#inputPhone")
const FORM_INPUT_MAIL = FORM.querySelector("#inputMail")
const FORM_INPUT_NOTE = FORM.querySelector("#inputNote")

FORM.addEventListener("submit", function(event){
    event.preventDefault()

    if (FORM_INPUT_NAME.value === "") {
    alert ("Navn er ikke udfyldt")
    }
    else if (FORM_INPUT_PHONE === "") {
        alert ("Telefonnummer er ikke udfyldt")
    }
    else if (FORM_INPUT_MAIL === "") {
        alert ("E-mail er ikke udfyldt")
    }
    else {
        FORM.submit()
    }
}) 

 // FORMEN ER SENDT

const URL_STRING = window.location.href
const URL_OBJECT = new URL(URL_STRING)
//console.log(URL_OBJECT)

if (URL_OBJECT.searchParams.get("navn")){
    let userName = URL_OBJECT.searchParams.get("navn")
    let userPhone = URL_OBJECT.searchParams.get("tlf")
let thankYouMessage = `Hej ${userName}. Tak for din besked. Vi kontaker dig på ${userPhone} hurtigst muligt.`

FORM.innerHTML = thankYouMessage
}