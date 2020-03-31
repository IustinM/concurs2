const navSlide = () =>{
    // denumim variabilele cu tip const
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const links = document.querySelectorAll('.nav-links li');
    // adaugam event-ul pentru a crea meniul mobil
    burger.addEventListener('click', () =>{
        navLinks.classList.toggle('nav-active');

        //adaugam keyframe-ul
        links.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation= '';
            }else{
                link.style.animation = `navSlideIn 0.3s forwards ${index/7+0.3}s `
            }
        });
        burger.classList.toggle('toggle');
    });


}
// numim functia pentru a se efectua
navSlide();
// efect imagine container1
new hoverEffect ({
    parent: document.querySelector('.distorsiune'),
    intensity:0.2,
    image1: ' ./images/sanatate1.jpg',
    image2: ' ./images/sanatate2.png',
    displacementImage: ' ./images/diss.png'
});
//   efectul paralax
