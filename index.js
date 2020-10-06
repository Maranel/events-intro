// $( 'button' ).on('click',()  => {
//     // do something
//     console.log("Hello i am button.")
//   });

  $("#bt1").click(() => {
    console.log("Yeah, you clicked me")
  })
  $(".bt2").click(() => {

    $("#bt1").text("I was changed")
  })
  $(".bt3").click(() =>{
    $('button').css("background-color","red")
  });