import { RootNavigator } from './components/RootNavigator/RootNavigator';
import {
    Provider as PaperProvider,
    DefaultTheme,
    DarkTheme,
} from 'react-native-paper';
import { useCallback, useMemo, useState } from 'react';
import * as Updates from 'expo-updates';
import { I18nManager, useColorScheme } from 'react-native';
import { PreferencesContext } from './context/preferencesContext';


const Main = () => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme === 'dark' ? 'dark' : 'light');
    const [rtl] = useState(I18nManager.isRTL);

    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    const toggleRTL = useCallback(() => {
        I18nManager.forceRTL(!rtl);
        Updates.reloadAsync();
    }, [rtl]);

    const preferences = useMemo(
        () => ({
            toggleTheme,
            toggleRTL,
            theme,
            rtl: rtl ? 'right' : 'left',
        }),
        [rtl, theme, toggleRTL]
    );


    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={
                theme === 'light'
                    ? {
                        ...DefaultTheme,
                        colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
                    }
                    : {
                        ...DarkTheme,
                        colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
                    }
            }>

                <RootNavigator />
            </PaperProvider>
        </PreferencesContext.Provider >
    )
}

export default Main;
