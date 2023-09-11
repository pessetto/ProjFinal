import { ChakraProvider } from "@chakra-ui/react";
import Rotas from "./Rotas/Rotas";
// import Home from "./Telas/Home/Home";
// import Cadastro from '../src/Telas/Cadastro/Cadastro'
// import BemVindo from '../src/Telas/Bem-vindo/Bem-vindo'
// import HeaderSim from '../src/Componentes/Header 1/Header'
// import Footer from '../src/Componentes/Footer/Footer'
// import Feed from '../src/Telas/Forum/Feed/Feed'
// import Forum from '../src/Telas/Forum/Feed/Feed'
// import HeaderDia from '../src/Componentes/HeaderDiario/Header'
// import DiaDia from "./Telas/Calendário/Dia-Dia/DiaDia";
// import HeaderTec from '../src/Componentes/HeaderTec/Header'
// import Usuario from '../src/Telas/Usuario/Usuario'
// import Calendar from './Telas/Calendário/Dia-Dia/DiaDia'
// import Escrever from "./Telas/Diário/Pesquisa/Pesquisa";
// import Login from "./Telas/Login/Login";



function App() {
  return (
    <div>
      <ChakraProvider>
        <Rotas/>
      </ChakraProvider>
    </div>
  );
}

export default App;
