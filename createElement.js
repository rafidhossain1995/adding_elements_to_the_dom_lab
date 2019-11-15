//Question one
document.addEventListener("DOMContentLoaded", () => {

})
 const create = () => {
    let textElement = document.querySelector("#text")
    let text = textElement.value
    let header = document.querySelector("#header")
    header.innerText = text
}
