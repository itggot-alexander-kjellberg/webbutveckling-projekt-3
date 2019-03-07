function visaHamurger(event){
    let nunna = document.querySelector("#menyen") 
    nunna.classList.toggle("nunna")
    
    let fadeLayer = document.querySelector(".fade-layer")
    fadeLayer.classList.toggle("visible")
}

function visaUnderkategorier(event){
    // →↓
    console.log(document.querySelector("#rap").innerHTML)
    let rap = document.querySelector("#rap span")
    if (rap.innerHTML == "→ Kategorier"){
        rap.innerHTML = "↓ Kategorier"
    } else {
        rap.innerHTML = "→ Kategorier"  
    }

    // ---------------------------------------------------------------------------------------
    
    let showUnderkat0 = document.querySelector("#mes1")
    let showUnderkat1 = document.querySelector("#mes2")
    let showUnderkat2 = document.querySelector("#mes3")
    
    console.log(showUnderkat0)
    showUnderkat0.classList.toggle("showUnderkat")
    showUnderkat1.classList.toggle("showUnderkat")
    showUnderkat2.classList.toggle("showUnderkat")
    
}

// Båda delarna av visaUnderkategorier fungerar men endast en åt gången
