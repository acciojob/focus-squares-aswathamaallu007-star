//your JS code here. If required.
// const square1 = document.getElementId("square1")
// const square2 = document.getElementId("square2")

const squares = document.querySelectorAll(".square")
for(let square of squares){
square.addEventListener("mouseover",colorchange)
square.addEventListener("mouseout",colorback)
}
function colorchange(e){
	const selectedsquare = e.target.id
	for(let square of squares){
		if(selectedsquare != square.id){
			square.style.backgroundColor = "#6F4E37";
		}
	}
function colorback(){
	for(let square of squares){
	square.style.background = "#E6E6FA";}
	
}
