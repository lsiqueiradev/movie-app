export const base = {
    color_main: '#fa7777',
};

export const lightTheme = {
    ...base,
    background: '#FFFFFF',
    textPrimary: '#000000',
    inputBackground: 'rgba(0,0,0,.1)',
    inputColor: '#000000',
    inputColorPlaceholder: 'rgba(0, 0, 0, 0.5)',
    inputIcon: '#000000',
    inputColorPasswordVisibility: '#000000',
};

export const darkTheme = {
    ...base,
    background: '#111112',
    textPrimary: '#FFFFFF',
    inputBackground: 'rgba(0,0,0,.3)',
    inputColor: '#FFFFFF',
    inputColorPlaceholder: 'rgba(255, 255, 255, 0.8)',
    inputIcon: 'rgba(255, 255, 255, 0.6)',
    inputColorPasswordVisibility: '#FFFFFF',
};

export const headerLight = {
    colors: {
        background: 'rgb(255, 255, 255)',
        border: 'rgb(240, 240, 240)',
        card: 'rgb(255, 255, 255)',
        notification: 'rgb(255, 59, 48)',
        primary: 'rgb(0, 122, 255)',
        text: 'rgb(28, 28, 30)',
        borderBottomTab: 'rgb(240, 240, 240)',
    },
    dark: false,
};

export const headerDark = {
    colors: {
        background: '#111112',
        border: '#151516',
        card: '#111112',
        notification: 'rgb(255, 69, 58)',
        primary: 'rgb(10, 132, 255)',
        text: 'rgb(229, 229, 231)',
        borderBottomTab: '#151516',
    },
    dark: true,
};
