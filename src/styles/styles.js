import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 16
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  }, 

  menuView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuListMainView: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  menuListDescView: {
    // backgroundColor: 'red',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 15,
    paddingEnd: 15 
  },
  menuListName: {
    fontSize: 22
  },
  menuListPrice: {
    fontSize: 16,
    marginBottom: 10
  },
  menuListImage: {
    width: 80, 
    height: 80,
    margin: 10
  },
  menuListButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderWidth: 0,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    margin: 10
  },
  menuOrderButton: {
    backgroundColor: 'orange',
    color: 'white',
    borderRadius: 3,
    marginTop: 30,
    marginBottom: 10,
    padding: 10
  },

  chatMainView: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3
  },
  chatInputView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chatInputField: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    // color: 'gray',
    // fontStyle: 'italic',
    fontSize: 16,
    borderRadius: 60,
    borderWidth: 0,
    flexGrow: 1,
    margin: 5
  },
  chatInputButton: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    margin: 5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });