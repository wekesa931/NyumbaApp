import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface SideNavigationProps {
    
}
 
const SideNavigation: React.SFC<SideNavigationProps> = () => {
    return ( 
        <View>
            <Text>Side Navigation</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    
})
 
export default SideNavigation;