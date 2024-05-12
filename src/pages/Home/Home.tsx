import { FC } from 'react'

import { handleClickVoid } from '../../ts/types/handleClickVoid';
import { Button } from '../../components';

const Home: FC = (): JSX.Element => {
    const handleClick: handleClickVoid = () => {};

    return <Button handleClick={handleClick}/>
}

export default Home