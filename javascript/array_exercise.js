var roster = []

function addNew(roster,item){

    roster.push(item)

    return roster
}

function remove(roster,item){

    var indexItem=roster.indexOf(item);

    if (indexItem>-1){
        roster.splice(indexItem,1)
    }

    return roster  

}

function display(roster){
    console.log(roster)
}


var cont=true;

while (cont==true){

    action = prompt('Enter your action?? Add/Remove/Display/Quit')

    if (action.toLowerCase()=='quit'){
        cont=false
        break
    }

    else if (action.toLowerCase()=='add'){

        var name=prompt('Enter the name you want to add')

        roster=addNew(roster,name)

    }

    else if (action.toLowerCase()=='remove'){

        var removeItem=prompt('Enter the item you want to remove')

        roster=remove(roster,removeItem)
    }

    else if (action.toLowerCase()=='display'){

        display(roster)
    }

    else{
        console.log('Unable to execute the command')
    }


}