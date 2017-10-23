import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends Component {
  renderRow(library) {
    return <ListItem library={library.item} />
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderRow}
        keyExtractor={library => library.id}
      />
    )
  }
}

const mapStateToProps = state => {
  // will provide props to the LibraryList
  return { libraries: state.libraries }
}

// connect helper links librarylist and app state or react and redux
export default connect(mapStateToProps)(LibraryList)

// import React, { Component } from 'react';
// import { View, FlatList, Text } from 'react-native';
// import { connect } from 'react-redux';

// class LibraryList extends Component {

//   renderItem({ item, index}){
//     return <Text>{item.title}</Text>;
//   }

//   render(){
//     return(
//       <FlatList
//         data={this.props.libraries}
//         renderItem={this.renderItem}
//       />
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { libraries: state.libraries };
// };

// export default connect(mapStateToProps)(LibraryList);
