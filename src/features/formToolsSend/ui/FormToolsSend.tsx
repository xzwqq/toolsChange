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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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
            <img src="/svgImage/downloadimage.svg" alt="upload photo" className='send-photo' />
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
          <select className='selectsend' name='type' value={formData.type} onChange={handleChange} required>
            <option value=''>Выберите тип</option>
            <option value='EXCHANGE'>Обмен</option>
            <option value='RENT'>Аренда</option>
            <option value='SALE'>Продажа</option>
          </select>

          <select className='selectsend' name='condition' value={formData.condition} onChange={handleChange} required>
            <option value=''>Выберите состояние</option>
            <option value='USED'>б/у</option>
            <option value='NEW'>Новое</option>
          </select>

          <select className='selectsend' name='categoryId' value={formData.categoryId} onChange={handleChange} required>
            <option value=''>Выберите инструмент</option>
            {toolSelecteC?.map(tools => (
              <option key={tools.id} value={tools.id}>
                {tools.name}
              </option>
            ))}
          </select>

          <select className='selectsend' name='manufacturerId' value={formData.manufacturerId} onChange={handleChange} required>
            <option value=''>Выберите производителя</option>
            {manufacturers?.map(manufacturer => (
              <option key={manufacturer.id} value={manufacturer.id}>
                {manufacturer.name}
              </option>
            ))}
          </select>

          <input 
            className='selectsend' 
            name='price' 
            value={formData.price}
            onChange={handleChange} 
            type='number' 
            placeholder='Цена' 
            required 
            min="0"
          />

          <input 
            className='selectsend' 
            name='description' 
            value={formData.description} 
            onChange={handleChange} 
            type='text' 
            placeholder='Описание' 
            required
          />

          <button className='but-send' type='submit' disabled={files.length === 0}>
            Выложить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormToolsSend;