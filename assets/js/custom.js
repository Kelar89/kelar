(function() {
  "use strict";

  /**
   * Helper functions
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
  document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
  });
});

  
  // Optional: smooth scroll for links
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

  

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar scroll logic
   */
  const scrollto = (el) => {
    let header = select('.fbs__net-navbar');
    let offset = header.offsetHeight;
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  let selectHeader = select('.fbs__net-navbar');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('active');
      } else {
        selectHeader.classList.remove('active');
      }
    }
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }
  
  on('click', '.scroll-link', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      
      let offcanvas = document.querySelector('.offcanvas.show');
      if (offcanvas) {
        new bootstrap.Offcanvas(offcanvas).hide();
      }
      
      let navbarCollapse = document.querySelector('.navbar-collapse.show');
      if (navbarCollapse) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }

      scrollto(this.hash);
    }
  }, true);

  // --- Back to Top Button ---
  let backtotop = select('#back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('show')
      } else {
        backtotop.classList.remove('show')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
    on('click', '#back-to-top', function(e) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
  }
  
  // --- AOS Initialization ---
  window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      mirror: false
    })
  });

  // ===== KODE KUSTOM KELAR.MY.ID v5.7 =====

  document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Social Proof Pop-up Logic
     */
    const socialProofData = [
        { name: 'David L. (SG)', text: 'Fixed my 100-page thesis overnight.', avatar: 'assets/images/avatars/avatar-1.jpg' },
        { name: 'Sari P. (ID)', text: 'CV saya jadi standout banget!', avatar: 'assets/images/avatars/avatar-2.jpg' },
        { name: 'Michael B. (AUS)', text: 'Merged 20+ PDF files in an hour.', avatar: 'assets/images/avatars/avatar-3.jpg' },
        { name: 'Adit G. (ID)', text: 'Tugas admin yang bikin pusing akhirnya kelar.', avatar: 'assets/images/avatars/avatar-4.jpg' },
        { name: 'Emily R. (UK)', text: 'The new company profile looks amazing.', avatar: 'assets/images/avatars/avatar-5.jpg' }
    ];
  
    const popup = select('#social-proof-popup');
    const spAvatar = select('#sp-avatar');
    const spText = select('#sp-text');
    const spSource = select('#sp-source');
    const spClose = select('#sp-close');
  
    if (popup && spAvatar && spText && spSource && spClose) {
        spClose.addEventListener('click', () => {
            popup.classList.remove('show');
        });
  
        let currentPopupTimeout;
  
        function showRandomPopup() {
            popup.classList.remove('show');
            
            clearTimeout(currentPopupTimeout);
            currentPopupTimeout = setTimeout(() => {
                const randomData = socialProofData[Math.floor(Math.random() * socialProofData.length)];
                
                spAvatar.src = randomData.avatar;
                spText.textContent = `“${randomData.text}”`;
                spSource.textContent = randomData.name;
                
                popup.classList.add('show');
            }, 2000); 
        }
  
        setTimeout(() => {
            showRandomPopup();
            setInterval(showRandomPopup, 7000); 
        }, 5000);
    }

    /**
     * Form-to-WhatsApp Logic
     */
    const contactForm = select('#contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = select('#name').value;
        const email = select('#email').value;
        const phone = select('#phone').value;
        const subject = select('#subject').value;
        const message = select('#message').value;
        const targetNumber = '6285894448143';

        const waMessage = `
Hello, Kelar.my.id!
I'd like to inquire about your services.

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}

*Subject:* ${subject}

*Message:*
${message}

Thank you!
        `;

        const whatsappURL = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waMessage.trim())}`;
        
        window.open(whatsappURL, '_blank');
      });
    }

  });

})();
