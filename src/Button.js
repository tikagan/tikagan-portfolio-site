import React from 'react'

function Button(props) {
    return (
    <div className='button'>
        <span className='button-text painter-umesh-1' >{props.buttonText}</span>
        <span className='button-text painter-umesh-2'>{props.buttonText}</span>
        <span className='button-text painter-umesh-3'>{props.buttonText}</span>
        <span className='button-text painter-umesh-4'>{props.buttonText}</span>
    </div>
    )
  }

  export default Button