import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    const profilBody = (props) => {
      const rows = props.profilData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
    }
    return (
      <div>
        <button type="button" class="btn btn-primary"></button>
        <button type="button" class="btn btn-secondary"></button>
      </div>
    )
  }
}

export default Navbar;