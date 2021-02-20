import React from 'react';
import "./index.css";
import {InputGroup,FormControl,Button} from "react-bootstrap";




const Todo = (props) => {
    return (
        <div className="margin">
           <InputGroup className="mb-3">
                <FormControl onChange={props.change}
                placeholder="Ajouter Todo"
                aria-label="Ajouter Todo"
                aria-describedby="basic-addon2"
                value = {props.value}
                />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={props.clickMe}>Calculer</Button>
            </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default Todo;