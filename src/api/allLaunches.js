import axios from 'axios';
const AllLaunches = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches',
})

export default AllLaunches