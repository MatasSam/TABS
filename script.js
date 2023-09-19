"use strict"

var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")

for(var i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none"
}

function showTab(evt, id){
    // Hide tabs
    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
    }
    
    // Show tab with specific id
    document.getElementById(id).style.display = "block"
    
    // Remove class style from buttons
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("btn-style")
    }
    
    // Add button style
    evt.currentTarget.classList.add("btn-style")
    console.log(evt.currentTarget)
    }