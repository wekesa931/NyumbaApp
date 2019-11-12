import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface LadingPageItemsProps {
    
}
 
const LadingPageItems: React.SFC<LadingPageItemsProps> = () => {
    const optionItems: { id: number, text: string, title: string }[] = [
        {
            id: 1,
            text: 'seller',
            title: 'Sell a House'
        },
        {
            id: 2,
            text: 'buyer',
            title: 'Buy a House'
        },
        {
            id: 3,
            text: 'landlord',
            title: 'Let a House'
        },
        {
            id: 4,
            text: 'tenant',
            title: 'Rent a House'
        }
    ]

    const options = optionItems.map((option, i) => 
        <View style={styles.button} key={i}>
            <Text style={styles.text}>{option.title}</Text> 
        </View>
    )


    return ( 
        <View style={styles.screen}>
            {options}
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        backgroundColor: 'white',
        padding: 20,
        flex: 1,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        width: '100%',
    },
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#673ab7',
        // elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        width: '90%'
    },
    text: {
        color: '#f44336',
        fontSize: 17
    }
})
 
export default LadingPageItems;