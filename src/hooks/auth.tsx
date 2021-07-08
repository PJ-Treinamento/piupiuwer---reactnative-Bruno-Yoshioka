import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { createContext } from "react";
import { AuthContextData, AuthState, LoginCredentials } from '../models';
import api from '../services/api';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [userData, setUserData] = useState<AuthState>({} as AuthState);
    
  useEffect(() => {
    async function getAuth ()  {
      try {
        const token = await AsyncStorage.getItem('@Project:token');
        const user = await AsyncStorage.getItem('@Project:user');

        if (user && token) {
          api.defaults.headers.authorization = `Bearer ${token}`; 
          return { token, user: JSON.parse(user) };
        }
      } catch(error) {
        console.log(error)
      }
    };
    getAuth();
  }, [])
    

	const login = async ({ email, password }: LoginCredentials) => {
        const response = await api.post('/sessions/login/', {
            email,
            password,
        });

        const { token, user } = response.data;
        AsyncStorage.setItem('@Project:token', token);
        AsyncStorage.setItem('@Project:user', JSON.stringify(user));

        setUserData({ token, user });
    };

  const logout = () => {
      AsyncStorage.removeItem('@Project:user');
      AsyncStorage.removeItem('@Project:token');

      setUserData({} as AuthState);
      console.log('salve');
  };
  
  return (
    <AuthContext.Provider value={{
        user: userData.user,
        token: userData.token,
        login: login,
        logout: logout,
    }}
    >
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);