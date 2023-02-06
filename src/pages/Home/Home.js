import { useState } from 'react'
import styles from './Home.module.css'

export default function Home() {

  const [word, setWord] =useState("")
  const [qrCode, setQrCode] = useState("")

  const HandleClick = (e) =>{
    e.preventDefault()
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`)
  }

  return (
    
    <div className={styles['container']}>
      <h1 className={styles['title']}>Welcome to QR Code Generator</h1>
      <form onSubmit={HandleClick}>
        <div className={styles['input-box']}>
            <label>
                <span className={styles['Enterdata']}>Enter Data</span>
                <input
                  type="text"
                  onChange={(e) => setWord(e.target.value)}
                  value={word}   
                  required     
                />
            </label>
            <button> Generate </button>
        </div>
        <div className={styles['output-box']}>
          <img src={qrCode} alt={word}/>
        </div>
      </form>
    </div>
  )
}
