"use client"
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Button from "@/components/Button";
import { useStatesContext } from "@/components/StatesContext";
import { scrollReveal } from "@/utils/ScrollReveal";

const Home = () => {
  const { setActiveLink } = useStatesContext();

  useEffect(() => {
    setActiveLink("/");
    scrollReveal();
  }, []);

  return (
    <main className={styles.main}>    
      <section className={styles.home}>
        <div className={styles.logo}>
          <img 
            className={`${styles["section-logo"]} top-anim`}
            src="/assets/Logo-SOLPLAST.png"
            alt="SOLPLAST®"
          />
          <p className="bottom-anim">Fábrica de todo tipo de repuestos y accesorios para piletas de lona</p>  
        </div>
        <div className={styles.history}>
          <div className="top-anim">
            <span>Un poco de historia...</span>
          </div>
          <p className="left-anim">SOLPLAST® nació hace más de 40 años como un emprendimiento familiar. Con apenas un pequeño espacio, una máquina de coser y un inmenso sueño por delante, comenzamos nuestro viaje.</p>
          <p className="right-anim">El camino no fue fácil al principio; con pocos clientes, enfrentamos desafíos, pero con perseverancia, calidad y atención al detalle, nuestra marca fue creciendo.</p>
          <div className={`${styles.buttons} bottom-anim`}>
            <Button href="#sp" className={styles.button} label="Leer más"/>
            <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
          </div>
        </div>
      </section>
      <section id="sp" className={styles.home}>
        <div className={styles.history}>
          <div className="top-anim">
            <span>Nacimiento de SP®</span>
          </div>
          <p className="left-anim">Con el tiempo, nuestras habilidades y diversidad también se desarrollaron. Fue entonces cuando decidimos ampliar nuestra oferta con una marca derivada de SOLPLAST®: SP®.</p>
          <p className="right-anim">A través de SP®, nos adentramos en el mundo de los adhesivos para reparación de piletas de lona y zapatillas.</p>
          <div className={`${styles.buttons} bottom-anim`}>
            <Button href="#pets" className={styles.button} label="Leer más"/>
            <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
          </div>
        </div>
        <div className={`${styles.logo} top-anim`}>
          <img
            className={styles["section-logo"]}
            src="/assets/Logo-SP.png"
            alt="SP®"
          />
        </div>
      </section>
      <section id="pets" className={styles.home}>
        <div className={`${styles.logo} top-anim`}>
          <img
            className={styles["section-logo"]}
            src="/assets/Logo-Mascotas.png"
            alt="Mascotas"
          />
        </div>
        <div className={styles.history}>
          <div className="top-anim">
            <span>Productos para mascotas</span>
          </div>
          <p className="left-anim">Recientemente, llegaron a nuestra familia de productos las colchonetas para mascotas, los bolsitos y los platos de comida para perritos y gatitos.</p>
          <p className="right-anim">Porque para nosotros, ellos son más que simples compañeros, son parte esencial de nuestros hogares y merecen lo mejor.</p>
          <div className={`${styles.buttons} bottom-anim`}>
            <Button href="#thanks" className={styles.button} label="Leer más" />
            <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
          </div>
        </div>
      </section>
      <section id="thanks" className={styles.home}>
        <div className={styles.history}>
          <div className="top-anim">
            <span>Actualidad</span>
          </div>
          <p className="left-anim">Hoy en día, SOLPLAST® sigue siendo una empresa familiar, arraigada en la tradición de la calidad, la innovación y el servicio al cliente.</p>
          <p className="right-anim">Cada día, nos esforzamos por superar nuestras propias expectativas y crear productos que enriquezcan la vida de las personas y sus adorables mascotas.</p>
          <p className="left-anim">Gracias por ser parte de nuestro viaje, gracias por ser parte de SOLPLAST®.</p>
          <div className={`${styles.buttons} bottom-anim`}>
            <Button href="#" className={styles.button} label="Volver"/>
            <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
          </div>
        </div>
        <div className={`${styles.logo} top-anim`}>
          <img
            className={styles["section-logo"]}
            src="/assets/Logo-Apreton.png"
            alt="Actualidad"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;