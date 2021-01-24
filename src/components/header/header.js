import React from 'react'
import {Link} from 'react-router-dom'

import './header.less'

const Header = () => {
    return (
        <header className="top-panel">
            <div className="top-panel__container">
                <div className="top-panel__title">
                    интернет магазин недвижимости
                </div>

                <div className="top-panel__favourites">
                    <Link to="/favourites" className="btn-show-favourites mr-5">
                        <i className="fas fa-heart"></i> Избранное
                    </Link>
                    <Link to="/bids" className="btn-show-favourites">
                        <i className="fas fa-file-alt"></i> Заявки
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header 