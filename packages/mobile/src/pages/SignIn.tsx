import { useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

// design system
import { AppText, colors } from '../design/system';

// styles
const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${colors.lighter};
`

const SignUpButton = styled.TouchableOpacity`
  background: ${colors.darkBlue};
  padding: 10px 30px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 20px 0;
`

const ButtonLabel = styled.Text`
  color: ${colors.lighterBlue};
  font-weight: bold;
  font-size: 14px;
`

const SignUpLink = styled.Text`
  margin: 30px 0;
`

const FormContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`

const AppInput = styled.TextInput`
  padding: 10px 30px;
  padding-left: 10px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${colors.lighter};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.darkBlue};
  margin: 15px 0;
  color: ${colors.blue};
  font-weight: bold;
`

function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(email: string) {
    setEmail(email);
  }

  function handlePasswordChange(password: string) {
    setPassword(password);
  }

  return (
    <MainContainer>
      <FormContainer>
        <AppInput
          autoCapitalize="none"
          onChangeText={text => handleEmailChange(text)}
          placeholder="Email"
        />

        <AppInput
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={text => handlePasswordChange(text)}
        />
      </FormContainer>
      <SignUpButton>
        <ButtonLabel>Login</ButtonLabel>
      </SignUpButton>
      <SignUpLink>
        Don't have an account?
        <AppText color={colors.darkBlue} onPress={() => navigation.navigate('SignUp')}>
          { ' ' }Create one
        </AppText>
      </SignUpLink>
    </MainContainer>
  )
}

export default SignIn;