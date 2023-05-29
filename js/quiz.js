const btn = document.getElementById("endbtn");
const s1 = document.getElementById("1soru");
const s2 = document.getElementById("2soru");
const s3 = document.getElementById("3soru");
const s4 = document.getElementById("4soru");
const s5 = document.getElementById("5soru");
var iframe =document.getElementById("iframe");

function end(){
    //use iframe
    var i=0;

    if(s1.value=="1")
        i++;
    if(s2.value=="3")
        i++;
     if(s3.value=="2")
        i++;
    if(s4.value=="1")
        i++;
    if(s5.value=="2")
        i++;

        if(i==5){
            iframe.innerHTML="<h3>Tebrikler, testi fullediniz!</h3>";

        }else{
            iframe.innerHTML="<h3> "+i+" tane doğru cevabın var.</h3>";

        }
    }

function enden(){
    //use iframe
    var i=0;

    if(s1.value=="1")
        i++;
    if(s2.value=="3")
        i++;
     if(s3.value=="2")
        i++;
    if(s4.value=="1")
        i++;
    if(s5.value=="2")
        i++;
        if(i==5){
            iframe.innerHTML="<h3>Congrats, you get perfect score at the test!</h3>";

        }else{
            iframe.innerHTML="<h3>You have "+i +" right answers</h3>";

        }
    
}

