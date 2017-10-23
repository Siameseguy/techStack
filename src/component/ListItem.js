import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from '../common/'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }
  // create a helper function that determines if the id's match
  renderDescription() {
    // this is the construction of the this.props which has "libarary", and "selectLibraryId" methods
    const { library, selectedLibraryId } = this.props
    if (library.id === selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      )
    }
  }
  render() {
    const { titleStyle } = styles
    // to get access to id and title you have to deconstruct this.props.library
    // library is the reference to the data from the library arrays which contain the keys "id", and "title"
    const { id, title } = this.props.library

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

// use connect helper to call action creator
// first argument is mapStateToProps otherwise its null
// pass entire actions object to ListItem as props
export default connect(mapStateToProps, actions)(ListItem)
