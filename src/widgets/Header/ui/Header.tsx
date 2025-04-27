import React, { useState } from "react"
import './header.scss'
import { useDispatch } from "react-redux"
import { HeaderActions } from "../model/headerSlice"

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const postFilter = (e: { preventDefault: () => void }) =>{
        e.preventDefault();
        dispatch(HeaderActions.submitFilter(search))
    }
    return(
        <>
            <div className="header_body">
            <div className="categ">
                <img src="../../../../public/svgImage/idc.svg" alt="like" className="svg_idc" />
                <button className="categ_but">Фильтры</button>
            </div>
            <form onSubmit={postFilter} className="searchHeader">
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" className="inputforHeader" />
                <button type="submit" className="searchforheader">Поиск</button>
            </form>
            </div>
        </>
    )
        
}

export default Header