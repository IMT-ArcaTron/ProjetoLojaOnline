import React from "react";
import { Link } from "react-router-dom";

export default function Navbar (){
    return <nav className = 'navbar'>
        <a href  = '/' className = "site-title">Arcatron</a>
        <ul>
            <li>
                <a href = "/products" >Produtos</a>
            </li>
            <li>
                <a href = "/carshop" >Carrinho</a>
            </li>
            <li>
                <a href = "/aboutus" >Sobre nós</a>
            </li>
            <li>
                <a href = "/" >Sair</a>
            </li>
        </ul> 
    </nav>
}
