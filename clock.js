let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let am_pm = document.getElementById('am-pm')

let officialtime = () => {
    let currtime = new Date()
    let hour = currtime.getHours();
    let minute = currtime.getMinutes();
    let second = currtime.getSeconds(); 
    let conversion,format=false;

    if (btn.innerHTML=='12 Hours Format') {
        if(hour > 12){
            hour=hour-12;
            am_pm.innerHTML = "PM";
            format=true
        }
        else if (hour==0) {
            hour=12;
            am_pm.innerHTML = "AM";
            format=true
        }
    }

    {
       
    
        if (hour < 10) {
            hours.innerHTML = `0${hour}:`;
        }
        else {
            hours.innerHTML = `${hour}:`;
        }

    
}
    {
        if (minute < 10) {

            minutes.innerHTML = `0${minute}:`;
        }
        else {

            minutes.innerHTML = `${minute}:`;
        }
    }

    {

        if (second < 10) {

            seconds.innerHTML = `0${second}:`;
        }

        else {
            seconds.innerHTML = `${second}:`;
        }
    }

    {
        if (format==false) {
        
        if (hour >= 12) {
            am_pm.innerHTML = "PM";
        }

        else {
            am_pm.innerHTML = "AM"
        }
    }
    }
}

setInterval(officialtime, 1000)

let btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
var flag=false;
if (btn.innerHTML=="24 Hours Format") {
    flag=true;
    btn.innerHTML='12 Hours Format'
    btn.style.backgroundColor='limeGreen'
}

else if(btn.innerHTML=='12 Hours Format' && flag==false){
    btn.innerHTML='24 Hours Format'
    btn.style.backgroundColor='#9FE2BF'
}
})