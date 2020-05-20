import { useState } from 'react'

const useFormState = initialValue => {
  const [state, setState] = useState(initialValue)
  const handleStateChange = (e) => {
    setState(e.target.value)
  }
  const resetState = () => {
    setState('')
  }
  return [state, handleStateChange, resetState]
}

export default useFormState