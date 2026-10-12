import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './miniProjects/todoList/todoList.jsx'
import WeatherApp from './miniProjects/weatherApp/weatherApp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
    {/* <WeatherApp /> */}
  </StrictMode>,
)
