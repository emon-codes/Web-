import React from "react";
import useData from "../Hooks/useData";
import {
  IoStar,
  IoStarHalfOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";

const Products = () => {
  const { products } = useData();

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Popular Products</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="w-72 bg-[#1D232A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
                src={product.image}
                alt={product.name}
              />

              {/* Discount */}
              <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                -20%
              </span>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-emerald-600 p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all duration-300">
                <IoHeartOutline size={30} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-500">{product.category}</p>

              <h3 className="text-lg font-bold mt-1 truncate">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm">{product.brand}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 mt-3">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalfOutline />

                <span className="text-gray-600 text-sm ml-2">(4.5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-bold text-green-600">
                  ৳ {product.price}
                </span>

                <span className="text-gray-400 line-through">
                  ৳ {product.price + 200}
                </span>
              </div>

              {/* Stock */}
              <div className="mt-3">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Button */}
              <button className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-green-700 transition-all duration-300 cursor-pointer">
                <IoCartOutline size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
