import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AdvertActions } from '../model/advertSlice';
import { FormSendTradeProps } from '../type/form.advert.type.ts'
import './formsendTrade.scss'
import { HelperActions } from '../../../utils/helper/helperSlice.ts';

const FormSendTrade: React.FC<FormSendTradeProps> = ({type , id}: {type: string; id: string;}) => {
	const dispatch = useDispatch()

	const [ buy, setBuy ] = useState({
		toolId: id,
		price: '',
		message: ''
	})
   const handleChange = (name: string, value: string) => {
		setBuy(prev => ({
			...prev,
			[name]: value
		}));
	};

   const sendTrade = (e: React.FormEvent) => {
      e.preventDefault();
			if(buy.message === '') return dispatch(HelperActions.setErrorNetwork('Введите сообщение!'))
		if(type === 'SALE'){
			dispatch(AdvertActions.postBuyTool(buy))
		}else{
			dispatch(AdvertActions.postRentTool(buy))
		}
		dispatch(AdvertActions.setVisible(false))
   }

if(type === 'SALE'){
	return (
		<>
			<div className='form_trades'>
				<form className='formTrade' onSubmit={sendTrade}>
					<div className='trades'>
						<input placeholder='Сообщение' className='trade-input' type='text' onChange={(e) => handleChange('message', e.target.value)}/>
						<input placeholder='Цена' className='trade-input' type='number' onChange={(e) => handleChange('price', e.target.value)}/>
					</div>
               <button className='trade-button' type='submit'>Отправить</button>
				</form>
			</div>
		</>
	);
	}else{
		return (
		<>
			<div className='form_trades'>
				<form className='formTrade' onSubmit={sendTrade}>
					<div className='trades'>
						<input placeholder='Сообщение' className='trade-input' type='text' onChange={(e) => handleChange('message', e.target.value)}/>
						<input placeholder='Цена' className='trade-input' type='number' onChange={(e) => handleChange('price', e.target.value)}/>
						<input type="datetime-local"
								className='trade-input'
								onChange={(e) => handleChange('startDate', e.target.value)}
								min="2025-01-01"
								max="2029-12-31" />
						<input type="datetime-local"
								className='trade-input'
								onChange={(e) => handleChange('endDate', e.target.value)}
								min="2025-01-02"
								max="2029-12-31" />
					</div>
               <button className='trade-button' type='submit'>Отправить</button>
				</form>
			</div>
		</>
	);
	}
};

export default FormSendTrade;
