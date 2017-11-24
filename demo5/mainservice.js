
var mainsev = angular.module('mainsev', [])

// 服务 ser
mainsev.service('addsev', function(){
	this.say = function () {
		return "889adf8"
	}

	this.items = {}

	this.addToCart = function (item) {
		var _item = this.items[item.id];
		if (_item) {
			_item.count += 1
		} else {
			item.count = 1;
			this.items[item.id] = item
		}

		console.log(this.items)
	}

	this.test = function () {
		console.log("test")
	}
})