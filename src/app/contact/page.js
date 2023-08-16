"use client"
import styles from "@/styles/Contact.module.css";
import { useEffect } from "react";
import { useStatesContext } from "@/components/StatesContext";
import { RevealWrapper } from  "next-reveal";

const Contact = () => {
  const { setActiveLink } = useStatesContext();
 
  useEffect(() => setActiveLink("/contact"), []);

  return (
    <main className={styles.contact}>
      <RevealWrapper origin="left" distance="40px" duration={1500} delay={200} >
        <div className={styles.mail}>
          <img
            className={styles.option}
            src="/assets/Logo-Mail.png"
            alt="Mail"
          />
          <div className={styles.description}>
            <span>Contactar por Mail</span>
            <div className={styles.text}>
              <p>Podés enviarnos un email con tu consulta a nuestro correo eléctronico.</p>
              <div className={styles.info}>
                <p>solplast-mr@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
      <RevealWrapper origin="right" distance="40px" duration={1500} delay={200} >
        <div className={styles.whatsapp}>
          <div className={styles.description}>
            <span>Contactar por WhatsApp</span>
            <div className={styles.text}>
              <p>También tenés disponible nuestro número de WhatsApp para enviarnos tu mensaje.</p>
              <div className={styles.info}>
                <p>+54 9 11 6188-8416</p>
              </div>
            </div>
          </div>
          <img
            className={styles.option}
            src="/assets/Logo-WhatsApp.png"
            alt="WhatsApp"
          />
        </div>
      </RevealWrapper>
    </main>
  );
};

export default Contact;