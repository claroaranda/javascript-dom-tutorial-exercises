// Delete
let allLi = document.querySelectorAll('li');
let ul = document.querySelector('#listToDo');

function deleteTask(event) {
  let iTag = event.target.localName; //event.srcElement.localName;

  if (iTag == 'i') {
    let selectedli = (event.target.parentNode).parentNode;
    
    //selectedli.parentNode.removeChild(selectedli);
    
    ul.removeChild(selectedli);
    allLi = document.querySelectorAll('li');
    console.log('Delete');
    console.log(allLi);
  }
}

allLi.forEach(li => li.addEventListener('click', deleteTask));

// Add
let input = document.querySelector('#addToDo');

function addTask(event) {
    let liTag = document.createElement('li');

    liTag.innerHTML = `<span><i class="fa fa-trash"></i></span> ${this.value}`;
    ul.appendChild(liTag);
    
    this.value = '';
    allLi = document.querySelectorAll('li'); //para que considere al nuevo item
    console.log('Add');
    console.log(allLi);

    /*let iTag = document.createElement('i');
    let spanTag = document.createElement('span');

    iTag.attributes.class = "fa fa-trash";
    liTag.innerHTML = this.value;

    spanTag.appendChild(iTag);
    liTag.appendChild(spanTag);*/
}

input.addEventListener('change', addTask);

// Parche para los nuevos items
/*let div = document.querySelector('#container');

div.addEventListener('click', () => {
    allLi = document.querySelectorAll('li');
});*/