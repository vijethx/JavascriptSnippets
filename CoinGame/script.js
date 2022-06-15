function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keydown", function (e) {
	switch (e.key) {
		case "ArrowDown":
			moveVertical(avatar, 50);
			break;
		case "ArrowUp":
			moveVertical(avatar, -50);
			break;
		case "ArrowLeft":
			moveHorizontal(avatar, -50);
			avatar.style.transform = "scale(-1,1)";
			break;
		case "ArrowRight":
			moveHorizontal(avatar, 50);
			avatar.style.transform = "scale(1,1)";
			break;
	}
	if (isTouching(avatar, coin)) {
		moveCoin();
	}
});

const moveVertical = (element, value) => {
	const currTop = extractPos(avatar.style.top);
	element.style.top = `${currTop + value}px`;
};

const moveHorizontal = (element, value) => {
	const currLeft = extractPos(avatar.style.left);
	element.style.left = `${currLeft + value}px`;
};

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
	coin.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
	coin.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
};

moveCoin();
