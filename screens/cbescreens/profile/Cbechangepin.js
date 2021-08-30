import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
const useState = React.useState;

let schema = yup.object().shape({
  oldPin: yup.number().required().positive().integer().min(1000).max(9999),
  newPin: yup.number().required().positive().integer().min(1000).max(9999),
  confPin: yup.number().required().positive().integer().min(1000).max(9999),
});

function Cbechangepin() {
  const [oldPin, setoldPin] = useState();
  const [newPin, setNewpin] = useState();
  const [confPin, setConfPin] = useState();

  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const [isErr3, setErr3] = useState(false);
  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            oldPin,
            newPin,
            confPin,
          },
          {
            abortEarly: false,
          },
        )
        .then(({oldPin, newPin, confPin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  RNImmediatePhoneCall.immediatePhoneCall(
                    `*889*1*${oldPin}*5*5*5*4*2${oldPin}*${newPin}*${confPin}#`,
                  );
                } catch (e) {
                  throw e;
                }
              } else {
                PermissionsAndroid.request(
                  'android.permission.CALL_PHONE',
                ).then(status => {
                  if (status === 'granted') {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${oldPin}*5*5*5*4*2${oldPin}*${newPin}*${confPin}#`,
                    );
                  } else {
                    throw new Error('not Granted');
                  }
                });
              }
            })
            .catch(err => {
              throw err;
            });
        })
        .catch(err => {
          err.errors.forEach(element => {
            if (element.includes('oldPin')) {
              setErr1(true);
            } else if (element.includes('newPin')) {
              setErr2(true);
            } else if (element.includes('confPin')) {
              setErr3(true);
            } else {
            }
          });
        });
    });
  };

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

  const [isFocused1, setFocused1] = useState(false);
  const [isFocused2, setFocused2] = useState(false);
  const [isFocused3, setFocused3] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <View>
            <TextInput
              mode="outlined"
              label="Old Pin"
              error={isErr1}
              dense={true}
              placeholder={isFocused1 ? '' : 'Old Pin'}
              placeholderTextColor="#9b9b9b"
              value={oldPin}
              onFocus={() => setFocused1(true)}
              onBlur={() => setFocused1(false)}
              onChangeText={text => {
                setErr1(false);
                setoldPin(text.replace(/[^0-9]/g, ''));
              }}
              style={styles.input}
            />
          </View>

          <TextInput
            placeholder={isFocused2 ? '' : 'New PIN'}
            error={isErr2}
            dense={true}
            label="New PIN"
            mode="outlined"
            onFocus={() => setFocused2(true)}
            onBlur={() => setFocused2(false)}
            value={newPin}
            onChangeText={text => {
              setErr2(false);
              setNewpin(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#9b9b9b"
            style={styles.input}
          />

          <TextInput
            placeholder={isFocused3 ? '' : 'Confirm PIN'}
            maxLength={4}
            label="Confirm PIN"
            error={isErr3}
            dense={true}
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
            mode="outlined"
            onFocus={() => {
              setFocused3(true);
            }}
            onBlur={() => {
              setFocused3(false);
            }}
            value={confPin}
            onChangeText={text => {
              setErr3(false);
              setConfPin(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#925252"
            style={styles.input}
          />

          <View style={styles.line}></View>

          <Button
            onPress={onSubmit}
            color="#fff"
            mode="contained"
            dark={true}
            size={30}
            style={styles.btn}
            icon="phone">
            Continue
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cbechangepin;
