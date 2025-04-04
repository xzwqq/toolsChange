import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToolsSendActions } from '../model/toolsSendSlice.ts';
import { RootState } from '../../../app/store/store.ts';
import './formTools.scss'

const FormToolsSend: React.FC = () => {
	const dispatch = useDispatch();
	const toolSelecteC = useSelector((state: RootState) => state.toolsSend.selectC);
	const manufacturers = useSelector((state: RootState) => state.toolsSend.selectM);
	const [formData, setFormData] = useState({
		type: '',
		condition: '',
		price: '',
		categoryId: '',
		manufacturerId: '',
		description: ''
	});
	const [files, setFiles] = useState();

	const submitForm = (e: React.FormEvent)  => {
		e.preventDefault();
		const data = {
			tool: formData,
			files
		};

		dispatch(ToolsSendActions.submit(data));
	};

	const handleFileChange = (e) => {
		const selectedFiles = Array.from(e.target.files); // Преобразуем FileList в массив
		setFiles(selectedFiles); // Сохраняем все выбранные файлы
	};
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		dispatch(ToolsSendActions.submitSelectM());
		dispatch(ToolsSendActions.submitSelectC());
	}, [dispatch]);

	return (
		<div className='root-formsend'>
			<form onSubmit={submitForm} className='formSend'>

				<div className="file-upload">
			
					<label className="file-input-label">
					<img src="../../../../public/svgImage/downloadimage.svg" alt="upload photo" className='send-photo' />
						<input
							type="file"
							accept="image/*"
							multiple
							onChange={handleFileChange}
							className="file-input"
							/>	
						<span className='btn-photo'>Загрузите картинку(и)</span>
					</label>
				</div>
				<div className="inputsend">
				<select className='selectsend' name='type' value={formData.type} onChange={handleChange}>
					<option value=''>Выберите тип</option>
					<option value='EXCHANGE'>Обмен</option>
					<option value='RENT'>Аренда</option>
					<option value='SALE'>продажа</option>
				</select>

				<select className='selectsend' name='condition' value={formData.condition} onChange={handleChange}>
					<option value=''>Выберите состояние</option>
					<option value='USED'>б/у</option>
					<option value='NEW'>новое</option>
				</select>

				<select className='selectsend' name='categoryId' value={formData.categoryId} onChange={handleChange}>
					<option value=''>Выберите инструмент</option>
					{toolSelecteC?.map(tools => {
						return (
							<option key={tools.id} value={tools.id}>
								{tools.name}
							</option>
						);
					})}
				</select>

				<select className='selectsend' name='manufacturerId' value={formData.manufacturerId} onChange={handleChange}>
					<option value=''>Выберите производителя</option>
					{manufacturers?.map(manufacturer => {
						return (
							<option key={manufacturer.id} value={manufacturer.id}>
								{manufacturer.name}
							</option>
						);
					})}
				</select>

				<input className='selectsend' name='price' onChange={handleChange} type='number' placeholder='Цена'/>

				<input className='selectsend' name='description' value={formData.description} type='text' placeholder='Описание' onChange={handleChange} />

				<button className='but-send' type='submit'>Выложить</button>
				</div>
			</form>
			
		</div>
	);
};

export default FormToolsSend;
