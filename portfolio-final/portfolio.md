---
title: "My Works"
layout: "base.njk"
---
<div class="container py-5">
    <div class="text-center">
        <h2 class="text-accent">My Works</h2>
        <h1 class="display-5 fw-bold mb-5">Here’s A Glimpse Of The Projects I’ve Had The Privilege To Create.</h1>
    </div>

    <ul class="portfolio-filters">
        <li class="active" data-filter="*">All</li>
        <li data-filter=".web-design">Web Design</li>
        <li data-filter=".mobile-app">Mobile App</li>
        <li data-filter=".logo">Logo</li>
    </ul>

    <div class="masonry-grid">
        {% for project in site.portfolio %}
            <a href="/portfolio/{{ project.title | slug }}/" class="portfolio-item {{ project.category | lower | replace(' ', '-') }}">
                <img src="{{ project.image }}" class="img-fluid" alt="{{ project.title }}">
                <div class="portfolio-overlay">
                    <h4 class="portfolio-title">{{ project.title }}</h4>
                    <p class="portfolio-category">{{ project.category }}</p>
                </div>
            </a>
        {% endfor %}
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.portfolio-filters li');
    const portfolioItems = document.querySelectorAll('.masonry-grid .portfolio-item');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Hapus kelas 'active' dari semua tombol
            filters.forEach(item => item.classList.remove('active'));
            // Tambahkan 'active' ke tombol yang diklik
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                // Perbaikan: Gunakan class untuk show/hide agar bisa diberi animasi
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
</script>