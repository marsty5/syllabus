// File: profile.js
function toggleInfo(){
    if($('#information').is(':visible') === true){
        $('#information').slideUp();
        $('#infoButton').html('Show info');
    }else{
        $('#information').slideDown();
        $('#infoButton').html('Hide info');
    }
}

function randomGrumpiness(){
    var level = Math.random()*100;
    $('#grumpinessMeter').attr('value',level);
}