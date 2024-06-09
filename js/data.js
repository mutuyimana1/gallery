const data=[
    {
        image:"../images/Image.png",
        title:"fennec",
        subTitle:"fox",
        content:"india"
    },
    {
        image:"../images/Image (1).png",
        title:"fennec",
        subTitle:"fox",
        content:"india"
    },
    {
        image:"../images/Image (2).png",
        title:"fennec",
        subTitle:"fox",
        content:"india"
    },
    {
        image:"../images/Image (3).png",
        title:"fennec",
        subTitle:"fox",
        content:"india"
    },
]

window.onload = () => {
    const contentGallery = document.getElementById('contentGallery');

    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('galleryElement');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const title = document.createElement('h1');
        title.innerHTML = `<span>${item.title.split(' ')[0]}</span><br/><span>${item.title.split(' ')[1]}</span>`;

        const subTitle = document.createElement('h3');
        subTitle.textContent = item.subTitle;

        const content = document.createElement('p');
        content.textContent = item.content;

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(subTitle);
        div.appendChild(content);

        contentGallery.appendChild(div);
    });
};
