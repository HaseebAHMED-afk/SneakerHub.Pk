import axios from 'axios'
import Head from 'next/head'

const index = ({sneaker}) => {


    return (
        <div>
            <Head>
                <title>{sneaker.title}</title>
            </Head>
            <h1>{sneaker.brand}</h1>
            <h2>{sneaker.title}</h2>
            {
                sneaker.media.imageUrl ? <img src={sneaker.media.imageUrl} style={{width:'50%'}} alt={sneaker.title} /> : null
            }
            <div className='text-start' >
            <h3>Price: {sneaker.retailPrice} USD</h3>
            <h3>Color: {sneaker.colorway}</h3>
            <h3>Release Date: {sneaker.releaseDate}</h3>
            </div>
        </div>
    )
}


export const getServerSideProps = async (context) =>{



        var options = {
            method: 'GET',
            url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${context.params.id}`,
            headers: {
              'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
              'x-rapidapi-key': '7cfee83871msh67b5e02d5687514p148362jsne793419737e2'
            }
          };

        const res = await axios(options)

        const {results} = await JSON.parse(JSON.stringify(res.data))

        return{
            props:{
                sneaker: results[0]
            }
        }

}

export default index


