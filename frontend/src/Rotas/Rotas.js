import{ BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Telas/Home/Home"
import Cadastro from "../Telas/Cadastro/Cadastro"
import Login from "../Telas/Login/Login"
import BemVindo from "../Telas/Bem-vindo/Bem-vindo"
import Config from "../Telas/Usuario/Usuario"
import Forum from "../Telas/Forum/Feed/Feed"
import Emoçoes from "../Telas/Calendário/Dia-Dia/DiaDia"
import Diario from "../Telas/Diário/Escrever/Escrever"
import Rede from "../Telas/RedeApoio/RedeApoio"
import PageForum from "../Telas/Forum/Feed/Feed"
import PageChat from "../Telas/Forum/Chat/Chat"
import PageDiaDia from "../Telas/Calendário/Dia-Dia/DiaDia"
import PageAnual from "../Telas/Calendário/Anual/Anual"
import PageGeral from "../Telas/Calendário/Geral/Geral"
import PageDiario from "../Telas/Diário/Escrever/Escrever"
import PagePesquisa from "../Telas/Diário/Pesquisa/Pesquisa"
import PageResposta from "../Telas/Diário/Resposta/Resposta"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="bemVindo" element={<BemVindo/>}/>
                <Route path="Config" element={<Config/>}/>
                <Route path="Forum" element={<Forum/>}/>
                <Route path="Emoçoes" element={<Emoçoes/>}/>
                <Route path="Diario" element={<Diario/>}/>
                <Route path="Rede" element={<Rede/>}/>
                <Route path="PageForum" element={<PageForum/>}/>
                <Route path="PageChat" element={<PageChat/>}/>
                <Route path="PageDiaDia" element={<PageDiaDia/>}/>
                <Route path="PageAnual" element={<PageAnual/>}/>
                <Route path="PageGeral" element={<PageGeral/>}/>
                <Route path="PageDiario" element={<PageDiario/>}/>
                <Route path="PagePesquisa" element={<PagePesquisa/>}/>
                <Route path="PageResposta" element={<PageResposta/>}/>


            </Routes>
        </BrowserRouter>
        </>
    );
}
export default Rotas;