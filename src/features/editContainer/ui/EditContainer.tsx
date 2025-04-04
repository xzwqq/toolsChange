import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditActions } from "../model/editSlice.js";
import { ToolsSendActions } from '../../formToolsSend/model/toolsSendSlice.ts';
import { RootState } from "../../../app/store/store.ts";

const EditContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const toolSelecteC: { id: string; name: string }[] = useSelector(
    (state: RootState) => state.toolsSend.selectC || []
  );
  const container = useSelector((state: RootState) => state.edit.container);
  const manufacturers: { id: string; name: string }[] = useSelector(
    (state: RootState) => state.toolsSend.selectM || []
  );

  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    type: '',
    condition: '',
    price: '',
    categoryId: {},
    manufacturerId: {},
    description: '',
  });

  useEffect(() => {
    if (container) {
      setFormData({
        type: container.type || '',
        condition: container.condition || '',
        price: container.price || '',
        categoryId: container.categoryId || {},  // ИСПРАВЛЕНО
        manufacturerId: container.manufacturerId || {},
        description: container.description || '',
      });
    }
  }, [container]);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    const data = {
      tool: formData,
      files,
      id,
    };
    dispatch(EditActions.submitMyContainer({ data }));  // ИСПРАВЛЕНО
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (id) {
      dispatch(EditActions.submitGetContainer(id));
    }
    ToolsSendActions.submitSelectC();  // УБРАН DISPATCH
    ToolsSendActions.submitSelectM();  // УБРАН DISPATCH
  }, [id]);

  return (
    <>
      <form onSubmit={submitForm}>
        <select name='type' value={formData.type} onChange={handleChange}>
          <option value=''>Выберите</option>
          <option value='EXCHANGE'>Обмен</option>
          <option value='RENT'>Аренда</option>
          <option value='SALE'>Продажа</option>
        </select>

        <select name='condition' value={formData.condition} onChange={handleChange}>
          <option value=''>Выберите</option>
          <option value='USED'>б/у</option>
          <option value='NEW'>Новое</option>
        </select>

        <select name='categoryId' value={formData.categoryId} onChange={handleChange}>
          <option value=''>Выберите инструмент</option>
          {toolSelecteC?.map(tools => (
            <option key={tools.id} value={tools.id}>
              {tools.name}
            </option>
          ))}
        </select>

        <select name='manufacturerId' value={formData.manufacturerId} onChange={handleChange}>
          <option value=''>Выберите производителя</option>
          {manufacturers?.map(manufacturer => (
            <option key={manufacturer.id} value={manufacturer.id}>
              {manufacturer.name}
            </option>
          ))}
        </select>

        <input name='price' value={formData.price} onChange={handleChange} type='text' />
        <input name='description' value={formData.description} onChange={handleChange} type='text' />
        <input name='files' type='file' multiple onChange={handleFileChange} />
        <button type='submit'>Сохранить</button>
      </form>

      <div className="editphoto">
        {container?.photos?.map((photo, index) => (
          <div key={index} className="editPhotos">
            <img src={photo} alt={`фото ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default EditContainer;
