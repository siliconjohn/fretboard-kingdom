var React = require('react')
var ReactDOM = require('react-dom')
import CustomTuningContainer from 'CustomTuningContainer'
import TuningChooser from 'TuningChooser'

var TuningsContainer = React.createClass({

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.tuningChooser).focus()
  },

  render: function() {
    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-10 medium-12 small-12">
            <div className="row title-bar shadow">
              <h2>Choose Tuning</h2>
            </div>
            <div className="row menu-section shadow">
              <div className="columns small-12">
                <TuningChooser ref="tuningChooser"/>
              </div>
              <div className="columns small-12">
                <CustomTuningContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = TuningsContainer
