import iconeEventos from '../assets/icone-eventos.png'
import iconeUsuarios from '../assets/icone-usuarios.png'
import iconeRelatorios from '../assets/icone-relatorios.png'
import test from '../assets/imagem.jpg'

export default function Main() {
    return (
        <main>
            <div className="lazy"></div>
            <div id="user-dashboard">
                <p>Olá <h3>Igor Gonçalves</h3>, selecione uma  das opções abaixo.</p>
                <div id="panda-container">
                <div className='panda'>
                    <a href="#Eventos">
                        <img src={iconeEventos} alt="icone-eventos" />
                        {/* <img src={test} alt="icone-eventos" /> */}
                        <p>Meus Eventos</p>
                    </a>
                </div>

                <div className='panda'>
                    <a href="#Usuarios">
                        <img src={iconeUsuarios} alt="icone-usuarios" />
                        <p>Usuários</p>
                    </a>
                </div>

                <div className='panda'>
                    <a href="#Relatorios">
                        <img src={iconeRelatorios} alt="icone-relatorios" />
                        <p>Relatórios</p>
                    </a>
                </div>
                </div>
            </div>
        </main>
    );
}
