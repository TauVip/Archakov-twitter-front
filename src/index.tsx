import { ThemeProvider } from '@material-ui/core'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

// #1: Разрабатываем клон Twitter на ReactJS + NodeJS (pre-middle / middle) (верстка) | 34:29
