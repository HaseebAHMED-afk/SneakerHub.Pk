import Head from 'next/head'
import axios from 'axios'
import SneakerList from '../components/SneakerList';

const index = ({sneakers}) => {


  return (
    <div>
      <Head>
        <title>SneakerHub.pk</title>
      </Head>
      <h1>Hello, welcome to sneaker hub</h1>

    <SneakerList sneakers={sneakers} />
      
    </div>
  )
}

export default index



export const getStaticProps = async () =>{
  
 
  var options = {
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
    params: {limit: '25'},
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '7cfee83871msh67b5e02d5687514p148362jsne793419737e2'
    }
  };

  const res = await axios(options)

  const {results} = JSON.parse(JSON.stringify(res.data))

  return {
    props:{
      sneakers: results
    }
  }
}