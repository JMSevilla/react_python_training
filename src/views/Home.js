import React, {useEffect, useState} from 'react'
import ApplicationBar from '../components/Appbar'
import { Container, Card, CardContent, Typography } from '@mui/material'
import ApplicationTable from '../components/Table'
import axios from 'axios'

const Home = () => {
    const [state, setState] = useState([])
    useEffect( async ()  => {
        await handleGetData()
    }, [])

    const handleGetData = () => {
        const req = axios.get('https://jsonplaceholder.typicode.com/users') //request -> backend -> Python Django API
        return req.then(res => { //response
            setState(res.data)
            console.log(state)
        })
        
    }
    return (
        <>
            <ApplicationBar title={'MDR Code Camp'} />
            <Container style={{
                marginTop:'100px'
            }}> 
                <Card>
                    <CardContent>
                        <Typography gutterBottom>Users List</Typography>
                        <ApplicationTable rows={state} />
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Home