import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../header'
import Logo from '../logo'
import {HomePage, SingleItemPage} from '../pages'

import './app.less'

const App = () => {
    return(
        <div className="">
            <Header/>
            <Logo />
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/favourites" render={() => <h1>favourites</h1>}/>
                <Route path="/bids" render={() => <h1>bids</h1>}/>
                <Route path="/item/:id" 
                    render={({match}) => {
                        // return <h1>{match.params.id}</h1>
                        return <SingleItemPage selectedItemID={match.params.id}/>
                    }}
                />
            </Switch>
            {/* <HomePage /> */}
        </div>
    )
}

export default App