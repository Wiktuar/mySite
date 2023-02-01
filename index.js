function convertCelcToFar(){
    const celc = document.getElementById("temp")
    const result = document.querySelector(".result")

    result.textContent = (+celc.value) * 9/5 + 32
}

function greeting(){
    const celc = document.getElementById("temp1")
    const result = document.querySelector(".result1")

    result.textContent = celc.value
}



