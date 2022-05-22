const rate = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('.submitBtn');
const selected = document.getElementsByClassName('selected');
const containter = document.querySelector('.card-container');

for (let i = 0; i < rate.length; i++) {
    rate[i].onclick = function(){
		let j = 0;
		while(j < rate.length){
			rate[j++].className = 'bubble rate';
		}
		rate[i].className = 'bubble rate active';
		submitBtn.disabled = false;
		selected[0].innerText = "You selected " + (i+1) + " out of 5";
	}
}

submitBtn.onclick = () => {
	for (let i = 0; i < rate.length; i++) {
		console.log(rate[i].classList);
		if(rate[i].classList.contains("active")) {
			containter.classList.add('rotate')
		}
	}
}
