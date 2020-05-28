
function upvote(){
    var value = parseInt(document.getElementById("votes-q").innerHTML,10);
    value++;
    document.getElementById("votes-q").innerHTML = value;
    document.getElementById("up-q").disabled = true;
    document.getElementById("down-q").disabled = false;
}

function downvote(){
    var value = parseInt(document.getElementById("votes-q").innerHTML,10);
    value--;
    document.getElementById("votes-q").innerHTML = value;
    document.getElementById("down-q").disabled = true;
    document.getElementById("up-q").disabled = false;
}

function bookmark(){
    var flag = document.getElementById("bookmark").disabled;
    var value = parseInt(document.getElementById("bookmark").innerHTML,10);
    if(!flag){
        value++;
        document.getElementById("bookmark").innerHTML=value;
        document.getElementById("bookmark").disabled = true;
    }
    else{
        value--;
        document.getElementById("bookmark").innerHTML=value;
        document.getElementById("bookmark").disabled = false;   
    }
}