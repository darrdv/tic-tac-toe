$(function() {
  var turn = 0;
  var x-player = 0;
  var o-player = 0;

  $('.square').on('click', function(){
    var self = $(this);

    if(self.text()=== ''){
      if(turn % 2 === 0){
        self.text('X');
        magicNum = self.data('position');
        x-player += magicNum;
        if(x-player === 15){
          //game over -- x has won!
        }
      }
      else{
        self.text('O');
        magicNum = self.data('position');
        o-player += magicNum;
        if(o-player === 15){
          //game over -- o has won!
        }
      }
      turn++;
      if(turn === 9){
        //game over -- nobody has one!
      }
    }
  });
});
