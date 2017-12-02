function createBlemish(type, x, y){
	this.blemish = type;

	//this.showType = function(){
	//	return "This is a " + this.type;
	//} 

	this.position = new vectorTwo(x,y);

}
 

BlemishEnum = {
	SCAR : 0,
	CYST : 1,
	DRY_SKIN : 2,
	SUNBURN : 3, 
	BLACKHEAD : 4,
	WHITEHEAD : 5,
	REDHEAD : 6
}