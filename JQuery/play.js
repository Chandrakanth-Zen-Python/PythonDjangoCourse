var user1 = prompt('Enter User 1 name')
var user2 = prompt('Enter User 2 Name')

var sts=$('#status')


var u1Color='red'
var u2Color='blue'

var player=null


var col1=$('.col1').eq(0)
var col2=$('.col2').eq(0)
var col3=$('.col3').eq(0)
var col4=$('.col4').eq(0)
var col4=$('.col5').eq(0)
var col6=$('.col6').eq(0)
var col7=$('.col7').eq(0)


var cols=[
    $('.col1').eq(0),
    $('.col2').eq(0),
    $('.col3').eq(0),
    $('.col4').eq(0),
    $('.col5').eq(0),
    $('.col6').eq(0),
    $('.col7').eq(0)
]

var cell=null

var nextPlayer=null

for (c=0;c<7;c++){

    // console.log(cols[c])

    (function(c){

        cols[c].on('click',function(){

            console.log(c)
    
            cells=$('.col'+String(c+1))
        
            console.log('column clicked:',c+1)
        
            for (i=0;i<cells.length;i++){
        
                cell=cells.eq(cells.length-i)
        
                console.log(cell)
        
                console.log(cell.css('background-color'))
        
                if (cell.css('background-color')==='rgb(128, 128, 128)'){
        
                    if (player == null | player == 'user2'){
                        color=u1Color

                        player='user1'

                        nextPlayer=user2
                    }
        
                    else {
                        color=u2Color

                        player='user2'

                        nextPlayer=user1
                    }
                    cell.css('background-color',color)

                    sts.text('Player '+nextPlayer+' has to play next')

                    console.log('added color for player:',player)
        
                    break
        
        
                }
            }
        })}
        )(c);
    

    }


