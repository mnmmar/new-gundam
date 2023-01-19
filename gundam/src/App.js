import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Add from './components/Add';
import Show from './components/Show';

const App = () => {

  let [gundam, setGundam] = useState([])

  const getGundam = () => {
    axios
        .get('https://shielded-journey-58568.herokuapp.com/api/gundam')
        .then(
          (response) => setGundam(response.data)
        )
  }

  const handleCreate = (addGundam) => {
    axios
        .post('https://shielded-journey-58568.herokuapp.com/api/gundam', addGundam)
        .then((response) => {
          console.log(response)
          getGundam()
        })
  }

  const handleDelete = (event) => {
    axios
      .delete('https://shielded-journey-58568.herokuapp.com/api/gundam/' + event.target.value)
      .then((response) => {
        getGundam()
      })
  }

  const handleUpdate = (editGundam) => {
    console.log(editGundam)
    axios
        .put('https://shielded-journey-58568.herokuapp.com/api/gundam/' + editGundam.id, editGundam)
        .then((response) => {
          getGundam()
        })
  }

  useEffect(() => {
    getGundam()
  }, [])

  return(
    <div>
      <nav>
        <div className="logoD">
          <img id="logo" src="https://cdn.shopify.com/s/files/1/0727/8355/files/USAGS_new_300x.png?v=1645125097" alt="" />
          <ul className="nav-links">
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Cart</a></li>
      
          </ul>
        </div>
      </nav>

      <div>
        {/* <Add handleCreate={handleCreate}></Add> */}
        <button className='post'>Create New Posting</button>

        <div className='big'>
        <h1 className='best'>Best Sellers</h1>
        </div>
        <div>
          {gundam.map((robot) => {
            return(
              <div key={robot.id}>
                <Show robot={robot} handleUpdate={handleUpdate} handleDelete={handleDelete}></Show>
                {/* <img src={robot.image} className='image' onClick={handleShow}></img>
                <h1 onClick={handleShow}>{robot.name}</h1>
                <div className='price'>
                  <h3>${robot.price}</h3>
                </div> */}
                {/* <button onClick={handleDelete} value={robot.id}>X</button> */}
                {/* <Edit handleUpdate={handleUpdate} robot={robot}></Edit> */}
              </div>
            )
          })}
        </div>
      </div>

      <footer>
        <img src='https://cdn.shopify.com/s/files/1/0727/8355/files/USA_Gundam_Store_logo_300x_20cf567e-3313-426e-a5c4-491ee87b9d6f_170x.png?v=1613548405' className='footerpic1'></img>
        <img src='https://cdn.shopify.com/s/files/1/0727/8355/files/sercvice.png?v=1650376125' className='footerpic1'></img>
        <p><strong>Our Location: </strong></p>
        <p>832 S. Nova Rd Unit 100 Daytona Beach FL, 32114</p>
      </footer>
     
    </div>
  )
}

export default App;
