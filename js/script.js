
 var allProducts = document.querySelectorAll(".profile-name")
 var div1 = document.getElementById("div1")
 var btn1 = document.getElementById("showPrice")
 var res= document.getElementById("result")
  var totalPrice = 0

 allProducts.forEach(function (item) {
     item.onclick = function (){
         totalPrice +=  +(item.getAttribute("price"))
         div1.innerHTML += item.textContent + " "

         if (div1.innerHTML != ""){
             btn1.style.display = "block"
            
         }

     }
 })
 btn1.onclick = function (){
     result.innerHTML = totalPrice
 }







