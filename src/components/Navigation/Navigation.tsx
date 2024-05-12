import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../router/Routes'

const Navigation: FC = (): JSX.Element => {
    return (
        <nav>
            <ul>
                <li> <Link to={Routes.HOME}>Home</Link> </li>
                <li> <Link to={Routes.PRODUCTS}>Products</Link> </li>
            </ul>
        </nav>
    )
}

export default Navigation