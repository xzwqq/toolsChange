import React from "react"
import './header.scss'

const Header: React.FC = () => {
    const isAuth = localStorage.getItem('token')
    if(isAuth){
        return(
            <>
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