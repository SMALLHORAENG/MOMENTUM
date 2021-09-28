const images = [
"https://cdn.crowdpic.net/list-thumb/thumb_l_D8779A608E0BDF5D6D01D3691D0760F1.jpg"
,"https://cdn.crowdpic.net/list-thumb/thumb_l_E8711087E7EE5624A58DCBB200ADA91B.jpg"
,"http://res.heraldm.com/content/image/2015/10/21/20151021000673_0.jpg"
];

const chosenImage = images[Math.floor(Math.random) * images.length];

const bgImage = document.createElement("img");

bgImage.src=`${images[chosenImage]}`;


document.body.appendChild(bgImage);


/*
    6.1 Background
배경사진
1. https://cdn.crowdpic.net/list-thumb/thumb_l_D8779A608E0BDF5D6D01D3691D0760F1.jpg
2. https://cdn.crowdpic.net/list-thumb/thumb_l_E8711087E7EE5624A58DCBB200ADA91B.jpg
3. http://res.heraldm.com/content/image/2015/10/21/20151021000673_0.jpg

    배경사진을 랜덤으로 나오게 할 것 (quotes와 비슷함)
    createElement()
    "img" 라는 태그를 만들어주고

    document.body.appendChild()
    body 안에 넣어주기 위함

*/