import axios from 'axios'
import store from '@/store'

export default axios.create({
  baseURL: 'http://0.0.0.0:3000',
  headers: { lcc: store.state.activeWorkspace.id }
})
