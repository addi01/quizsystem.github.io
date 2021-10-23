/*
let result = 0;
let submit = document.getElementById("submit");
submit.addEventListener('click', checkResult);
function checkResult(){
    if(document.getElementById("1qopt1").checked){
        result ++;
    }
    if(document.getElementById("2qopt1").checked){
        result ++;
    }
    if(document.getElementById("3qopt4").checked){
        result ++;
    }

    alert("Acchivment: " + result);
    result="";
}
*/
let result=0,submit=document.getElementById("submit");function checkResult(){document.getElementById("1qopt1").checked&&result++,document.getElementById("2qopt1").checked&&result++,document.getElementById("3qopt4").checked&&result++,alert("Acchivment: "+result),result=""}submit.addEventListener("click",checkResult);