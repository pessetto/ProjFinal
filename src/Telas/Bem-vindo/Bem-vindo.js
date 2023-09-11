import Header from "../../Componentes/Header 2/Header"
import '../Bem-vindo/Bem-vindo.css'

function BemVindo() {
    return (
        <>
        <div className="conteiner">
        <Header/>
        <h1 className="h1">OLÁ!</h1>
        <h2 className="h2">COMO VOCÊ ESTÁ SE SENTINDO HOJE?</h2>
        </div>
        </>
    );
  }
  
  export default BemVindo;