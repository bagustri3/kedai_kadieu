const QRCode = require('qrcode');

function generateWifiQRCode(ssid, password, encryptionType = 'WPA') {
    const wifiString = `WIFI:S:${ssid};T:${encryptionType};P:${password};;`;
    QRCode.toFile('wifi-qr.png', wifiString, {
        color: {
            dark: '#000',  // Black dots
            light: '#FFF' // White background
        }
    }, function (error) {
        if (error) throw error;
        console.log('QR Code saved as wifi-qr.png');
    });
}

// Replace 'MyHomeWiFi', 'SecurePassword123' with your actual WiFi SSID and password
generateWifiQRCode('Kedai Kadieu', 'terimakasih!', 'WPA');