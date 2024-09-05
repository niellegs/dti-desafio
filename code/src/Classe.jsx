import React from "react";
import "./css/classe.css";

function Classe({ classes, onSelectClasse }) {
    return (
        <>
            {classes.map((classe, index) => (
                <div
                    key={index}
                    className="itemClasse"
                    onClick={() => onSelectClasse(classe)}
                >
                    <p>{classe}</p>
                </div>
            ))}
        </>
    );
}

export default Classe;
