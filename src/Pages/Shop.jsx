// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
    
    const products = useLoaderData();

    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="card w-80 h-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.title}</h2>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Shop;