---
title: "About Me"
layout: "base.njk"
---
<div class="container py-5">
    <div class="text-center">
        <h2 class="text-accent">About Me</h2>
        <h1 class="display-5 fw-bold mb-5">A Multifaceted Designer And Developer With A Knack For Blending Creativity & Technical Precision.</h1>
    </div>

    <div class="card-custom p-4">
        <div class="tab-container">
            <div class="tab-sidebar">
                <div class="d-flex flex-column">
                    <button class="btn tab-button active" data-target="#skill-content">Skill</button>
                    <button class="btn tab-button" data-target="#experience-content">Experience</button>
                    <button class="btn tab-button" data-target="#education-content">Education</button>
                    <button class="btn tab-button" data-target="#interest-content">Interest</button>
                </div>
            </div>

            <div class="tab-main-content">
                <div id="skill-content" class="tab-content active">
                    <div class="row">
                        {% for item in site.skills %}
                        <div class="col-md-6 content-item">
                            <h4 class="item-title">{{ item.name }}</h4>
                            <p class="item-description">{{ item.description }}</p>
                        </div>
                        {% endfor %}
                    </div>
                </div>

                <div id="experience-content" class="tab-content">
                    <div class="row">
                        {% for item in site.experience %}
                        <div class="col-md-6 content-item">
                            <h4 class="item-title">{{ item.company }}: {{ item.role }}</h4>
                            <p class="item-meta">{{ item.period }}</p>
                            <p class="item-description">{{ item.description }}</p>
                        </div>
                        {% endfor %}
                    </div>
                </div>

                <div id="education-content" class="tab-content">
                    <div class="row">
                        {% for item in site.education %}
                        <div class="col-md-6 content-item">
                            <h4 class="item-title">{{ item.degree }}</h4>
                            <p class="item-meta">{{ item.period }}</p>
                            <p class="item-description">{{ item.description }}</p>
                        </div>
                        {% endfor %}
                    </div>
                </div>

                <div id="interest-content" class="tab-content">
                    <div class="row">
                        {% for item in site.interest %}
                        <div class="col-md-6 content-item">
                            <h4 class="item-title">{{ item.name }}</h4>
                            <p class="item-description">{{ item.description }}</p>
                        </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                const target = document.querySelector(button.dataset.target);
                if (target) {
                    target.classList.add('active');
                }
            });
        });
    });
</script>