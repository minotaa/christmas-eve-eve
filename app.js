function start() {
  setInterval(doIt, 3000);
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
  document.getElementById("ever") = "It is Christmas" + s1;
}
