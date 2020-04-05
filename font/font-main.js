var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
var l1 = new List();
var l2 = new List();
var l3 = new List();
l1.show({
    container:'.font-box',
    boxs:fonts,
    title:'字体'
})
console.log(l1.styles)
l2.show({
    container:'.font-box',
    boxs:styles,
    title:'样式'
})
l3.show({
    container:'.font-box',
    boxs:sizes,
    title:'字号'
})