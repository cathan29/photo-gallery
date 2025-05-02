document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    // Open lightbox
    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImg.src = thumbnails[currentIndex].src;
        lightbox.classList.add('visible');
    };

    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('visible');
    };

    // Show previous image
    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        lightboxImg.src = thumbnails[currentIndex].src;
    };

    // Show next image
    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        lightboxImg.src = thumbnails[currentIndex].src;
    };

    // Event Listeners
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('visible')) {
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
});