
const comercial = document.getElementById("comercial");
const nonComercial = document.getElementById("noncomercial");
const individual = document.getElementById("individual")
const nonprofit = document.getElementById("nonprofit")

const community = document.getElementById("community ")
const patron = document.getElementById("patron")

const question =document.getElementById("question");

const more = document.getElementById("morethanten");
const less = document.getElementById("lessthanten");

const studio= document.getElementById("studio");
const userselection = document.getElementById("subtitle")

const indie= document.getElementById("indie");

const selection = document.getElementById("title-breadcrumb")

const customization  = document.getElementById('customization')
const subs =document.getElementById('subscription')

const demo = document.getElementById("demo")

const dis = document.getElementById('disclaimer')
const reset = document.getElementById('breadcrumbs');

let selectionElements = [];
selectionElements  =[comercial,nonComercial, individual,nonprofit, more ,less]
//mouse over only for some elements
for(var i = 0; i<selectionElements.length; i++){
  selectionElements[i].onmouseenter =(event) =>{
    event.target.style.cursor = "pointer";
    event.target.style.opacity = '0.5'
  }
}
//mouse leave only for  some  elements
for(var i = 0; i<selectionElements.length; i++){
  selectionElements[i].onmouseleave =(event) =>{
    event.target.style.cursor = "pointer";  
    event.target.style.opacity = '1'
  }
}

comercial.addEventListener("click", function (){
  comercial.classList.add("hide");
  nonComercial.classList.add("hide");
  more.classList.remove("hide");
  less.classList.remove("hide")
  selection.innerText = 'Chosen license:  Commercial Use'
  question.innerText = 'How many employees does your company have?'
  reset.classList.remove("hide")

})

nonComercial.addEventListener("click",function(){
  console.log("click noncomercial")
  comercial.classList.add("hide");
  nonComercial.classList.add("hide");
  individual.classList.remove("hide");
  nonprofit.classList.remove("hide")
  selection.innerText = 'Chosen license : Non-Commercial Use'
  subs.classList.add('hide')
  reset.classList.remove("hide")
  
})

nonprofit.addEventListener("click",function(){
  console.log("click nonprofit")
  individual.classList.add("hide");
  nonprofit.classList.add("hide");
  patron.classList.remove("hide")
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  userselection.classList.remove('hide');
  userselection.innerText = 'You are an Non-Profit / Educational Institution'
  question.classList.add('hide')
})

individual.addEventListener("click",function(){
  console.log("click individual");
  individual.classList.add("hide");
  nonprofit.classList.add("hide");
  community.classList.remove("hide");
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  userselection.classList.remove('hide');
  userselection.innerText = 'You are an Individual'
  question.classList.add('hide')
})

more.addEventListener("click",function(){
  console.log("more");
  more.classList.add("hide");
  less.classList.add("hide")
  question.classList.add('hide')
  studio.classList.remove('hide')
  userselection.innerHTML = 'Your company has more than 10 employees '
  userselection.classList.remove('hide');
  customization.classList.remove('hide')
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  
})

less.addEventListener("click",function(){
  console.log("less");
  more.classList.add("hide");
  less.classList.add("hide")
  question.classList.add('hide')
  indie.classList.remove('hide')
  userselection.innerHTML = 'Your company has less than 10 employees '
  userselection.classList.remove('hide');
  customization.classList.remove('hide')
  subs.classList.remove('hide')
  demo.classList.remove('hide')
  
})



reset.addEventListener("click",function(){
  comercial.classList.remove("hide");
  nonComercial.classList.remove("hide");
  userselection.classList.add('hide');
  more.classList.add('hide');
  less.classList.add('hide')
  individual.classList.add("hide");
  nonprofit.classList.add("hide")
  patron.classList.add('hide')
  community.classList.add('hide')
  studio.classList.add('hide')
  indie.classList.add('hide')
  selection.innerText = 'Choose your license'
  
  question.innerText = 'Choose your license'

  question.classList.remove('hide')
  customization.classList.add('hide')
  subs.classList.add('hide')
  reset.classList.add('hide')
  demo.classList.add('hide')
})

function mouseOver(){

}