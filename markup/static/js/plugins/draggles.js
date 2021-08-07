export const draggles = () => {

    // Dragstart for images
    const allImg = document.querySelectorAll('img');
    const	allLink = document.querySelectorAll('a');
    const allImgLength = allImg && allImg.length;
    const allLinkLength = allLink && allImg.length;


    allImgLength > 0 ? getDisabledDrag(allImg) : null;
    allLinkLength > 0 ? getDisabledDrag(allLink) : null;


    function getDisabledDrag(items) {
        items.forEach(element => {
            element.addEventListener('dragstart', getElementDraggles);
        });
    }

    function getElementDraggles(e) {
        e.preventDefault();
    }


    // END Dragstart for images
};


