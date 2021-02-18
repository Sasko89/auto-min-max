import { Button, Flex, Text } from '@chakra-ui/react';
import AddCar from '../components/addCar';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';
import { AuthProvider } from '../lib/auth';
import { useState, useEffect } from 'react';
import fire from '../lib/fireBase';

export default function Admin() {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  function handleLogin() {
    fire
      .auth()
      .signInWithEmailAndPassword(UserName, Password)
      .then((res) => {
        setUserName(res.user);

        return res.user;
      });
  }

  function handleLogout() {
    fire.auth().signOut();
  }

  function authListener() {
    fire.auth().onAuthStateChanged((UserName) => {
      if (UserName) {
        setUserName(UserName);
      } else {
        setUserName('');
      }
    });
  }

  useEffect(() => {
    authListener();
  }, []);

  // console.log(UserName, Password);

  return (
    <Flex
      minH="100vh"
      justify="center"
      bgGradient="linear(to-br, blue.50, gray.100)"
    >
      {UserName.email ? (
        <AuthProvider>
          <AdminDashboard
            handleLogout={handleLogout}
            UserName={UserName}
            Password={Password}
          />
        </AuthProvider>
      ) : (
        <AdminLogin
          setUserName={setUserName}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </Flex>
  );
}
