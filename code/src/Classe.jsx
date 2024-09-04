import "./css/classe.css";

function Classe() {
    var classes = ["2º ANO - A", "2º ANO - B"]
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