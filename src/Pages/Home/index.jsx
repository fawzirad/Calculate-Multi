import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import MySteeper from '../../Composantes/MySteeper';
import Todo from '../../Composantes/Todo';
import Tableau from '../../Composantes/Tableau';


const Home = (props) => {

// States ---------------------------------------------------------------
// Création states pour stocker la valeur //
const [text,setText] = useState(" ") 
const [mynumber,setMynumber] = useState(0)


// Functions --------------------------------------------------------
// Function pour le bouton calculer //
const handleClick = () => {
    if(text!==""){
        setMynumber(parseInt(text))
        setText('')
    }
}

// Function pour le champ de remplissage
const handleChange = (e) => { 
    setText(e.target.value)
}

    return (
        <div>
            <Container>
                <h1>Veuillez compléter votre expérience</h1>
                <MySteeper/>
                {/* Appeller la composante "Todo" */}
                <Todo 
                clickMe = {handleClick} 
                change = {handleChange} 
                value = {text}
                />
                {/* Condition d'affichage de Résultat dans le tableau */}
              <Tableau givnum={mynumber}/>
                
            </Container>
        </div>
    );
};

export default Home;