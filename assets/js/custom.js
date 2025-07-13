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

  // Scroll Event & Active Navbar
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

  // Smooth Scroll Links
  on('click', '.scroll-link', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      let offcanvas = document.querySelector('.offcanvas.show');
      if (offcanvas) new bootstrap.Offcanvas(offcanvas).hide();
      let navbarCollapse = document.querySelector('.navbar-collapse.show');
      if (navbarCollapse) new bootstrap.Collapse(navbarCollapse).hide();
      scrollto(this.hash);
    }
  }, true);

  // Back to Top
  let backtotop = select('#back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('show');
      } else {
        backtotop.classList.remove('show');
      }
    }
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
    on('click', '#back-to-top', function(e) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // AOS Animation
  window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      mirror: false
    });
  });

  // ===== CUSTOM KELAR.MY.ID =====
  document.addEventListener('DOMContentLoaded', function() {
showWeekendPromoBanner();

	    /**
     * Tombol WhatsApp dari Kartu Layanan
     */
    window.kirimPesanWA = function(layanan) {
      const targetNumber = '6285894448143';

      const pesan = {
        dokumen: `Halo Kelar.my.id! Saya butuh bantuan untuk merapikan dokumen laporan. Bisa bantu layout, margin, halaman, dan daftar isi? Terima kasih!`,
        pdf: `Halo Kelar.my.id! Saya ingin menggabungkan, memotong, atau mengedit beberapa file PDF. Bisa dibantu? Terima kasih!`,
        cv: `Halo Kelar.my.id! Saya ingin redesign CV atau profil usaha agar lebih menarik dan profesional. Bisa mulai dari mana ya?`,
        form: `Halo Kelar.my.id! Saya butuh bantuan buat Google Form (pendaftaran/survei). Bisa tolong dibuatkan?`,
        maps: `Halo Kelar.my.id! Saya ingin meningkatkan kehadiran bisnis saya di Google Maps, termasuk review dan optimasi. Bisa dibantu?`,
        custom: `Halo Kelar.my.id! Saya punya tugas unik yang agak ribet dan belum tahu cara kerjanya. Bisa konsultasi dulu?`
      };

      const finalMessage = encodeURIComponent(pesan[layanan] || 'Halo Kelar.my.id!');
      const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
      const linkWA = isMobile
        ? `whatsapp://send?phone=${targetNumber}&text=${finalMessage}`
        : `https://web.whatsapp.com/send?phone=${targetNumber}&text=${finalMessage}`;

      window.open(linkWA, '_blank');
    }

    /**
     * Social Proof Pop-up
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
     * Form-to-WhatsApp v2
     */
		window.submitToWhatsApp = function() {
		  const name = select('#name')?.value?.trim();
		  const email = select('#email')?.value?.trim();
		  const phone = select('#phone')?.value?.trim();
		  const subject = select('#subject')?.value?.trim();

		  if (!name || !email || !subject) {
			alert('Harap isi semua data wajib (Nama, Email, dan Masalah Anda).');
			return;
		  }

		  const targetNumber = '6285894448143';

		  const message = `
		Halo Kelar.my.id,

		Saya ingin berkonsultasi.

		Nama     : ${name}
		Email    : ${email}
		WhatsApp : ${phone || '-'}

		Masalah  : ${subject}

		Terima kasih.
		  `.trim();

		  const encodedMessage = encodeURIComponent(message);

		  // Deteksi mobile
		  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

		  // URL sesuai perangkat
		  const whatsappURL = isMobile
			? `whatsapp://send?phone=${targetNumber}&text=${encodedMessage}`
			: `https://web.whatsapp.com/send?phone=${targetNumber}&text=${encodedMessage}`;

		  window.open(whatsappURL, '_blank');
		}

	const pesan = {
	  // ...
	  promo: `Halo Kelar.my.id! Saya lihat ada promo diskon akhir pekan. Saya ingin klaim promo dan tanya layanan yang cocok.`,
	};

  });
  
  
  function showWeekendPromoBanner() {
  const now = new Date();
  const day = now.getDay(); // 0 = Minggu, 5 = Jumat, 6 = Sabtu
  const banner = document.getElementById('promo-banner');
  const timerEl = document.getElementById('promo-timer');

  if (day >= 5 || day === 0) {
    banner.classList.remove('d-none');
    const end = new Date();
    end.setDate(now.getDate() + (7 - day)); // Minggu malam
    end.setHours(23, 59, 59, 999);

    const updateCountdown = () => {
      const diff = end - new Date();
      if (diff <= 0) {
        banner.remove();
        return;
      }
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      timerEl.textContent = `${h}j ${m}m ${s}d`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
}

document.addEventListener('mouseleave', function(e) {
  if (e.clientY <= 0) {
    const popup = document.getElementById('exit-popup');
    if (popup && popup.classList.contains('d-none')) {
      popup.classList.remove('d-none');
    }
  }
});



})();
