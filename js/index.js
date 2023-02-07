let tabs = document.querySelectorAll(".tabs ul li")
let educationTab = document.getElementsByClassName("education__tab")[0]
let expTab = document.getElementsByClassName("experience__tab")[0]
let tabContent = document.getElementsByClassName("tab__content")[0]
tabs.forEach(elem => {
    elem.addEventListener('click', ()=> {
        if(elem.innerText == "Education"){
            expTab.style.width = "0%"
            educationTab.style.width = "100%"
        }else{
            expTab.style.width = "100%"
            educationTab.style.width = "0%"
            }
    })
})