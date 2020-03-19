document.getElementById("liHome").addEventListener("click", function(){
    document.getElementById("homedetails").style.display = "block";
    document.getElementById("project").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("contact_me").style.display = "none";
})


document.getElementById("liProject").addEventListener("click", function(){
   document.getElementById("project").style.display = "block";
   document.getElementById("homedetails").style.display = "none";
   document.getElementById("about_me").style.display = "none"; 
   document.getElementById("contact_me").style.display = "none";
 })


document.getElementById("liContact").addEventListener("click", function(){
    document.getElementById("contact_me").style.display = "block";
    document.getElementById("project").style.display = "none";
    document.getElementById("homedetails").style.display = "none";
    document.getElementById("about_me").style.display = "none"; 
})

 document.getElementById("liAbout").addEventListener("click", function(){
     document.getElementById("about_me").style.display = "block";
     document.getElementById("homedetails").style.display = "none";
     document.getElementById("project").style.display = "none";
     document.getElementById("contact_me").style.display = "none";
})