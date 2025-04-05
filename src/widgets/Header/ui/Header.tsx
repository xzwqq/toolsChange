import React from "react"
import { history } from "../../../app/providers/history"
import './header.scss'

const Header: React.FC = () => {
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
                <div className="header_body">
                    <img src="../../../../public/svgImage/hz.svg" alt="like" className="svg_hz" />
                <div className="categ">
                    <img src="../../../../public/svgImage/idc.svg" alt="like" className="svg_idc" />
                    <button className="categ_but">Фильтры</button>
                </div>
                <div className="searchHeader">
                    <input type="text" className="inputforHeader" />
                    <button className="searchforheader">Поиск</button>
                </div>
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
                <div className="header_body">
                    <img src="../../../../public/svgImage/hz.svg" alt="like" className="svg_hz" />
                <div className="categ">
                    <img src="../../../../public/svgImage/idc.svg" alt="like" className="svg_idc" />
                    <button className="categ_but">Фильтры</button>
                </div>
                <div className="searchHeader">
                    <input type="text" className="inputforHeader" />
                    <button className="searchforheader">Поиск</button>
                </div>
                </div>
            </>
          )
    }
  
}

export default Header