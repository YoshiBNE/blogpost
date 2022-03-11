function changeImage(sw) {
    let pht;
    let altname;
    if (sw == 0) {
        pht = 'images/blackdog.jpg';
        altname = 'my photo';
    } else {
        pht = 'images/monkey.jpg';
        altname = 'another photo of me';
    } 
    document.getElementById('topImage').src = pht;
    document.getElementById('topImage').alt = altname;
}

