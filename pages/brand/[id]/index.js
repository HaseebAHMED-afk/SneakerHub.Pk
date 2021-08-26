
import { useRouter } from 'next/router'

import axios from 'axios'

const index = ({sneakers}) => {

    const router = useRouter()

    const { id } = router.query

    console.log(sneakers);
    
    return (
        <div>
            A page about {id} 
        </div>
    )
}

export default index


export const getStaticProps = async () =>{
  
 
    var options = {
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: {limit: '100'},
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
