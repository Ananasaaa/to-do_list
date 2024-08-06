const body = document.body;
const input = document.createElement('input');
input.type = 'text';
input.style.marginRight = '10px';
body.appendChild(input);

const button = document.createElement('button');
button.textContent = 'Add task';
body.appendChild(button);

const ul = document.createElement('ul');
body.appendChild(ul);

button.addEventListener('click', function() {
    const taskText = input.value;
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = '';
});

ul.addEventListener('click', e => {
    const button = e.target.closest('button');
    button.parentElement.remove();
});