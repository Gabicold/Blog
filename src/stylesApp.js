import styled from "styled-components"
import  {Link}  from "react-router-dom"
export const Box = styled.div`

whidth:100%;
height:100vh;
align-items:center;
background-color:#1E1E1E;
`
export const BoxUl = styled.ul`
display:flex;
justify-content:end;
list-style:none;
align-items:center;
height:10vh;
margin-right:5vw;
`
export const BoxLi = styled.li`
margin-right:5vw;
font-size:2rem;
color:white;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`
export const RoutesLink = styled(Link)`
text-decoration:none;
`