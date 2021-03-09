function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let btnText = document.getElementById('dmBtn');

    if (btnText.innerHTML == "Turn Dark Mode ON") {
        btnText.innerHTML = "Turn Dark Mode OFF";
        btnText.classList.add('btn-dm');
        btnText.classList.remove('btn');
    } else {
        btnText.innerHTML = "Turn Dark Mode ON";
        btnText.classList.add('btn');
        btnText.classList.remove('btn-dm');
    }
}
