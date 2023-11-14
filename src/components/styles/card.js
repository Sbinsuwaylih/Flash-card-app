import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    cardContainer: {
       borderColor: '#F9977B',
        borderWidth: 1,
       
        borderRadius: 10,
        padding: 20,
        margin: 10,
        width:"90%",
        height:'30%',
        alignSelf:"center"
      },
      
      cardText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold', 
       
        color:'#1f2032'
    },
    textView:{
     

    },
      showAnswerButton: {
        backgroundColor: '#2980B9',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width:"80%",
        borderWidth: 1,   
        borderRadius: 5,
        
        
      },
      showAnswerButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      favoriteButton: {
        alignItems: 'center',
        alignSelf:"center",
        margin:10,
        alignSelf:"flex-end"
        
        
      },
      row:{
        flexDirection:"row",
        justifyContent:'center',
        
      },
      box:{
        flex:1,
      
      },
      Text:{
        fontSize:10,
      },
      hidden:{
        color:"white"
      },
      choiceContainer: {
        borderWidth: 1,
        borderColor: '#F9977B',
        borderRadius: 5,
        padding: 5,
        width:'100%',
       
        
      
      },
      choiceText: {
        fontSize: 20,
        marginLeft: 10,
        color:'#1f2032',
        fontWeight:"400"
      },
      showAnswerButtonActive: {
        backgroundColor: 'lightgreen',
      },
      button: {
        borderRadius: 12,
        padding: 15,
        marginTop: 20,
        width: '70%',
      },
      correctChoiceButton: {
        backgroundColor: 'green',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    
    wrongChoiceButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    
    choiceButton: {
        backgroundColor: 'lightgrey',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    
    choiceButtonText: {
        color: 'black',
    }
    
      
    });
    export default styles