import {React} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    color: 'black',
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
    marginTop: 10,

  },

  inside_vulnPick: {
    flex: 1,
  },

  flex1: {
    flex: 1,
  },

  loginStylesheet: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },

  input: {
    height: 35,
    borderWidth: 1,
    width: '70%',
    textAlign: 'left',
    paddingLeft: 7,
    marginBottom: 7,
  },

  buttonView: {
    flex: 1,
    flexDirection: 'row',

  }
});
