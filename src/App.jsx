import React from 'react'
import './App.css'
import SalomD from './assets/components/SalomD'
import HayvonG from './assets/components/HayvonG'
import Ranglar from './assets/components/Ranglar'
import Weekdays from './assets/components/weekdays'
import Tabrik from './assets/components/Tabrik'
import Countries from './assets/components/countries'
import Fasl from './assets/components/Fasl-color'
import Menyu from './assets/components/Menyu'
function App() {
  return (
    <div>

      <h2>1-topshiriq</h2>
     <SalomD></SalomD>
     <hr />

     <h2>2-topshiriq</h2>
     <HayvonG></HayvonG>
     <hr />

     <h2>3-topshiriq</h2>
    <Ranglar></Ranglar>
    <hr />

    <h2>4-topshiriq</h2>
    <Weekdays></Weekdays>
    <hr />

    <h2>5-topshiriq</h2>
    <Tabrik></Tabrik>
    <hr />

    <h2>6-topshiriq</h2>
    <Countries></Countries>
    <hr />

    <h2>7-topshiriq</h2>
    <Fasl></Fasl>
    <hr />

    <h2>8-topshiriq</h2>
    <Menyu></Menyu>
    </div>
  )
}

export default App
