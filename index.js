let poop
document.getElementById("A4").onclick= function(){
    poop = document.getElementById("A3").value
    poop = (poop *2) + 30
    document.getElementById("banana").textContent = `Converted area is ${poop}`
}