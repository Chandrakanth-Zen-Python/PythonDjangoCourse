// Elements

var cells=document.querySelectorAll('td');

var restart=document.querySelector('#restart-button');

var pieces=['X','O','']

for (cell of cells) {

    (function(x) {
        x.addEventListener('click', function() {
            var currentElement = x.textContent;
            var current_pos = pieces.indexOf(currentElement);

            var next_pos;
            if (current_pos === (pieces.length - 1)) {
                next_pos = 0;
            } else {
                next_pos = current_pos + 1;
            }

            x.textContent = pieces[next_pos];
        });
    })(cell);
}


restart.addEventListener('click',function(){
    for (cell of cells){
        cell.textContent=''
    }
})