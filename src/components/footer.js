import {links} from '../data';
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <ul>
                <li> <a href={links[1].text}>Ideia 2001</a></li>
                <li>@ Copyright 2019 - Todos os diretos reservados</li>
            </ul>
        </footer>
    );
}
