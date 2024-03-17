

function sleepIn(weekday,vacation){
    if (weekday === false || vacation ===true){
        return true;
    }
    else {
        return false
    }
}


function monkeyTrouble(aSmile,bSmile){

    if (aSmile === bSmile){
        return true
    }
    else {
        return false
    }
}


function stringTimes(str,n){

    return str.repeat(n)
}


function luckySum(a,b,c){

    var num =Array(a,b,c);

    var sum=0;

    for (n=0;n<num.length;n++){

        if (num[n]==13){
            break
        }

        sum+=num[n]

    }

    return sum

}


function caught_speeding(speed,is_birthday){

    // checking birthday increment applicable

    var birthday_incr=0

    if (is_birthday===true){
       birthday_incr=5
    }
    else {
        birthday_incr=0
    }

    // finding ticket number based on speed

    if (speed<=60+birthday_incr){
        return 0
    }

    else if (speed>=61+birthday_incr && speed <=80+birthday_incr){
        return 1
    }

    else {
        return 2
    }


}


function makeBricks(small,big,goal){

    "documentation string"
    
    return goal<=(small*1)+(big*5)



}