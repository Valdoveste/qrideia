import logo from '../assets/logo.png'
import iconeUser from '../assets/user.png'

export default function Header() {
    return(
    <header>
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="" />
                </li>
            </ul>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Eventos</a></li>
                <li><a href="">Usuários</a></li>
                <li><a href="">Relatórios</a></li>
            </ul>
            <ul>
                <li>
                    <img src={iconeUser} alt="" />
                    <article>
                        <p>Igor Gonçalves</p>
                        <a href="">Desconectar</a>
                    </article>
                </li>
            </ul>
        </nav>
    </header>
    );
}
