import React from 'react'

export default function User({ id, name, onChange }) {

  return (
    <div className='user-component'>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button" onClick={() => onChange(id)} className='change'>{name}</button>
        </div>
    </div>
  )
};