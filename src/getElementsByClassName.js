// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var elementsArr = [];
	goThroughNodes(document.body.childNodes);
	return elementsArr;

	function goThroughNodes(parent) {
		
		for (var i = 0; i<parent.length; i++) {
			var node = parent[i]
			var nodeClass = node.classList;
			if (_.contains(nodeClass, className)) {
				elementsArr.push(node);
			}
			if (!(nodeClass === undefined)) {
				goThroughNodes(node.childNodes);
			}
		}
	}
};
