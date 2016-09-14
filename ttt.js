//Ensure the dom is ready first.

$(function() {
  var turn = 0;
  var x-player = 0;
  var y-player = 0;

  $('.square').on('click', function(){
    var self = $(this);



    if(self.text()=== ''){
      if(turn % 2 === 0){
        self.text('X');
        magicNum = self.data('position');
        x-player += magicNum;
        if(x-player === 15){
          //game over x has won!
        }
      }
      else{
        self.text('O');
      }
      turn++;
    }else{

    }
  });
});

//can use magic squares algorithm.
