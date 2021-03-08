function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let btnText = document.getElementById('dmBtn');

    // todo: get the button to change class on click so the colors change on dark mode to be more visible

    let btnClass = document.getElementsByClassName('btn');

    if (btnText.innerHTML == "Turn Dark Mode ON") {
        btnText.innerHTML = "Turn Dark Mode OFF";
        btnClass = "btn-dm";
    } else {
        btnText.innerHTML = "Turn Dark Mode ON";
        btnClass = "btn";
    }
}
