import React from 'react'


export default function UserList({facebooks, onChange}) {

  return (
    <div className='facebook-container'>
    {facebooks.map((profil) => {
      return(
        <UserButton
        key={profil.id}
        id={profil.id}
        name={profil.nom} 
        onChange={onChange}
        />
      );
    })}
  </div>
  );
}
