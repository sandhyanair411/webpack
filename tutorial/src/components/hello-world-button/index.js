import './index.css'

class HelloWorldButton {

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Click Me';
        button.classList.add('hello-world-button')
        const body = document.querySelector('body');
        body.appendChild(button);
        button.onclick = function(){
            const p = document.createElement('p');
            p.innerHTML = 'Hello World!';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }

     
    }
}
export default HelloWorldButton;