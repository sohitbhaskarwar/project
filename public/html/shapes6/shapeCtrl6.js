 

 $(document).ready(function() {

  var app = {
    cards: ['./img/Celtic knot 03-256.png','./img/Celtic knot 03-256.png','./img/Shape8-256.png','./img/Shape8-256.png','./img/Shape-Star2-256.png','./img/Shape-Star2-256.png','./img/Shape9-256.png','./img/Shape9-256.png','./img/Shape10-256.png','./img/Shape10-256.png','./img/Shape31-256.png','./img/Shape31-256.png','./img/Shape43-256.png','./img/Shape43-256.png'],
    init: function() {
      app.shuffle();
    },
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < app.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.cards[i];
        app.cards[i] = app.cards[random];
        app.cards[random] = temp;
      }
      app.assignCards();
      console.log('Shuffled Card Array: ' + app.cards);
    },
    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', app.cards[index]);
        $(this).html('<img class="img1" src="' +$(this).data('cardValue')+'" />');
        
      });
      $('.img1').show(0).delay(3000).hide(0);
     app.clickHandlers();

       },
   clickHandlers: function() {
     $('.card').on('click', function() {
        $(this).html('<img class="img1" src="' +$(this).data('cardValue')+'" />').addClass('selected');
        app.checkMatch();
      });
    },
    checkMatch: function() {
      if ($('.selected').length === 2) {
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).animate({
              opacity: 0
            }).removeClass('unmatched');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          app.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('');
            });
          //  $('.container').html('<h1>You Lost</h1><input type="submit" onclick="'+app.init()+'">');
       app.checkLost();
          }, 1000);

        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) 
      {
        $('.container').html('<h1>You Won!</h1>');
      
        $('#myModalSuccess').modal(); 
        $("#nextlev1").on('click',function(){
          $("#myModalSuccess").modal('hide');
       $('body').removeClass('modal-open');
       $('.modal-backdrop').remove();
      window.location.href = "#!xyz17";
             });

        $("#gtm1").on('click',function(){
           $("#myModalSuccess").modal('hide');
       $('body').removeClass('modal-open');
       $('.modal-backdrop').remove();
      window.location.href = "#/";
             });
      }
    },
    checkLost: function(){
      
       $('.container').html('<h1>You Lost</h1> <br>');
        $('#myModalFail').modal(); 
        $("#gtm2").on('click',function(){
           $("#myModalFail").modal('hide');
       $('body').removeClass('modal-open');
       $('.modal-backdrop').remove();
      window.location.href = "#/";
             });

        $("#tryagain1").on('click',function(){
          $("#tryagain1").modal('hide');
       $('body').removeClass('modal-open');
       $('.modal-backdrop').remove();
        window.location.href = "#!xyz16";

       });
    }
  };
  app.init();
});