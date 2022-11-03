import { useState } from 'react';

import addButtonImg from '../../assets/img/add-button.svg'

import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../features/todoSlice';



const TaskFormAddComponent = (tokenId)   => {

    const [value, setValue] = useState('');
	const dispatch = useDispatch();
  
    const HandleAddTask = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
                    foreign_id: tokenId.tokenId
				})
			);
		}
    setValue('')
	};

    return (
        <form onSubmit={HandleAddTask} className='app-white-add_form'>
            <input
                className='input-text'
                type='text'
                placeholder='insert new task'
                id="desc"
                name="desc"
                value={value}
                maxLength="50"
                onChange={(event) => setValue(event.target.value)}
            />
            <input type='image' className='image-button' src={addButtonImg} alt='Submit'/>
        </form>
    )
}

export default TaskFormAddComponent;