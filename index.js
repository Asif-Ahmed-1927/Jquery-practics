//$(".my-div h1").text("hi")
//$("#p1, h1").html("<b>hi</b>")
//$("#p1").append("hi")
//$("#p1").prepend("hi")

//var mypara1= $("<p></p>").text("this is para 0")
//$("#p1").after(mypara1)
//$("#p1").before(mypara1)

 //css add

 //$("h1").css("color", "red");

 //$("h1").css({"color": "green", "font-size": "3rem"});

 //$("h1").addClass("style1")

 //event listener

//  $("button").click(function(){
//      $("h2").text("you have clicked the button")
//  })

//  $("button").click(function(){
//      $("h2").toggleClass("style1")
//  })

//multiple button

// $(".mybutton").click(function(){
//     var value= this.innerHTML;
//     $("h2").text(value + " is clicked")
// })

// $(".mybutton").on("click", function(){
//     var value= this.innerHTML;
//     $("h2").text(value + " is clicked")
// })

// $(".mybutton").on("mouseover", function(){
//     var value= this.innerHTML;
//     $("h2").text(value + " is clicked")
// })

//login button eventLisetner

// $("#loginButton").click(function(){

//     var password1= $("#pass1").val();
//     var password2= $("#pass2").val();

//     if(password1 != "" && password2 != ""){

//         if(password1 == password2){
//             alert("successfully login")
//         } else{
//             alert("password mismatch")
//         }

//     }else{
//         alert("please enter password")
//     }
    
// })

//animation

// $("#btn").click(function(){
//     $("#div1").hide(1000).show(2000);
// })

// $("#btn").click(function(){
//     $("#div1").toggle(3000);
// })

// $("#btn").click(function(){
//     $("#div1").fadeOut(3000);
// })

// $("#btn").click(function(){
//     $("#div1").fadeIn(3000);
// })
 
// $("#btn").click(function(){
//     $("#div1").fadeToggle(3000);
// })
 
// $("#btn").click(function(){
//     $("#div1").fadeTo(2000, 0.3);
// })
 
// $("#btn").click(function(){
//     $("#div1").slideUp(3000);
// })

// $("#btn").click(function(){
//     $("#div1").slideDown(2000);
// });

// $("#btn").click(function(){
//     $("#div1").slideToggle(2000);
// });

//animate method

// $("#btn").click(function(){
//     $("#div1").animate({opacity:"0.5"},2000);
// })

$("#btn").click(function(){
    $("#div1").animate(
        {

            height:"400px", 
            width:"900px",
            marginLeft: "30px"

        },2000);
})
 

