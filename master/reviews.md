---
title: "Reviews"
layout: "base.njk"
---
<div class="container py-5">
    <div class="text-center" style="max-width: 700px; margin: auto;">
        <h2 class="text-accent">What Clients Say</h2>
        <h1 class="display-5 fw-bold mb-5">I've Had The Honor Of Collaborating With Amazing Clients.</h1>
    </div>

    <div class="swiper review-slider">
        <div class="swiper-wrapper">
            {% for review in site.reviews %}
            <div class="swiper-slide">
                <div class="review-card">
                    <p class="review-quote">“{{ review.quote }}”</p>
                    <div class="review-author-info">
                        <img src="{{ review.avatar }}" alt="{{ review.author }}">
                        <div>
                            <h4 class="author-name">{{ review.author }}</h4>
                            <p class="author-location">{{ review.location }}</p>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>

