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
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' name='name' value={robot.name} onChange={handleChange}></input>
                <br></br>

                <label>Price: </label>
                <input type='number' name='price' value={robot.price} onChange={handleChange}></input>
                <br></br>

                <label>Shipping Cost: </label>
                <input type='number' name='shippingCost' value={robot.shippingCost} onChange={handleChange}></input>
                <br></br>

                <label>Estimated Arrival Time: </label>
                <input type='text' name='shippingDate' value={robot.shippingDate} onChange={handleChange}></input>
                <br></br>

                <label>Image Link: </label>
                <input type='text' name='image' value={robot.image} onChange={handleChange}></input>
                <br></br>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Add