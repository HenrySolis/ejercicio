
    function changeMainImage(src) {
      document.getElementById('main-image').src = src;
    }

    function openImageModal(src) {
      document.getElementById('modalImage').src = src;
      document.getElementById('imageModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeImageModal() {
      document.getElementById('imageModal').classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('DOMContentLoaded', function() {
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');

      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetTab = button.getAttribute('data-tab');

      
          tabButtons.forEach(btn => {
            btn.classList.remove('border-blue-600', 'text-blue-600');
            btn.classList.add('border-transparent', 'text-gray-500');
          });

          tabContents.forEach(content => {
            content.classList.add('hidden');
          });

   
          button.classList.add('border-blue-600', 'text-blue-600');
          button.classList.remove('border-transparent', 'text-gray-500');

      
          document.getElementById(targetTab).classList.remove('hidden');
        });
      });


      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeImageModal();
        }
      });

      document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
          closeImageModal();
        }
      });

  
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      }, observerOptions);
      document.querySelectorAll('.card-hover').forEach(card => {
        observer.observe(card);
      });

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      let lastScrollTop = 0;
      const header = document.querySelector('header');
      
      window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
     
          header.style.transform = 'translateY(-100%)';
        } else {
        
          header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      });

   
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    });

    function handleSearch(query) {
      console.log('Buscando:', query);
    }

    function applyFilter(filterType, value) {
      console.log('Aplicando filtro:', filterType, value);
    }

    function toggleFavorite(productId) {
      const favoriteBtn = document.querySelector(`[data-product="${productId}"] .favorite-btn`);
      favoriteBtn.classList.toggle('active');
    }

    function shareProduct() {
      if (navigator.share) {
        navigator.share({
          title: 'Switch TP-LINK TL-SG3424P',
          text: 'Switch Administrable de 24 puertos PoE Gigabit + 4 SFP',
          url: window.location.href
        });
      } else {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
          alert('Enlace copiado al portapapeles');
        });
      }
    }

    function debounce(func, wait, immediate) {
      let timeout;
      return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const optimizedScrollHandler = debounce(function() {
 
    }, 16); 

    window.addEventListener('scroll', optimizedScrollHandler);