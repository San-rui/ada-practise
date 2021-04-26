const list=document.querySelector('#list');
list.style=`font-weight: 700;`

const emails=document.getElementsByClassName('email');

const leido=(i)=>{
    emails.style=`color:red;`
};

for(let i=0; i < emails.length; i++){
    emails[i].addEventListener('click', leido(i))
};


