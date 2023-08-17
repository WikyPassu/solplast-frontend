"use client"
import styles from "@/styles/Products.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllProducts } from "@/services/solplast-service";
import { useStatesContext } from "@/components/StatesContext";
import BRANDS from "@/constants/Brands.json";
import CheckBox from "@/components/CheckBox";

const Products = () => {
  const { setActiveLink, products, setProducts, categories, setCategories } = useStatesContext();
  const [ search, setSearch ] = useState("");
  const [ category, setCategory ] = useState("Cubrepiletas");
  const [ brands, setBrands ] = useState(["solplast", "sp", "mascotas"]);
  const [ filteredProducts, setFilteredProducts ] = useState(null);

  useEffect(() => setActiveLink("/products"), []);

  useEffect(() => {
    if(products !== null && products.length) return;
    getProducts();
  }, []);

  useEffect(() => {
    if(products === null) return;
    let newProducts = [...products];
    newProducts = newProducts.filter(product => {
      const includesSearch = search === "" || product.description.toLowerCase().includes(search.toLowerCase());
      const includesCategory = category === "Todas" || product.category === category;
      const includesBrand = brands.includes(product.brand);
      return includesSearch && includesCategory && includesBrand;
    });
    setFilteredProducts(newProducts);
  }, [search, category, brands]);

  const getProducts = async () => {
    const data = await getAllProducts();
    setCategories(getCategories(data));
    setProducts(data);
    setFilteredProducts(data.filter(({ category }) => category === "Cubrepiletas"));
  };

  const getCategories = data => {
    let categories = new Set();
    data.forEach(product => categories.add(product.category));
    categories = [...categories];
    categories.unshift("Todas");
    return categories;
  };

  const handleOnChangeInput = e => setSearch(e.target.value); 

  const handleOnChangeSelect = e => setCategory(e.target.value);

  return (
    <main className={styles.products}>
      <div 
        style={products === null ? { pointerEvents: "none", opacity: "0.4" } : {}}
        className={styles.filters}
      >
        <div className={styles.options}>
          <div className={styles.filter}>
            <span>Buscar productos</span>
            <input
              type="text"
              value={search}
              placeholder="Descripción"
              onChange={handleOnChangeInput}
            />
          </div>
          <div className={styles.filter}>
            <span>Categoría</span>
            <select value={category} onChange={handleOnChangeSelect} >
              { 
                categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className={styles.filter}>
          <span>Marcas</span>
          <div className={styles.checkboxes}>
            {
              BRANDS.map((brand, index) => (
                <CheckBox 
                  key={index} 
                  brand={brand} 
                  brands={brands}
                  setBrands={setBrands}
                />
              ))
            }
          </div>
        </div>
      </div>
      {
        filteredProducts === null ?
        <p>Cargando...</p> :
        filteredProducts.length ? 
        <div className={styles.grid}>
          {
            filteredProducts.map(({description, image}, index) => (
              <div className={styles.cell} key={index}>
                <div className={styles.image}>
                  <Image 
                    style={{width: "100%", height: "auto"}}
                    src={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="logo"
                    placeholder="blur"
                    blurDataURL={image}
                  />
                </div>
                <p>{description}</p>
              </div>
            )) 
          }
        </div> :
        <p>No hay resultados</p>
      }
    </main>
  );
};

export default Products;