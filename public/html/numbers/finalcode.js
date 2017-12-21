var rnames=[],randomNumber=[],score=0,actual;
  var c,d;
  function getRndInteger(min, max)
          {
             return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
          
  function nextLevel(a,b){
    var names=["Sonali Baheti","Radhika Agnihotri","Akshay Gahane","Aakash Mishra"];
    c=a;
    d=b;
    var time=5000,guess;
    document.getElementById("div1").style.display="block";
    var element = document.getElementById("div1");
        element.className="container.fluid";
    var s = document.getElementById("buttons");
        s.style.display="none";
    for(i = 1; i < names.length; i++){
      random = Math.round(Math.random() * i);
      var temp = names[i];
      names[i] = names[random];
      names[random] = temp;
    }
              
    randomNumber[0]=getRndInteger(a,b);
    randomNumber[1]=getRndInteger(a,b);
    randomNumber[2]=getRndInteger(a,b);
            
    var paratxt = document.createElement("p");
    var nodetxt = document.createTextNode(names[0]);
    paratxt.appendChild(nodetxt);
    element.appendChild(paratxt);
    rnames[0]=names[0];

            
    var paranum = document.createElement("p");
    var nodenum = document.createTextNode(randomNumber[0]);
    paranum.appendChild(nodenum);
    element.appendChild(paranum);

    var paratxt1 = document.createElement("p");
    var nodetxt1 = document.createTextNode(names[1]);
        paratxt1.appendChild(nodetxt1);
        element.appendChild(paratxt1);
        rnames[1]=names[1];

            
    var paranum1 = document.createElement("p");
    var nodenum1 = document.createTextNode(randomNumber[1]);
        paranum1.appendChild(nodenum1);
        element.appendChild(paranum1);

    var paratxt2 = document.createElement("p");
    var nodetxt2 = document.createTextNode(names[2]);
        paratxt2.appendChild(nodetxt2);
        element.appendChild(paratxt2);
        rnames[2]=names[2];

    var paranum2 = document.createElement("p");
    var nodenum2 = document.createTextNode(randomNumber[2]);
        paranum2.appendChild(nodenum2);
        element.appendChild(paranum2);



      window.setTimeout(function(){
                document.getElementById("div1").style.display="none";
               element.removeChild(paratxt);
               element.removeChild(paratxt1);
               element.removeChild(paratxt2);
               element.removeChild(paranum);
               element.removeChild(paranum1);
               element.removeChild(paranum2);

                
          for (i = 1; i < rnames.length; i++) 
              {
                  random = Math.round(Math.random() * i);
               var temp = rnames[i];
                  rnames[i] = rnames[random];
                  rnames[random] = temp;
              }
          console.log(rnames);
          

         for(i=0;i<rnames.length;i++)
             {
               actual=names.indexOf(rnames[i]);
               console.log(actual);
               //guess=document.getElementById("ansis").value;        
              guess = prompt('What is number of '+rnames[i]);

              if (parseInt(guess) === randomNumber[actual])
                 {
                    score+=10;
                   // document.getElementById("scr").innerHTML="You Scored"+score;
                   /* $("#nxtlev").on('click',function(){*/
                    
                   //});
                   $("#myModalNext").modal();
                  // document.getElementById('nxtlev').onclick="nextLevel(a*10,b*10)";
                    break;
                   //window.location.href="dialoguebox.html";
                }
              else
                {

                   $("#myModalAccept").modal();
                   break;
                   /*var confirm=window.confirm("You Lost!\n The number of "+rnames[i]+" was "+randomNumber[actual]+"\n You want to play again?\nYour score is"+score);
                    */ 
                 }
             }
      },time);
          
  }
   function next(){
      $("#myModalNext").modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      //nextLevel(c*10,d*10);
      window.location.href="#!xyz21"
    }
  function retry(){
       $("#myModalAccept").modal('hide');
       $('body').removeClass('modal-open');
       $('.modal-backdrop').remove();
      nextLevel(c,d);
  }
  function menu(){
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      window.location.href="#/";
   }