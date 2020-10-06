// $( 'button' ).on('click',()  => {
//     // do something
//     console.log("Hello i am button.")
//   });

  $("#bt1").click(() => {
    // it's the same as before
    console.log("Yeah, you clicked me")
  })
  $(".bt2").click(() => {
    // it's the same as before
    $("#bt1").text("I was changed")
  })
  $(".bt3").click(() =>{
    $('button').css("background-color","red")
  });