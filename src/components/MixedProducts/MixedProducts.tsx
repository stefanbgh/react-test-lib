import { FC, useState, useEffect } from "react";

import { IProduct } from "../../ts/interfaces/IProduct";
import { baseURL } from "../../constants/baseURL";
import { promiseVoid } from "../../ts/types/promiseVoid";
import { Spinner } from "..";

const MixedProducts: FC = (): JSX.Element => {
	const [mixedProducts, setMixedProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const fetchData: promiseVoid = async () => {
			try { 
				const response: Response = await fetch(`${baseURL}/products`);
				const data = await response.json();
				
				setMixedProducts(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Products:</h1>
			<ul>
				{
					mixedProducts.length > 0 ?
						mixedProducts.map((product: IProduct) => (
							<li key={product.id}>
								<h2>{product.title}</h2>
								<p>Price: ${product.price}</p>
							</li>
					)) : <Spinner/>
				}
			</ul>
		</div>
	);
};

export default MixedProducts;
