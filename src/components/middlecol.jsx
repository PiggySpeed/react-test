import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
//import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import TextField from '../../node_modules/material-ui/lib/text-field';
import IconButton from '../../node_modules/material-ui/lib/icon-button';

import EditorFormatListBulleted from '../../node_modules/material-ui/lib/svg-icons/editor/format-list-bulleted';
import EditorFormatNumberedBulleted from '../../node_modules/material-ui/lib/svg-icons/editor/format-list-numbered';
import EditorFormatBold from '../../node_modules/material-ui/lib/svg-icons/editor/format-bold';
import EditorFormatItalic from '../../node_modules/material-ui/lib/svg-icons/editor/format-italic';
import EditorFormatUnderlined from '../../node_modules/material-ui/lib/svg-icons/editor/format-underlined';

import Radium from 'radium';

//TODO: get middle col icon button hover effects working

var styles = {
  card1: {
    backgroundColor: Colors.grey200,
    color: Colors.blue
  },
  text_editor_icons: {
    padding: 0,
    margin: 0,
    backgroundColor: Colors.clear
  }
};

@Radium
class TextEditorToolBar extends React.Component {
  constructor(props) {
    super(props)
  }
  hoverStyleEnter(e) {
    e.target.style.backgroundColor = Colors.grey300
  }
  hoverStyleLeave(e) {
    e.target.style.backgroundColor = Colors.grey200
  }
  bulletList() {
    console.log("bulleting")
  }
  bulletNumber() {
    console.log("numbering")
  }
  textBold() {
    console.log("bolding")
  }
  textItalic() {
    console.log("italics")
  }
  textUnderline() {
    console.log("underline")
  }
  render() {
    return (
      <Card style={styles.card1}>
        <IconButton onClick={this.bulletList}
                    onMouseEnter={this.hoverStyleEnter}
                    onMouseLeave={this.hoverStyleLeave}
                    tooltip="hallo">
          <EditorFormatListBulleted style={styles.text_editor_icons} />
        </IconButton>
        <IconButton>
          <EditorFormatNumberedBulleted style={styles.text_editor_icons} />
        </IconButton>
        <IconButton>
          <EditorFormatBold style={styles.text_editor_icons} />
        </IconButton>
        <IconButton>
          <EditorFormatItalic style={styles.text_editor_icons} />
        </IconButton>
        <IconButton>
          <EditorFormatUnderlined style={styles.text_editor_icons} />
        </IconButton>
      </Card>
    )
  }
}

@Radium
class FancyNotes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="middle-col-text">
        <TextEditorToolBar className="text-editor-toolbar"/>
        <TextField
          className="middle-col-text-area"
          multiLine={true}
          rows={22}
          rowsMax={22}
          underlineShow={false}
          fullWidth={true}>
        </TextField>
      </div>
    )
  }
}

export default class MiddleCol extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <FancyNotes/>
    )
  }
}