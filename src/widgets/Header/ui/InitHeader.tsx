import React from "react"
import { history } from "../../../app/providers/history"
import homebut from "../../../shared/svgImage/homebut.svg"
import iconprofile from "../../../shared/svgImage/iconprofile.svg"
import bell from '../../../shared/svgImage/mdi_bell.svg'
import './header.scss'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/store/store"
import { FormLogin } from "../../../features/formLogin"
import { HeaderActions } from "../model/headerSlice"
import { FormRegister } from "../../../features/formRegister"

const InitHeader: React.FC = () => {
    const isAuth = localStorage.getItem('token')
    const visibleLogin: boolean = useSelector((state: RootState) => state.header.visiblelogin)
    const visibleRegister: boolean = useSelector((state: RootState) => state.header.visibleRegister)
    const dispatch = useDispatch();
    if(isAuth){
        return(
            <>
                <div className="header_promo">
                    <button className="non-button" onClick={()=> history.push('/')}><img src={homebut} alt="profile" className="svg_icon" /></button>
                    <div className="asd">
                        <button className="non-button" onClick={()=> history.push('/notification')}><img src={bell} alt="bell" className="svg_telega" /></button>
                        <button className="non-button" onClick={()=> history.push('/my')}><img src={iconprofile} alt="profile" className="svg_icon" /></button>
                        <button className="sendcontheader" onClick={()=> history.push('/toolsend')}>Разместить обьявление</button>
                    </div>
                </div>
                
            </>
        )
    }else{
        return (
            <>
                <div className="header_promo">
                    <button className="non-button" onClick={()=> history.push('/')}><img src={homebut} alt="profile" className="svg_icon" /></button>
                    <div className="asd">
                        <button className="non-button" onClick={()=> history.push('/notification')}><img src={bell} alt="bell" className="svg_telega" /></button>
                        <button className="registerheader" onClick={()=> dispatch(HeaderActions.setVisibleLogin(true))}>Вход и регистрация</button>
                        <button className="sendcontheader" onClick={()=> dispatch(HeaderActions.setVisibleLogin(true))}>Разместить обьявление</button>
                    </div>
                </div>
                {visibleLogin && <FormLogin/> }
                {visibleRegister && <FormRegister/> }
            </>
          )
    }
  
}

export default InitHeader