"use client"
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Button from "@/components/Button";
import { useStatesContext } from "@/components/StatesContext";
import { RevealWrapper } from "next-reveal";

const Home = () => {
  const { setActiveLink } = useStatesContext();

  useEffect(() => setActiveLink("/"), []);

  return (
    <main className={styles.main}>    
      <section className={styles.home}>
        <div className={styles.logo}>
          <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
            <img 
              className={styles["section-logo"]}
              src="/assets/Logo-SOLPLAST.png"
              alt="SOLPLAST®"
            />
          </RevealWrapper>
          <RevealWrapper origin="bottom" distance="40px" duration={1500} delay={200} >
            <p>Fábrica de todo tipo de repuestos y accesorios para piletas de lona</p>
          </RevealWrapper>
        </div>
        <div className={styles.history}>
          <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
            <span>Un poco de historia...</span>
          </RevealWrapper>
          <RevealWrapper origin="left" distance="40px" duration={1500} delay={200} >
            <p>SOLPLAST® nació hace más de 40 años como un emprendimiento familiar. Con apenas un pequeño espacio, una máquina de coser y un inmenso sueño por delante, comenzamos nuestro viaje.</p>
          </RevealWrapper>
          <RevealWrapper origin="right" distance="40px" duration={1500} delay={200} >
            <p>El camino no fue fácil al principio; con pocos clientes, enfrentamos desafíos, pero con perseverancia, calidad y atención al detalle, nuestra marca fue creciendo.</p>
          </RevealWrapper>
          <RevealWrapper origin="bottom" distance="40px" duration={1500} delay={200} >
            <div className={styles.buttons}>
              <Button href="#sp" className={styles.button} label="Leer más"/>
              <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
            </div>
          </RevealWrapper>
        </div>
      </section>
      <section id="sp" className={styles.home}>
        <div className={styles.history}>
          <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
            <span>Nacimiento de SP®</span>
          </RevealWrapper>
          <RevealWrapper origin="left" distance="40px" duration={1500} delay={200} >
            <p>Con el tiempo, nuestras habilidades y diversidad también se desarrollaron. Fue entonces cuando decidimos ampliar nuestra oferta con una marca derivada de SOLPLAST®: SP®.</p>
          </RevealWrapper> 
          <RevealWrapper origin="right" distance="40px" duration={1500} delay={200} >
            <p>A través de SP®, nos adentramos en el mundo de los adhesivos para reparación de piletas de lona y zapatillas.</p>
          </RevealWrapper>
          <RevealWrapper origin="bottom" distance="40px" duration={1500} delay={200} >
            <div className={styles.buttons}>
              <Button href="#pets" className={styles.button} label="Leer más"/>
              <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
            </div>
          </RevealWrapper>
        </div>
        <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
          <div className={styles.logo}>
            <img
              className={styles["section-logo"]}
              src="/assets/Logo-SP.png"
              alt="SP®"
            />
          </div>
        </RevealWrapper>
      </section>
      <section id="pets" className={styles.home}>
        <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
          <div className={styles.logo}>
            <img
              className={styles["section-logo"]}
              src="/assets/Logo-Mascotas.png"
              alt="Mascotas"
            />
          </div>
        </RevealWrapper>
        <div className={styles.history}>
          <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
            <span>Productos para mascotas</span>
          </RevealWrapper>
          <RevealWrapper origin="left" distance="40px" duration={1500} delay={200} >
            <p>Recientemente, llegaron a nuestra familia de productos las colchonetas para mascotas, los bolsitos y los platos de comida para perritos y gatitos.</p>
          </RevealWrapper>
          <RevealWrapper origin="right" distance="40px" duration={1500} delay={200} >
            <p>Porque para nosotros, ellos son más que simples compañeros, son parte esencial de nuestros hogares y merecen lo mejor.</p>
          </RevealWrapper>
          <RevealWrapper origin="bottom" distance="40px" duration={1500} delay={200} >
            <div className={styles.buttons}>
              <Button href="#thanks" className={styles.button} label="Leer más" />
              <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
            </div>
          </RevealWrapper>
        </div>
      </section>
      <section id="thanks" className={styles.home}>
        <div className={styles.history}>
          <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
            <span>Actualidad</span>
          </RevealWrapper>
          <RevealWrapper origin="left" distance="40px" duration={1500} delay={200} >
            <p>Hoy en día, SOLPLAST® sigue siendo una empresa familiar, arraigada en la tradición de la calidad, la innovación y el servicio al cliente.</p>
          </RevealWrapper>
          <RevealWrapper origin="right" distance="40px" duration={1500} delay={200} >
            <p>Cada día, nos esforzamos por superar nuestras propias expectativas y crear productos que enriquezcan la vida de las personas y sus adorables mascotas.</p>
          </RevealWrapper>
          <RevealWrapper origin="left" distance="40px" duration={1500} delay={200} >
            <p>Gracias por ser parte de nuestro viaje, gracias por ser parte de SOLPLAST®.</p>
          </RevealWrapper>
          <RevealWrapper origin="bottom" distance="40px" duration={1500} delay={200} >
            <div className={`${styles.buttons} bottom-anim`}>
              <Button href="#" className={styles.button} label="Volver"/>
              <Button href="/products" className={styles["button-secondary"]} label="Ver productos" />
            </div>
          </RevealWrapper>
        </div>
        <RevealWrapper origin="top" distance="40px" duration={1500} delay={200} >
          <div className={styles.logo}>
            <img
              className={styles["section-logo"]}
              src="/assets/Logo-Apreton.png"
              alt="Actualidad"
            />
          </div>
        </RevealWrapper>
      </section>
    </main>
  );
};

export default Home;