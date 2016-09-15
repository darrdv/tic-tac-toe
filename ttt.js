$(function() {
  var turns = 9;
  var x_player = 0;
  var o_player = 0;
  var message = $('#message');
  var game_over = false;

  $('.square').on('click', function(){
    var self = $(this);

    if(self.text()=== '' && game_over === false){
      if(turns % 2 === 0){
        self.text('X');
        magicNum = self.data('position');
        x_player += magicNum;
        if(x_player === 15){
          //game over -- x has won!
          game_over = true;
          message.show().html('X has won!');
          setTimeout(function(){ message.hide().html('');}, 3000);
        }
      }
      else{
        self.text('O');
        magicNum = self.data('position');
        o_player += magicNum;
        if(o_player === 15){
          //game over -- o has won!
          game_over = true;
          message.show().html('O has won!');
          setTimeout(function(){ message.hide().html('');}, 3000);
        }
      }
      turns--;

      if(turns === 0){
        //game over -- nobody has won!
        game_over = true;
        message.show().html('Game Over! nobody won.');
        setTimeout(function(){ message.hide().html('');}, 3000);
      }
    }
  });

  $('#reset').on('click', function(){
    turns = 9;
    x_player = 0;
    o_player = 0;
    game_over = false;

    document.getElementById("r1-1").value="";
    document.getElementById("r1-2").value="";
    document.getElementById("r1-3").value="";
    document.getElementById("r2-1").value="";
    document.getElementById("r2-2").value="";
    document.getElementById("r2-3").value="";
    document.getElementById("r3-1").value="";
    document.getElementById("r3-2").value="";
    document.getElementById("r3-3").value="";
 });


});
