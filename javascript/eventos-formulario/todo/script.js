let inputText = document.getElementById('added-text');
const button = document.querySelector('#button-todo');
const list=document.querySelector('#list');


const mostrar=()=>{
    const inputTextValue= inputText.value;
    const li = document.createElement("li");
    li.textContent=inputTextValue;
    list.appendChild(li);
    document.getElementById('added-text').value = "";
}

button.addEventListener('click', mostrar);

