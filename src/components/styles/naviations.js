import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#ffff'
    },
    btnView: {
    marginBottom: 5,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: "center",
    width: 300,
    height: 80,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#1f2032",
    borderColor:"#F9977B"
},

    btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
    

},
    welcomeText: {
    margin: 10,
    marginBottom: 55,
    textAlign: "center",
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: '300'
},
    categoryButton: {
    marginBottom: 15,

},
})

export default styles