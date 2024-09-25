import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { delivery, circle, cart } from "../assets";
import { ProductsList, SubHeading } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";
import { api } from "../config/axiosInstance";
import { IoBagCheckOutline } from "react-icons/io5";
import useCartStore from "../store/cartStore";
import RelatedProductList from "../components/RelatedProductList";
import useOrderStore from "../store/OrderDetails";
const Product = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const { getProductById, fetchProducts, isLoading } = useProductStore();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedValues, setSelectedValues] = useState({});
  const { addProduct } = useOrderStore();

  const params = useParams();
  const selectedProductId = params.id;
  const navigate = useNavigate();

  const returnSelectedProduct = async () => {
    const productData = await getProductById(selectedProductId);
    setProduct(productData);
    setCurrentPrice(
      productData.priceAfterDiscount
        ? productData.priceAfterDiscount
        : productData.price
    );
    setSelectedImage(productData.photos[0]);
    setCurrentQuantity(productData.quantity - 1);

    const initialSelectedValues = productData.attributes?.reduce(
      (acc, attr) => {
        acc[attr.name] = null;
        return acc;
      },
      {}
    );
    setSelectedValues(initialSelectedValues);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    returnSelectedProduct();
    fetchProducts();
  }, [selectedProductId]);

  // Function to get the price based on selected attribute values
  const getPrice = () => {
    if (!product) return "";
    const selectedValuesArray = Object.values(selectedValues);
    if (selectedValuesArray.includes(null)) {
      setCurrentPrice(
        product.priceAfterDiscount ? product.priceAfterDiscount : product.price
      );
    }
    const variationString = selectedValuesArray.join(" ");
    const variation = product.variations?.find(
      (v) => v.variation === variationString
    );
    setCurrentPrice(
      variation
        ? variation.price
        : product.priceAfterDiscount
        ? product.priceAfterDiscount
        : product.price
    );
  };

  // setting the current price based on selected attribute values
  useEffect(() => {
    getPrice();
  }, [selectedValues]);

  // Function to handle attribute value changes
  const handleValueChange = (attrName, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [attrName]: prevValues[attrName] === value ? null : value,
    }));
  };

  const handleOrderNowClick = () => {
    const productDetails = {
      productId: product._id,
      name: product.name,
      price: currentPrice,
      quantity: quantity,
      variation: Object.values(selectedValues),
      directOrder: true,
    };
    addProduct(productDetails);
    navigate(
      `/tumiza/${selectedProductId}?quantity=${quantity}&category=${product.category}`
    );
  };

  const handleNavigateToHelp = () => {
    navigate("/ubufasha");
  };

  const incrementQuantity = () => {
    setQuantity((prev) => {
      if (prev < product.quantity) {
        return prev + 1;
      }
      return prev;
    });
    setCurrentQuantity((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setCurrentQuantity((prev) => {
      if (prev <= product.quantity) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleAddToCart = (productId) => {
    addToCart(productId, quantity);
  };
  return (
    <div className="px-5 md:px-10 font-poppins">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen text-lg">
          Loading...
        </div>
      ) : product !== null ? (
        <>
          <div>
            <div>
              <p className="m-[20px] text-gray-90">
                / {product.category} /{" "}
                <span className="text-black">{product.name}</span>
              </p>
              <div className="flex flex-col justify-between lg:flex-row md:gap-5">
                {/* images container */}
                <div className="flex flex-col lg:w-1/2 md:flex-row">
                  <div className=" md:min-w-[100px] w-full md:w-[15%] md:h-[560px] flex gap-5 flex-row md:flex-col justify-between md:justify-start my-[10px] overflow-x-auto no-scrollbar ">
                    {product?.photos?.map((img, index) => (
                      <img
                        className={`bg-gray-90 bg-opacity-[30%] p-[20px] hover:bg-opacity-[20%] w-[150px] md:w-full ${
                          selectedImage === img
                            ? "border-2 border-primary/50"
                            : "border-2"
                        } rounded-md`}
                        src={`${api + "/" + img}`}
                        alt="img"
                        key={index}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                  <div className="bg-gray-90 bg-opacity-[30%] flex items-center justify-center px-[40px] my-[10px]  md:ml-[20px] hover:bg-opacity-[20%] w-full rounded-md overflow-hidden h-[92%]">
                    <img
                      src={`${api + "/" + selectedImage}`}
                      alt="item"
                      className=" w-full md:min-w-[441px] max-h-[331px] object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 px-5 lg:w-1/2">
                  <h1 className="text-[24px] font-semibold">{product.name}</h1>
                  <div className="flex items-center gap-3">
                    {/* <StarRating starCount={product.averageRating} />
                  <p className="text-gray-90">({product.ratings?.length})</p> | */}
                    <p className="text-[#00FF66]">
                      {product.quantity
                        ? ` ${currentQuantity} muri stock`
                        : "dutegereje ibindi"}
                    </p>
                  </div>
                  <p className="text-primary font-semibold text-[24px] flex items-center gap-3">
                    {currentPrice} frw{" "}
                    {product.priceAfterDiscount && (
                      <span className="text-lg line-through text-gray-90">
                        {product.price} frw
                      </span>
                    )}
                  </p>
                  <hr />
                  <div className="flex flex-col gap-2">
                    <h1 className="m-0 font-poppins">
                      Variations: (select more than one to see price variations)
                    </h1>
                    {product.attributes?.map((attr) => (
                      <div key={attr._id}>
                        <h2>{attr.name}:</h2>
                        {attr.values.map((value) => (
                          <button
                            key={value}
                            onClick={() => handleValueChange(attr.name, value)}
                            className={`mx-2 px-2 py-1 bg-gray-90 rounded-xl ${
                              selectedValues[attr.name] === value
                                ? "border border-primary"
                                : "border border-transparent"
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <div className="w-full md:min-w-[150px] px-[10px] border-[1px] border-gray-90 rounded-md flex justify-between items-center">
                      <button
                        className="flex items-center justify-between gap-2"
                        onClick={decrementQuantity}
                        disabled={quantity === 1}
                      >
                        <FaMinus className="cursor-pointer" />
                        <div className="h-[40px] w-[0.5px] bg-black"></div>
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="flex items-center justify-between gap-2"
                        onClick={incrementQuantity}
                        disabled={quantity === product.quantity}
                      >
                        <div className="h-[40px] w-[0.5px] bg-black"></div>
                        <FaPlus className="cursor-pointer" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product._id)}
                      className="bg-primary w-full px-2 py-[10px] rounded-md hover:bg-opacity-[60%] transition-all duration-600 text-white flex justify-between items-start"
                    >
                      <img src={cart} alt="" />
                      Shyira mu gatebo
                    </button>
                  </div>
                  <div className="border-[2px] border-gray-80 rounded-lg ">
                    <div className="m-[20px] justify-between hidden">
                      <div className="">
                        <img src={delivery} alt="icon" />
                        <div>
                          <p>
                            Niba ukunze iki gicuruzwa ukaba ushaka kugitumiza
                            kanda aha →
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-3 bg-blue3 rounded-lg px-[20px] h-fit py-[10px] my-auto hover:bg-opacity-[70%] cursor-pointer"
                        onClick={handleOrderNowClick}
                      >
                        <IoBagCheckOutline className="text-white" size={30} />
                        <button className="text-white">Gura</button>
                      </div>
                    </div>
                    <hr className="bg-gray-90 h-[2px]" />
                    <div className="m-[20px]">
                      <img src={circle} alt="icon" />
                      <div>
                        <h1>Igihe wasubizwa amafaranga</h1>
                        <p className="flex flex-col">
                          Iyo ugize ikibazo kuri order yawe utubwira mbere
                          y'amasaha 24 tukayagusubiza ukishyura transport.{" "}
                          <span
                            className="hover:underline text-gray-60"
                            onClick={handleNavigateToHelp}
                          >
                            Kumenya byinshi
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-[20px]">
            <h1 className="py-5 text-2xl font-semibold font-poppins">
              Ubusobanuro bw'igicuruzwa
            </h1>
            <p className="text-black text-start text-[16px]">
              {product.description}
            </p>
          </div>
          <div className="my-[20px]">
            <SubHeading title="Ibindi byerekeranye" />
            <RelatedProductList
              categoryFilter={product.category}
              productId={product._id}
              showProducts={4}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Product;
