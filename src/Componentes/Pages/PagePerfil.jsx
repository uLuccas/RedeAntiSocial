import { Header } from '../Header/Header';
import FotoPerfil from '../FotoPerfil/FotoPerfil';
import { useParams } from 'react-router-dom';
import DadosUsuario from '../DadosUsuario/DadosUsuario';

const PagePerfil = ({ match }) => {
    const { id } = useParams();
    return (
        <>
            <Header />
            <FotoPerfil />
            <DadosUsuario />
        </>
    )
}

export default PagePerfil;