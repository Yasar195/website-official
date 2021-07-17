import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
    const obj = {
        front: "front-end-developer",
        back: "back-end-developer"
    }
    const [prof, setProf] = useState(obj.front);

    setInterval(() => handleChange(), 3000);

    function handleChange (){
        if(prof == "front-end-developer"){
            setProf(obj.back);
        }
        else{
            setProf(obj.front);
        }
    }

    useEffect(()=>{
        const text = document.getElementById("prof");
        text.textContent = "";
        for(let i=0; i<prof.length; i++){
            const span = document.createElement('span');
            span.append(prof[i]);
            text.appendChild(span);
        }
    })
    return(
        <div className="app">
            <section>
                <h1 id="textanim">Hello iam Yasar arafath</h1>
                <span id="prof"></span>
            </section>
            <section>
                <button className="button">My Projects</button>
            </section>
        </div>
    )
}

export default App;