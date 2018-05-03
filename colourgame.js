var num=6;
var colors=randomColourGenerator(num);
var pickedColour=pickColour();
var squares=document.querySelectorAll(".square");
var colourDisplay=document.querySelector("#colourDisplay");
var h1=document.querySelector("h1");
var displayMessage=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var  hardbtn=document.querySelector("#hardbtn");

//generate random colours
function randomColourGenerator(num){
	var arr=[];
	for (i=0; i<num; i++){
		arr[i]=randomColour();
	}
	return arr;
}
function randomColour(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return ("rgb("+r+", "+g+", "+b+")");
}


//assign colour to every square
for(i=0; i<num; i++)
{
	squares[i].style.background=colors[i];
}

//pick a random colour to be ans
function pickColour(colour){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

//display picked colour rgb
colourDisplay.textContent = pickedColour;

//check if clicked colour is same as picked colour
for(i=0; i<num; i++)
{
	squares[i].addEventListener("click", function(){
		var clickedColour=this.style.background;
		if(clickedColour===pickedColour){
			displayMessage.textContent="CORRECT!"
			changeColours(clickedColour);
			h1.style.background=clickedColour;
			resetButton.textContent="Play Again?";
		}
		else{
			displayMessage.textContent="TRY AGAIN!"
			this.style.background="#232323";
		}
	})
}
function changeColours(clickedColour)
{
	for(i=0; i<num; i++)
	{
		squares[i].style.background=clickedColour;
	}
}

//reset button
resetButton.addEventListener("click", function(){
	//generate new random colours
	colors = randomColourGenerator(num);
	//pick new random colour as answer
	pickedColour = pickColour();
	//change colour display
	colourDisplay.textContent = pickedColour;
	//change the colours of the squares
	for(i=0; i<num; i++){
		squares[i].style.background=colors[i];
	}
	//change h1 background
	h1.style.background="steelblue";
	//change message display
	displayMessage.textContent="";
	//change  reset to new colours
	this.textContent="New colours"
})

//easy button
easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	h1.style.background="steelblue";
	num=3;
	colors=randomColourGenerator(num);
	pickedColour= pickColour();
	colourDisplay.textContent= pickedColour;
	for(i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})

//hard button
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	h1.style.background="steelblue";
	num=6;
	colors=randomColourGenerator(num);
	pickedColour= pickColour();
	colourDisplay.textContent= pickedColour;
	for(i=0; i<squares.length; i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
})