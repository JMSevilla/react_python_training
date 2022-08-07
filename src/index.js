import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ApplicationEntryPoint from './router/index'


const root = document.getElementById("root")

ReactDOM.render(
  <HashRouter>
    <ApplicationEntryPoint />
  </HashRouter>,
  root
)