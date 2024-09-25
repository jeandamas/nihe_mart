import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsList, SubHeading } from "../components";
import useProductStore from "../store/productStore";
import { categories } from "../constants/data";

const CategoryResults = () => {
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, Infinity]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  const handleMinPriceChange = (e) => {
    const minPrice = Number(e.target.value) || 0;
    setPriceRangeFilter([minPrice, priceRangeFilter[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const maxPrice = Number(e.target.value) || Infinity;
    setPriceRangeFilter([priceRangeFilter[0], maxPrice]);
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const params = useParams();
  const category = params.category || "";

  // Ensure category is not undefined before processing
  const categoryData = categories.find(
    (cat) => cat.name.toLowerCase() === category.toLowerCase()
  );

  // Extract subcategories for the selected category
  const subcategories = categoryData ? categoryData.subcategories : [];

  return (
    <section className="flex-1">
      <div className="p-[50px] flex-1">
        <div className="flex flex-col gap-4 mb-4">
          <SubHeading title={category?.toUpperCase() || "CATEGORY"} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <input
                type="number"
                placeholder="Min Price"
                onChange={handleMinPriceChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Max Price"
                onChange={handleMaxPriceChange}
                className="p-2 border rounded"
              />
            </div>
            {subcategories.length > 0 && (
              <select
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
                className="p-2 border rounded"
              >
                <option value="">All Subcategories</option>
                {subcategories.map((subcat, index) => (
                  <option key={index} value={subcat}>
                    {subcat}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <ProductsList
          categoryFilter={category}
          subcategoryFilter={selectedSubcategory}
          priceRangeFilter={priceRangeFilter}
        />
      </div>
    </section>
  );
};

export default CategoryResults;
