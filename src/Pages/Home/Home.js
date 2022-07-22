import React from "react"

import * as S from "./styles"
import Button from "../../button/Button"
import Picture from "../../TrocaDeFoto/Home/pictures"
export default function Home(){

    return(
        <S.BoxHome>
            <Picture/>
            <S.Title>BEM VINDOS AO MEU BLOG!!!</S.Title>
            <Button/>
        </S.BoxHome>
    )
} 