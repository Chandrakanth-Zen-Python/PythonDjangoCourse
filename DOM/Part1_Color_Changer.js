



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
function ChangeHeaderColor(){
    
    header=document.querySelector('h1')

    color=getRandomColor()

    header.style.color=color

}


setInterval('ChangeHeaderColor()',500)