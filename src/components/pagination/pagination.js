import React from 'react'
import {connect} from 'react-redux'

import './pagination.less'

class Pagination extends React.Component{
    refLink = React.createRef(null)
    state = {
        currentButton: 1,
        arrOfCurrButtons: []
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.currentButton !== this.state.currentButton || prevProps.bids !== this.props.bids ){
            const {bids, pages, setCurrentPage} = this.props
            const {currentButton, arrOfCurrButtons} = this.state
   
            const numberOfPages = Array(Math.ceil(bids.length/pages)).fill('').map((item, index) => index+1)

            let tempNumberOfPages = [...arrOfCurrButtons]
            let dotsInitial = '...'
            let dotsLeft = '... '
            let dotsRight = ' ...'
        
            if (numberOfPages.length < 6) {
                tempNumberOfPages = numberOfPages
            }
        
            else if (currentButton >= 1 && currentButton <= 3) {
                tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
            }
        
            else if (currentButton == 4) {
                const sliced = numberOfPages.slice(0, 5)
                tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
            }
        
            else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
                const sliced1 = numberOfPages.slice(currentButton - 2, currentButton) 
                const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
                tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]
            }
            
            else if (currentButton > numberOfPages.length - 3) {
                const sliced = numberOfPages.slice(numberOfPages.length - 4) 
                tempNumberOfPages = [1, dotsLeft, ...sliced]                  
            }
            
            else if (currentButton === dotsInitial) {
                this.setState({
                    currentButton: arrOfCurrButtons[arrOfCurrButtons.length-3] + 1
                })
            }
            else if (currentButton === dotsRight) {
                this.setState({
                    currentButton: arrOfCurrButtons[3] + 2
                })
            }
        
            else if (currentButton === dotsLeft) {
                this.setState({
                    currentButton: arrOfCurrButtons[3] - 2
                })
            }

            setCurrentPage(currentButton)
        
            this.setState({
                arrOfCurrButtons: tempNumberOfPages
            })
        }
    }


    render(){
        const {bids, pages} = this.props
        const numberOfPages = Array(Math.ceil(bids.length/pages)).fill('').map((item, index) => index+1)
        const {arrOfCurrButtons, currentButton} = this.state
  
        return(
            <div className="container p-0">
                <ul className="pagination">
                    <li className="pagination__page pagination__page--active">
                        <a 
                            // href="#" 
                            className={`pagination__link ${currentButton === 1 ? 'pagination__page--disabled' : ''}`}
                            onClick={(e) => {
                                this.setState((prev) => {
                                    return {
                                        currentButton: prev.currentButton <= 1 ? prev.currentButton : prev.currentButton - 1
                                    }
                                })
                            }}
                        >
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </a>
                    </li>
                    {
                        arrOfCurrButtons.map((btn, index) => {
                            return (
                                <li 
                                    className={`${currentButton == btn ? "pagination__page pagination__page--active" : "pagination__page"}`} 
                                    key={btn + index}
                                >
                                    <a 
                                        // href="#" 
                                        className="pagination__link" 
                                        ref={this.refLink}
                                        onClick={() => {
                                            this.setState({currentButton: btn})
                                        }}
                                    >
                                            {btn}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li className="pagination__page pagination__page--active">
                        <a 
                            // href="#" 
                            className={`pagination__link ${currentButton === numberOfPages.length ? 'pagination__page--disabled' : ''}`}
                            onClick={() => {
                                this.setState((prev) => {
                                    return {
                                        currentButton: prev.currentButton >= numberOfPages.length ? prev.currentButton : prev.currentButton + 1
                                    }
                                })
                            }}
                        >
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({bids, pages}) => {
    return{
        bids,
        pages
    }
}

export default connect(mapStateToProps)(Pagination) 