// //Question one
// document.addEventListener("DOMContentLoaded", () => {

// })
//  const create = () => {
//     let textElement = document.querySelector("#text")
//     let text = textElement.value
//     let header = document.querySelector("#header")
//     header.innerText = tex z
// }
//q2
document.addEventListener("DOMContentLoaded", () =>{


let obj = {

    "results" : [
      { "name" : "Anne" },
      { "name" : "Bri" },
      { "name" : "Chaz" },
      { "name" : "Darlene" }
    ]
  }
  let results = obj["results"]
  let newArray = results.map((name)=>{
      return name.name
  })
  let ul = document.createElement("ul")
    newArray.forEach((name)=>{
        let li = document.createElement("li")
        li.innerText = name
        ul.appendChild(li)
    })
    document.body.appendChild(ul)
})      

