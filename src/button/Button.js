import React from "react";
import * as S from "./styles"
import Moon from "../midia/Lua.png"
export default function Button(){

    return(
        <S.botao>
            <a href="https://img.freepik.com/fotos-gratis/tela-vazia-branca_1194-7555.jpg">
                <S.Lua src={Moon} alt="Lua"/>
            </a>
            
        </S.botao>
    )
}