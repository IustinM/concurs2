function parallax(element,distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener('scroll',function(){
    // parallax('#container1', window.scrollY , 0.5);
    
    parallax('.adn1', window.scrollY , 0.1);
    parallax('.adn2', window.scrollY , 0.5);
    parallax('.adn3', window.scrollY , 0.3);
    parallax('.adn4', window.scrollY , 0.7);
    parallax('.adn5', window.scrollY , 0.2);
    parallax('.adn6', window.scrollY , 0.1);
    parallax('.adn7', window.scrollY , 0.4);
    parallax('.adn8', window.scrollY , 0.3);
    parallax('.covid1', window.scrollY , 0.3);
    parallax('.covid2', window.scrollY , 0.5);
    parallax('.covid3', window.scrollY , 0.4);

});
// taburi
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        
        tab.classList.add('active');
        target.classList.add('active');
    });
});
// accordion part
const accordions = document.getElementsByClassName("accordion");
for(var i=0;i< accordions.length;i++){
    accordions[i].onclick = function (){
        this.classList.toggle('is-open');
        const content =this.nextElementSibling;
        
        if(content.style.maxHeight ){
            //acordion este deschis
            content.style.maxHeight = null;
        }else{
            //acordion este inchis
            content.style.maxHeight = content.scrollHeight + "px";
        }

    }
}
