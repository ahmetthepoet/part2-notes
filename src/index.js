import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const phonebookEntries = [
  {
    name: 'Ahmed',
    phonenumber: ['714-514-876'],
    date: '2020-01-10T17:30:31.098Z',
    important: true
  },
  {
    name: 'Suleimi',
    phonenumber: ['819-329-2185'],
    date: '2020-01-10T18:39:34.091Z',
    important: false
  },
  {
    name: 'Maya',
    phonenumber: ['919-919-919', '9819,333-222'],
    date: '2020-01-10T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App phonebookEntries={phonebookEntries} />,
  document.getElementById('root')
)