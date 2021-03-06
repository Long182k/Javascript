(function (global) {

//Set up a namespace for our utility
var ajaxUtils = {};

// Returns an HTTP request object
function getRequestObject(){
	if(window.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if (window.ActiveXOject) {
		//For very old IE browsers (optional)
		return (new ActiveXOject("Microsoft.XMLHTTP"));
	}
}
	else {
		global.alert("Ajax is not supported!");
		return(null);
	}
}
var request = getRequestObject();
var myhandler = null;

//Make an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
	function(requestUrl, responseHandler) {
		var request = getRequestObject();
		request.onreadystatechange = 
			handleResponse;
		};
	request.open("GET",requestUrl, true);
	request.send(null); // for POST only
	};
// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error

function handleResponse (request, responseHandler) {
	if ((request.readyState==4) && (request.status == 200)){
		responseHandler(request);
	}
}

//Expose utility to the global object 	

global.$ajaxUtils = ajaxUtils;

}) (window);