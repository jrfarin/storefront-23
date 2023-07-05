// EXPAND & COLLAPSE
export const expandCollapseBox = () => {
    const expand = document.querySelector('#expandBox');
    const collapse = document.querySelector('#collapseBox');

    const twoColumns = document.querySelectorAll('.prodListTwo');

    expand.addEventListener('click', () => {
        expand.classList.add('d-none');
        collapse.classList.remove('d-none');

        twoColumns.forEach(function(item){
            item.classList.add('prodListOne')
        });
    });

    collapse.addEventListener('click', () => {
        collapse.classList.add('d-none');
        expand.classList.remove('d-none');

        twoColumns.forEach(function(item){
            item.classList.remove('prodListOne')
        });
    });
}

// TOGGLE SHOW DESCRIPTION
export const toggleShowDescription = () => {
    // variables
    const toggleDescription = document.querySelector('#toggleDescription');
    const readMore = document.querySelector('#readMoreStfDescription.col');
    const stfDescription = document.querySelector('#descriptionText');
    const readLess = document.createElement('SPAN');

    // listeners
    readMore.addEventListener('click', openReadBox);
    readLess.addEventListener('click', closeReadBox);

    // functions
    function openReadBox() {
        readLess.classList.add('d-flex', 'justify-content-end', 'venca-color', 'text-decoration-underline', 'mt-2');
        readLess.textContent = 'Leer Menos';
        stfDescription.appendChild(readLess);

        if(stfDescription.classList.contains('line-clamp')){
            toggleDescription.classList.add('p-0')
            stfDescription.classList.remove('line-clamp', 'pe-5');
            readMore.style.display = 'none';
        }
    }

    function closeReadBox() {
        toggleDescription.classList.remove('p-0')
        stfDescription.classList.add('line-clamp', 'pe-5');
        readMore.style.display = 'block'
        readLess.remove();
    }
}
    
// WISHLIST ICONS
export const wishlistIcon = () => {
    const notWished = document.querySelectorAll('.notWished');
    const wished = document.querySelectorAll('.wished');

    notWished.forEach(function(item) {
        item.addEventListener('click', showWished);        
    });

    wished.forEach(function(item) {
        item.addEventListener('click', hideWished);       
    });
    
    function showWished(e) {
        e.preventDefault();
        console.log(this.parentElement);
        this.parentElement.querySelector('.wished').classList.remove("d-none");
    };

    function hideWished(e) {
        e.preventDefault();
        this.parentElement.querySelector('.wished').classList.add("d-none");
    };
}


