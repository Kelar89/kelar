---
title: "Contact Me"
layout: "base.njk"
---
<div class="container py-5">
    <div class="text-center" style="max-width: 600px; margin: auto;">
        <h2 class="text-accent">Let's Collaborate</h2>
        <h1 class="display-5 fw-bold mb-4">Have A Project In Mind Or Need Guidance? Let's Connect.</h1>
    </div>

    <div class="contact-form-container mt-5">
        <form id="whatsapp-form">
            <input type="hidden" id="whatsapp-number" value="6285894448143">

            <div class="row">
                <div class="col-md-6 mb-4">
                    <input type="text" id="name" class="form-control-custom" placeholder="Full Name*" required>
                </div>
                <div class="col-md-6 mb-4">
                    <input type="email" id="email" class="form-control-custom" placeholder="Email*" required>
                </div>
                <div class="col-md-6 mb-4">
                    <input type="tel" id="phone" class="form-control-custom" placeholder="Phone">
                </div>
                <div class="col-md-6 mb-4">
                    <input type="text" id="subject" class="form-control-custom" placeholder="Subject">
                </div>
                <div class="col-12 mb-4">
                    <textarea id="message" class="form-control-custom" rows="6" placeholder="Message"></textarea>
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn-accent">Send via WhatsApp →</button>
                </div>
            </div>
        </form>
    </div>
</div>

<script>
document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const phoneNumber = document.getElementById('whatsapp-number').value;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // --- PERUBAHAN DIMULAI DI SINI ---

    // 1. Kata-kata pembuka yang lebih profesional
    const intro = `Halo, saya tertarik untuk berdiskusi lebih lanjut.`;

    // 2. Susun detail kontak dengan format yang lebih rapi
    const details = [
        `*Nama:* ${name}`,
        `*Email:* ${email}`,
        `*Telepon:* ${phone || '-'}`, // Memberi tanda '-' jika kolom telepon kosong
        `*Subjek:* ${subject || '-'}`  // Memberi tanda '-' jika subjek kosong
    ].join('\n');

    // 3. Gabungkan semua bagian menjadi pesan final
    const finalMessage = 
`${intro}

Berikut adalah detail saya:
-----------------------------------
${details}
-----------------------------------

*Pesan:*
${message}
`;

    // --- PERUBAHAN SELESAI DI SINI ---

    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});
</script>