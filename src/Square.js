import PropTypes from 'prop-types'
import React from 'react'

const style = { 
  border: '1px solid black', 
  flexGrow: '1',
  flexBasis: '100px', 
  display: 'flex', 
  alignItems: 'center', 
  height: '100%', 
  justifyContent: 'center', 
  padding: '10px', 
  boxSizing: 'border-box'
}

export default class Square extends React.PureComponent {
  state = { 
    isEditing: false,
    isEditable: true, 
    defaultText: this.props.text
  }

  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.setState({ defaultText: this.props.text })
    }
  }

  static propTypes = {
    isEditable: PropTypes.bool,
    text: PropTypes.string
  }
  
  static defaultProps = {
    isEditable: true,
    text: ''
  }

  onSave = () => {
    this.props.onEdit({ 
      item: this.state.editedText,
      index: this.props.index
    })

    this.setState({ 
      editedText: '', 
      isEditing: false
    })
  }

  onEdit = () => {
    this.setState({ isEditing: true, editedText: this.props.text })
  }

  onChange = (event) => {
    this.setState({ editedText: event.target.value })
  }

  onCancel = () => {
    this.setState({ isEditing: false })
  }

  render() {
    return (
      <div style={style}>
        {(this.state.isEditable && !this.state.isEditing) && (
          <div><ion-icon name="create" onClick={this.onEdit} /></div>
        )}
        {!this.state.isEditing && this.state.defaultText}
        {this.state.isEditing && (
          <React.Fragment>
            <input 
              value={this.state.editedText}
              onChange={this.onChange} 
            />
            <ion-icon name="checkmark" onClick={this.onSave} />
            <ion-icon name="close" onClick={this.onCancel} />
          </React.Fragment>
        )}
      </div>
    )
  }
} 
