const fs = require('fs');
const https = require('https');

const saveImageToDisk = (url, filename) => {
    var file = fs.createWriteStream(filename);
    var request = https.get(url, response => {
        response.pipe(file);
    });
}

const images = [
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/12728782_10204534950733760_7429281433812034123.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/25299246_10208761741720893_6723126786972890635.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/13699978_10205438182393987_7258460890032213031.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/11182256_10203105266832556_4656491108630379952.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/465391_2453128147569_1457003872_o.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/269143_1663595889756_1670899_n.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/1979595_10201282635627915_7511115249436085368_.jpg',
    'img1.wsimg.com/isteam/ip/29194374-96c6-40d1-8f99-781fb6c2369a/11159533_10203043404166028_6876859234012919467.jpg',
    'isteam.wsimg.com/ip/29194374-96c6-40d1-8f99-781fb6c2369a/39401693_10210088923939619_6163718381217251328.jpg'
];

let i = 1;
for (let image in images) saveImageToDisk('https://' + images[image], '../gallery-images/' + (i++) + '.jpg');