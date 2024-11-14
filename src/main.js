import { mount } from 'svelte'
import './bootstrap.css'
import './scss/style.scss'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app