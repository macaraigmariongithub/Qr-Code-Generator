import styles from './Howtouse.module.css'

export default function Howtouse() {
  return (
    <div className={styles['container']}>
        <h1 className={styles['title']}>How to use QR Code Generator?</h1>
            <div className={styles['description']}>
                <p>Step 1: On your compatible Android phone or tablet, open the built-in camera app.</p>
                <p>Step 2: Point the camera at the QR code.</p>
                <p>Step 3: Tap the banner that appears on your Android phone or tablet.</p>  
                <p>Step 4: You'll see the code's URL appear at the bottom of the frame. Tap it to open that URL.</p>
            </div>

            <div className={styles['description1']}>
                <p>If your Android device's camera doesn't scan the QR code automatically, you'll need to use Google Lens, a feature that lets you search the web with your camera, in the Google Search app, which you can download from the Play Store. Lens also gives you more options for using the QR code you've scanned.</p>
            </div>
            
            <div className={styles['description']}>
                <p>Step 1: Open the Google Search app on your Android device.</p>
                <p>Step 2: Tap the camera icon on the right side of the search bar to start Google Lens.</p>
                <p>Step 3:  In the top section, tap the camera icon above where it says Search with your camera to give Google Lens access to your camera. If this is your first time using Lens, you'll have to give the feature permission to access your media and camera.</p>  
                <p>Step 4: Position your camera so the QR code is in the frame.</p>
                <p>Step 5:  If your phone can scan QR codes automatically, the URL will appear over it. Tap the URL or the shutter button – magnifying glass – at the bottom of the screen to immediately go to the website.</p>
                <p>Step 6: If the URL doesn't show up automatically, tap the shutter button for Lens to search the web.</p>
                <p>Step 7: The URL will appear over the QR code, and you can tap it to go to the website right away. You'll also be given three options:</p>
            </div>
    </div>
  );
};
