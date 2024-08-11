import React from 'react'

const Forminput = ({label,name,type,defaultValue}) => {
  return (
    <div className="form-control p-2">
  <label className="label">
    <span className="label-text text-1xl font-semibold">{label}</span>
  </label>
  <input type={type} name={name} defaultValue={defaultValue} placeholder="Type here" className="input input-bordered" />

</div>
  )
}

export default Forminput