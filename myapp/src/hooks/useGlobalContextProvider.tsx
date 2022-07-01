import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import products from "../data/products";
import ProductType from "../types/ProductType";

const useGlobalContextProvider = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentIdProduct, setCurrentIdProduct] = useState(0);
  //   const [allProducts, setAllProducts] = useLocalStorage<ProductType[]>(
  //     "products",
  //     [...products]
  //   );

  const [allProducts, setAllProducts] = useState<ProductType[]>(products);

  const handleConfirmModal = () => {
    const localProducts = [...allProducts];

    const currentProductIndex = localProducts.findIndex(
      (product) => product.id === currentIdProduct
    );

    localProducts.splice(currentProductIndex, 1);

    setAllProducts([...localProducts]);

    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (productId: number) => {
    setCurrentIdProduct(productId);
    setOpenModal(true);
  };

  return {
    openModal,
    handleConfirmModal,
    handleCloseModal,
    handleOpenModal,
    allProducts,
    setAllProducts,
  };
};

export default useGlobalContextProvider;
