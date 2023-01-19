import React, {useState} from 'react';

const Edit = (props) => {
    let emptyGundam = {name: '', price: '', shippingCost: '', shippingDate: '', image: ''}
    const [robot, setRobot] = useState({...props.robot})

    const handleChange = (event) => {
        setRobot({...robot, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(robot)
    }

    return (
        <div>
            <button className='post' onClick={props.handleShowEdit}>Done Editting</button>
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
            <button onClick={props.handleDelete} className='post'>Delete posting</button>
        </div>
    )
}

export default Edit