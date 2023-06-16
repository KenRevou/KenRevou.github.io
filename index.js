function functionHidden(){
    let Button = document.getElementById("ButtonAction");
    let Logo = document.getElementById("Logo");
    // Button.innerHTML = "Show Logo"
    // Logo.hidden = true;
    if (Button.innerHTML == "Hidden Logo"){
        Button.innerHTML = "Show Logo"
        Logo.hidden = true;
    } else {
        Button.innerHTML = "Hidden Logo"
        Logo.hidden = false;
    }
    
}