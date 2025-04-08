import React from "react"
import { history } from "../../../app/providers/history"
import './header.scss'

const InitHeader: React.FC = () => {
    const isAuth = localStorage.getItem('token')
    if(isAuth){
        return(
            <>
                <div className="header_promo">
                    <img src="../../../../public/svgImage/like.svg" alt="like" className="svg_like" />
                    <img src="../../../../public/svgImage/telega.svg" alt="telega" className="svg_telega" />
                    <img src="../../../../public/svgImage/iconprofile.svg" alt="profile" onClick={()=> history.push('/my')} className="svg_icon" />
                    <button className="sendcontheader" onClick={()=> history.push('/toolsend')}>Разместить обьявление</button>
                </div>
                
            </>
        )
    }else{
        return (
            <>
                <div className="header_promo">
                    <img src="../../../../public/svgImage/like.svg" alt="like" className="svg_like" />
                    <img src="../../../../public/svgImage/telega.svg" alt="telega" className="svg_telega" />
                    <button className="registerheader" onClick={()=> history.push('/login')}>Вход и регистрация</button>
                    <button className="sendcontheader" onClick={()=> history.push('/login')}>Разместить обьявление</button>
                </div>
                
            </>
          )
    }
  
}

export default InitHeader