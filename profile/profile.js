

document.getElementById('nav-toogle').addEventListener('click', function () {
        let navMenu = document.getElementById('nav-menu-container');
        navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
});
var btnContainer = document.getElementById("p-tabs-m");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("bt");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",Active  );
}
var btnContainer2 = document.getElementById("c-tabs");

// Get all buttons with class="btn" inside the container
var btns2 = btnContainer2.getElementsByClassName("bt");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click",Active);
}
function Active (){
        var current = document.getElementsByClassName("active");
    
        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
    
        // Add the active class to the current/clicked button
        this.className += " active";
      }


