import 'expo-asset';
import { Navigation } from 'react-native-navigation';
import { PendoSDK, NavigationLibraryType }  from 'rn-applause';
// Note:
// in order to test Redux and MobX separately,
// please comment unnecessary import, this is important
// because RNN registers screens for both of them if two imports are presented

// import { startApp } from './srcRedux/App';
import { startApp } from './srcMobX/App';

Navigation.events().registerAppLaunchedListener(() => {
    const initParams = {
        visitorId: "MetinKerem",
        accountId: "AndroidInc",
        visitorData: {
            age: 25,
            country: "USA"
        },
        accountData: {
            Tier: 1,
            Size: "Enterprise"
        }
    };
    const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
    const pendoKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiIyZGNjYjkwMGFlNmEzNjE4YWMyMmNlZjU1M2I4MDNjOWU4ZjE3ODAxYWNmOGIyZGQxZWJlOGZhOGY5M2Q4ZGIzMTljMDQzYzZjM2VkNDA1NmU2MWZlYjg5MDljNDhhNmE4YTFlMzY4YzgyNmYzOTU4YTczNWMyMGIxYjliNDVjOGU5NDE1ODU5MzhlMThiNjhlNTRiZmFkNjI5NTBiOGMxYmQ3YzgzYzI5YWUxNmUyNWQyZGZhMGE4ZTllNzIwNDJiYjBkNjUwOTQyYzY2MzM0Y2UyYzhiYTMzMzcxZDMwZi5lOTQ2YTE3NDI2NjFjMzJkYTUxMGFlOWNhNzYwYWNjMC4zOTA3NWMwMjMzNzA2YWMyMDAzYWIyNzZmNWNmMzYzZTg0ZWY5ZTJkODJmNTA4YzVlMjM4OWQ5OTlkMzhmMTJhIn0.PvV43MQBZg7HwV8ZtPUdqPhkvV9O3DC1Bqs65D-x09N0y7IRlc36JJjFc0G55T4vZAA8zbmSi6xeN62A0p3ZAlmxJaiMw5t0LlXGmkHZrvgya5cPoOsKGWQV295PRDFkIDYvnZM-1Osaqea1XfZ9XECv5B9FH1LLy0QFdbBLUio';
    PendoSDK.initSdk(pendoKey, initParams, navigationOptions);
    startApp();
});