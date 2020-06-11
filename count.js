//js for adding the  event 
//cash variables


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('#item');
const clearButton = document.querySelector('button')
const items =JSON.parse(localStorage.getItem('events'))?JSON.parse(localStorage.getItem('events')):[];
const data = JSON.parse(localStorage.getItem('events'))?JSON.parse(localStorage.getItem('events')):[];
// loop  pass on the data
data.map( (item) => {

    createLi(item)
})



//creat li and appened to ul 

function createLi(text){
    
    var li=document.createElement("li");
    li.textContent=text;
   // li.className="li";
    ul.appendChild(li);
    var remove = document.createElement("button");
   remove.innerHTML="remove";
    remove.className="remove";
    li.appendChild(remove);
    remove.onclick=function(){
        remove.parentElement.remove();
        }
    }
//submit form Event
form.addEventListener('submit',function(e){
    e.preventDefault();

  if (input.value == '') {
    alert("please inter your item");
    ul.removeChild(ul.children);}
//add to local storage
items.push(input.value)
localStorage.setItem('events',JSON.stringify(items))


    //add to ul
    createLi(input.value)
    input.value = ''
})
//clear data 
clearButton.addEventListener('click',function(){
    localStorage.clear();
    ul.innerHTML = '';
})


//js for adding the time of event 
//cash variables

const start = document.getElementById('startBtn');
const reset = document.getElementById('resetBtn');
const event = document.getElementById('eventInput');
const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

var startTimer = null;
// A button to turn on the time
start.addEventListener('click',function () {


    function startInterval(){
        startTimer = setInterval(function(){
            timer();



        },1000);
    }
    startInterval()
})
//time stop button 
reset.addEventListener('click',function () {

    d.value = 0;
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();

    
})

// function for timer
function timer(){
    if (d.value ==0 && h.value==0 && m.value == 0 && s.value == 0 ) {
         alert("The event has occurred...")

    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    } else if(d.value != 0 && h.value == 0){
        h.value = 24;
        d.value--;
    }

    

    return ;

    }




// function for stop timer

function stopTimer(){
    clearInterval(startTimer);
}
