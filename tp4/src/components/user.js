import React from 'react'

export default function User({ name }) {
  return (
    <div className='user-component'>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">{name}</button>
        </div>
    </div>
  )
}