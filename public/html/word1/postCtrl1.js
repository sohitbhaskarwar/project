var rwords=[];
var rcolors=[];
var n = 5;
var obj=[];
var a,b,wor,col;
var words=["RED","BLACK","GREEN"];
var colors=["RED","BLACK","GREEN"];

setTimeout(move,0);
function move() 
{
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 40);
  function frame() 
  {
    if (width >= 100) 
    {
      clearInterval(id);
    }
    else 
    {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}  

setTimeout(countDown,0);
function countDown()
{
   n--;
   if(n > 0)
   {
      setTimeout(countDown,1000);
   }
   //document.getElementById("cd").style.display="none";
   //document.getElementById("ef").style.display="none";
   document.getElementById("tab").style.display="none";
   document.getElementById("div2").style.display="none";
    //document.getElementById("timer").innerHTML=n;
    document.getElementById("msg").innerHTML="LEVEL 1";
    var z=0;
    while (words.length > 0) 
    {

		 a=getRndInteger(colors);
	     b=getRndInteger(words);
	     var para = document.createElement("h1");
		 var node = document.createTextNode(words[b]);
		  rwords[z]=words[b];
		 wor=words.splice(b, 1);
		 
		 para.style.color=colors[a];
		 rcolors[z]=colors[a];
		 col=colors.splice(a, 1);
		 
		  para.appendChild(node);
		 var element = document.getElementById("div1");
		 element.appendChild(para);
		 z++;
    }

	function getRndInteger(ab) 
	{
    	return Math.floor(Math.random() * ab.length);
	}		

	if (n==0) 
	{
		document.getElementById("msg").innerHTML="Lets Recall";
		perform();
	}
}

function perform()
{
	var colors1=["RED","BLACK","GREEN"];
	var rate=["s1","s2","s3"];
	document.getElementById("myBar").style.display="none";
	document.getElementById("myProgress").style.display="none";
	 //document.getElementById("timer").style.display="none";
	 document.getElementById("div2").style.display="block";
	 document.getElementById("div1").style.display="none";
	 document.getElementById("tab").style.display="block";
	 
	 var table = document.getElementById("table");  // set this to your table

	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	for(var i=0;i<colors1.length;i++)
	{
	    var row = document.createElement("tr");
	    row.className="row";
		var cell1 = document.createElement("td");
	    var cell2 = document.createElement("td");
	    var text1 = document.createTextNode(colors1[i]);
	    text1.align="center";
	    var text2 = document.createElement("Input");
	    text2.className="form-control";
	    text2.setAttribute("id", rate[i]);
	    cell1.appendChild(text1);
	    cell2.appendChild(text2);
	    row.appendChild(cell1);
	    row.appendChild(cell2);
	    tbody.appendChild(row);
	}
}
	
function result()
{
	var colors2=["RED","BLACK","GREEN"];
	var ans=[];
	var count=0;
	var rate=["s1","s2","s3"];
	for(var i=0;i<rate.length;i++)
	{
		var x=document.getElementById(rate[i]).value;
		ans[i]=x.toUpperCase();
	}
	
	for(var z=0;z<colors2.length;z++)
	{
		var index=rcolors.indexOf(colors2[z]);
		//console.log(index);
		//document.getElementById("ab").innerHTML=index;
		if(rwords[index]==ans[z])
		{
			count++;
		}
	}
	if(count==colors2.length)
	{
	 	//document.getElementById("ab").innerHTML=count;
	 	$("#cd").modal();
	 	//document.getElementById("cd").style.display="block";
	}
	else
	{
	 	$("#ef").modal();
	 	//document.getElementById("ef").style.display="block";	 	
	}
};

function next()
{
		$("#cd").modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
 		window.location.href="#!xyz2";
 }

function retry()
{
		$("#ef").modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		window.location.href="#!xyz1";
}

function menu()
{
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
 		window.location.href="#/";
}
	



