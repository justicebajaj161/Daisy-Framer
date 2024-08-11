import React from 'react'
import { useNavigation } from 'react-router-dom'

const Submitbutton = ({text}) => {
    const navigation=useNavigation()
    const isSubmitting = navigation.state === "submitting"
  return (
    <button type='submit' className='btn btn-primary btn-block' disabled={isSubmitting} >
  {
    isSubmitting? <>
    <div className='loading loading-spinner'></div>
    sending...
    </>: text || "submit"
  }
    </button>
  )
}

export default Submitbutton