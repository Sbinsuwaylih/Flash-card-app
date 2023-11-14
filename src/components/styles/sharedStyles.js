import { StyleSheet } from 'react-native';

const sharedStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        margin: 15,
        padding: 20
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4A4A4A',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5F5F5"
    },
    loadingText: {
        marginTop: 20,
        color: '#757575',
        fontSize: 18,
    },
    listContainer: {
        padding: 10,
        alignItems: 'center'
    }
});

export default sharedStyles;
