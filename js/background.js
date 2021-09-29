const images = [
    "https://cdn.crowdpic.net/list-thumb/thumb_l_D8779A608E0BDF5D6D01D3691D0760F1.jpg"
,
    "https://cdn.crowdpic.net/list-thumb/thumb_l_E8711087E7EE5624A58DCBB200ADA91B.jpg"
,
    "http://res.heraldm.com/content/image/2015/10/21/20151021000673_0.jpg"
,
];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);


/*
    6.1 Background
배경사진
1. https://cdn.crowdpic.net/list-thumb/thumb_l_D8779A608E0BDF5D6D01D3691D0760F1.jpg
2. https://cdn.crowdpic.net/list-thumb/thumb_l_E8711087E7EE5624A58DCBB200ADA91B.jpg
3. http://res.heraldm.com/content/image/2015/10/21/20151021000673_0.jpg

    배경사진을 랜덤으로 나오게 할 것 (quotes와 비슷함)
    createElement()를 이용해 "img" 라는 태그를 만들어주고 bgImage라는 상수를 선언해주고 값 넣어준다

    document.body.appendChild()
    body를 불러온적이 없으니 document 해주고 body 안에 넣어주기 위해서 appendChild 해주는 것
    괄호안에 들어가는 것이 body안에 들어간다
    
    *Math.random 할떄 random()을 해주고 괄호안에 * array명.length 를 해줘야 오류없이 잘 된다*

    복습
    createElement() HTML 태그를 만들어줄 수 있다.

    Math.floor (내림) , Math.random() 0~1 사이 랜덤실수 , 곱하기를 해줘서 값 맞춰주는데 사용하면 됨
    
    appendChild - 가장 아래에 / prependChild - 가장 위에
*/