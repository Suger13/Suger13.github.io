import './App.css';
import { Box, Text } from "@chakra-ui/react"
import { Title } from "./components/Title"
import Introduce, { RightSide, LeftSide } from "./components/IntroduceSection";
import LeftIntroduce from "./components/LeftIntroduce";
import RightIntroduce from "./components/RightIntroduce";
import MiddleSection, { DetailBox } from "./components/MiddleSection";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { useEffect } from 'react';
import axios from 'axios'



const communicative = require("./src-image/icon/middle-section/group.png");
const profesional = require('./src-image/icon/middle-section/Layer_65.png');
const collaborative= require('./src-image/icon/middle-section/group243.png');
const star = require('./src-image/icon/middle-section/group-242.png')


function App() {

  const getData = async () => {
    const data = await axios.get('http://localhost:4015/')

  } 

  useEffect(() =>{
    getData()
  },[])



  return (
    
    <div className="App">
      <Title />
      
      <Introduce>
        <LeftSide>
          <LeftIntroduce />
        </LeftSide>
        
        <RightSide>
          <RightIntroduce />
        </RightSide>
      </Introduce>
      
      <Text textAlign='center' fontSize='4xl' mt='20'>Why Hire Me?</Text>

      <MiddleSection>
        <DetailBox image={communicative} topic="Comunicative" 
        content="communicate with people I love to share my knowlage to another one and learn new thing"
         />
        <DetailBox image={profesional} topic="Profesional" content="understanding and solving the problem" />
        <DetailBox image={collaborative} topic="collaborative" content="colab many with  my friend in bootcamp" />
      </MiddleSection>

      <Text  textAlign={['center', 'center', 'left']} fontSize='4xl' mt='20' ml={['0', '0', '13rem']}>Portfolio</Text>

      <Portfolio />
      <Footer />

    </div>
    
  );
}

export default App;