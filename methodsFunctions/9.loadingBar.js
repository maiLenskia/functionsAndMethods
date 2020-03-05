function loadingBar(num) {
    let bar = [];
    let devideOfNum = num / 10;
    // console.log(num + '%');
    // console.log('Stil loading...')
    if (devideOfNum === 10) {
        bar += bar.push("%");
        console.log(num + "%")
    }
}
loadingBar(100)