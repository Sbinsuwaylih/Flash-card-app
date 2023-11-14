import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#f5f5f4',
        padding: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2C3E50', // Deeper shade for better contrast
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#F9977B', // Lighter border color
        borderRadius: 12,
        marginVertical: 10,
        padding: 15,
        width: '100%',
        backgroundColor: '#F5F5F4',
        shadowColor: '#BDC3C7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    button: {
        borderRadius: 12,
        padding: 15,
        marginTop: 20,
        width: '70%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quizButton: {
        borderRadius: 12,
        padding: 15,
        marginTop: 20,
        width: '50%',
    },
    quizButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

})

export default styles