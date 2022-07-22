import React from "react"
import * as S from "./styles"
import Picture  from "../../TrocaDeFoto/About/Picture"
export default function About(){

    return(
        <S.BoxAbout>
            <S.BoxPerfil>
                <S.Title>Olá!! Meu nome é: Gabriel Ribeiro da Silva!!</S.Title>
                <Picture/>
            </S.BoxPerfil>
            
            <section>
                <S.Text>Eu nasci em Caxias,Rio de Janeiro. Agora eu moro em Santana do deserto, Minas Gerais.</S.Text>
            
                <S.Text>Eu sou um artista ou pelomenos tento, amo todo tipo de arte, mas ando me dedicando ao desenho e a musica.</S.Text>
            
                <S.Text>Na música eu comecei a pouco tempo, mas no desenho voce pode encontrar algumas obras no <a href="http://www.instagram.com/gab_el.rs">Instagram</a> Se gostar de alguma arte e quiser uma encomenda só mandar um direct ;)</S.Text>
            
                <S.Text>Também gosto muito de jogar, meus favoritos são Valorant, Genshin Impact e celeste.</S.Text>
         
                <S.Text>Ja pratiquei capoeria, futsal e agora estou no volei, gosto muito de praticar esportes, e eu amo andar de bicicleta.</S.Text>

                <S.Text>Obrigado por ler até aqui :) </S.Text>
            </section>
            
          
        </S.BoxAbout>

    )
} 