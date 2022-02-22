function changeBackground(sw) {
    let pht;
    let altname;
    if (sw == 0) {
        pht = 'images/palm_leaves.png';
        altname = 'palm_leaves.png';
    } else {
        pht = 'images/technology-background.jpg';
        altname = 'technology-background.jpg';
    } 
    document.getElementById('topImage').src = pht;
    document.getElementById('topImage').alt = altname;
}
