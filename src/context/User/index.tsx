import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { decode } from 'base-64';
import { router } from 'expo-router';
import { User } from '../../types';

type BaseJwt = {
    exp?: number;
    iat?: number;
};

export type JwtValue = User & BaseJwt;

export type ContextValue = {
    user: User | null;
    setUser: (user: User | null) => void;
};

type UserProviderProps = {
    children: React.ReactNode;
};

export const UserContext = createContext<ContextValue | undefined>(undefined);

export default function UserProvider({ children, ...rest }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function getUserFromStorage() {
            try {
                const token = await AsyncStorage.getItem('bsc-session-token');
                if (token) {
                    const decodedJwtPart = JSON.parse(decode(token.split('.')[1]));
                    
                    setUser({
                        id: decodedJwtPart.id,
                        name: decodedJwtPart.name,
                        email: decodedJwtPart.email,
                        companyId: decodedJwtPart.companyId,
                    });

                    router.push('/home')
                }
            } catch (error) {
                console.error(error);
            }
        }
        getUserFromStorage();
    }, []);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <UserContext.Provider value={value} {...rest}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = (): ContextValue => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within an UserProvider');
    }

    return context;
};
