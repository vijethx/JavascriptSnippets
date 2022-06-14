const btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
	console.log("Mouse Over");

	const randomHeight = Math.floor(Math.random() * window.innerHeight);
	const randomWidth = Math.floor(Math.random() * window.innerWidth);

	btn.style.left = `${randomWidth}px`;
	btn.style.top = `${randomHeight}px`;
});

btn.addEventListener("click", function () {
	btn.innerText = "You got me";
	document.body.style.backgroundColor = "lightgreen";
});
