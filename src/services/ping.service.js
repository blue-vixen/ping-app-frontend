import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
})

export async function sendPing(data) {
    try {
        const res = await axios({ url: ` ${BASE_URL}/ping`, method: 'POST', data })
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export async function getHosts() {
    try {
        const res = await axios({ url: `${BASE_URL}/hosts`, method: 'GET' })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// export async function addHost(pingReply) {
//     try {
//         const res = await axios({ url: `${BASE_URL}/host`, method: 'POST', data: pingReply })
//         return res.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export async function updateHost(pingReply) {
//     try {
//         const res = await axios({ url: `${BASE_URL}/host`, method: 'PUT', data: pingReply })
//         return res.data
//     } catch (error) {
//         console.log(error)
//     }
// }