import styled from "styled-components"
import Site1 from "../../midia/Desafio.PNG"
export const BoxWork = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:5vh;
`
export const Title = styled.h2`
font-size:3rem;
color:white;
`
export const BoxAbas = styled.section`
width:70vw;
display:flex;
flex-wrap:wrap;
justify-content:center;
margin-top:10vh;
`
export const Abas = styled.div`
width:20vw;
height:25vh;
background-color:#3f3f3f;
margin-right:2vw;
margin-top:4vh;
`
export const Aba1 = styled.div`
width:20vw;
height:25vh;
background-image:url(${Site1});
background-size:21vw 25vh;
margin-right:2vw;
margin-top:4vh;
`
export const AbasDecoração = styled.div`
margin-top:23vh;
display:flex;
justify-content:center;
align-items:center;
width:20vw;
height:2vh;
background-color:#800080;
transition-duration:2s;
&:hover{
    margin-top:15vh;
    height:10vh;
}
`
export const Text = styled.a`
color:white;
font-size:2rem;
width:20vw;
height:5vh;
text-align: center;
opacity:0;
transition-duration:2s;
cursor:pointer;
&:hover{
    opacity:1;
}
`