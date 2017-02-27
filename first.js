(function(globel,factory){
	if (typeof define === 'function' && define.amd){
		define(function () { return factory(global) });
	}else{
		factory(global);
	}
})(this,function(window){
	var Zepto = (function(){
	var undefined,
		key,
		$,
		classList,
		emptyArray = [],
		concat = emptyArray.concat,
		filter = emptyArray.filter,
		slice = emptyArray.slice,
		document = window.codument,
		elementDisplay = {},
		classCache = {},
		cssNumber = {
			'column-count': 1,
			'columns': 1,
			'font-weight': 1,
			'line-height': 1,
			'opacity': 1,
			'z-index': 1,
			'zoom': 1
		},
		fragmentRE ="" ,
		singleTageRE ="" ,
		tagExpanderRE ="" ,
		rootNodeRE = "",
		capitalRE = "",
		methodAttributes = ['val', 'css', 'html', 'text','data', 'width', 'height', 'offset'],
		methodAttributes="",
		readyRE = "",
		simpleSelectorRE = "",
		class2type ={},
		toString = class2type.toString,
		zepto = {},
		camelize,
		uniq,
		tempParent = document.createElement('div'),
		propMap = {},
		isArray = Array.isArray || function (obj){return obj instanceof Array};
		
		zepto.matches = function(element, selector){
			//返回错误处理
			if(!selector || !element || element.nodeType !=1){
				return false;
			};
			//是否匹配选择器
			var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector ||element.mozMatchesSelector || element.matchesSelector;
			if(matchesSelector){
				matchesSelector.call(element, selector);
			};
			//没有父级就是添加	
			var match,
				parent = element.parentNode,
				temp = !parent;
			if(temp){
				(parent = tempParent).appendChild(element);
			};
			match = ~zepto.qsa(parent, selector).indexOf(element);
			temp && tempParent.removeChild(element);
			return match;
		};
		
		zepto.qsa = function(element, selector){
			var found,
				maybeID = selector[0] == '#',
				maybeClass = !maybeID && selector[0] == '.',
				nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
				isSimple = simpleSelectorRE.test(nameOnly);
		};
		
		
		//Zepto下有  zepto.z  Z  $.fn
		zepto.Z.prototype = Z.prototype = $.fn
		return $;
	})();
	
	window.Zepto = Zepto;
	window.$ === undefined && (window.$ = Zepto)
	
});

