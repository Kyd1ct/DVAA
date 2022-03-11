import {React} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  vulnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  heading: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,

  },

  body: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 10,
  },

  vulnPick: {
    height: 150,
    backgroundColor: 'gray',
    marginBottom: 10,

  },
});
