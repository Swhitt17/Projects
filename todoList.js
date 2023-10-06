document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector('#add-item');
const itemList = document.querySelector('#item-list');


form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'Remove';

   const newItem = document.createElement('li');
	newItem.innerText = document.getElementById("todo-item").value;
    
	ItemList.appendChild(newItem);
    newItem.appendChild(removeBtn);
    
    form.reset();

	
});


itemList.addEventListener('click', function(e) {
	if (e.target.tagName === 'LI'){
        e.target.style.textDecoration = 'linethrough';
	}
	else if  (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	
	}
});


});
