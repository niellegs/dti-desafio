import "./css/classe.css";

function Classe({ classes }) {
    return (
        <>
            {classes.map((classe, index) => (
                <div key={index} className="itemClasse">
                    <p>{classe}</p>
                </div>
            ))}
        </>
    )
};

export default Classe;