import iconeEventos from '../assets/icone-eventos.png'
import iconeUsuarios from '../assets/icone-usuarios.png'
import iconeRelatorios from '../assets/icone-relatorios.png'
import React from 'react'
import {links, user} from '../data';

export default function Main() {
    return (
        <main>
            <div className="lazy-bp"></div>
            <div id="user-dashboard">

                <div id='name-card'>Olá&nbsp;<h3>{user[0].name}</h3>, selecione uma  das opções abaixo:</div>

                <div id="cards-container">

                    <div className='cards'>
                        <a href={links[2].text}>
                            <img src={iconeEventos} alt="icone-eventos" />
                            <p>Meus Eventos</p>
                        </a>
                    </div>

                    <div className='cards'>
                        <a href={links[3].text}>
                            <img src={iconeUsuarios} alt="icone-usuarios" />
                            <p>Usuários</p>
                        </a>
                    </div>

                    <div className='cards'>
                        <a href={links[4].text}>
                            <img src={iconeRelatorios} alt="icone-relatorios" />
                            <p>Relatórios</p>
                        </a>
                    </div>

                </div>

            </div>

        </main>
    );
}
