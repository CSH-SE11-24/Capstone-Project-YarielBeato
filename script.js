let bb = document.querySelectorAll("input")
console.log(bb)

let la = document.querySelectorAll("label")
console.log(la)

let answers = ["jerrywest", "ai", "kg", "lb", "nba", "jw", "js", "jh"]

let score = 0



for(let i = 0; i < bb.length; i++){

  let question = Math.floor(i/3)
  bb[i].addEventListener("click",function(e){
    for(let j = 0; j < la.length; j++){
      la[j].style.color = "black"
    }
    if(bb[i].value == answers[question]){
      score++
      la[i].style.color = "green"
    }else{
    la[i].style.color = "red"

  }
})
}

let but = document.querySelector("#b")
let put = document.querySelector("#p")

but.addEventListener("click", function(e){
  e.preventDefault()
  put.textContent = score + "/ 8"
})
