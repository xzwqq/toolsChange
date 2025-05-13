import React from "react"
import { history } from "../../../app/providers/history"
import './header.scss'

const InitHeader: React.FC = () => {
    const isAuth = localStorage.getItem('token')
    if(isAuth){
        return(
            <>
                <div className="header_promo">
                    <button className="non-button" onClick={()=> history.push('/')}><img src="../../../../public/svgImage/homebut.svg" alt="profile" className="svg_icon" /></button>
                    <div className="asd">
                        <button className="non-button" onClick={()=> history.push('/notification')}><img src="../../../../public/svgImage/mdi_bell.svg" alt="bell" className="svg_telega" /></button>
                        <button className="non-button" onClick={()=> history.push('/my')}><img src="../../../../public/svgImage/iconprofile.svg" alt="profile" className="svg_icon" /></button>
                        <button className="sendcontheader" onClick={()=> history.push('/toolsend')}>Разместить обьявление</button>
                    </div>
                </div>
                
            </>
        )
    }else{
        return (
            <>
                <div className="header_promo">
                    <button className="non-button" onClick={()=> history.push('/')}><img src="../../../../public/svgImage/homebut.svg" alt="profile" className="svg_icon" /></button>
                    <div className="asd">
                        <button className="non-button" onClick={()=> history.push('/notification')}><img src="../../../../public/svgImage/mdi_bell.svg" alt="bell" className="svg_telega" /></button>
                        <button className="registerheader" onClick={()=> history.push('/login')}>Вход и регистрация</button>
                        <button className="sendcontheader" onClick={()=> history.push('/login')}>Разместить обьявление</button>
                    </div>
                </div>
                
            </>
          )
    }
  
}

export default InitHeader