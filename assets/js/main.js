function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0; i< dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2(){
    document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn2')){
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for(i=0; i< dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show2')){
                openDropdown.classList.remove('show2');
            }
        }
    }
}

var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i< acc.length; i++){
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        
    }else{
        panel.style.display = "block";
    }
})
}