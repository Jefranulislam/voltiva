import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowLeftRightIcon,
  SaveIcon,
  TrashIcon,
} from "lucide-react";

const ProductPage = () => {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);
  console.log(currentProduct);

  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete this product?")){
    await deleteProduct(id);
    navigate("/");
    }
  };

  if (loading) {
    return (
      <div className=" felx justify-center items-center min-h-screen">
        <div className=" loading loading-spinner loading-lg"></div>{" "}
      </div>
    );
  }
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error ">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={() => navigate("/")}
        className="btn btn-ghost mb-8 flex items-center"
      >
        <ArrowLeftIcon className="mr-2" />
        Back to Products
      </button>

      <div className="card-body p-8 shadow-lg ">
        <div className="flex flex-row gap-8">
          {/* Left: Product Image */}
          <div className="w-2/5 flex items-start justify-center">
            <img
              src={
                currentProduct?.image ||
                "https://placehold.co/400x400?text=No+Image"
              }
              alt={currentProduct?.name || "Product"}
              className="rounded-xl object-cover max-h-72 w-full"
            />
          </div>
          {/* Right: Edit Form */}
          <div className="w-3/5">
            <h2 className="card-title text-2xl mb-6">Edit Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateProduct(id);
              }}
              className="space-y-6"
            >
              {/* Product Name */}
              <div className="form-control">
                <label className="text-base font-medium">Product Name</label>
                <input
                  type="text"
                  placeholder="Product name"
                  className="input input-bordered w-full"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              {/* Product Price */}
              <div className="form-control">
                <label className="text-base font-medium">Price</label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  name="price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
              {/* Product Image URL */}
              <div className="form-control">
                <label className="text-base font-medium">Image URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                  name="image"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
              {/* Form Actions */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  className="btn btn-error flex items-center"
                  onClick={() => handleDelete(id)}
                >
                  <TrashIcon className="size-4 mr-2" />
                  Delete Product
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex items-center"
                  disabled={
                    !formData.name ||
                    !formData.price ||
                    !formData.image ||
                    loading
                  }
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    <>
                      <SaveIcon className="mr-2" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
