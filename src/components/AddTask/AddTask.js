import React from 'react';

import './AddTask.css'

function AddTask(props) {
    return (

            <form className='addTask' onSubmit={props.onSubmit}>
                <div className='addTask__content'>
                    <button className='addTask__button material-icons' type="submit">add</button>
                    <input className='addTask__input' type="text" placeholder='Добавить задачу'
                       value={props.value}
                       onChange={props.onChange}/>

                </div>
            </form>


    )
}

export default AddTask