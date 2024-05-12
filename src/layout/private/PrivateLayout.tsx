import { FC, ReactNode } from 'react'
import { Navigation } from '../../components';

interface IProps {
    children: ReactNode;
}

const PrivateLayout: FC<IProps> = ({ children }): JSX.Element | null => {
    // const token = localStorage.getItem("token");

	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!token) {
	// 		navigate(Routes.LOGIN);

	// 		return;
	// 	}
	// 	// eslint-disable-next-line
	// }, [token]);

	// if (token) return <div>{children}</div>

	// return null;

    return (
		<div>
			<Navigation/>
			{children}
		</div>
	)
}

export default PrivateLayout