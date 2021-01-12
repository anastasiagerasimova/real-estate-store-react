import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../header'
import Logo from '../logo'
import {HomePage, SingleItemPage, FavoritesPage} from '../pages'

import './app.less'

const App = () => {
    return(
        <div className="">
            <Header/>
            <Logo />
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/favourites" component={FavoritesPage}/>
                <Route path="/bids" render={() => <h1>bids</h1>}/>
                {/* <Route path="/item/:id" 
                    render={({match}) => {<SingleItemPage selectedItemID={match.params.id} />}}
                /> */}
                <Route path='/item/:id' render={({match}) => <SingleItemPage selectedItemId={match.params.id} />} />
            </Switch>
            {/* <HomePage /> */}
        </div>
    )
}

export default App