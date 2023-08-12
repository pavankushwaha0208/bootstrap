function pavan(){
    let a = parseInt(document.getElementById("hindi").value)
    let b = parseInt(document.getElementById("english").value)
    let c = parseInt(document.getElementById("mathe").value)
    let d = parseInt(document.getElementById("physics").value)
    let e = parseInt(document.getElementById("chemisty").value)
    if(a>100||b>100||c>100||d>100||e>100){
        alert("please enter the currect value");
    }
    else{
        let tot = a+b+c+d+e;
        document.getElementById("tota").innerHTML = tot;
        let per = (tot/500*100).toFixed(2);
        
        document.getElementById("per").innerHTML = per;
        if(a>33&&b>33&&c>33&&d>33&&e>33){
           document.getElementById("Grede").innerHTML = "<sapn style ='color:green;'> Pass </span>"
        }else{
            document.getElementById("Grede").innerHTML = "<sapn style ='color:red;'> Fail </span>"
        }
        if(per >= 80){
            document.getElementById("rm").innerHTML = "A+"
        }
        else if(per >= 60){
            document.getElementById("rm").innerHTML = "A"
        }
        else if(per >= 40){
            document.getElementById("rm").innerHTML = "B"
        }
        else{
            document.getElementById("rm").innerHTML = "F"
        }
    }
return false;
};
