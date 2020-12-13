const toggleMenu = () => {
    document.getElementById('hmbg-menu').classList.toggle('open')
    console.log(document.getElementById('nav-menu'))
    document.getElementById('nav-menu').classList.toggle("open");
    document.getElementById('hmbg-icon-1').classList.toggle('visible')
    document.getElementById('hmbg-icon-2').classList.toggle('visible')
}