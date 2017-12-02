import { StackNavigator } from 'react-navigation';
import { ProfilePage } from './ProfilePage';

const RootNavigator = StackNavigator({
    /**
    EntryPage : {
        screen : EntryPage,
        navigationOptions : {
            headerTitle : "New Entry",
        },
    },
    */
    ProfilePage : {
        screen : ProfilePage,
        navigationOptions : {
            headerTitle : "Profile",
        },
    },
    /**
    HistoryPage : {
        screen : HistoryPage,
        navigationOptions : {
            headerTitle : "History",
        },
    },
    */
});

export default RootNavigator;
