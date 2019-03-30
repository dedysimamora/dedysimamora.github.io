


var g = document.getElementsByClassName("overlay");

for(i=0;i<g.length;i++){
  if(i == 0){
    g[i].addEventListener("click", dollarfunc)
  }
  if(i == 1){
    g[i].addEventListener("click", eurofunc)
  }
  if(i == 2){
    g[i].addEventListener("click", poundsterlingfunc)
  }
  if(i == 3){
    g[i].addEventListener("click", yenfunc)
  }
  
}




function dollarfunc(){
  document.getElementById("judlconvert").innerHTML = "Convert Rupiah To USD";
    document.getElementById("myForm").style.display = "block";
    document.getElementById("bgall").style.display = "block";
    document.getElementById("hasildlr").innerHTML = "";
    document.getElementById("rp").value = "0";
    document.addEventListener("keyup", hitungdlr)
}
function eurofunc(){
  document.getElementById("judlconvert").innerHTML = "Convert Rupiah To Euro";
  document.getElementById("myForm").style.display = "block";
  document.getElementById("bgall").style.display = "block";
  document.getElementById("hasildlr").innerHTML = "";
  document.getElementById("rp").value = "0";
  document.addEventListener("keyup", hitungeuro)
}
function poundsterlingfunc(){
  document.getElementById("judlconvert").innerHTML = "Convert Rupiah To Poundsterling";
  document.getElementById("judlconvert").style.fontSize="18px";
  document.getElementById("myForm").style.display = "block";
  document.getElementById("bgall").style.display = "block";
  document.getElementById("hasildlr").innerHTML = "";
  document.getElementById("rp").value = "0";
  document.addEventListener("keyup", hitungpoundsterling)
}
function yenfunc(){
  document.getElementById("judlconvert").innerHTML = "Convert Rupiah To Yen";
  document.getElementById("myForm").style.display = "block";
  document.getElementById("bgall").style.display = "block";
  document.getElementById("hasildlr").innerHTML = "";
  document.getElementById("rp").value = "0";
  document.addEventListener("keyup", hitungyen)
}

  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("bgall").style.display = "none"
}


function hitungdlr(){
  x = document.getElementById("rp").value;    
  document.getElementById("hasildlr").innerHTML = (x/14218).toFixed(2) + "$";
}
function hitungeuro(){
  x = document.getElementById("rp").value;    
  document.getElementById("hasildlr").innerHTML = (x/15969).toFixed(2) + "€";
}
function hitungpoundsterling(){
  x = document.getElementById("rp").value;    
  document.getElementById("hasildlr").innerHTML = (x/18547).toFixed(2) + "£";
}
function hitungyen(){
  x = document.getElementById("rp").value;    
  document.getElementById("hasildlr").innerHTML = (x/128).toFixed(2) + "¥";
}




