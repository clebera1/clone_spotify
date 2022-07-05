class MobileNavBar{
    constructor (mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    } 
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    
);
mobileNavBar.init();

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('mobile-menu')

function menuShow() {
    if (ul.classList.contains( 'open')){
        ul.classList.remove('open');
        }else{
            ul.classList.add('open');
        }
} 