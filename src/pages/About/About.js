import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles['container']}>
        <h1 className={styles['about-title']}> What is Qr code?</h1>
        <div className={styles['about-description']}>
           <p> A QR code is a type of barcode that can be read easily by a digital device 
              and which stores information as a series of pixels in a square-shaped grid. QR 
              codes are frequently used to track information about products in a supply chain
              and because many smartphones have built-in QR readers they are often used 
              in marketing and advertising campaigns. More recently, they have played a key 
              role in helping to trace coronavirus exposure and slow the spread of the virus.
          </p>
      </div>
    </div>
  );
};
