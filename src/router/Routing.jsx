import React from 'react'
import { Route, Routes } from 'react-router'
import Container from '../components/container/Container'
import TryForFree from '../components/tryforfree/TryForFree'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Container />} />
            <Route path='/tryforfree' element={<TryForFree />} />
        </Routes>
    )
}

export default Routing