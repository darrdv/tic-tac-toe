$(function() {
  var turn = 9;
  var x_player = 0;
  var o_player = 0;

  $('.square').on('click', function(){
    var self = $(this);

    if(self.text()=== ''){
      if(turn % 2 === 0){
        self.text('X');
        magicNum = self.data('position');
        x_player += magicNum;
        if(x_player === 15){
          //game over -- x has won!
        }
      }
      else{
        self.text('O');
        magicNum = self.data('position');
        o_player += magicNum;
        if(o_player === 15){
          //game over -- o has won!
        }
      }
      turn--;
      if(turn === 0){
        //game over -- nobody has won!
      }
    }
  });
});
