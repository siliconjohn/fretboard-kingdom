import React from 'react'
import { connect } from 'react-redux'
import { changeFretboardNumberOfNotes, changeFretboardStringHeight,
  changeFretboardFretWidth } from 'actions'
import NumericInput from 'react-numeric-input'

export class Settings extends React.Component {

  render() {
    var { dispatch, fretboardNumberOfNotes, fretboardFretWidth,
      fretboardStringHeight } = this.props

    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-8 medium-10 small-10 shadow">
            <div className="row title-bar shadow">
               Settings
            </div>
            <div className="row menu-section">
              <div className="columns small-6">
                <label className="text-right middle">Number of notes on the Fretboard</label>
              </div>
              <div className="columns small-5 medium-3 large-2">
                <NumericInput className="form-control" min={ 1 } max={ 100 }  mobile value={ fretboardNumberOfNotes }
                  onChange={ ( e ) => {
                    if ( e > 0 && e < 100 ) {
                      dispatch( changeFretboardNumberOfNotes( e ))
                    }
                  }}/>
              </div>
              <div className="columns small-1 medium-3 large-4">
              </div>
            </div>
            <div className="row menu-section no-pad-top">
              <div className="columns small-6">
                <label className="text-right middle">String Height</label>
              </div>
              <div className="columns small-5 medium-3 large-2">
                <NumericInput className="form-control" min={ 30 } max={ 70 } mobile value={ fretboardStringHeight }
                  onChange={ ( e ) => {
                    if ( e > 30 && e < 70 ) {
                      dispatch( changeFretboardStringHeight( e ))
                    }
                  }}/>
              </div>
              <div className="columns small-1 medium-3 large-4">
              </div>
            </div>
            <div className="row menu-section no-pad-top">
              <div className="columns small-6">
                <label className="text-right middle">Note Width</label>
              </div>
              <div className="columns small-5 medium-3 large-2">
                <NumericInput className="form-control" min={ 50 } max={ 150 } mobile value={ fretboardFretWidth }
                  onChange={ ( e ) => {
                    if ( e > 50 && e < 150 ) {
                      dispatch( changeFretboardFretWidth( e ))
                    }
                  }}/>
              </div>
              <div className="columns small-1 medium-3 large-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  fretboardNumberOfNotes: React.PropTypes.number.isRequired,
  fretboardFretWidth: React.PropTypes.number.isRequired,
  fretboardStringHeight: React.PropTypes.number.isRequired
}

export default connect(( state ) => {
  return {
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardFretWidth: state.fretboardFretWidth
  }
})( Settings )
