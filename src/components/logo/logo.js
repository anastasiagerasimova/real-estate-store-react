import {Link} from 'react-router-dom'

import './logo.less'

const Logo = () => {
    return(
        <div className="logo-wrapper">
            <Link to="/" className="logo">
                <div className="logo__title">КВАДРАТНЫЙ МЕТР</div>
                <div className="logo__subtitle">
                    купить квартиру в один клик
                </div>
            </Link>
        </div>
    )
}

export default Logo