import React from 'react'
import Button from './Button.jsx'

const Main = () => {
  return (
    <>
    <div className = 'container' > 
      <div className = 'p-5 text-center bg-light-dark rounded'>
        <h1 className = 'text-light'>Stock Prediction App</h1>
        <p className = 'text-light lead'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid possimus totam porro mollitia natus doloremque sed vel, quos amet labore beatae eum impedit accusantium ipsum corporis recusandae qui aperiam doloribus accusamus obcaecati laboriosam ipsam. Aut facilis maiores, explicabo veritatis quos aperiam temporibus doloribus, nihil repellendus vitae esse eius illo?</p>
        <Button text = 'Login' class = 'btn-outline-info'/>


      </div>
    </div>
    </>
  )
}

export default Main 