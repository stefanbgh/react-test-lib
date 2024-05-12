import { FC } from 'react'

import { handleClickVoid } from '../../ts/types/handleClickVoid';

interface IProps { 
    handleClick: handleClickVoid; 
}

const Button: FC<IProps> = ({ handleClick }): JSX.Element => <button onClick={handleClick}>Click me</button>;

export default Button