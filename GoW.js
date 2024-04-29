function myFunction(){
    var checkBox1 = document.getElementById("myCheck1");
    var number1 = document.getElementById("numberbox");
    

    if(checkBox1.checked == true){
        number1.style.display = "block";
    }
    else{
        number1.style.display = "none";
    }
}