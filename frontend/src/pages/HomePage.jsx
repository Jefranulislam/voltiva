/* eslint-disable no-unused-vars */
import React from "react";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import { CirclePlus, PackageIcon, RefreshCcw } from "lucide-react";
import ProductCard from "../components/ProductCard";
import AddProduct from "../components/AddProduct";

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <main className=" container mx-auto py-4 px-4">
      <div className="flex justify-between items-center mb-8">
        <button className="btn btn-primary" onClick={()=>
          document.getElementById("addProductModal").showModal()}>
          <CirclePlus className="size-5" />
          Add Product
        </button>
        <button onClick={fetchProducts} className=" btn btn-ghost btn-circle">
          <RefreshCcw className="size-5" />
        </button>
      </div>
      {error && <div className=" alert alert-error mb-8 ">{error}</div>}

<AddProduct />


      {products.length === 0 && !loading && (
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
          <div className=" bg-base-100 rounded-full p-6">
            <PackageIcon className="size-12" />
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold"> No Products found</h3>
              <p className="text-gray-500 max-w-sm">
                {" "}
                Get Started by adding your first product to the inventory
              </p>
            </div>
          </div>{" "}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
