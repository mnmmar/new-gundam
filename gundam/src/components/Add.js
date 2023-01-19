import React, {useEffect, useState} from 'react';

const Add = (props) => {
    let emptyGundam = {name: '', price: '', shippingCost: '', shippingDate: '', image: ''}
    const [robot, setRobot] = useState(emptyGundam)

    const handleChange = (event) => {
        setRobot({...robot, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(robot)
    }

    return (
        <div>
            <div className='close'>
                <button onClick={props.handleShowAdd}>Close form</button>
            </div>
            <form onSubmit={handleSubmit} className='edit'>
                <label>Name: </label>
                <br></br>
                <input type='text' name='name' value={robot.name} onChange={handleChange}></input>
                <br></br>

                <label>Price: </label>
                <br></br>
                $<input type='number' name='price' value={robot.price} onChange={handleChange}></input>
                <br></br>

                <label>Shipping Cost: </label>
                <br></br>
                $<input type='number' name='shippingCost' value={robot.shippingCost} onChange={handleChange}></input>
                <br></br>

                <label>Estimated Arrival Time: </label>
                <br></br>
                <input type='text' name='shippingDate' value={robot.shippingDate} onChange={handleChange}></input>
                <br></br>

                <label>Image Link: </label>
                <br></br>
                <input type='text' name='image' value={robot.image} onChange={handleChange}></input>
                <br></br>
                <input type='submit' className='post'></input>
            </form>
        </div>
    )
}

export default Add