import img from './image.jpeg'
function addImage(){
    const objImg = document.createElement('img');
    objImg.src=img;
    objImg.width = '300';
    objImg.height = '300';
    const body = document.querySelector('body');
    body.appendChild(objImg);
}
export default addImage;