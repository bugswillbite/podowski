// Navigation functionality for dynamic content switching

document.addEventListener('DOMContentLoaded', function() {
    // Get all the op divs instead of the anchor links
    const navDivs = document.querySelectorAll('div.op1, div.op2, div.op3, div.op4, div.op5, div.op6');
    const contentContainer = document.getElementById('content-container');

    // Add data-section attributes to the divs
    navDivs.forEach(div => {
        if (div.classList.contains('op1')) {
            div.setAttribute('data-section', 'home');
        } else if (div.classList.contains('op2')) {
            div.setAttribute('data-section', 'about');
        } else if (div.classList.contains('op3')) {
            div.setAttribute('data-section', 'mediums');
        } else if (div.classList.contains('op4')) {
            div.setAttribute('data-section', 'portfolio');
        } else if (div.classList.contains('op5')) {
            div.setAttribute('data-section', 'contact');
        } else if (div.classList.contains('op6')) {
            div.setAttribute('data-section', 'home');
        }
    });

    // Content data for different sections
    const sectionContent = {
        home: {
            type: 'images',
            content: `
                <div class="image-gallery" id="home-content">
                   <div class="image-row">
                                <img src="cs.png" alt="Gallery Image">
                                <img src="Brother in Thought 2020 copy 2.JPEG" alt="Gallery Image">
                                <img src="uiFull.png" alt="Gallery Image">
                                <img src="blip.png" alt="Gallery Image">
                            </div>
                            <div class="image-row">
                                <img src="CW2.png" alt="Gallery Image">
                                <img src="RUS1 copy.png" alt="Gallery Image">                                
                                <img src="sky.png" alt="Gallery Image">
                            </div>
                            <div class="image-row">
                                <img src="face copy.jpg" alt="Gallery Image">
                                <img src="fly.png" alt="Gallery Image">
                                <img src="G1 copy.png" alt="Gallery Image">
                                <img src="MS4.png" alt="Gallery Image">
                                <img src="PFCL.jpg" alt="Gallery Image">
                            </div>
                            <div class="square-buttons">
                                <a href="https://github.com/bugswillbite" target="_blank" class="square-btn">
                                    <span>CV</span>
                                </a>
                                <a href="https://www.linkedin.com/in/podowski/" target="_blank" class="square-btn">
                                    <span>RESUME</span>
                                </a>
                                <a href="mailto:bella.podowski@gmail.com" class="square-btn">
                                    <span>ARTIST STATEMENT</span>
                                </a>
                            </div>
                </div>
            `
        },
        mediums: {
            type: 'images',
            content: `
                <div class="image-gallery mediums-gallery" id="mediums-content">
                    <div class="image-row">
                        <div class="medium-item" data-medium="web-design">
                            <video src="vids/scv.mp4" autoplay muted loop>
                                <source src="vids/scv.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Web Design</div>
                        </div>
                        <div class="medium-item" data-medium="video-editing">
                            <video src="vids/cwr.mp4" autoplay muted loop>
                                <source src="vids/cwr.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Video Editing</div>
                        </div>
                        <div class="medium-item" data-medium="graphic-design">
                                <video src="vids/gdes.mp4" autoplay muted loop>
                                <source src="vids/gdes.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>                            <div class="overlay-text">Graphic Design</div>
                        </div>
                    </div>
                    <div class="image-row">
                        <div class="medium-item" data-medium="3d-modelling">
                                <video src="vids/3d.mp4" autoplay muted loop>
                                <source src="vids/3d.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">3D Modelling</div>
                        </div>
                        <div class="medium-item" data-medium="game-development">
                                <video src="vids/gd.mp4" autoplay muted loop">
                                <source src="vids/gd.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Game Development</div>
                        </div>
                        <div class="medium-item" data-medium="physical-media">
                            <video src="vids/pm.mp4" autoplay muted loop>
                                <source src="vids/pm.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Physical Media</div>
                        </div>
                    </div>
                </div>
            `
        },
        portfolio: {
            type: 'images',
            content: `
                <div class="image-gallery" id="portfolio-content">
                    <div class="image-row">
                        <img src="prog.png" alt="Programming Project">
                        <img src="uiFull.png" alt="UI Design">
                        <img src="desktop.png" alt="Desktop App">
                    </div>
                    <div class="image-row">
                        <img src="device.png" alt="Device Design">
                        <img src="commodore64.png" alt="Retro Computing">
                        <img src="BIT2.JPEG" alt="Digital Project">
                    </div>
                    <div class="image-row">
                        <img src="BGIMG.png" alt="Background Design">
                        <img src="BGIMG2.png" alt="Background Design">
                        <img src="BGIMG3.png" alt="Background Design">
                        <img src="BGIMG4.png" alt="Background Design">
                    </div>
                </div>
            `
        },
        about: {
            type: 'text',
            content: `
                <div class="text-content" id="about-content">
                    <div class="text-box">
                        <h2>About Izabella Podowski</h2>
                        <p>I am a multidisciplinary creative professional specializing in programming, design, and digital media.</p>
                        
                        <h3>Skills & Expertise</h3>
                        <ul>
                            <li>Full-stack web development</li>
                            <li>UI/UX design and prototyping</li>
                            <li>3D modeling and digital art</li>
                            <li>Video editing and post-production</li>
                            <li>Interactive media development</li>
                        </ul>
                        
                        <h3>Philosophy</h3>
                        <p>Every project is an opportunity to explore new technologies, push creative boundaries, and solve complex problems through elegant solutions.</p>
                    </div>
                </div>
            `
        },
        contact: {
            type: 'text',
            content: `
                <div class="text-content" id="contact-content">
                    <div class="text-box">
                        <h2>Get In Touch</h2>
                        <p>I'm always interested in new opportunities and collaborations. Also open to creative commissions! Connect below.</p>
                        
                        <div class="contact-info">
                            <h3>Contact Information</h3>
                            <p><strong>Email:</strong> bella.podowski@gmail.com</p>
                            <p><strong>Phone:</strong> Available upon request</p>
                            <p><strong>Location:</strong> Available for remote work</p>
                        </div>
                        
                        <div class="contact-form">
                            <h3>Send a Message</h3>
                            <form>
                                <input type="text" placeholder="Your Name" required>
                                <input type="email" placeholder="Your Email" required>
                                <input type="text" placeholder="Subject" required>
                                <textarea placeholder="Your Message" rows="5" required></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // Detailed subsections for each medium
    const mediumSubsections = {
        'web-design': {
            type: 'text',
            content: `
                <div class="text-content" id="web-design-content">
                    <div class="text-box">
                        <h2>Web Design</h2>
                        <p>Creating responsive, user-friendly websites and web applications with modern technologies and design principles.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">
                                <img src="uiFull.png" alt="UI Design Project">
                                <img src="desktop.png" alt="Desktop Application">
                                <img src="device.png" alt="Device Interface">
                            </div>
                            <div class="image-row">
                                <img src="prog.png" alt="Programming Interface">
                                <img src="cs.png" alt="Code Structure">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        'video-editing': {
            type: 'text',
            content: `
                <div class="text-content" id="video-editing-content">
                    <div class="text-box">
                        <h2>Video Editing</h2>
                        <p>Professional video editing and post-production work including motion graphics, color correction, and narrative storytelling.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">
                                <img src="CW2.png" alt="Creative Work">
                                <img src="blip.png" alt="Video Project">
                                <img src="sky.png" alt="Sky Scene">
                            </div>
                            <div class="image-row">
                                <img src="fly.png" alt="Animation Project">
                                <img src="MS4.png" alt="Motion Study">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        'graphic-design': {
            type: 'text',
            content: `
                <div class="text-content" id="graphic-design-content">
                    <div class="text-box">
                        <h2>Graphic Design</h2>
                        <p>Visual communication through typography, layout, and branding. Creating compelling designs for digital and print media.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">
                                <img src="G1 copy.png" alt="Graphic Design 1">
                                <img src="PFCL.jpg" alt="Print Design">
                                <img src="face copy.jpg" alt="Portrait Design">
                            </div>
                            <div class="image-row">
                                <img src="Brother in Thought 2020 copy 2.JPEG" alt="Conceptual Design">
                                <img src="RUS1 copy.png" alt="Russian Design">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        '3d-modelling': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-modelling-content">
                    <div class="text-box">
                        <h2>3D Modelling</h2>
                        <p>Creating detailed 3D models, environments, and animations using industry-standard software and techniques.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">
                                <img src="3dCAT copy.png" alt="3D Cat Model">
                                <img src="3dEYEicon.jpeg" alt="3D Eye Design">
                                <img src="my3dEX.png" alt="3D Example">
                            </div>
                            <div class="image-row">
                                <img src="babyEX.png" alt="Character Model">
                                <img src="lady2.gif" alt="Animated Character">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        'game-development': {
            type: 'text',
            content: `
                <div class="text-content" id="game-development-content">
                    <div class="text-box">
                        <h2>Game Development</h2>
                        <p>Interactive game design and development including mechanics, user interfaces, and immersive experiences.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">
                                <img src="desktop.png" alt="Game Interface">
                                <img src="commodore64.png" alt="Retro Game">
                                <img src="BIT2.JPEG" alt="Bit Graphics">
                            </div>
                            <div class="image-row">
                                <img src="prog.png" alt="Game Programming">
                                <img src="device.png" alt="Game Device">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        'physical-media': {
            type: 'text',
            content: `
                <div class="text-content" id="physical-media-content">
                    <div class="text-box">
                        <h2>Physical Media</h2>
                        <p>Traditional and mixed media artwork including sculptures, installations, and tactile design experiences.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">
                                <img src="balloonDog copy.JPG" alt="Balloon Dog Sculpture">
                                <img src="PFCL5.png" alt="Physical Design">
                                <img src="mom2.png" alt="Mixed Media">
                            </div>
                            <div class="image-row">
                                <img src="heartwhat.png" alt="Heart Installation">
                                <img src="everyPicture.png" alt="Collage Work">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        }
    };

    // Function to switch content
    function switchContent(sectionName) {
        let section = sectionContent[sectionName] || mediumSubsections[sectionName];
        if (section) {
            contentContainer.innerHTML = section.content;
            
            // Add fade-in effect
            contentContainer.style.opacity = '0';
            setTimeout(() => {
                contentContainer.style.opacity = '1';
            }, 50);
            
            // If contact section, add form handler
            if (sectionName === 'contact') {
                setupContactForm();
            }
            
            // If mediums section, add click handlers for medium items
            if (sectionName === 'mediums') {
                setupMediumClickHandlers();
            }
            
            // If it's a medium subsection, add back button handler
            if (mediumSubsections[sectionName]) {
                setupBackButton();
            }
        }
    }

    // Function to setup back button functionality
    function setupBackButton() {
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', function(e) {
                e.preventDefault();
                switchContent('mediums');
            });
        }
    }

    // Function to setup click handlers for medium items
    function setupMediumClickHandlers() {
        const mediumItems = document.querySelectorAll('.medium-item[data-medium]');
        mediumItems.forEach(item => {
            item.addEventListener('click', function() {
                const mediumType = this.getAttribute('data-medium');
                switchContent(mediumType);
            });
        });
    }

    // Function to setup contact form functionality
    function setupContactForm() {
        const form = document.querySelector('#contact-content form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const name = form.querySelector('input[placeholder="Your Name"]').value;
                const email = form.querySelector('input[placeholder="Your Email"]').value;
                const subject = form.querySelector('input[placeholder="Subject"]').value;
                const message = form.querySelector('textarea[placeholder="Your Message"]').value;
                
                // Create Gmail compose URL
                const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=bella.podowski@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                // Open Gmail in new tab
                window.open(gmailURL, '_blank');
                
                // Show success message
                const button = form.querySelector('button[type="submit"]');
                const originalText = button.textContent;
                button.textContent = 'Gmail Opened!';
                button.style.backgroundColor = '#4CAF50';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '#fa5b21';
                    form.reset();
                }, 3000);
            });
        }
    }

    // Add click event listeners to navigation divs
    navDivs.forEach(div => {
        div.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('data-section');
            switchContent(sectionName);
            
            // Remove active state from all nav divs
            navDivs.forEach(d => {
                d.classList.remove('active');
            });
            
            // Add active state to clicked nav div
            this.classList.add('active');
        });
    });

    // Set home as default active (op1)
    document.querySelector('div.op1').classList.add('active');
    
    // Initialize contact form if contact section is visible on load
    if (document.querySelector('#contact-content')) {
        setupContactForm();
    }
    
    // Initialize medium click handlers if mediums section is visible on load
    if (document.querySelector('#mediums-content')) {
        setupMediumClickHandlers();
    }
});
