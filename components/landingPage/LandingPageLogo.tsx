import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export interface LandingPageLogoProps {
    
}
 
const LandingPageLogo: React.SFC<LandingPageLogoProps> = () => {
    return ( 
        <View style={styles.screen}>
            <Image 
                style={styles.image}
                source={require('../../assets/logo.png')}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 20,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        width: '100%',
    },
    image: {
        paddingLeft: 5,
        width: 200,
        height: 100
    }
})
 
export default LandingPageLogo;