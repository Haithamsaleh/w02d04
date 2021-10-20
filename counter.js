const deceBtn = document.getElementById('dece');
// const inceBtn = document.getElementById('ince');
const resetBtn = document.getElementById('reset');

const counter = document.querySelector('p');

const inceBtn = document.createElement('button');
inceBtn.id = 'ince';
inceBtn.innerText = 'Increese';
inceBtn.className = 'btn';
inceBtn.className = 'btn-danger';

const btns = document.querySelector('.btns');

btns.append(inceBtn);

let count = 0;

counter.innerText = count;

// event functions
const decrease = () => {
	--count;
	counter.innerText = count;
	if (count < 0) counter.style.color = 'red';
};

const increase = () => {
	++count;
	counter.innerText = count;
	if (count > 0) counter.style.color = 'green';
};

const reset = () => {
	count = 0;
	counter.innerText = count;
	counter.style.color = 'black';
};

deceBtn.addEventListener('click', decrease);
inceBtn.addEventListener('click', increase);
resetBtn.addEventListener('click', reset);
