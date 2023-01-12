function addData(data) {
	let img = document.getElementById("img");
	let hTwo = document.getElementsByTagName("h2");
	let hThree = document.getElementsByTagName("h3");
	let pByClass = document.getElementsByClassName("gender");
	hTwo[0].textContent = data.name;
	hThree[0].textContent = `Species: ${data.species}`;
	hThree[1].textContent = `Status: ${data.status}`;
	pByClass[0].textContent = `Gender: ${data.gender}`;
	img.setAttribute("src", `${data.image}`);


	let container = document.getElementsByClassName("container");
	if(data.status == "Dead") {
		container[0].style.backgroundColor  = "rgb(228, 153, 153)";
	} else if (data.status == "Alive") {
		container[0].style.backgroundColor  = "rgb(173, 231, 173";
	} else if (data.status == "unknown") {
		container[0].style.backgroundColor  = "rgb(185, 185, 185)";
	}
}


function getRequest() {
	let number = Math.round((Math.random() *100) + 1);
	let url = `https://rickandmortyapi.com/api/character/${number}`;
	fetch(url)
	.then(res => res.json())
	.then(data=>addData(data))
	.catch(error => {
		console.error(error);
	});
}

document.onload = getRequest();
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	getRequest();
}, false);

