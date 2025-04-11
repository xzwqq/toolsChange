import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToolsSendActions } from '../model/toolsSendSlice';
import { RootState } from '../../../app/store/store';
import './fornsend.scss';
import { Tool } from '../type/toolsend.type';



const FormToolsSend: React.FC = () => {
  const dispatch = useDispatch();
  const toolSelecteC: { id: string; name: string }[] = useSelector((state: RootState) => state.toolsSend.selectC);
  const manufacturers: { id: string; name: string }[] = useSelector((state: RootState) => state.toolsSend.selectM);
  
  const [formData, setFormData] = useState<Tool>({
    type: '',
    condition: '',
    price: '',
    categoryId: '',
    manufacturerId: '',
    description: ''
  });
  
  const [files, setFiles] = useState<File[]>([]);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const nasral = {
        tool: formData
    }
    dispatch(ToolsSendActions.setFiles(files));
    dispatch(ToolsSendActions.submit(nasral));
  };

  const handleConditionChange = (condition: string) => {
    setFormData(prev => ({ ...prev, condition }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLButtonElement> ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(formData)
  };


  useEffect(() => {
    dispatch(ToolsSendActions.submitSelectM());
    dispatch(ToolsSendActions.submitSelectC());
  }, [dispatch]);

  return (
    <div className='root-formsend'>
      <h1 className='toolsend_h1'>Новое объявление</h1>
			<h1 className='toolsend_p'>Параметры</h1>
      <form onSubmit={submitForm} className='formSend'>
        
        <div className="inputsend">

          <div className="select_type">
            <p className='allP'>Тип Обьявления</p>
            <select className='selectsend' name='type' value={formData.type} onChange={handleChange} required>
              <option value=''>Выберите тип</option>
              <option value='RENT'>Аренда</option>
              <option value='SALE'>Продажа</option>
            </select>
        </div>

          <div className="buton_sost">
            <p className='allP'>Состояние</p>
            <div className="sostoyanie">
              <button 
                type="button" 
                className={`btn_sost ${formData.condition === 'NEW' ? 'active' : ''}`} 
                onClick={() => handleConditionChange('NEW')}
              >
                Новое
              </button>
              <button 
                type="button" 
                className={`btn_sost soso ${formData.condition === 'USED' ? 'active' : ''}`} 
                onClick={() => handleConditionChange('USED')}
              >
                Б/у
              </button>
            </div>
          </div>
          
          
          <div className="select_tools">
            <p className='allP'>Тип Инструмента</p>
            <select className='selectsend' name='categoryId' value={formData.categoryId} onChange={handleChange} required>
              <option value=''>Выберите инструмент</option>
              {toolSelecteC?.map(tools => (
                <option key={tools.id} value={tools.id}>
                  {tools.name}
                </option>
              ))}
            </select>
          </div>

          <div className="select_mark">
            <p className='allP'>Производитель</p>
            <select className='selectsend' name='manufacturerId' value={formData.manufacturerId} onChange={handleChange} required>
              <option value=''>Выберите производителя</option>
              {manufacturers?.map(manufacturer => (
                <option key={manufacturer.id} value={manufacturer.id}>
                  {manufacturer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="imager">

              <p className='suck'>Подробности</p>
              <p className='img_txt'>Фотографии</p>
              
              <div className="photo-pr">
                <div className="file-upload">
                  <label className="file-input-label">
                    <img src="/public/svgImage/dwnldImage.svg" alt="upload photo" className='send-photo' />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="file-input"
                    />
                  </label>
                </div>

                <div className="preview-image">
                  {files.map((file)=>{
                    const result = URL.createObjectURL(file)
                    return(
                      <img className='prev_img orig' src={result} alt="preview" />
                    )
                  })}
                </div>
              </div>
          </div>

          <div className="input_discption">
            <p className='allP'>Описание объявления</p>
            <input 
              className='discripton' 
              name='description' 
              value={formData.description} 
              onChange={handleChange} 
              type='text' 
              required
            />
          </div>

          <div className="input_price">
            <p className='allP'>Цена</p>
            <input 
              className='selectsend' 
              name='price' 
              value={formData.price}
              onChange={handleChange} 
              type='number' 
              placeholder='₽' 
              required 
              min="0"
            />
          </div>


          <button className='but-send' type='submit' disabled={files.length === 0}>
            Выложить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormToolsSend;