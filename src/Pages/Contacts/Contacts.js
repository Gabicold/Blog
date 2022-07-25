import React from "react"
import * as S from "./styles"
import Whatsapp from "../../midia/whatsapp.png"
import Instagram from "../../midia/instagram.png"
import Linkedin from "../../midia/linkedin.png"
export default function Contacts(){

    return(
        <S.ContactsBox>
            <S.Title>Quer falar comigo?</S.Title>
            <S.Title>escolha uma das plataformas abaixo :)</S.Title>
            <S.BoxIcons>
                <S.A href="https://contate.me/GabrielRS"><S.Icons src={Whatsapp}/></S.A>
                <S.A href="https://www.instagram.com/gab_el.rs/"><S.Icons src={Instagram}/></S.A>
                <S.A href="https://www.linkedin.com/in/gabriel-silva-a1b13120a/"><S.Icons src={Linkedin}/></S.A>
            </S.BoxIcons>
        </S.ContactsBox>
    )
} 