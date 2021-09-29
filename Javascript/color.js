var Links = {
  SetColor:function (color){
    var mode=document.querySelectorAll('a');
    var i = 0;
    while(i<mode.length){
      mode[i].style.color= color;
      i = i +1;
    }
  }
}
var body = {
  SetColor:function (color){
    var target = document.querySelector('body');
    target.style.color= color;
  },
  SetbackgroundColor:function(color){
    var target = document.querySelector('body');
    target.style.backgroundColor=color;
  }
}
function nightDayHandler(self){
  if(self.value === 'night'){
    body.SetbackgroundColor('black');
    body.SetColor('white');
    self.value='day';
    Links.SetColor('powderblue');
  } else{
    body.SetbackgroundColor('white');
    body.SetColor('black');
    self.value='night';
    Links.SetColor('blue');
  }
}
