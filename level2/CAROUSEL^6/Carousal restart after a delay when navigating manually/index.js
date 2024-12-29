 
  const images = [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];
  let currentIndex = 0;
  
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');
  const carouselImage = document.getElementById('carouselImg');
  
  function updateImage() {
    carouselImage.src = images[currentIndex];
    scheduleAutoSlide();  // Schedule the next auto slide
  }
  
  function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  };
  
  function previousImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  // Auto slide scheduling function
  let autoSlideTimeout;
  
  function scheduleAutoSlide() {
    clearTimeout(autoSlideTimeout);  // Clear the previous auto slide timeout
    autoSlideTimeout = setTimeout(nextImg, 2000);  // Schedule the next auto slide
  }
  
  // Attach event listeners to stop auto slide immediately when navigating images manually
  prevButton.addEventListener('click', () => {
    clearTimeout(autoSlideTimeout);
    scheduleAutoSlide();
  });
  nextButton.addEventListener('click', () => {
    clearTimeout(autoSlideTimeout);
    scheduleAutoSlide();
  });

  // Initialize with the first image in the array
  updateImage();