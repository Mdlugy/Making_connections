var numConnects = 419
document.getElementById('connectsnum').innerHTML = numConnects
var numreq = 2
document.getElementById('requestsNum').innerHTML = numreq

function acceptReq(e){
    numConnects++
    document.getElementById('connectsnum').innerHTML = numConnects
    console.log ("accept")
    declineReq(e)
}

function declineReq(e){
    console.log ("decline")
    numreq--
    document.getElementById('requestsNum').innerHTML = numreq
    console.log(e)
    var elem = document.getElementById(e);
    var elemParent = elem.parentNode
    var elemGrandParent= elemParent.parentNode
    elemGrandParent.remove();
}
 function edit(){
    document.getElementById('Profile_name').innerHTML =  prompt("What's your name")
 }