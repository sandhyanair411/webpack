import img from './image.jpeg'
import altTxt from './altTxt.txt'
function addImage(){
    const objImg = document.createElement('img');
    objImg.src=img;
    objImg.alt=altTxt;
    objImg.width = '300';
    objImg.height = '300';
    const body = document.querySelector('body');
    body.appendChild(objImg);
}
export default addImage;