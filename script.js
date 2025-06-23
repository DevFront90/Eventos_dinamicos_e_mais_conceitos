$(function() {

    /*fecharClique();

     $('a').click(function(){
        $('.teste').fadeIn();
     });

     function fecharClique(){
        $('.teste').click(function(){
              $(this).fadeOut();
        });
     }*/

  
   /* $('body').on('click','a',function(){
            alert("Você clicou no link!");
            return false;
      });

     setTimeout(function(){
            $('body').html('<a href="#">Meu link!</a>');
     },3000);*/

     
    var func = function() {
      $('input[type=text]').eq($(this).index()).css('background-color','green');
    }

    $('input[type=text]').keydown(func);

   /* $('input[name=nome]').keyup(function(){
        alert("Funcionouuuuuu!");
    })*/


        //Evento on
        //Usado para ligar um ou mais eventos a um elemento.

        //Evento keyup 
        //Disparado quando uma tecla é solta no teclado.

        //keydown 
        //Disparado quando uma tecla é pressionada no teclado.

        //this 
       //Dentro de um evento, this se refere ao elemento que disparou o evento.




});