var mysql = require('mysql');
//var pr = require('process');
var bodyparser = require('body-parser');
var fs = require('fs');
var file_data;
var final_username,player_name;

var express = require('express');
var app = express();

app.use(express.static('public'));
//var db_id = pr.argv[2];
//var db_name = pr.argv[3];

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "system",
  database: "sys"
});


con.connect(function(err) {
		if (err) ;
		console.log("Connected!");
		});

	

		
app.get('/add/:usn',sendData);

function sendData(request,response){
	
	console.log("START");
	var data = request.params;
	var username = data.usn;
	
	
	console.log(" "+username+" ");
		
		
		
		
	var q2 = "insert into total_recall values('"+username+"','1','1','1','1');"; 
	//console.log(q2);
	
	con.query(q2,function(err,result){
		if(result)
			var asd="USERNAME SUCCESSFULLY ADDED"; 
		else
			var asd="USERNAME ALREADY EXISTS";
		
		response.send(asd);
	});	
}
app.get('/login/:user',find_username);

function find_username(request,response){
	
	console.log("find route");
	
	var data2 = request.params;
	var exist_usn = data2.user;
	
	var q4 = "select * from total_recall where name='"+exist_usn+"';";
		
	con.query(q4,function(err,result){
	 
	 console.log(result); 
	 response.send(result);
	 
	 final_username = result;
	  player_name = exist_usn;
  });
}

//console.log(final_username);
	app.get('/extract',execute);
	
	function execute(request,response){
		var q5 = "select * from total_recall where name='"+player_name+"';";
		con.query(q5,function(err,result){
	 
	 console.log(q5); 
	 console.log(result);
	 
	 final_username = result;
	 response.send(final_username);
  });
		
	}
	app.get('/extract1',execute1);
	
	function execute1(request,response){
		 
	 console.log(player_name);
	 response.send(player_name);
  }

    
  

	app.get('/update_color/:scr',display2);

function display2(req,res){
	console.log("display2");
	var data2 = req.params;
	var score13 = data2.scr;
	var q8 = "select colors from total_recall where name='"+player_name+"';";
	console.log(q8);
	con.query(q8,function(err,result)
	{
		console.log(result);
	if(result[0].colors<score13)
	{

		var q6 = "update total_recall set colors='"+score13+"' where name='"+player_name+"'";
		console.log(q6);
		con.query(q6,function(err,result){});
	}
  });
}

app.get('/update_number/:scr',display3);

function display3(req,res){
	console.log("display3");
	var data2 = req.params;
	var score13 = data2.scr;
	var q10 = "select numb from total_recall where name='"+player_name+"';";
	console.log(q10);
	con.query(q10,function(err,result)
	{
		console.log(result);
	if(result[0].numb<score13)
	{

		var q11 = "update total_recall set numb='"+score13+"' where name='"+player_name+"'";
		console.log(q11);
		con.query(q11,function(err,result){});
	}
  });
}

app.get('/update_shapes/:scr1',display1);

function display1(req,res){
	console.log("display1shapes");
	var data2 = req.params;
	var score12 = data2.scr1;
	var q9 = "select shapes from total_recall where name='"+player_name+"';";

	con.query(q9,function(err,result){
		console.log(result[0].shapes);
		if(result[0].shapes<score12)
		{
	
	var q7 = "update total_recall set shapes='"+score12+"' where name='"+player_name+"';";
	console.log(q7);
	con.query(q7,function(err,result){});
		}
	});
}

  
  var server = app.listen(8082,listening);
function listening(){
	console.log("ec2-34-209-125-251.us-west-2.compute.amazonaws.com    LISTENING....8082");
}
  