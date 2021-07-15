/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import { Header ,Left, Body, Right,Thumbnail, Content, Card, CardItem} from 'native-base';
import YoutubePlayer from "react-native-youtube-iframe";

 
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [playing, setPlaying] = React.useState(false);
  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  
  return (
    <ImageBackground source={{uri: 'https://i.pinimg.com/originals/bd/3e/f9/bd3ef97df702cf469d73f055610d6c26.jpg'}} style={styles.backgrounImage}>
      <Header transparent style={styles.header}>
        <Left>
        <Thumbnail source={{uri:'data:image/jpeg;base64,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'}} style={styles.Thumbnail}/>
        </Left>
        <Body>
          <Text style={styles.title}>the ACP Committee Of Ambition</Text>
        </Body>
        <Right>
        <Thumbnail source={{uri:'https://pbs.twimg.com/profile_images/1050983481885581312/1WJkketx.jpg'}} style={styles.Thumbnail}/>
        </Right>
      </Header>
      <Content >
        <Card style={{flex:1}}>
          <CardItem>
            <Left style={styles.col}>
              <Thumbnail source={{uri:'https://previews.123rf.com/images/dxinerz/dxinerz1506/dxinerz150600728/41237761-trophy-award-achievement-cup-icon-vector-image-can-also-be-used-for-education-academics-and-science-.jpg'}} style={styles.icon}/>
              <Text style={styles.subtitle}>Achievement</Text>
            </Left>
            <Body style={styles.col}>
              <Thumbnail source={{uri:'https://image.flaticon.com/icons/png/512/183/183902.png'}} style={styles.icon}/>
              <Text style={styles.subtitle}>Progress Tast</Text>
            </Body>
            <Right style={styles.col}>
              <Thumbnail source={{uri:'https://traumainformedoregon.org/wp-content/uploads/2018/12/Prioritize-Create-Plan-Icon.png'}} style={styles.icon}/>
              <Text style={styles.subtitle}>Achievement</Text>
            </Right>
          </CardItem>
        </Card>
        <Card style={styles.descriptionCard} transparent>
          <Text style={styles.descriptionTitle}>
            Hassan Alle Khayre
          </Text>
          <Text style={styles.descriptionText}>
          Hassan Ali Khaire (or alternatively transliterated as Hassan Ali Khayre,[1] Somali: Xasan Cali Khayre, Arabic: حسن علي خيري‎; born 1969[citation needed]), popularly known as Hassan Khaire,[2] is a Somali activist and former refugee to Norway, manager, politician and is the former Prime Minister of Somalia. He was appointed on 23 February 2017 by Somalia President Mohamed Abdullahi Mohamed "Faarmajo"[3] and Somali Prime Minister Hassan Khaire promptly resigned on Saturday July 25th after MPs tried to pass a vote of no confident vote without due improper process and has decided to be an example for the Somali people by resigning from the position he has held for the Somali people,” said PM Khaire, 
          </Text>
        </Card>
        <Card style={styles.VideoCard} >
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={"HkRHMPBHaAw"}
            onChangeState={onStateChange}
          />
        </Card>
      </Content>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgrounImage: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0A97FA',
    marginTop:30
  },
  title:{
    fontSize:15,
    width:300,
    textAlign:'center',
    color:'white'

  },
  Thumbnail:{


  },
  col:{
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#0A97FA',
    marginHorizontal:5,
    borderRadius:5,
    padding:10,
    justifyContent:'space-between',
    height:100,
  },
  icon:{
    width:50,
    height:50,
    backgroundColor:'white',
    padding:10

  },
  subtitle:{
    color:'white',
    fontSize:12,
    textAlign:'center',

  },
  descriptionCard: {
    marginTop: 8,
    flex: 1,
    height:340,
    backgroundColor:'rgba(0, 0, 0, 0.4)'
  },
  descriptionTitle:{
    fontSize:20,
    color:'white',
    margin:10

  },
  descriptionText:{
    fontSize:16,
    color:'white',
    margin:10

  },
  highlight: {
    fontWeight: '700',
  },
  VideoCard: {
    marginTop: 18,
    flex: 1,
    height:400,
    backgroundColor:'rgba(0, 0, 0, 0.4)'
  },
});

export default App;
