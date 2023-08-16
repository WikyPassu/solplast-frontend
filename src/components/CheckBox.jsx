"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/CheckBox.module.css";

const CheckBox = ({ brand, brands, setBrands }) => {
  const { name, label } = brand;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(brands.includes(name));
  }, []);

  useEffect(() => {
    if(checked) {
      setBrands((prevBrands) => [...prevBrands, name]);
    } else {
      setBrands((prevBrands) => prevBrands.filter((brand) => brand !== name));
    }
  }, [checked]);
  
  const handleOnClickCheckBox = () => {
    if(brands.length === 1 && brands.includes(name)) return;
    setChecked(!checked);
  };

  return (
    <div className={styles.checkbox} onClick={handleOnClickCheckBox}>
      <div className={styles.symbol}>
        {checked ? <i className="bx bxs-checkbox-checked" /> : null}
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CheckBox;