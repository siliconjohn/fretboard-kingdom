import React from 'react'
import { connect } from 'react-redux'

const intervals = [ 1, 2, 3, 4, 5, 6, 7 ]

export class FretboardIntervalChooser extends React.Component {

  render() {
    return (
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="dropdowntitle"><a href="#" className="dropdowntitle">Highlight</a>
        <ul className="menu dark">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
      </li>
    </ul>
    )
  }
}

export default connect(( state ) => {
  return {
    fretboardHighlight: state.fretboardHighlight
  }
})( FretboardIntervalChooser )
