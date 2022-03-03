import { StyleSheet } from "react-native";
const signinstyle = StyleSheet.create({
    signin_main_view: {
        flex:1,
        backgroundColor:'#494949',  
    },
    signin_main_text:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        top:10,
        fontSize:18
       },
    footer_text:{
        color:'white',
        fontSize:12,
        fontFamily:'Lato-Regular'
    },
    footer_text_db:{
        color:'white',
        fontSize:10,
        textAlign:'center'
    },
})

const loginstyles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor : '#494949',
        
      },
      header:{
       padding:10
      },
      footer:{
        padding:15
      },
      header_text:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left'
      },
    
     action:{   
       borderBottomWidth:1,
       borderColor:'#f2f2f2',
       margin:7
     },
     inputtext:{
      
       marginTop: Platform.OS === 'ios' ? 0 : -12,
       color:'black'
     },
  
     
     touchable_style: {
        backgroundColor:'white',
        marginTop:10,
        height:45,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    touch_text:{
        color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:17
}
});
const forgotstyles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#494949'
      },
      header:{
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
      },
      footer:{
        flex:3,
        backgroundColor:'#494949',
        padding:10
      },
      header_text:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left'
      },
     action:{
       flexDirection:'row',
       marginTop:20,
       borderBottomWidth:1,
       borderColor:'#f2f2f2',
       padding:5,
     },
     inputtext:{
       flex:1,
       marginTop: Platform.OS === 'ios' ? 0 : -12,
       paddingLeft:5,
       color:'white'
     },
   header_text_more:{
    color:'white',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'left'
  },
});
const mapstyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      width:'100%',
      height:'100%',
      backgroundColor:'#494949'
    },
    main_text:{left:20,color:'white',fontWeight:'bold',fontSize:25}

});
const editprofilestyles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor : '#494949',
        
      },
      header:{
       padding:10
      },
      footer:{
        flex:3,
        padding:15
        // backgroundColor:'white',
       
      },
      header_text:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left'
      },
      footer_text:{
       color:'white',
       fontWeight:'bold',
       fontSize:18
     },
     action:{
       borderBottomWidth:1,
       borderColor:'#f2f2f2',
       margin:7
     },
     inputtext:{ 
       marginTop: Platform.OS === 'ios' ? 0 : -12,
       color:'white'
     },
     button:{
       alignItems:'center',
       marginTop:50,
     },
     signin:{
       width:'100%',
       height:50,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10
     },
     text_signin:{
       font:18,
       fontWeight:'bold'
     },
     touchable_style: {
        backgroundColor:'white',
        marginTop:10,
        height:45,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    touch_text:{
        color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:17
}
});
export {signinstyle,loginstyles,forgotstyles,mapstyles,editprofilestyles};