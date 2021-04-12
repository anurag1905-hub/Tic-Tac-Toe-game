function myFunction(){
    var b1=document.getElementById('b1').value;
    var b2=document.getElementById('b2').value;
    var b3=document.getElementById('b3').value;
    var b4=document.getElementById('b4').value;
    var b5=document.getElementById('b5').value;
    var b6=document.getElementById('b6').value;
    var b7=document.getElementById('b7').value;
    var b8=document.getElementById('b8').value;
    var b9=document.getElementById('b9').value;
    if(b1=='X'&&b2=='X'&&b3=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    else if(b1=='X'&&b4=='X'&&b7=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    else if(b7=='X'&&b8=='X'&&b9=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    else if(b3=='X'&&b6=='X'&&b9=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        window.alert('Player X Won!');
        return;
    }



    else if(b1=='X'&&b5=='X'&&b9=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    else if(b3=='X'&&b5=='X'&&b7=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    else if(b2=='X'&&b5=='X'&&b8=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    else if(b4=='X'&&b5=='X'&&b6=='X'){
        document.getElementById('print').innerHTML="Player X Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player X Won!');
        return;
    }

    if(b1=='O'&&b2=='O'&&b3=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if(b1=='O'&&b4=='O'&&b7=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if(b7=='O'&&b8=='O'&&b9=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b6').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if(b3=='O'&&b6=='O'&&b9=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b5').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        window.alert('Player O Won!');
        return;
    }



    else if(b1=='O'&&b5=='O'&&b9=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if(b3=='O'&&b5=='O'&&b7=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if(b2=='O'&&b5=='O'&&b8=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b4').disabled=true;
        document.getElementById('b6').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if(b4=='O'&&b5=='O'&&b6=='O'){
        document.getElementById('print').innerHTML="Player O Won!";
        document.getElementById('b1').disabled=true;
        document.getElementById('b2').disabled=true;
        document.getElementById('b3').disabled=true;
        document.getElementById('b7').disabled=true;
        document.getElementById('b8').disabled=true;
        document.getElementById('b9').disabled=true;
        window.alert('Player O Won!');
        return;
    }

    else if((b1=='X'||b1=='O')&&(b2=='X'||b2=='O')&&(b3=='X'||b3=='O')&&
    (b4=='X'||b4=='O')&&(b5=='X'||b5=='O')&&(b6=='X'||b6=='O')&&(b7=='X'||b7=='O')&&
    (b8=='X'||b8=='O')&&(b9=='X'||b9=='O')){
        document.getElementById('print').innerHTML="Match Tied!";
        window.alert("Match Tied!");
        return;
    }

    else {
        if(flag==1){
            document.getElementById('print').innerHTML="Player X Turn";
        }
        else{
            document.getElementById('print').innerHTML="Player O Turn";
        }
    }
}
/* Function to Reset the game */
function Function2(){
    location.reload();
    document.getElementById('b1').innerHTML="";
    document.getElementById('b2').innerHTML="";
    document.getElementById('b3').innerHTML="";
    document.getElementById('b4').innerHTML="";
    document.getElementById('b5').innerHTML="";
    document.getElementById('b6').innerHTML="";
    document.getElementById('b7').innerHTML="";
    document.getElementById('b8').innerHTML="";
    document.getElementById('b9').innerHTML="";
}

var flag=1;
function Function3(){
    if(flag==1){
        document.getElementById('b1').value="X";
        document.getElementById("b1").disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b1').value="O";
        document.getElementById("b1").disabled=true;
        flag=1;
    }
}

function Function4(){
    if(flag==1){
        document.getElementById('b2').value="X";
        document.getElementById('b2').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b2').value="O";
        document.getElementById('b2').disabled=true;
        flag=1;
    }
}

function Function5(){
    if(flag==1){
        document.getElementById('b3').value="X";
        document.getElementById('b3').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b3').value="O";
        document.getElementById('b3').disabled=true;
        flag=1;
    }
}

function Function6(){
    if(flag==1){
        document.getElementById('b4').value="X";
        document.getElementById('b4').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b4').value="O";
        document.getElementById('b4').disabled=true;
        flag=1;
    }
}

function Function7(){
    if(flag==1){
        document.getElementById('b5').value="X";
        document.getElementById('b5').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b5').value="O";
        document.getElementById('b5').disabled=true;
        flag=1;
    }
}

function Function8(){
    if(flag==1){
        document.getElementById('b6').value="X";
        document.getElementById('b6').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b6').value="O";
        document.getElementById('b6').disabled=true;
        flag=1;
    }
}

function Function9(){
    if(flag==1){
        document.getElementById('b7').value="X";
        document.getElementById('b7').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b7').value="O";
        document.getElementById('b7').disabled=true;
        flag=1;
    }
}

function Function10(){
    if(flag==1){
        document.getElementById('b8').value="X";
        document.getElementById('b8').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b8').value="O";
        document.getElementById('b8').disabled=true;
        flag=1;
    }
}

function Function11(){
    if(flag==1){
        document.getElementById('b9').value="X";
        document.getElementById('b9').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b9').value="O";
        document.getElementById('b9').disabled=true;
        flag=1;
    }
}



