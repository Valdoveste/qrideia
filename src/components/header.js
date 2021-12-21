import logo from '../assets/logo.png';
import iconeUser from '../assets/user.png';
import {links, user} from '../data';

export default function Header() {
    return(
    <header>
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="QRIDEIA Logo"/>
                </li>
            </ul>

            <ul>
                <li><a href={links[1].text}>Home</a></li>
                <li><a href={links[2].text}>Eventos</a></li>
                <li><a href={links[3].text}>Usuários</a></li>
                <li><a href={links[4].text}>Relatórios</a></li>
            </ul>

            <ul>
                <li>
                    <img src={iconeUser} alt="" />
                    <article>
                        <p>{user[0].name}</p>
                        <a href={links[1].text}>Desconectar</a>
                    </article>
                </li>
            </ul>
        </nav>
    </header>
    );
}
