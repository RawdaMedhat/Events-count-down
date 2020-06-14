//select variables
const title = document.getElementById('titleInput');
 const input = document.getElementById('dateInput');
// function for working the timer
function appear (){
//making alert for enter the data
    if(title.value=="" || input.value==""){
         alert("please enter your data please...")
     } 
     else {
    //appear title and date in the show div

    document.getElementById('show').style.display='block';

    document.getElementById("show").innerHTML = title.value;

    document.getElementById('home').style.display='block';


    const input = document.getElementById('dateInput');

//Get Date First
const countDown = new Date(input.value).getTime();


//Set Interval Time To Time
const setTimeDisplay = setInterval(() => {

    //Todays Date all time
    const nowTime = new Date().getTime();
  

    //Distance By NowTime and Count
    const distance = countDown - nowTime;

    //Now Show All The Data on the screen
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent  = days;

    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById("hours").textContent = hours;


    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    document.getElementById("minutes").textContent = minutes;

    const seconds = Math.floor(distance % (1000 * 60) / 1000);
    document.getElementById("seconds").textContent = seconds;
// condition for stop the timer when the event occurre 
    if (distance< 0) {

                clearInterval(setTimeDisplay);
                alert("The event has occurred..."); 
             //end the condition  
            }
//end the set interval
}, 1000);
//end the condition(else)
     }
//end the function
      }


