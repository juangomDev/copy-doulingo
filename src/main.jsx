import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from './app.jsx'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter >
        <Container />
    </BrowserRouter>
)
