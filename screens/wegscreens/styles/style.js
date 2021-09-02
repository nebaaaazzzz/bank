import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subcontainer: {
    marginTop: '5%',
    marginBottom: '2%',
  },
  input: {
    borderColor: '#2196F3',
    width: '95%',

    alignSelf: 'center',
    marginTop: '2%',
    marginBottom: '2%',
    color: '#4d4a4a',
    backgroundColor: '#fffff9',
    borderRadius: 15,
  },
  txt: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'rgba(0,0,0,0.6)',
    fontWeight: 'bold',
    marginTop: '5%',
  },
  btn: {
    backgroundColor: '#2196F3',
    width: '90%',
    padding: '2%',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 5,
    marginBottom: 10,
  },

  line: {
    width: '90%',
    alignSelf: 'center',
    height: '0.5%',
    backgroundColor: '#bbb6b6',
    marginTop: '3%',
    marginBottom: '3%',
  },
});
export default styles;
