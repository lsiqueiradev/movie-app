import { StatusBar } from 'react-native';

export default function useStatusBar(style, animated = true) {
    StatusBar.setBarStyle(style, animated);
}
