import React from 'react';
import { View, Text, Button } from 'react-native'
import LadingPageItems from './LandingPageItems'
import LandingPageLogo from './LandingPageLogo'

export interface LandingPageProps {
    
}
 
const LandingPage: React.SFC<LandingPageProps> = () => {
    return ( 
        <View>
            <LandingPageLogo />
            <LadingPageItems />
        </View>
     );
}
 
export default LandingPage;