import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async(ne, sw) => {
    try {
        const { data : { data }} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lon,
            tr_longitude: ne.lon,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'cd6cd91bf3msh6905a6c6b241644p1e8a3djsndcdb9fa298bd'
          }
        })

        return data
    } catch (error) {
        console.log(error.message)
    }
}