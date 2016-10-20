var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
import CustomTuningButtons from 'CustomTuningButtons'
import CustomTuningNoteChooser from 'CustomTuningNoteChooser'

export var CustomTuningContainer = React.createClass({

  render: function () {
    var num = this.props.numberOfCustomTuningStrings
    var result = []

    return (
      <div  >
        <div className="row">
          <div className="small-7 medium-7 columns">
            <p><strong>Or Create a Custom Tuning</strong></p>
          </div>
          <div className="small-5 medium-5 columns">
            <CustomTuningButtons/>
          </div>
        </div>
        <p>Strings {num} to 1, the lowest is first.</p>
        {
          Array( num ).fill().map(( _, i ) => {
            return (
              <CustomTuningNoteChooser key={ i } stringNumber={ i }/>
            )
          }).reverse()
        }
      </div>
    )
  }
})

export default connect(( state ) => {
  return {
      numberOfCustomTuningStrings: state.numberOfCustomTuningStrings
  }
})(CustomTuningContainer)
