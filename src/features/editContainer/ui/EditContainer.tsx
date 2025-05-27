import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { EditActions } from "../model/editSlice.js";
import { ToolsSendActions } from '../../formToolsSend/model/toolsSendSlice.ts';
import { RootState } from "../../../app/store/store.ts";
import { PidorokSend, formPenis } from "../type/editType.ts";
import dwnld from '../../../shared/svgImage/dwnldImage.svg'
import './editcontainer.scss'
import { LoadingButton } from "../../../widgets/loader/loader.tsx";

const EditContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const toolSelecteC: { id: string; name: string }[] = useSelector((state: RootState) => state.toolsSend.selectC);
  const container = useSelector((state: RootState) => state.edit.container);
  const isloading: boolean = useSelector((state: RootState) => state.edit.isloading);
  const manufacturers: { id: string; name: string }[] = useSelector((state: RootState) => state.toolsSend.selectM);

  const [deleteFile, setDeleteFile] = useState<string[]>([]); 
  const [newphotocont, setPfotocont] = useState<string[]>([]); 
  const [files, setFiles] = useState<File[]>([]); 
  const [formData, setFormData] = useState<formPenis>({
    type: '',
    condition: '',
    price: '',
    categoryId: '',
    manufacturerId: '',
    description: '',
  });

  

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    const data: PidorokSend = {
      tool: formData,
      files,
      deleteFile,
      id,
    };
    dispatch(EditActions.setIsLoading()); 
    dispatch(EditActions.submitMyContainer(data)); 
  };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     if (e.target.files) {
       const newFiles = Array.from(e.target.files);
       setFiles(prev => {
         return [...prev, ...newFiles];
       });
     }
   };

  const deleteSuck = (photo: string) => { 
    setDeleteFile(old => [...old, photo]);
    const newsosiska = newphotocont?.map((el) => {
      if(el !== photo){
         return el
        }else{
          return ''
        }
    })
    setPfotocont(newsosiska)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConditionChange = (condition: string) => {
    setFormData(prev => ({ ...prev, condition }));
  };

  useEffect(() => {
    if (id) {
      dispatch(EditActions.submitGetContainer(id));
    }
    if(!toolSelecteC.length || !manufacturers.length){
      dispatch(ToolsSendActions.submitSelectM());
      dispatch(ToolsSendActions.submitSelectC());
    }
  }, [id]);

  useEffect(() => {
    if (container) {
      setFormData({
        type: container.type || '',
        condition: container.condition || '',
        price: container.price || '',
        categoryId: container.category?.id || '', 
        manufacturerId: container.manufacturer?.id || '', 
        description: container.description || '',
      });
      setPfotocont(container?.photos)
    }
  }, [container?.id]);

  return (
    <div className='root-formsend'>
      <h1 className='toolsend_h1'>Редактирование</h1>
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
                  <img src={dwnld} alt="upload photo" className='send-photo' />
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
                {files.map((file, index) => { 
                  const result = URL.createObjectURL(file);
                  return (
                    <img key={index} className='prev_img orig' src={result} alt="preview" />
                  );
                })}
              </div>
            </div>
            <div className="editphoto">
              {newphotocont?.map((photo, index) => {
                if(photo !== ''){
                  return(
                    <div key={index} className="editPhotos">
                      <div className="dlt">
                        <button type="button" onClick={() => deleteSuck(photo)} className="dlt_img">X</button>
                      </div>
                      <img src={photo} className="prev_img" alt={`фото ${index + 1}`} />
                    </div>
                    )
              }})}
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
          <LoadingButton
            isLoading={isloading}
            defaultText={'Сохранить'}
            type={'submit'}
            className={'but-send'}
          />
        </div>
      </form>
    </div>
  );
};

export default EditContainer;