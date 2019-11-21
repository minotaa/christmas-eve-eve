function start() {
  setInterval(doIt, 3000);
  setTimeout(calculateChristmasCountdown, 1000);
}

function doIt() {
  
  today=new Date();
  const cmas=new Date(today.getFullYear(), 11, 25);
  if (today.getMonth()==11 && today.getDate()>25) 
  {
  cmas.setFullYear(cmas.getFullYear()+1); 
  }  
  const one_day=1000*60*60*24;
  var str = "Eve "
  var s1 = str.repeat(Math.ceil((cmas.getTime()-today.getTime())/(one_day)))
  document.getElementById("ever").innerHTML = "It is Christmas " + s1;
}

function calculateChristmasCountdown() {
    var now = new Date();
    var currentMonth = (now.getMonth() + 1);
    var currentDay = now.getDate();
    var nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        nextChristmasYear = nextChristmasYear + 1;
    }
    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);
    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }
    document.getElementById('days').innerHTML = days + ' Days';
    document.getElementById('hours').innerHTML = hours + ' Hours';
    document.getElementById('minutes').innerHTML = minutes + ' Minutes';
    document.getElementById('seconds').innerHTML = seconds + ' Seconds';
}
