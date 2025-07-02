import {
  DollarSignIcon,
  ImageIcon,
  PackageIcon,
  PlusCircleIcon,
} from "lucide-react";
import { useProductStore } from "../store/useProductStore";

const AddProduct = () => {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog id="addProductModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold mb-4 text-lg">Add new Product!</h3>

        <form onSubmit={addProduct} className="space-y-6">
          <div className="grid gap-6">
            {/* Product name input */}
            <div className="form-control">
              <label className="text-base font-medium">Product Name</label>
              <div className="relative flex items-center  text-base-content/50">
                <PackageIcon className="absolute left-0 pl-3 w-6 h-6 z-10" />
                <input
                  type="text"
                  placeholder="Product name"
                  className="input input-bordered w-full pl-10 py-3 z-0 focus:input-primary transition-colors duration-200"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Price input  */}
            <div className="form-control">
              <label className="text-base font-medium">Price</label>
              <div className="relative flex items-center text-base-content/50">
                <DollarSignIcon className="absolute left-0 pl-3 w-6 h-6 z-10" />
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  name="price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* image link  */}
            <div className="form-control">
              <label className="text-base font-medium">Image URL</label>
              <div className="relative flex items-center text-base-content/50">
                {/* Replace ImageIcon with the correct icon import if needed */}
                <ImageIcon className="absolute left-0 pl-3 w-6 h-6 z-10" />{" "}
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  name="image"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button type="button" className="btn btn-ghost">
                Cancel
              </button>
            </form>
            <button
              type="submit"
              className="btn btn-primary flex items-center gap-2"
              disabled={
                !formData.name || !formData.price || !formData.image || loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
        {/* Modal Actions */}
      </form>
    </dialog>
  );
};

export default AddProduct;
