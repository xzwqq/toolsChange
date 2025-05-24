import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderActions } from '../model/headerSlice';
import { ToolsSendActions } from '../../../features/formToolsSend/model/toolsSendSlice';
import { RootState } from '../../../app/store/store';
import { HelperActions } from '../../../utils/helper/helperSlice';
import idc from '../../../shared/svgImage/idc.svg'
import './header.scss';

const Header: React.FC = () => {
	const dispatch = useDispatch();
	const toolSelecteC: { id: string; name: string }[] = useSelector((state: RootState) => state.toolsSend.selectC);
  	const manufacturers: { id: string; name: string }[] = useSelector((state: RootState) => state.toolsSend.selectM);
	const [isFiltersVisible, setFiltersVisible] = useState(false);
	const [filters, setFilters] = useState({
		category: '',
		manufacturer: '',
		gte: '',
		lte: '',
		condition: '',
		type: '',
		description: ''
	});

	const postFilter = (e: React.FormEvent) => {
		e.preventDefault();
		if(filters.gte > filters.lte){
			dispatch(HelperActions.setErrorNetwork('Введите корректный range цены'))
		}else{
			setFiltersVisible(false)
			dispatch(HeaderActions.submitFilter(filters));
		}
	};

	const handleFilterChange = (name: string, value: string) => {
		setFilters(prev => ({
			...prev,
			[name]: value
		}));
	};

	const resetFilters = () => {
		setFilters({
			category: '',
			manufacturer: '',
			gte: '',
			lte: '',
			condition: '',
			type: '',
			description: ''
		});
	};

useEffect(() => {
      dispatch(ToolsSendActions.submitSelectM());
      dispatch(ToolsSendActions.submitSelectC());
}, []);

	return (
		<div className='header_body'>
			<div
				className='categ'
				onClick={() => setFiltersVisible(!isFiltersVisible)}
			>
				<img
					src={idc}
					alt='filter'
					className='svg_idc'
				/>
				<button type='button' className='categ_but'>
					Фильтры
				</button>
			</div>

			<form onSubmit={postFilter} className='searchHeader'>
				<input
					value={filters.description}
					onChange={e => handleFilterChange('description', e.target.value)}
					type='text'
					className='inputforHeader'
					placeholder='Поиск...'
				/>
				<div className='filter-actions'>
					<button type='submit' className='searchforheader'>
						Поиск
					</button>
				</div>
			</form>

			{isFiltersVisible && (
				<div className='allFilter'>
					<div className='filters-container'>
						
						<div className='filter-group'>
							<label className='labelas'>Производитель</label>
							<select
								className='filter-input'
								value={filters.manufacturer}
								onChange={e => handleFilterChange('manufacturer', e.target.value)}
							>
								<option value=''>Выбрать производителя</option>
								{manufacturers?.map(manufacturer => (
                					<option key={manufacturer.id} value={manufacturer.id}>
                  						{manufacturer.name}
									</option>
								))}
							</select>
						</div>

						<div className='filter-group'>
							<label className='labelas'>Категория</label>
							<select
								className='filter-input'
								value={filters.category}
								onChange={e => handleFilterChange('category', e.target.value)}
							>
								<option value=''>Все категории</option>
								{toolSelecteC?.map(tools => (
									<option key={tools.id} value={tools.id}>
									{tools.name}
									</option>
								))}
							</select>
						</div>

						<div className='filter-group'>
							<label className='labelas'>Цена</label>
							<div className='price-range'>
								<input
									type='number'
									className='filter-input'
									placeholder='От 100 ₽'
									value={filters.gte}
									onChange={e => handleFilterChange('gte', e.target.value)}
								/>
								<input
									type='number'
									className='filter-input'
									placeholder='До 109 049 353 ₽'
									value={filters.lte}
									onChange={e => handleFilterChange('lte', e.target.value)}
								/>
							</div>
						</div>

						<div className='sostfiltercheck'>
							<div className='filter-group'>
								<label className='labelas'>Состояние</label>
								<div className='condition-buttons'>
									<button
											type='button'
											className={`condition-btn ${filters.condition === "NEW" ? 'active' : ''}`}
											onClick={() => handleFilterChange('condition', "NEW")}
										>
											Новый
										</button>
										<button
											type='button'
											className={`condition-btn ${filters.condition === "USED" ? 'active' : ''}`}
											onClick={() => handleFilterChange('condition', "USED")}
										>
											Б/у
										</button>
								</div>
							</div>

							
							<div className='filter-group'>
								<label className='labelas'>Тип</label>
								<div className='condition-buttons'>
									<button
											type='button'
											className={`condition-btn ${filters.type === "RENT" ? 'active' : ''}`}
											onClick={() => handleFilterChange('type', "RENT")}
										>
											Аренда
										</button>
										<button
											type='button'
											className={`condition-btn ${filters.type === "SALE" ? 'active' : ''}`}
											onClick={() => handleFilterChange('type', "SALE")}
										>
											Продажа
										</button>
								</div>
							</div>
						</div>

						
						<div className='filter-actions'>
							<button
								type='button'
								className='reset-btn'
								onClick={resetFilters}
							>
								Сбросить фильтры
							</button>
							<button
								type='button'
								className='posik-btn'
								onClick={postFilter}
							>
								Поиск
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
