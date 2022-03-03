import React, {useState} from 'react';

// Import all the components we are going to use
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

// Import FBSDK
// import {
//   LoginButton,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk';
import { ServiceConstant } from './serviceconstant';

const LoginController = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const getResponseInfo = (error, result) => {
    if (error) {
      //Alert for the Error
      alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      console.log(JSON.stringify(result));
      setUserName('Welcome ' + result.name);
      setToken('User Token: ' + result.id);
      setProfilePic(result.picture.data.url);
       ServiceConstant.user_login_data = result.id
      ServiceConstant.user_name = result.name
      ServiceConstant.user_photo = result.picture.data.url
      navigation.navigate('homescreen')
                // alert(ServiceConstant.user_login_data)
                
    }
  };

  const onLogout = () => {
    //Clear the state after logout
    setUserName(null);
    setToken(null);
    setProfilePic(null);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {profilePic ? (
          <Image
            source={{uri: profilePic}}
            style={styles.imageStyle}
          />
        
        ) : null}
        <Text style={styles.textStyle}> {userName} </Text>
        <Text style={styles.textStyle}> {token} </Text>
        <LoginButton
        
          readPermissions={['public_profile']}
          onLoginFinished={(error, result) => {
            if (error) {
              alert(error);
              console.log('Login has error: ' + result.error);
            } else if (result.isCancelled) {
              alert('Login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                
               
                console.log(data.accessToken.toString());
                const processRequest = new GraphRequest(
                  '/me?fields=name,picture.type(large)',
                  null,
                //    ServiceConstant.user_login_data = result.id
                // ServiceConstant.user_name = result.name
                // ServiceConstant.user_photo = result.picture.data.url
                // alert(ServiceConstant.user_name)
                  getResponseInfo,
                  
                );
                // Start the graph request.
                new GraphRequestManager()
                  .addRequest(processRequest).start();
              });
            }
          }}
          onLogoutFinished={onLogout}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginController;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    padding: 10,
  },
  imageStyle: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderWidth:1,
    borderColor:'black',
    borderRadius:50,
    
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});