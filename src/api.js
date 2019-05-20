import axios from 'axios'
import store from '@/store'

export default axios.create({
  baseURL: 'http://150.165.42.242:8546',
  headers: { lcc: store.state.activeWorkspace.id }
})
