import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
})

export async function sendPing(data) {
    try {
        const res = await axios({ url: ` ${BASE_URL}`, method: 'POST', data })
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }

}

export async function getTopHosts() {
    try {
        const res = await axios({ url: `${BASE_URL}/tophosts`, method: 'GET' })
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
