import React, {useState} from "react";
import Edit from './Edit';

const Show = (props) => {
    const [showInfo, setShowInfo] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    let handleUpdate = props.handleUpdate
    let robot = props.robot
    let handleDelete = props.handleDelete

    const handleShow = () => {
        setShowInfo(!showInfo)
        setShowEdit(false)
    }

    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    return (
        <div className="main">
            <span>
                {showInfo? 
                <div className='box2'>
                    <h1 onClick={handleShow}>{robot.name}</h1>
                    <img src={robot.image} className='image' onClick={handleShow}></img>
                    <h2>Price: ${robot.price}</h2>
                    <h3>Shipping cost is ${robot.shippingCost}</h3>
                    <h3>Estimated Shipping is at {robot.shippingDate}</h3>

                    {showEdit ? <div><Edit robot={robot} handleUpdate={handleUpdate} handleDelete={handleDelete} handleShowEdit={handleShowEdit}></Edit></div> : <><button className="post"onClick={handleShowEdit}>Edit</button></>} 

                    <div className="general">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0727/8355/files/warning2_ba3bfcc8-73c3-4dbd-9e5f-f894b8946321.png?14616" alt=""></img>
                        </div>
                        <p>General Safety Warning: Products may contain sharp points, small parts, choking hazards, and other elements not suitable for children under 12 years old.</p>
                    </div>
                    <div className="x">
                        <button onClick={handleShow}>close</button>
                    </div>
                </div> :
                <div className='container'>
                    <div className='box'>
                        <img src={props.robot.image} className='image' onClick={handleShow}></img>
                        <h1 onClick={handleShow}>{props.robot.name}</h1>
                        <div className='price'>
                            <h3>${props.robot.price}</h3>
                        </div>
                    </div>
                </div> 
                }
            </span>

            
        </div>
    )
}

export default Show