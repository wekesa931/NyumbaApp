import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export interface HeaderProps {
    
}
 
const Header: React.SFC<HeaderProps> = () => {
    return ( 
        <View style={styles.header}>
            <View style={styles.headerItems}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={require('../../assets/menu.jpg')}
                    />
                </View>
            </View>            
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        width: '100%',
        height: 70,
        paddingTop: 26,
        backgroundColor: '#673ab7'
    },
    headerItems: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    image: {
        width: 20,
        height: 20
    },
    imageContainer: {
        marginTop: 10
    }
})
 
export default Header;