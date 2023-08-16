"use client"
import styles from "@/styles/Contact.module.css";
import { useEffect } from "react";
import { useStatesContext } from "@/components/StatesContext";
import { scrollReveal } from "@/utils/ScrollReveal";

const Contact = () => {
  const { setActiveLink } = useStatesContext();
 
  useEffect(() => {
    setActiveLink("/contact");
    scrollReveal();
  }, []);

  return (
    <main className={styles.contact}>
      <div className={`${styles.mail} left-anim`}>
        <img
          className={styles.option}
          src="/assets/Logo-Mail.png"
          alt="Mail"
        />
        <div className={styles.description}>
          <span>Contactar por Mail</span>
          <div className={styles.text}>
            <p>Adicionalmente, también podés enviarnos un email a nuestro correo eléctronico.</p>
            <div className={styles.info}>
              <p>solplast-mr@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.whatsapp} right-anim`}>
        <div className={styles.description}>
          <span>Contactar por WhatsApp</span>
          <div className={styles.text}>
            <p>Podés enviarnos tu consulta a través de nuestro número por WhatsApp.</p>
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
    </main>
  );
};

export default Contact;