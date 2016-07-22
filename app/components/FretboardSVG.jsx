var React = require('react')
var FretboardString = require('FretboardString')
var FretboardNut = require('FretboardNut')
var FretboardFret = require('FretboardFret')
var FretboardBackground = require('FretboardBackground')
var FretboardOpenString = require('FretboardOpenString')
var FretboardOpenNote = require('FretboardOpenNote');
var FretboardFretNumber = require('FretboardFretNumber');
var {getNoteNameFromMIDINumber,isNoteInArray} = require('../utils');

var FretboardSVG = React.createClass({

  render: function () {
    var {tuning, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord} = this.props

    //calculate dimensions
    var stringHeight = 40
    var nutWidth = 5
    var openWidth = 50
    var fretWidth = 70
    var numStrings = tuning.midiNotes.length
    var height = (1 + numStrings) * stringHeight
    var fretboardHeight = stringHeight * numStrings
    var width = (fretWidth * numberOfNotesOnFretboard) + nutWidth + openWidth

    var renderBackground = () => {
      var tempProps = { height: fretboardHeight, width: width - openWidth, x: openWidth, y:0  }
      return ( <FretboardBackground {...tempProps}/> )
    }

    var renderNut = () => {
      var tempProps = { height: fretboardHeight, width:nutWidth, x:openWidth}
      return ( <FretboardNut {...tempProps}/> )
    }

    var renderOpenStrings = () => {
      var result = []

      for(var i = 0; i < numStrings; i++ ) {
        var tempProps = { y:(stringHeight * i)+stringHeight/2, width: openWidth,
                          note:getNoteNameFromMIDINumber(tuning.midiNotes[i]), key:i+1 }
        result.push ( <FretboardOpenString {...tempProps}/> )
      }

      return result
    }

    var renderNotes = () => {
      var result = []

      // add open string notes
      for(var i=0;i < numStrings;i++) {

        var midiNote = tuning.midiNotes[i]
        var noteY = stringHeight * i
        var key = i + '-' + noteName + '-' + midiNote
        var noteName = getNoteNameFromMIDINumber(midiNote)
        var isNoteInScale = isNoteInArray(midiNote,selectedNotesForScale)
        var isNoteInChord = isNoteInArray(midiNote,selectedNotesForChord)

        var newProps = { x:0, y:noteY, width:openWidth, scaleNote:isNoteInScale, isOpenString:true,
                         chordNote:isNoteInChord, midiNote:midiNote, height:stringHeight, note:noteName, key:key }
        result.push ( <FretboardOpenNote {...newProps}/> )
      }

      // add notes on fretboard for each string
      for(var i=0;i < numStrings;i++ ) {

        var noteY = stringHeight * i
        var tempFretX = openWidth + nutWidth
        var stringMidiNote = tuning.midiNotes[i]

        for(var a=0; a < numberOfNotesOnFretboard; a++ ) {

          var tempW = fretWidth - (a == 1 ? 0 : 2)
          var midiNote = stringMidiNote + a + 1
          var isNoteInScale = isNoteInArray(midiNote,selectedNotesForScale)
          var noteName = getNoteNameFromMIDINumber(midiNote)
          var key = 'fret-' + i + '-' + noteName + '-' + midiNote
          var isNoteInChord = isNoteInArray(midiNote,selectedNotesForChord)

          var newProps = { x:tempFretX, y:noteY, width: tempW, height: stringHeight,
                            scaleNote:isNoteInScale, midiNote: midiNote, chordNote:isNoteInChord,
                            note:noteName, isOpenString:false, key: key }
          result.push ( <FretboardOpenNote {...newProps}/> )

          tempFretX+= fretWidth
        }
      }

      return result
    }

    var renderFrets = () => {
      var result = []
      var fretx = openWidth + nutWidth + fretWidth

      for(var i = 1; i <= numberOfNotesOnFretboard; i++ ) {
        var tempProps = { height: fretboardHeight, width:2, x:fretx ,key:i }
        result.push ( <FretboardFret {...tempProps}/> )
        fretx += fretWidth
      }

      return result
    }

    var renderStringLines = () => {
      var result = []

      for(var i=1;i <= numStrings; i++ ){
        var tempProps = { key: i,
                            x: openWidth + nutWidth,
                            y:(i * stringHeight) - (stringHeight/2) }

        result.push ( <FretboardString {...tempProps}/> )
      }

      return result
    }

    var renderFretNumbers = () => {
      var result = []
      var fretX = openWidth + nutWidth
      var y = fretboardHeight + stringHeight / 2 + 10
      for(var i = 1; i <= numberOfNotesOnFretboard; i++ ) {
        var tempProps = { x:fretX, y:y, number: i, fretWidth:fretWidth ,key:'fret-number-'+i }
        result.push ( <FretboardFretNumber {...tempProps}/> )
        fretX += fretWidth
      }

      return result
    }

    return (
      <div className="row">
        <div className="fretboard-parent column small-centered large-12 medium-12 small-12">
          <svg className="fretboard-svg" width={width} height={height}>
            {renderBackground()}
            {renderFretNumbers()}
            {renderNut()}
            {renderFrets()}
            {renderStringLines()}
            {renderNotes()}
            {renderOpenStrings()}
          </svg>
        </div>
      </div>
    )
  }
})

module.exports = FretboardSVG