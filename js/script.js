import "../sass/main.scss"
import Waypoints from "waypoints"

document.addEventListener("DOMContentLoaded", function(){

let toAnimate = document.getElementsByClassName("to_animate");

let toAnimateFirst = Array.from(toAnimate).slice(0, 2)
let toAnimateSec = Array.from(toAnimate).slice(2,4)
let toAnimateTh = toAnimate[4]

let waypoint = new Waypoint ({
  element: toAnimate[0],
  handler: function(direction){
  toAnimateFirst.forEach(function(el){
      el.classList.add("animated", "fadeInLeft")
    })
  },
  offset: "50%"
})

let waypoint2 = new Waypoint ({
  element: toAnimate[2],
  handler: function(direction){
  toAnimateSec.forEach(function(el){
      el.classList.add("animated", "fadeInRight")
    })
  },
  offset: "50%"
})

let waypoint3 = new Waypoint ({
  element: toAnimate[4],
  handler: function(direction){
  toAnimateTh.classList.add("animated", "fadeInUp")
  console.log(toAnimateThird)
  },
  offset: "50%"
})

})
