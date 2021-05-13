const inputUrl= document.querySelector('#input-url');
const button1=document.querySelector('#buttonAdd');
const container=document.querySelector('#container');

const addImage=()=>{
    const srcImgValue= inputUrl.value;
    if(inputUrl.value !=""){    
        console.log(srcImgValue);
        const image=document.createElement("img");
        console.log(image);
        image.setAttribute("src", srcImgValue);
        container.appendChild(image);
        document.getElementById('input-url').value = "";

        const removeImg=()=>{
            container.removeChild(image);
    }
    image.addEventListener('click', removeImg);
}
}
button1.addEventListener('click', addImage);