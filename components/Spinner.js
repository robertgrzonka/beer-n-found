import React, { useState, useEffect } from 'react'

const loadingSpinner = <div id='loading'><div className='spinner-border' role='status' /></div>
const doneSpinner = <p className='lead py-3'>Loading finished!</p>

function Spinner () {
  const [ spinner, setSpinner ] = useState(loadingSpinner)
  const [ isLoaded, setIsLoaded ] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoaded) setSpinner(doneSpinner)
    }, 2000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    const handleOnload = () => {
      setTimeout(() => {
        setIsLoaded(true)
      }, 1000)
    }
    window.addEventListener('onload', handleOnload)
    return () => window.removeEventListener('onload', handleOnload)
  }, [])

  return <div className='d-flex justify-content-center align-items-center'>{spinner}</div>
}

export default Spinner
