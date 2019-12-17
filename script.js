const onClick = () => {
    console.log(document.querySelectorAll(mobile-menu-item));
    document.querySelectorAll(mobile-menu-item).forEach(element => {
        if (element.style.display === 'flex') {
            element.style.display = 'none';  
        } else {
            element.style.display = 'flex';
        }
    });
}
