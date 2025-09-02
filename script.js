//your JS code here. If required.
// const square1 = document.getElementId("square1")
// const square2 = document.getElementId("square2")
// const square3 = document.getElementId("square3")
const squares = document.querySelectorAll(".square") 
for(let square of squares){
	square.addEventListener("mouseover",(e)=>addbgcolor(e))
	square.addEventListener("mouseout",(e)=>addfontcolor(e))	
}

function addbgcolor(e){
	const selectboxid = e.target.id
	for(let i = 0;i<squares.length;i++){
		if(squares[i].id !== selectboxid){
			squares[i].style.backgroundColor = "#6F4E37";
		}
		
	}
	
}
function addfontcolor(e){
	for(let square of squares){
		square.style.backgroundColor = "#E6E6FA";
	}
}