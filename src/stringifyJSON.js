// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var stringified = '';
	var type = Object.prototype.toString.call(obj).slice(8);
	function cutComma() {
		if (stringified.length>1) {
			stringified = stringified.substr(0,stringified.length-1);
		};
	};
	if (type==='Object]') {
		stringified += '{';
		for (var key in obj) {
			var value = stringifyJSON(obj[key]);
			if (value) {
				stringified += '"' + key + '":' + value + ',';
			};
		};
		cutComma();
		stringified += '}';
	}else if (type==='Array]') {
		stringified += '[';
		for (var i =0; i<obj.length; i++) {
			stringified += stringifyJSON(obj[i]) + ',';
		};
		cutComma();
		stringified += ']';
	}else if (type==='String]') {
		stringified += '"' + obj + '"';
	}else if (type==='Number]'||type==='Boolean]'||type==='Null]'){
		stringified += obj;
	};
	return stringified;
};