function onLoad () {
    if(localStorage.getItem('theme') != null) {
        setTheme(localStorage.getItem('theme'));
        console.log('Retrieved Theme');
    } else {
        document.documentElement.style.setProperty('--accent-color', '#FFB000'); //set accent color to amber
        document.documentElement.style.setProperty('--accent-filter', 'brightness(0) saturate(100%) invert(83%) sepia(29%) saturate(7006%) hue-rotate(0deg) brightness(102%) contrast(102%)'); //set accent color to amber
        updateQrCode('#FFB000');
        setTheme('#FFB000');
        console.log('No Theme Found, Setting Default');
    }
}
function setTheme(accentColor) {
    switch(document.documentElement.style.getPropertyValue('--accent-color')) {
        case '#FFB000': //amber
            document.getElementById('amber').classList.remove('current');
            break;
        case '#33FF33': //green
            document.getElementById('green').classList.remove('current');
            break;
        case '#FFFFFF': //white
            document.getElementById('white').classList.remove('current');
            break;
        case '#9500F2': //purple
            document.getElementById('purple').classList.remove('current');
            break;                                                            
    }
    switch(accentColor) {
        case '#FFB000': //amber
            document.getElementById('amber').classList.add('current');
            document.documentElement.style.setProperty('--accent-filter', 'brightness(0) saturate(100%) invert(83%) sepia(29%) saturate(7006%) hue-rotate(0deg) brightness(102%) contrast(102%)'); //set accent color to amber
            updateQrCode('#FFB000');
            break;
        case '#33FF33': //green
            document.getElementById('green').classList.add('current');
            document.documentElement.style.setProperty('--accent-filter', 'brightness(0) saturate(100%) invert(69%) sepia(82%) saturate(546%) hue-rotate(62deg) brightness(112%) contrast(108%)'); //set accent color to amber
            updateQrCode('#33FF33');
            break;
        case '#FFFFFF': //white
            document.getElementById('white').classList.add('current');
            document.documentElement.style.setProperty('--accent-filter', 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(284deg) brightness(109%) contrast(100%)'); //set accent color to amber
            updateQrCode('#FFFFFF');
            break;
        case '#9500F2': //purple
            document.getElementById('purple').classList.add('current');
            document.documentElement.style.setProperty('--accent-filter', 'brightness(0) saturate(100%) invert(12%) sepia(98%) saturate(5922%) hue-rotate(279deg) brightness(92%) contrast(119%)'); //set accent color to amber
            updateQrCode('#9500F2');
            break;                                                            
    }
    localStorage.setItem('theme', accentColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
}
function updateQrCode(colorLight) {
    document.getElementById('qrcode').innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: colorLight,
    correctLevel: QRCode.CorrectLevel.H
    });
}