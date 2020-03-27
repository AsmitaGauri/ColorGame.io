// var colors=["rgb(255, 0, 0)",
//              "rgb(255, 255, 0)",
//              "rgb(0, 255, 0)",
//              "rgb(0, 255, 255)",
//              "rgb(0, 0, 255)",
//              "rgb(255, 0, 255)"
//              ]
var nosquares=6;

var colors=generateRandomColor(nosquares);
var squares=document.querySelectorAll(".square");
var picked=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=picked;
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var h1=document.querySelector("h1");
for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		if(this.textContent === "Easy"){
			nosquares=3;
		}else{
			nosquares=6;
		}
		reset();

	});
}
function reset(){
	colors=generateRandomColor(nosquares);
	picked=pickColor();
	colorDisplay.textContent=picked;
	resetButton.textContent="New Colors"

	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue";
}
// easyBtn.addEventListener("click",function(){
//  hardBtn.classList.remove("selected");
//  easyBtn.classList.add("selected");
//  nosquares=3;
//  colors=generateRandomColor(nosquares);
//  picked=pickColor();
//  colorDisplay.textContent=pickColor();
//  for(var i=0;i<squares.length;i++){
//  	if(colors[i]){
//  		squares[i].style.backgroundColor=colors[i];
//  	}else{
//  		squares[i].style.display="none"
//  	}
 	
//    }
// })

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     nosquares=6;
//     colors=generateRandomColor(nosquares);
//    picked=pickColor();
//  colorDisplay.textContent=pickColor();
//  for(var i=0;i<squares.length;i++){
 	
//  		squares[i].style.backgroundColor=colors[i];
 	
//  		squares[i].style.display="block"
 	
 	
//    }
// })

resetButton.addEventListener("click",function(){
	reset();


})

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===picked){
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?"
			changeColors(clickedcolor);

			h1.style.backgroundColor=clickedcolor;
		}else{
			this.style.backgroundColor="#232323"
			messageDisplay.textContent="Try Again"
		}
	});
}
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}
function randomColor(){
	 var r=Math.floor(Math.random() * 256);
	 var g=Math.floor(Math.random() * 256);
	 var b=Math.floor(Math.random() * 256);
	 // "rgb(r, g, b)"
	 return "rgb(" + r + ", " + g + ", " + b + ")";

}