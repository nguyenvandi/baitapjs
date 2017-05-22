function BinarySearchTree(){
	this.root = null;
}
	///tao nut
BinarySearchTree.prototype.taonutcay = function(value){
	var node = {};
	node.value = value;
	node.left = null;
	node.right = null;
	return node;

};
//chen nut
BinarySearchTree.prototype.chennut = function(nut){
	var value = nut.value;
	var d = function(node){
	if (value == node.value){
		return;
	} else if (value > node.value){
		if (!node.right) {
			node.right = nut;
			return;
		}else
		d(node.right);
	}else if(value < node.value){
		if (!node.left) {
			node.left = nut;
			return;
		} else
		d(node.left);
	}
	};
	d(this.root);

};
//themNut
BinarySearchTree.prototype.themnutcay = function(value){
	var nut = this.taonutcay(value);
	if (!this.root){
		this.root = nut;

	}
	else{
		this.chennut(nut);
	}


BinarySearchTree.prototype.contains = function(value){
	var node = this.root;
	var d = function(node){
		if(!node) return false;
		if (value == node.value) {
			return true;
		}else if (value > node.value){
			return d(node.right);
		}else if (value < node.value) {
			return d(node.left);
		}

	};
	return d(node);
};
//tim tat ca cac con trai
BinarySearchTree.prototype.breadthFisrtLTR = function(){
	var node = this.root;
	var hang = [node];
	var kq = [];
	while (node =hang.shift()){
		kq.push(node.value);
		node.left && hang.push(node.left);
		node.right && hang.push(node.right);
	}
	return kq;
};
//tim tat ca con phai
BinarySearchTree.prototype.breadthFisrtRTL = function(){
	var node = this.root;
	var hang = [node];
	var kq = [];
	while (node = hang.shift()){
		kq.push(node.value);		
		node.right && hang.push(node.right);
		node.left && hang.push(node.left);
	}
	return kq;
};
BinarySearchTree.prototype.preOrder = function(){
	var kq = [];
	var node = this.root;
	var d = function(node){
		kq.push(node.value);
		node.left && d(node.left);
		node.right && d(node.right);
	};
	d(node);
	return kq;
};
