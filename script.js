// const productContainers = [...document.querySelectorAll('.productContainer')];
// const nxtBtn = [...document.querySelectorAll('.nxtButton')];
// const preBtn = [...document.querySelectorAll('.preButton')];


const productContainers = document.querySelectorAll('.cardWrapper');
const nxtBtn = document.querySelectorAll('.nxtButton');
const preBtn = document.querySelectorAll('.preButton');

productContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    console.log(containerDimentions);
    console.log(containerWidth);

    nxtBtn[i].addEventListener('click', () => {
        // console.log(item.scrollLeft += containerWidth);
        // item.scrollLeft += containerWidth;
        item.scrollLeft += 600;
    })

    preBtn[i].addEventListener('click', () => {
        // console.log(item.scrollLeft -= containerWidth);
        item.scrollLeft -= 600;
    })
})


// console.log(productContainers);