(function() {
    const NAME_PLACEHOLDER = document.querySelector(".thankyou__name")
    const URL = new URLSearchParams(window.location)
    NAME_PLACEHOLDER.innerText = URL.get("name")
})()