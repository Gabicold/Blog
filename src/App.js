import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import * as S from "./stylesApp"
import { createGlobalStyle } from "styled-components";
import About from './Pages/About/About'
import Contacts from './Pages/Contacts/Contacts'
import Home from './Pages/Home/Home'
import Works from './Pages/Works/Works'

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`

export default  function app(){

  return(
    <S.Box>
      <GlobalStyle/>
      <Router>
        <S.BoxUl>
          <S.RoutesLink to='/'><S.BoxLi>Home</S.BoxLi></S.RoutesLink>
          <S.RoutesLink to='/About'><S.BoxLi>About</S.BoxLi></S.RoutesLink>
          <S.RoutesLink to='/Works'><S.BoxLi>Works</S.BoxLi></S.RoutesLink>
          <S.RoutesLink to='/Contacts'><S.BoxLi>Contacts</S.BoxLi></S.RoutesLink>
        </S.BoxUl>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Works' element={<Works/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
      </Router>
      
    </S.Box>
  )
}