import styled from "styled-components"

export const ContactsBox = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-top:5vh;
`

export const Title = styled.h2`
color:#ffff;
font-size:3rem;
`
export const BoxIcons = styled.section`
display:flex;
justify-content:space-between;
width:80vw;
margin-top:15vh;
`
export const Icons = styled.img`
width:15vw;
justify-content:center;
transition-duration:1s;
&:hover{
    width:17vw;

}
`
export const A = styled.a`
width:15vw;
`