$(document).ready(function(){  
   api = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=c5256705375434bfb579890a944cb4e2";
   
   //get JSON from openweather.org..
  $.getJSON(api, function(response){

  	var sysChange = false;
  	var unit = 'C';

  	//get temp from JSON..
    var KTemp = response.main.temp;
    var city = response.name;
    var country = response.sys.country;
    var des = response.weather[0].main;
    genIcon(des);
    var CTemp = Math.round(KTemp - 273.15, 2);
    var FTemp = Math.round(CTemp * (9/5) + 32, 4);

    $("#city").text(city +','+     country);
    //$("#country").text(country);

    var temp = CTemp;
    setTemp();

    //switch from Fahrenheit to Celcius..
    $(".unit").on("click",function(){
    	if(sysChange){
    		unit = 'C';
    		temp = CTemp;
    		setTemp();
    		sysChange = false;
    	}else{
    		unit = 'F';
    		temp = FTemp;
    		setTemp();
    		sysChange = true;
    	}	
    });

    // set temperature..
    function setTemp(){
    	$("#long").text(temp);
    	$("#unit").text(unit);
    }

    function genIcon(des){
    	var des = des.toLowerCase();
    	switch(des){
    		case 'dizzle':
        	addIcon(des)
        	break;
      		case 'clouds':
        	addIcon(des)
        	break;
      		case 'rain':
        	addIcon(des)
        	break;
      		case 'snow':
        	addIcon(des)
        	break;
      		case 'clear':
        	addIcon(des)
       		break;
      		case 'thunderstom':
        	addIcon(des)
        	break;
      		default:
    		$('div.cloud').removeClass('hide');
    	}
    }

    function addIcon(des){
    	$('div.'+des).removeClass('hide');
    }


  });
});