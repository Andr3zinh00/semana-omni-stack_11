import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Contants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  headerText: {
    fontSize: 15,
    color: "#737380"
  },
  boldText: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
    marginBottom:10
  },
  incidentsList: {
   marginTop:32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#ffff',
    marginBottom: 16
  },
  incidenProperty:{
    fontSize:14,
    color:'#41414d',
    fontWeight:'bold'
  },
  incidentValue:{
    marginTop:8,
    fontSize:15,
    marginBottom:24,
    color:'#737380'
  },
  detailsButton:{
    flexDirection:'row',
    alignSelf:'flex-end',
    alignItems:"center"
  },
  detailsButtonText:{
    color:'#e02041',
    fontSize:15,
    fontWeight:'bold',
    marginRight:5
  }
});