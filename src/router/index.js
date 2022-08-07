import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ApplicationRouter } from './route'
import Home from '../views/Home'

const ApplicationLoad = ({component : Component, ...rest}) => {
    return (
        <>
            <Route 
            {...rest}
            render={props => (
                <>
                    <Component 
                    {...props}
                    />
                </>
            )}
            />
        </>
    )
}

export default () => (
    <Switch>
        <ApplicationLoad exact path={ApplicationRouter.Homepage.path} component={Home} />
    </Switch>
)

