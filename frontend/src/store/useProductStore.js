/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const base_url = import.meta.env.MODE ==="development" ? "http://localhost:3000" : "";
export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  currentProduct: null,


  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({ formData }),

  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${base_url}/api/product`);
      set({ products: response.data.data, error: null });
    } catch (error) {
      if (error.status == 429) set({ error: "RAte limited" });
      else set({ error: "something wrong" });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true });

    try {
      await axios.delete(`${base_url}/api/product/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("Product has been deleted!");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });
    try {
      const { formData } = get();
      await axios.post(`${base_url}/api/product/`, formData);
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully");

      document.getElementById("addProductModal").close();
    } catch (error) {
      console.log("Error in addproduct ");
      toast.error("Something wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id) => {
    set({loading:true});
    try {
      const response = await axios.get(`${base_url}/api/product/${id}`);
      set({currentProduct : response.data.data, 
        formData : response.data.data 

        , error:null})
      console.log();
    } catch (error) {
            set({error: "something went wrong", currentProduct: null})

      toast.error("something wrong");
    }
    finally{
      set({loading:false})
    }
  },



  updateProduct: async (id) => {
    set({loading:true});
    try {
      const {formData}= get();
      const response = await axios.put(`${base_url}/api/product/${id}`, formData);
      set({currentProduct: response.data.data});
      console.log();
    } catch (error) {
      console.log(error);
      toast.error("Something wrong");
    }
    finally{
      set({loading:false})
    }
  },


}));
