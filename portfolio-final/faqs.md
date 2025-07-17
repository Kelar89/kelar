---
title: "FAQs"
layout: "base.njk"
---
<div class="container py-5">
    <div class="text-center" style="max-width: 700px; margin: auto;">
        <h2 class="text-accent">Frequently Asked Questions</h2>
        <h1 class="display-5 fw-bold mb-5">Et Est, Dolorem Provident Vel Debitis Perspiciatis Ducimus.</h1>
    </div>

    <div class="accordion-container">
        <div class="accordion" id="faqAccordion">
            {% for item in site.faqs %}
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading-{{ loop.index }}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{{ loop.index }}" aria-expanded="false" aria-controls="collapse-{{ loop.index }}">
                        {{ item.question }}
                    </button>
                </h2>
                <div id="collapse-{{ loop.index }}" class="accordion-collapse collapse" aria-labelledby="heading-{{ loop.index }}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        {{ item.answer }}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>