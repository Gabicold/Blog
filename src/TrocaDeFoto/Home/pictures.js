import React, {useState} from "react"
import Galinha from "../../midia/GalinhaSkate.jpg"
import Dog from "../../midia/Dog.jpg"
import * as S from "./styles"
export default function Pictures(){

    const [Foto, setFoto] = useState(`${Galinha}`)
    const [bolean, setBolean] = useState()

    const trocar = ()=>{
        if( Foto === `${Galinha}`){
            setFoto(`${Dog}`)
        }else{
            setFoto(`${Galinha}`)
        }
    }
    return(
        <S.Image onClick={()=>{trocar()}} src={Foto} alt="foto Perfil" />
    )
}