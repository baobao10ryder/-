var theme_changer = document.getElementById("theme-switch");

theme_changer.addEventListener("click", function(){
    var now_theme = document.getElementById("theme");
    if(theme_changer.innerText=="Dark Mode"){
        this.innerText = "Light Mode";
        now_theme.href="assets/main-dark.css";
    }
    else{
        this.innerText = "Dark Mode";
        now_theme.href="assets/main.css";
    }
})