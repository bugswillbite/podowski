document.addEventListener('DOMContentLoaded', function() {
    const navDivs = document.querySelectorAll('div.op1, div.op2, div.op3, div.op4, div.op5, div.op6');
    const contentContainer = document.getElementById('content-container');

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

    const sectionContent = {
        home: {
            type: 'images',
            content: `
                <div class="image-gallery" id="home-content">
                 <div class="image-row">
                                <img src="imgs/webDesign/cs.png" alt="Gallery Image">
                                <img src="imgs/physical/painting/Brother in Thought 2020 copy 2.JPEG" alt="Gallery Image">
                                <img src="imgs/3DD/crashOverride/uiFull.png" alt="Gallery Image">
                                <img src="imgs/blip.png" alt="Gallery Image">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/CW2.png" alt="Gallery Image">
                                <img src="imgs/webDesign/RUSMART/RUS1.png" alt="Gallery Image">                                
                                <img src="imgs/3DD/crashOverride/sky.png" alt="Gallery Image">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/face copy.jpg" alt="Gallery Image">
                                <img src="imgs/3DD/crashOverride/fly.png" alt="Gallery Image">
                                <img src="imgs/webDesign/GARFIELD/G1.png" alt="Gallery Image">
                                <img src="imgs/3DD/moonstruck/MS4.png" alt="Gallery Image">
                                <img src="imgs/physical/painting/PFCL.jpg" alt="Gallery Image">
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
                            <video src="vids/scv.mp4" autoplay muted loop  webkit-playsinline playsinline>
                                <source src="vids/scv.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Web Design</div>
                        </div>
                        <div class="medium-item" data-medium="video-editing">
                            <video src="vids/cwr.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/cwr.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Video Editing</div>
                        </div>
                        <div class="medium-item" data-medium="graphic-design">
                                <video src="vids/gdes.mp4" autoplay muted loop  webkit-playsinline playsinline>
                                <source src="vids/gdes.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>                            <div class="overlay-text">Graphic Design</div>
                        </div>
                    </div>
                    <div class="image-row">
                        <div class="medium-item" data-medium="3d-modelling">
                                <video src="vids/3d.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/3d.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">3D Modelling</div>
                        </div>
                        <div class="medium-item" data-medium="game-development">
                                <video src="vids/gd.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/gd.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Game Development</div>
                        </div>
                        <div class="medium-item" data-medium="physical-media">
                            <video src="vids/pm.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/pm.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Physical Media</div>
                        </div>
                    </div>
                    <div class="image-row">
                        <div class="medium-item all-medium-item" data-medium="all-mediums">
    
                            <img src="imgs/physical/sculpt/costumes/c2.jpeg" alt="All Mediums" data-lightbox="all-mediums" data-index="24">
                            <div class="overlay-text">All Mediums</div>
                        </div>
                    </div>
                </div>
            `
        },
        portfolio: {
            type: 'text',
            content: `
                <div class="text-content" id="portfolio-content">
                    <div class="text-box">
                        <h2>Portfolio</h2>
                        <p class="paragraph">A collection of projects, commissions, and works organized by category and skill area. To explore my full body of work, visit the Mediums section above!</p>
                        <div class="file-folders">
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="portfolio">
                                   <h3>Graphic Design</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="portfolio-folder">
                                    <div class="folder-inner">
                                        <div class="text-content" id="portfolio-content">
                                            <embed src="portfolio.pdf" type="application/pdf" width="100%" height="600px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="programming">
                                    <h3>Programming Projects</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="programming-folder">
                                    <div class="folder-inner">
                                        <h4>Web Development</h4>
                                        <ul>
                                            <li><a href="https://binaryswag.club" target="_blank">Source Code Vintage - E-commerce Site</a></li>
                                            <li><a href="https://bugswillbite.github.io/rUsmart/" target="_blank">R U Smart? - Interactive Quiz Application</a></li>
                                            <li><a href="https://bugswillbite.github.io/bugChess/" target="_blank">Bug Chess - Project Development Website</a></li>
                                            <li><a href="https://bugswillbite.github.io/garfield/" target="_blank">Garfield - Comic Fan Site</a></li>
                                        </ul>
                                        
                                        <h4>Game Development & 3D Modelling</h4>
                                        <ul>
                                            <li><a href="https://bugswillbite.itch.io/crashOverride" target="_blank">Crash Override - 3D Skateboarding Game</a></li>
                                            <li><a href="https://bugswillbite.itch.io/luvdrive" target="_blank">LuvDrive - Interactive 3D Environment</a></li>
                                            <li><a href="https://bugswillbite.itch.io/mysa" target="_blank">MYSA - Narrative HTML Game</a></li>
                                            <li><a href="https://bugswillbite.itch.io/decorate-my-room" target="_blank">Decorate My Room! - Bedroom Maker HTML Game</a></li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="design">
                                    <h3>Design & Visual Work</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="design-folder">
                                    <div class="folder-inner">
                                        <h4>Graphic Design</h4>
                                        <ul>
                                            <li><a href="https://theprophitt.bandcamp.com/album/zero-cool" target="_blank">Zero Cool - Album Cover</a></li>
                                            <li><a href="https://www.instagram.com/p/C9K5p_CODT3/?img_index=1" target="_blank">Towhead Poster Design - Digital Advertising</a></li>
                                        </ul>
                                        
                                        <h4>Video & Motion Graphics</h4>
                                        <ul>
                                            <li><a href="https://www.youtube.com/watch?v=XlLQM25D5hY" target="_blank">Operelly Visualizer - Music Video</a></li>
                                            <li><a href="https://youtu.be/z2rGIHWx1rk" target="_blank">Cyber Worship Reality - Appropriation Video</a></li>
                                            <li><a href="https://lh-st.com/shows/01-03-2025-devin/" target="_blank">Sounds of Truth - Live Visuals</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="education">
                                    <h3>Education & Experience</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="education-folder">
                                    <div class="folder-inner">
                                        <h4>Academic Background</h4>
                                        <ul>
                                            <li>SAIC - Bachelor of Fine Arts in Studio Arts</li>
                                            <li>UI/UX Design - Prototyping, Interactive Design, Screen Sizes</li>
                                            <li>Video Production & Post-Production - Premiere Pro, After Effects, DSLRs</li>
                                        </ul>
                                        
                                        <h4>Technical Skills</h4>
                                        <ul>
                                            <li>Languages: HTML, CSS, JavaScript</li>
                                            <li>Software: Unity, Maya, Blender, Adobe Creative Suite</li>
                                            <li>Tools: Git, VS Code, Figma, Premiere Pro</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <p class="paragraph">Born 2002 in San Francisco, CA, Bella is a multidisciplinary creative professional specializing in programming, design, digital media, and brand identity. </p>
                        <h3>Education</h3>
                            <p>School of the Art Institute of Chicago (2021-2025):</p>
                                <ul>
                                    <li>Bachelor of Fine Arts in Studio Arts</li>
                                    <li>Focus in Video, New Media, Visual Communication, and Art & Tech</li>
                                </ul>
                        <h3>Skills & Expertise</h3>
                            <ul>
                                <li>Full-stack web development</li>
                                <li>UI/UX design and prototyping</li>
                                <li>3D modeling and digital art</li>
                                <li>Video editing and post-production</li>
                                <li>Interactive media development</li>
                            </ul>
                        <h3>Languages</h3>
                            <ul>
                                <li>English</li>
                                <li>Swedish</li>
                            </ul>
                        <h3>Philosophy</h3>
                            <p class="paragraph">Every project is an opportunity to explore new technologies, push creative boundaries, and learn through experimentation and collaboration!</p>
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
                            <p><strong>Location:</strong> Upstate NY. Available for remote work.</p>
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

    const mediumSubsections = {
        'all-mediums': {
            type: 'text',
            content: `
                <div class="text-content" id="all-mediums-content">
                    <div class="text-box">
                        <h2>All Works Gallery</h2>
                        <p>Browse all works by category. Click a folder to expand/collapse each medium.</p>
                        <div class="file-folders all-mediums-folders">
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="web-design-all">
                                    <h3>Web Design</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="web-design-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <a href="https://binaryswag.club" target="_blank">
                                                        <img src="imgs/webDesign/cs.png" alt="Source Code Vintage">
                                                        <div class="subsection-overlay-text">Source Code Vintage</div>
                                                    </a>
                                                </div>
                                                <div class="subsection-item">
                                                    <a href="https://bugswillbite.github.io/bugChess" target="_blank">
                                                        <img src="imgs/3DD/bugchessIMG/web.png" alt="BugChess">
                                                        <div class="subsection-overlay-text">Bug Chess</div>
                                                    </a>
                                                </div>
                                                <div class="subsection-item">
                                                    <a href="https://bugswillbite.github.io/PodowskiDotNet/html/webDesign.html" target="_blank">
                                                        <img src="imgs/webDesign/wd.png" alt="Web Design">
                                                        <div class="subsection-overlay-text">Web Design Portfolio</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <a href="https://bugswillbite.github.io/PodowskiDotNet/html/desktop.html" target="_blank">
                                                        <img src="imgs/webDesign/DESKTOP/desktop.PNG" alt="Desktop">
                                                        <div class="subsection-overlay-text">Desktop UI</div>
                                                    </a>
                                                </div>
                                                <div class="subsection-item">
                                                    <a href="https://bugswillbite.github.io/rUsmart/" target="_blank">
                                                        <img src="imgs/webDesign/RUSMART/RUS1.png" alt="R U Smart?">
                                                        <div class="subsection-overlay-text">R U Smart?</div>
                                                    </a>
                                                </div>
                                                <div class="subsection-item">
                                                    <a href="https://bugswillbite.github.io/garfield/" target="_blank">
                                                        <img src="imgs/webDesign/GARFIELD/G1.PNG" alt="Garfield">
                                                        <div class="subsection-overlay-text">Garfield</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="video-editing-all">
                                    <h3>Video Editing</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="video-editing-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery">
                                            <div class="image-row">
                                                <div class="medium-item">
                                                    <a href="https://www.youtube.com/watch?v=XlLQM25D5hY" target="_blank">
                                                        <video src="vids/operelly copy.mp4" autoplay muted loop webkit-playsinline playsinline>
                                                            <source src="vids/operelly copy.mp4" type="video/mp4">
                                                        </video>
                                                        <div class="overlay-text">Operelly Visualizer</div>
                                                    </a>
                                                </div>
                                                <div class="medium-item">
                                                    <a href="https://youtu.be/z2rGIHWx1rk?si=xJZjS0ImOUtddZWo" target="_blank">
                                                        <video src="vids/cwr.mp4" autoplay muted loop webkit-playsinline playsinline>
                                                            <source src="vids/cwr.mp4" type="video/mp4">
                                                        </video>
                                                        <div class="overlay-text">Cyber Worship Reality</div>
                                                    </a>
                                                </div>
                                                <div class="medium-item">
                                                    <a href="https://www.youtube.com/watch?v=4Jkb0T4Lob8" target="_blank">
                                                        <video src="vids/videoBG.mp4" autoplay muted loop webkit-playsinline playsinline>
                                                            <source src="vids/videoBG.mp4" type="video/mp4">
                                                        </video>
                                                        <div class="overlay-text">Unpacking.mp4</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="medium-item">
                                                    <a href="https://www.youtube.com/watch?v=7plpl-A4gyM" target="_blank">
                                                        <video src="vids/dbab.mp4" autoplay muted loop webkit-playsinline playsinline>
                                                            <source src="vids/dbab.mp4" type="video/mp4">
                                                        </video>
                                                        <div class="overlay-text">Don't Be A Body</div>
                                                    </a>
                                                </div>
                                                <div class="medium-item">
                                                    <a href="https://www.youtube.com/watch?v=xanWbQJceKY&t=5s" target="_blank">
                                                        <video src="vids/trinkets.mp4" autoplay muted loop webkit-playsinline playsinline>
                                                            <source src="vids/trinkets.mp4" type="video/mp4">
                                                        </video>
                                                        <div class="overlay-text">Trinkets</div>
                                                    </a>
                                                </div>
                                                <div class="medium-item">
                                                    <a href="https://www.youtube.com/watch?v=LqJsh73PkoY" target="_blank">
                                                        <video src="vids/blip.mp4" autoplay muted loop webkit-playsinline playsinline>
                                                            <source src="vids/blip.mp4" type="video/mp4">
                                                        </video>
                                                        <div class="overlay-text">Blip.mp4</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="graphic-design-all">
                                    <h3>Graphic Design</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="graphic-design-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery lightbox-gallery">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/towheadFish.png" alt="Towhead Poster Design" data-lightbox="graphic-design" data-index="0" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/ZeroCool copy.jpg" alt="Zero Cool Album Cover" data-lightbox="graphic-design" data-index="1" data-external-link="https://theprophitt.bandcamp.com/album/zero-cool">
                                                    <div class="subsection-overlay-text">Prophitt Album Cover</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/front-bizcard copy.png" alt="Source Code Vintage Business Card" data-lightbox="graphic-design" data-index="2" data-external-link="https://binaryswag.club/#contact">
                                                    <div class="subsection-overlay-text">Source Code Vintage Business Card</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/proph.png" alt="Prophitt Poster Design" data-lightbox="graphic-design" data-index="3">
                                                    <div class="subsection-overlay-text">Prophitt Promo Poster</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/scc.png" alt="Source Code Camera" data-lightbox="graphic-design" data-index="4">
                                                    <div class="subsection-overlay-text">Source Code Camera</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/towhead hands.png" alt="Towhead Poster Design - Hands" data-lightbox="graphic-design" data-index="6" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/towhead.png" alt="Towhead Poster Design - Zendeya" data-lightbox="graphic-design" data-index="6" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/towhead mouth.PNG" alt="Towhead Poster Design - Mouth" data-lightbox="graphic-design" data-index="7" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/graphicdesign/ipod.png" alt="Devin. Schubas iPod Poster" data-lightbox="graphic-design" data-index="8">
                                                    <div class="subsection-overlay-text">Devin. Schubas iPod Poster</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="3d-modelling-all">
                                    <h3>3D Modelling</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="3d-modelling-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery threed-horiz">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/pillar.JPG" alt="3D Caterpillar Furrybones" data-lightbox="trinkets" data-index="0">
                                                    <div class="subsection-overlay-text">3D Caterpillar Furrybones</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/monkee.JPG" alt="3D Monkey Keychain" data-lightbox="trinkets" data-index="1">
                                                    <div class="subsection-overlay-text">3D Monkey Keychain</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/hex.JPG" alt="3D Hexbug" data-lightbox="trinkets" data-index="2">
                                                    <div class="subsection-overlay-text">3D Hexbug</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/fly1.JPG" alt="3D Dragonfly Furrybones" data-lightbox="trinkets" data-index="3">
                                                    <div class="subsection-overlay-text">3D Dragonfly Furrybones</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/idog.JPG" alt="3D iDog" data-lightbox="trinkets" data-index="4">
                                                    <div class="subsection-overlay-text">3D iDog</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/peng.JPG" alt="3D Penguin Furrybones" data-lightbox="trinkets" data-index="5">
                                                    <div class="subsection-overlay-text">3D Penguin Furrybones</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/balloonDog.JPG" alt="3D Balloon Dog" data-lightbox="trinkets" data-index="6">
                                                    <div class="subsection-overlay-text">3D Balloon Dog</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/bro.JPG" alt="3D Toy" data-lightbox="trinkets" data-index="7">
                                                    <div class="subsection-overlay-text">3D Toy</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/trinkets/fish.JPG" alt="3D Fish Furrybones" data-lightbox="trinkets" data-index="8">
                                                    <div class="subsection-overlay-text">3D Fish Furrybones</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR8.png" alt="Bedroom Shelf" data-lightbox="trinkets" data-index="12">
                                                    <div class="subsection-overlay-text">3D Bedroom Shelf</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR10.png" alt="Dining Area" data-lightbox="trinkets" data-index="13">
                                                    <div class="subsection-overlay-text">3D Dining Area</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/luvdrive.png" alt="Living Room & Dining Area" data-lightbox="trinkets" data-index="14">
                                                    <div class="subsection-overlay-text">3D Living Room & Dining Area</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR5.png" alt="Kitchen" data-lightbox="trinkets" data-index="10">
                                                    <div class="subsection-overlay-text">3D Kitchen</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR7.png" alt="Kitchen" data-lightbox="trinkets" data-index="11">
                                                    <div class="subsection-overlay-text">3D Kitchen</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR4.png" alt="Bedroom" data-lightbox="trinkets" data-index="15">
                                                    <div class="subsection-overlay-text">3D Bedroom</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR16.png" alt="Living Room" data-lightbox="trinkets" data-index="16">
                                                    <div class="subsection-overlay-text">3D Living Room</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/luvdrive/LDR12.png" alt="Living Room" data-lightbox="trinkets" data-index="17">
                                                    <div class="subsection-overlay-text">3D Living Room</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/sky.png" alt="3D Cityscape" data-lightbox="crashoverride" data-index="2">
                                                    <div class="subsection-overlay-text">3D Cityscape</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/buggieieie.png" alt="Player Character" data-lightbox="crashoverride" data-index="3">
                                                    <div class="subsection-overlay-text">3D Player Character</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/coNew.png" alt="Title Screen" data-lightbox="crashoverride" data-index="0">
                                                    <div class="subsection-overlay-text">3D Title Screen</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/map2.png" alt="3D City Buildings" data-lightbox="crashoverride" data-index="1">
                                                    <div class="subsection-overlay-text">3D City Buildings</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/map3.png" alt="City Buildings" data-lightbox="environment" data-index="19">   
                                                    <div class="subsection-overlay-text">3D City Buildings</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/map1.png" alt="3D City Buildings" data-lightbox="crashoverride" data-index="7">
                                                    <div class="subsection-overlay-text">3D City Buildings</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/device.png" alt="3D Device" data-lightbox="crashoverride" data-index="6">
                                                    <div class="subsection-overlay-text">3D Device</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/uiFull.png" alt="UI Design" data-lightbox="crashoverride" data-index="5">
                                                    <div class="subsection-overlay-text">3D UI Design</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/fly.png" alt="Player Character" data-lightbox="crashoverride" data-index="4">
                                                    <div class="subsection-overlay-text">3D Player Character</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/map04.png" alt="City Buildings" data-lightbox="environment" data-index="9">
                                                    <div class="subsection-overlay-text">3D City Buildings</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/C0Zero2.png" alt="Player Character" data-lightbox="environment" data-index="10">
                                                    <div class="subsection-overlay-text">3D Player Character</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/bugFLY.png" alt="Player Character" data-lightbox="environment" data-index="18">   
                                                    <div class="subsection-overlay-text">3D Player Character</div>
                                                </div>
                                                 <div class="subsection-item">
                                                    <img src="imgs/3DD/crashOverride/coinNEW.png" alt="Coin" data-lightbox="environment" data-index="20">                       
                                                    <div class="subsection-overlay-text">3D Coin</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="game-development-all">
                                    <h3>Game Development</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="game-development-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery game-dev-vertical">
                                            <div class="image-row full-width-row">
                                                <div class="subsection-item full-width-item">
                                                    <a href="https://bugswillbite.itch.io/crashoverride" target="_blank">
                                                        <img src="imgs/3DD/crashOverride/coNew.png" alt="CRASH OVERRIDE">
                                                        <div class="subsection-overlay-text">CRASH OVERRIDE</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="image-row full-width-row">
                                                <div class="subsection-item full-width-item">
                                                    <a href="https://bugswillbite.itch.io/luvdrive" target="_blank">
                                                        <img src="imgs/3DD/luvdrive/LDR12.png" alt="LUVDRIVE">
                                                        <div class="subsection-overlay-text">LUVDRIVE</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="image-row full-width-row">
                                                <div class="subsection-item full-width-item">
                                                    <a href="https://bugswillbite.itch.io/mysa" target="_blank">
                                                        <img src="imgs/webDesign/MYSA/M1.png" alt="MYSA">
                                                        <div class="subsection-overlay-text">MYSA</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="image-row full-width-row">
                                                <div class="subsection-item full-width-item">
                                                    <a href="https://bugswillbite.itch.io/decorate-my-room" target="_blank">
                                                        <img src="imgs/cover2.png" alt="Decorate My Room!">
                                                        <div class="subsection-overlay-text">Decorate My Room!</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="physical-media-all">
                                    <h3>Painting</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="physical-media-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Brother in Thought 2020 copy 2.JPEG" alt="Brothers in Thought [2020, Acrylic on Wood]" data-lightbox="painting" data-index="0">
                                                    <div class="subsection-overlay-text">Brothers in Thought, 2020</div>
                                                </div>
                                            </div>    
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/CW2.png" alt="Cave Woman [2021, Oil on Canvas]" data-lightbox="painting" data-index="1">
                                                    <div class="subsection-overlay-text">Cave Woman, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/face copy.jpg" alt="Face [2024, Acrylic on Paper]" data-lightbox="painting" data-index="2">
                                                    <div class="subsection-overlay-text">Face, 2024</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Hand Head Baby 2021.jpg" alt="Hand Head Baby [2021, Acrylic on Paper]" data-lightbox="painting" data-index="3">
                                                    <div class="subsection-overlay-text">Hand Head Baby, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Melora 2020 copy.jpg" alt="Melora [2020, Oil on Canvas]" data-lightbox="painting" data-index="4">
                                                    <div class="subsection-overlay-text">Melora, 2020</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/duckIcon.jpg" alt="Duck [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="5">
                                                    <div class="subsection-overlay-text">Duck, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/PFCL.jpg" alt="Untitled [2023]" data-lightbox="painting" data-index="6">
                                                    <div class="subsection-overlay-text">Untitled, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/figure1 2023 copy.jpg" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="7">
                                                    <div class="subsection-overlay-text">Figure, 2023</div>
                                                </div>
                                            </div>
                                            <div class="image-row">    
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/figure 2023 copy.jpg" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="8">
                                                    <div class="subsection-overlay-text">Figure, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Holding Head Hands 2021.jpg" alt="Holding Head Hands [2021, Acrylic on Paper]" data-lightbox="painting" data-index="9">
                                                    <div class="subsection-overlay-text">Holding Head Hands, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Head Hold 2021.jpeg" alt="Untitled [2021, Acrylic on Canvas]" data-lightbox="painting" data-index="10">
                                                    <div class="subsection-overlay-text">Head Hold, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/yawn.png" alt="Yawn [2021, Acrylic on Paper]" data-lightbox="painting" data-index="11">
                                                    <div class="subsection-overlay-text">Yawn, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/summer face 2023 copy.jpg" alt="Summer Face [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="12">   
                                                    <div class="subsection-overlay-text">Summer Face, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Skull 2022 copy2.png" alt="Skull [2022, Oil on Canvas]" data-lightbox="painting" data-index="13">
                                                    <div class="subsection-overlay-text">Skull, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/blue.jpg" alt="The Blue Woman [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="14">
                                                    <div class="subsection-overlay-text">The Blue Woman, 2020</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Self Portrait 2019 copy.jpg" alt="Self Portrait [2019, Acrylic on Wood]" data-lightbox="painting" data-index="15">
                                                    <div class="subsection-overlay-text">Self Portrait, 2019</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/figure2 2023 copy.JPG" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="16">                           
                                                    <div class="subsection-overlay-text">Figure, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/figure3 2023 copy.JPG" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="17">
                                                    <div class="subsection-overlay-text">Figure, 2023</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/momMain.png" alt="Mom [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="18">
                                                    <div class="subsection-overlay-text">Mom, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/screamBoy copy.png" alt="Scream Boy [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="19">
                                                    <div class="subsection-overlay-text">Scream Boy, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/face.jpeg" alt="Face [2023, Acrylic on Paper]" data-lightbox="painting" data-index="20">
                                                    <div class="subsection-overlay-text">Face, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Untitled 2021.jpg" alt="Untitled [2021, Acrylic on Paper]" data-lightbox="painting" data-index="21">
                                                    <div class="subsection-overlay-text">Untitled, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/Tallulah.jpg" alt="Tallulah [2020, Acrylic on Wood]" data-lightbox="painting" data-index="22">
                                                    <div class="subsection-overlay-text">Tallulah, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/meltingMan.jpg" alt="Melting Man [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="23">
                                                    <div class="subsection-overlay-text">Melting Man, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/smile.jpeg" alt="Smile [2023, Acrylic on Paper]" data-lightbox="painting" data-index="24">
                                                    <div class="subsection-overlay-text">Smile, 2023</div>
                                                </div>
                                            </div>    
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/tori.png" alt="Tori [2021, Oil on Canvas]" data-lightbox="painting" data-index="25">
                                                    <div class="subsection-overlay-text">Tori, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/squishyMain copy.png" alt="Untitled [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="26">
                                                    <div class="subsection-overlay-text">Untitled, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/maxBday.png" alt="Happy Birthday Max [2022, Acrylic on Paper]" data-lightbox="painting" data-index="27">    
                                                    <div class="subsection-overlay-text">Happy Birthday Max, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/body1.png" alt="Untitled [2021, Acrylic on Canvas]" data-lightbox="painting" data-index="28">
                                                    <div class="subsection-overlay-text">Untitled, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/edwardCRT.jpeg" alt="Edward Scizzorhands [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="29">    
                                                    <div class="subsection-overlay-text">Edward Scizzorhands, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/chameleon.jpg" alt="Chameleon [2023, Acrylic on Paper]" data-lightbox="painting" data-index="30">    
                                                    <div class="subsection-overlay-text">Chameleon, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/roach.jpg" alt="Cockroach [2023, Acrylic on Paper]" data-lightbox="painting" data-index="31">    
                                                    <div class="subsection-overlay-text">Cockroach, 2023</div>
                                                </div>
                                            </div> 
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/scream.jpeg" alt="Scream [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="32">    
                                                    <div class="subsection-overlay-text">Scream, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/flowers.jpg" alt="Flowers [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="33">
                                                    <div class="subsection-overlay-text">Flowers, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/bjork.jpg" alt="Bjork [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="34">    
                                                    <div class="subsection-overlay-text">Bjork, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/body.jpg" alt="Body [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="35">
                                                    <div class="subsection-overlay-text">Body, 2023</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/cat.jpeg" alt="Cat [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="36">    
                                                    <div class="subsection-overlay-text">Cat, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/snail.jpg" alt="Snail [2023, Acrylic on Paper]" data-lightbox="painting" data-index="37">    
                                                    <div class="subsection-overlay-text">Snail, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/self2023.jpg" alt="Self Portrait [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="38">    
                                                    <div class="subsection-overlay-text">Self Portrait, 2023</div>
                                                </div>
                                            </div> 
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/orange.jpg" alt="Orange Man [2020, Oil on Canvas]" data-lightbox="painting" data-index="39">    
                                                    <div class="subsection-overlay-text">Orange Man, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/clady.jpg" alt="Clady [2023, Acrylic and Clay on Canvas]" data-lightbox="painting" data-index="40">
                                                    <div class="subsection-overlay-text">Clady, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/eyeLik.jpg" alt="Eye Lick [2021, Acrylic on Paper]" data-lightbox="painting" data-index="41">    
                                                    <div class="subsection-overlay-text">Eye Lick, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/painting/red.jpg" alt="Untitled [2023, Spray Paint on Paper]" data-lightbox="painting" data-index="42">
                                                    <div class="subsection-overlay-text">Untitled, 2023</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="sculpture-all">
                                    <h3>Sculpture</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="sculpture-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery threed-horiz">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/lamp.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="0">
                                                    <div class="subsection-overlay-text">Lamp, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/LAMP2.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="1">
                                                    <div class="subsection-overlay-text">Lamp, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/LAMP5.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="2">
                                                    <div class="subsection-overlay-text">Lamp, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/LAMP3.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="3">
                                                    <div class="subsection-overlay-text">Lamp, 2020</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/Bunny Worm 2021 copy.jpg" alt="Bunny Worm [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="4">
                                                    <div class="subsection-overlay-text">Bunny Worm, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/bunny2.jpg" alt="Bunny Worm [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="5">
                                                    <div class="subsection-overlay-text">Bunny Worm, 2022</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/C1one.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="6">
                                                    <div class="subsection-overlay-text">Monster 01, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/C1two.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="7">
                                                    <div class="subsection-overlay-text">Monster 01, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/C2one.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="8">
                                                    <div class="subsection-overlay-text">Monster 02, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/C2two.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="9">
                                                    <div class="subsection-overlay-text">Monster 02, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/C2three.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="10">
                                                    <div class="subsection-overlay-text">Monster 02, 2022</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/Tetsuo 1 2021.jpg" alt="Tetsuo [2021, Found Object Kinetic Sculpture]" data-lightbox="sculpture" data-index="11">
                                                    <div class="subsection-overlay-text">Tetsuo, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/Tetsuo 2 2021.png" alt="Tetsuo [2021, Found Object Kinetic Sculpture]" data-lightbox="sculpture" data-index="12">
                                                    <div class="subsection-overlay-text">Tetsuo, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/VGG1.jpg" alt="Vomit Gore Guy [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="13">
                                                    <div class="subsection-overlay-text">Vomit Gore Guy, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/Vomit Gore Guy 2 2021.jpg" alt="Vomit Gore Guy 2 [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="14">
                                                    <div class="subsection-overlay-text">Vomit Gore Guy 2, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/3dEYE1.jpeg" alt="3D Eye Man [2020, Clay & Found Object Sculpture]" data-lightbox="sculpture" data-index="15">
                                                    <div class="subsection-overlay-text">3D Eye Man, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/3dEYE2.jpeg" alt="3D Eye Man [2020, Clay & Found Object Sculpture]" data-lightbox="sculpture" data-index="16">
                                                    <div class="subsection-overlay-text">3D Eye Man, 2020</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/fabricLady1.jpg" alt="Fabric Lady [2022, Fabric Sculpture]" data-lightbox="sculpture" data-index="17">
                                                    <div class="subsection-overlay-text">Fabric Lady, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/fabricLady2.jpg" alt="Fabric Lady [2022, Fabric Sculpture]" data-lightbox="sculpture" data-index="18">
                                                    <div class="subsection-overlay-text">Fabric Lady, 2022</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/BH2.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="19">
                                                    <div class="subsection-overlay-text">Bella Haus, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/BH1.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="20">
                                                    <div class="subsection-overlay-text">Bella Haus, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/BH3.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="21">
                                                    <div class="subsection-overlay-text">Bella Haus, 2023</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/TRY1.jpg" alt="Trypophobia [2021, Latex Sculpture]" data-lightbox="sculpture" data-index="22">
                                                    <div class="subsection-overlay-text">Trypophobia, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/TRY2.jpg" alt="Trypophobia [2021, Latex Sculpture]" data-lightbox="sculpture" data-index="23">
                                                    <div class="subsection-overlay-text">Trypophobia, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/BABYicon.jpg" alt="Siamese Baby [2021, 3D Print]" data-lightbox="sculpture" data-index="24">
                                                    <div class="subsection-overlay-text">Siamese Baby, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/rock.jpg" alt="Unfinished, Untitled [2022, Rock Chisel]" data-lightbox="sculpture" data-index="25">
                                                    <div class="subsection-overlay-text">Unfinished, Untitled, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/wireHead.jpg" alt="WireHead [2021, Wire & Aluminum Sculpture]" data-lightbox="sculpture" data-index="26">
                                                    <div class="subsection-overlay-text">WireHead, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/pillow.jpg" alt="Intestinal Pillow [2022, Fabric & Yarn Sculpture]" data-lightbox="sculpture" data-index="27">
                                                    <div class="subsection-overlay-text">Intestinal Pillow, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/Sleeper 2021.jpg" alt="Sleeper [2021, Clay Sculpture]" data-lightbox="sculpture" data-index="28">
                                                    <div class="subsection-overlay-text">Sleeper, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/sculpt/Smoker 2021.jpg" alt="Smoker [2021, Clay Sculpture]" data-lightbox="sculpture" data-index="29">
                                                    <div class="subsection-overlay-text">Smoker, 2021</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-folder">
                                <div class="folder-tab" data-folder="drawing-all">
                                    <h3>Drawing</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="drawing-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery threed-horiz">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/bella - ink 200101-3.png" alt="Stipling Snail [2018, Ink]" data-lightbox="drawing" data-index="0">
                                                    <div class="subsection-overlay-text">Stipling Snail, 2018</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/mom.jpg" alt="Mom [2023, Ink]" data-lightbox="drawing" data-index="1">
                                                    <div class="subsection-overlay-text">Mom, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/rats.jpeg" alt="Rats [2023, Ink]" data-lightbox="drawing" data-index="2">
                                                    <div class="subsection-overlay-text">Rats, 2023</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/punk.jpg" alt="Punk Girl [2022, Ink & Marker]" data-lightbox="drawing" data-index="3">
                                                    <div class="subsection-overlay-text">Punk Girl, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/stand.jpeg" alt="Stand [2023, Ink]" data-lightbox="drawing" data-index="4">
                                                    <div class="subsection-overlay-text">Stand, 2023</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/whome.jpeg" alt="Who Me? [2022, Ink & Marker]" data-lightbox="drawing" data-index="5">
                                                    <div class="subsection-overlay-text">Who Me?, 2022</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/kiss2.jpeg" alt="Kiss [2024, Ink]" data-lightbox="drawing" data-index="6">
                                                    <div class="subsection-overlay-text">Kiss, 2024</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/2manblue2019.png" alt="Two Man Blue [2019, Ink & Marker]" data-lightbox="drawing" data-index="7">
                                                    <div class="subsection-overlay-text">Two Man Blue, 2019</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/2019fish.png" alt="Fish House [2019, Ink & Marker]" data-lightbox="drawing" data-index="8">
                                                    <div class="subsection-overlay-text">Fish House, 2019</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/2019heart.png" alt="Heart Man [2019, Ink]" data-lightbox="drawing" data-index="9">
                                                    <div class="subsection-overlay-text">Heart Man, 2019</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/space woman 2020 copy.jpeg" alt="Space Woman [2020, Pastel on Wood]" data-lightbox="drawing" data-index="10">
                                                    <div class="subsection-overlay-text">Space Woman, 2020</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/drawing/greenPastel2.png" alt="Alien Smoker [2020, Pastel and Acrylic on Cardboard]" data-lightbox="drawing" data-index="11">
                                                    <div class="subsection-overlay-text">Alien Smoker, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="file-folder">
                                <div class="folder-tab" data-folder="screenprints-all">
                                    <h3>Screen Printing & More</h3>
                                    <span class="folder-icon">+</span>
                                </div>
                                <div class="folder-content" id="screenprints-all-folder">
                                    <div class="folder-inner">
                                        <div class="image-gallery subsection-gallery threed-horiz">
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/screenPrint/ScreenPrint1.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="12">
                                                    <div class="subsection-overlay-text">LEGS, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/screenPrint/ScreenPrint2.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="13">
                                                    <div class="subsection-overlay-text">LEGS, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/screenPrint/ScreenPrint3.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="14">
                                                    <div class="subsection-overlay-text">LEGS, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/screenPrint/ScreenPrint4.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="15">
                                                    <div class="subsection-overlay-text">LEGS, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/screenPrint/ScreenPrint6.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="16">
                                                    <div class="subsection-overlay-text">LEGS, 2021</div>
                                                </div>
                                            </div>
                                            <div class="image-row">
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/screenPrint/ScreenPrint5.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="17">
                                                    <div class="subsection-overlay-text">LEGS, 2021</div>
                                                </div>
                                                <div class="subsection-item">
                                                    <img src="imgs/physical/laser.png" alt="Amoeba Love-Making [2021, Laser Cut]" data-lightbox="drawing" data-index="18">
                                                    <div class="subsection-overlay-text">Amoeba Love-Making, 2021, Laser Cut</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        'web-design': {
            type: 'text',
            content: `
                <div class="text-content" id="web-design-content">
                    <div class="text-box">
                        <h2>Web Design</h2>
                        <p>Creating responsive, user-friendly websites and web applications with modern technologies and design principles.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery subsection-gallery">
                            <div class="image-row">
                                <div class="subsection-item">
                                    <a href="https://binaryswag.club" target="_blank">
                                        <img src="imgs/webDesign/cs.png" alt="Source Code Vintage">
                                        <div class="subsection-overlay-text">Source Code Vintage</div>
                                    </a>
                                </div>
                                <div class="subsection-item">
                                    <a href="https://bugswillbite.github.io/bugChess" target="_blank">
                                        <img src="imgs/3DD/bugchessIMG/web.png" alt="BugChess">
                                        <div class="subsection-overlay-text">Bug Chess</div>
                                    </a>
                                </div>
                                <div class="subsection-item">
                                    <a href="https://bugswillbite.github.io/PodowskiDotNet/html/webDesign.html" target="_blank">
                                        <img src="imgs/webDesign/wd.png" alt="Web Design">
                                        <div class="subsection-overlay-text">Web Design Portfolio</div>
                                    </a>
                                </div>
                            </div>
                            <div class="image-row">
                                <div class="subsection-item">
                                    <a href="https://bugswillbite.github.io/PodowskiDotNet/html/desktop.html" target="_blank">
                                        <img src="imgs/webDesign/DESKTOP/desktop.PNG" alt="Desktop">
                                        <div class="subsection-overlay-text">Desktop UI</div>
                                    </a>
                                </div>
                                <div class="subsection-item">
                                    <a href="https://bugswillbite.github.io/rUsmart/" target="_blank">
                                        <img src="imgs/webDesign/RUSMART/RUS1.png" alt="R U Smart?">
                                        <div class="subsection-overlay-text">R U Smart?</div>
                                    </a>
                                </div>
                                <div class="subsection-item">
                                    <a href="https://bugswillbite.github.io/garfield/" target="_blank">
                                        <img src="imgs/webDesign/GARFIELD/G1.PNG" alt="Garfield">
                                        <div class="subsection-overlay-text">Garfield</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Responsive Design</li>
                            <li>UI/UX Principles</li>
                            <li>Version Control (Git)</li>
                            <li>Cross-Browser Compatibility</li>
                        </ul>
                        
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
                        <p>Professional video editing and post-production work including appropriation, music videos, and motion graphics.</p>
                        
                        <h3>Featured Projects</h3>
                        <div class="image-gallery">
                            <div class="image-row">

                        <div class="medium-item" data-medium="web-design">
                            <a href="https://www.youtube.com/watch?v=XlLQM25D5hY" target="_blank">
                            <video src="vids/operelly copy.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/operelly copy.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Operelly Visualizer</div>
                        </a>
                        </div>

                        <div class="medium-item" data-medium="video-editing">
                            <a href="https://youtu.be/z2rGIHWx1rk?si=xJZjS0ImOUtddZWo" target="_blank">
                            <video src="vids/cwr.mp4" autoplay muted loop  webkit-playsinline playsinline>
                                <source src="vids/cwr.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Cyber Worship Reality</div></a>
                        </div>

                        <div class="medium-item" data-medium="graphic-design">
                                <a href="https://www.youtube.com/watch?v=4Jkb0T4Lob8" target="_blank">
                                <video src="vids/videoBG.mp4" autoplay muted loop  webkit-playsinline playsinline>
                                <source src="vids/videoBG.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>              <div class="overlay-text">Unpacking.mp4</div></a>
                        </div>
                    </div>

                    <div class="image-row">
                        <div class="medium-item" data-medium="3d-modelling">
                                <a href="https://www.youtube.com/watch?v=7plpl-A4gyM" target="_blank">
                                <video src="vids/dbab.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/dbab.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Don't Be A Body</div></a>
                        </div>
                        
                        <div class="medium-item" data-medium="game-development">
                                <a href="https://www.youtube.com/watch?v=xanWbQJceKY&t=5s" target="_blank">
                                <video src="vids/trinkets.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/trinkets.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Trinkets</div></a>
                        </div>

                        <div class="medium-item" data-medium="physical-media">
                                <a href="https://www.youtube.com/watch?v=LqJsh73PkoY" target="_blank">
                            <video src="vids/blip.mp4" autoplay muted loop webkit-playsinline playsinline>
                                <source src="vids/blip.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="overlay-text">Blip.mp4</div></a>
                        </div>
                    </div>
                        </div>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Premiere Pro, After Effects</li>
                            <li>Appropriation</li>
                            <li>Motion Graphics</li>
                            <li>Sound Design & Balance</li>
                            <li>Video Encoding & Export</li>
                            <li>Live Performance & Mixing</li>
                        </ul>
                        
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
                        <div class="image-gallery subsection-gallery lightbox-gallery">
                            <div class="image-row">
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/towheadFish.png" alt="Towhead Poster Design" data-lightbox="graphic-design" data-index="0" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/ZeroCool copy.jpg" alt="Zero Cool Album Cover" data-lightbox="graphic-design" data-index="1" data-external-link="https://theprophitt.bandcamp.com/album/zero-cool">
                                    <div class="subsection-overlay-text">Prophitt Album Cover</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/front-bizcard copy.png" alt="Source Code Vintage Business Card" data-lightbox="graphic-design" data-index="2" data-external-link="https://binaryswag.club/#contact">
                                    <div class="subsection-overlay-text">Source Code Vintage Business Card</div>
                                </div>
                            </div>
                            <div class="image-row">
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/proph.png" alt="Prophitt Poster Design" data-lightbox="graphic-design" data-index="3">
                                    <div class="subsection-overlay-text">Prophitt Promo Poster</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/scc.png" alt="Source Code Camera" data-lightbox="graphic-design" data-index="4">
                                    <div class="subsection-overlay-text">Source Code Camera</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/towhead hands.png" alt="Towhead Poster Design - Hands" data-lightbox="graphic-design" data-index="5" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                </div>
                            </div>
                            <div class="image-row">
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/towhead.png" alt="Towhead Poster Design - Zendeya" data-lightbox="graphic-design" data-index="6" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/towhead mouth.PNG" alt="Towhead Poster Design - Mouth" data-lightbox="graphic-design" data-index="7" data-external-link="https://www.instagram.com/p/C9K5p_CODT3">
                                    <div class="subsection-overlay-text">Towhead Poster Design</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/ipod.png" alt="Devin. Schubas iPod Poster" data-lightbox="graphic-design" data-index="8">
                                    <div class="subsection-overlay-text">Devin. Schubas iPod Poster</div>
                                </div>
                            </div>
                            <h3>SWEA San Francisco Design 2025</h3>
                            <div class="image-row"> 
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/xmas2025.png" alt="SWEA Christmas Fair Flyer" data-lightbox="graphic-design" data-index="9" data-external-link="https://binaryswag.club/#contact">
                                    <div class="subsection-overlay-text">SWEA Christmas Fair Flyer</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/header.png" alt="SWEA Christmas Fair Header" data-lightbox="graphic-design" data-index="10" data-external-link="https://binaryswag.club/#contact">
                                    <div class="subsection-overlay-text">SWEA Christmas Fair Header</div>
                                </div>
                                <div class="subsection-item">
                                    <img src="imgs/graphicdesign/logo.JPG" alt="SWEA Fair logo" data-lightbox="graphic-design" data-index="11" data-external-link="https://binaryswag.club/#contact">
                                    <div class="subsection-overlay-text">SWEA Fair Logo</div>
                                </div>
                            </div>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Adobe Photoshop, Illustrator, InDesign</li>
                            <li>Typography</li>
                            <li>Branding & Identity</li>
                            <li>Layout Design</li>
                            <li>Print & Digital Media</li>
                        </ul>
                        
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
                        <div class="image-gallery subsection-gallery threed-horiz">
                            <div class="image-row">
                                <div class="subsection-item" data-project="3d-cat">
                                    <img src="imgs/3DD/trinkets/pillar.JPG" alt="Luvdrive Models">
                                    <div class="subsection-overlay-text">Luvdrive Models</div>
                                </div>
                                <div class="subsection-item" data-project="3d-alien">
                                    <img src="imgs/3DD/crashoverride/coNEW.png" alt="Crash Override Models">
                                    <div class="subsection-overlay-text">Crash Override Models</div>
                                </div>
                                <div class="subsection-item " data-project="3d-zero-cool">
                                    <img src="imgs/3DD/wiiDog copy 2.png" alt="Misc 3D">
                                    <div class="subsection-overlay-text">Misc</div>
                                </div>
                            </div>
                            <div class="image-row">
                                <div class="subsection-item " data-project="3d-environment">
                                    <img src="imgs/3DD/moonstruck/MS4.2.png" alt="Show All">
                                    <div class="subsection-overlay-text">Show All</div>
                                </div>
                            </div>
                        </div>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Blender, Maya</li>
                            <li>UV Mapping</li>
                            <li>Texturing & Shading</li>
                            <li>Lighting & Rendering</li>
                            <li>Animation</li>
                        </ul>
                        
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        '3d-cat': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-cat-content">
                    <div class="text-box">
                        <h2>Trinket.obj [2023]</h2>
                        <p>These models were created for <a href="https://bugswillbite.itch.io/luvdrive" target="_blank">LuvDrive</a> as items of collection. Modelled in Womp and shaded using Blender, these objects represent items I own or have previously owned. <a href="https://docs.google.com/document/d/1JljTyCSyppwuBlQTxVM2jRBT8yU3wBSJVYGJdypkN8A/edit?usp=sharing" &nbsp; target="_blank">[more]</a></p>
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Software: Womp, Blender</li>
                            <li>Techniques: UV Mapping, Exporting</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery trinkets-gallery lightbox-gallery">
                            <h4 class="title4gallery">LuvDrive: Trinket.obj</h4>
                            <div class="image-row">
                                <img src="imgs/3DD/trinkets/pillar.JPG" alt="3D Caterpillar Furrybones" data-lightbox="trinkets" data-index="0">
                                <img src="imgs/3DD/trinkets/monkee.JPG" alt="3D Monkey Keychain" data-lightbox="trinkets" data-index="1">
                                <img src="imgs/3DD/trinkets/hex.JPG" alt="3D Hexbug" data-lightbox="trinkets" data-index="2">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/trinkets/fly1.JPG" alt="3D Dragonfly Furrybones" data-lightbox="trinkets" data-index="3">
                                <img src="imgs/3DD/trinkets/idog.JPG" alt="3D iDog" data-lightbox="trinkets" data-index="4">
                                <img src="imgs/3DD/trinkets/peng.JPG" alt="3D Penguin Furrybones" data-lightbox="trinkets" data-index="5">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/trinkets/balloonDog.JPG" alt="3D Balloon Dog" data-lightbox="trinkets" data-index="6">
                                <img src="imgs/3DD/trinkets/bro.JPG" alt="3D Toy" data-lightbox="trinkets" data-index="7">
                                <img src="imgs/3DD/trinkets/fish.JPG" alt="3D Fish Furrybones" data-lightbox="trinkets" data-index="8">
                            </div>

                            <h4 class="title4gallery">LuvDrive: Scenes</h4>
                            <div class="image-row">
                                <img src="imgs/3DD/luvdrive/LDR1.png" alt="Living Room" data-lightbox="trinkets" data-index="9">
                                <img src="imgs/3DD/luvdrive/LDR5.png" alt="Kitchen" data-lightbox="trinkets" data-index="10">
                                <img src="imgs/3DD/luvdrive/LDR7.png" alt="Kitchen" data-lightbox="trinkets" data-index="11">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/luvdrive/LDR8.png" alt="Bedroom Shelf" data-lightbox="trinkets" data-index="12">
                                <img src="imgs/3DD/luvdrive/LDR10.png" alt="Dining Area" data-lightbox="trinkets" data-index="13">
                                <img src="imgs/3DD/luvdrive/luvdrive.png" alt="Living Room & Dining Area" data-lightbox="trinkets" data-index="14">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/luvdrive/LDR4.png" alt="Bedroom" data-lightbox="trinkets" data-index="15">
                                <img src="imgs/3DD/luvdrive/LDR16.png" alt="Living Room" data-lightbox="trinkets" data-index="16">
                                <img src="imgs/3DD/luvdrive/LDR12.png" alt="Living Room" data-lightbox="trinkets" data-index="17">
                            </div>

                        </div>
                        <button class="back-btn">← Back to 3D Modelling</button>
                    </div>
                </div>
            `
        },
        '3d-alien': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-alien-content">
                    <div class="text-box">
                        <h2>Crash Override [2024]</h2>
                        <p>These stills are from <a href="https://bugswillbite.itch.io/crashoverride" target="_blank">Crash Override</a>, a 3D skater game I developed and modelled independently. All assets were created with Maya and shaded in Unity.&nbsp;<a href="https://docs.google.com/document/d/1Dyb2p3qXHfS829PODMOdV03qSmf4ULpA07UPtTw4vDc/edit?usp=sharing" target="_blank">[more]</a></p>

                        <h3>Top Skills</h3>
                        <ul>
                            <li>Software: Maya, Unity, Blender</li>
                            <li>Techniques: Modeling, Compression & Optimization, Animation</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery lightbox-gallery">
                            <div class="image-row">
                                <img src="imgs/3DD/crashOverride/coNew.png" alt="Title Screen" data-lightbox="crashoverride" data-index="0">
                                <img src="imgs/3DD/crashOverride/map2.png" alt="3D City Buildings" data-lightbox="crashoverride" data-index="1">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/crashOverride/sky.png" alt="3D Cityscape" data-lightbox="crashoverride" data-index="2">
                                <img src="imgs/3DD/crashOverride/buggieieie.png" alt="Player Character" data-lightbox="crashoverride" data-index="3">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/crashOverride/fly.png" alt="Player Character" data-lightbox="crashoverride" data-index="4">                           
                                <img src="imgs/3DD/crashOverride/uiFull.png" alt="UI Design" data-lightbox="crashoverride" data-index="5">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/crashOverride/device.png" alt="3D Device" data-lightbox="crashoverride" data-index="6">                           
                                <img src="imgs/3DD/crashOverride/map1.png" alt="3D City Buildings" data-lightbox="crashoverride" data-index="7">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to 3D Modelling</button>
                    </div>
                </div>
            `
        },
        '3d-environment': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-environment-content">
                    <div class="text-box">
                        <h2>3D Modelling work</h2>
                        <p>This is an archive of both personal work and commissioned pieces.</p>

                        <h3>Top Skills</h3>
                        <ul>
                            <li>Software: Maya, Blender, Womp</li>
                            <li>Techniques: Environment modeling, lighting, atmospheric effects</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery image-gallery1 lightbox-gallery lightbox-gallery1">
                            <a href="#3d-cat"><h4 class="title4gallery">LuvDrive: Trinket.obj [2023]</h4></a>
                            <div class="image-row square-row">
                                <img src="imgs/3DD/trinkets/pillar.JPG" alt="3D Caterpillar Furrybones" data-lightbox="environment" data-index="0">
                                <img src="imgs/3DD/trinkets/monkee.JPG" alt="3D Monkey Keychain" data-lightbox="environment" data-index="1">
                                <img src="imgs/3DD/trinkets/hex.JPG" alt="3D Hexbug" data-lightbox="environment" data-index="2">
                                <img src="imgs/3DD/trinkets/fly1.JPG" alt="3D Dragonfly Furrybones" data-lightbox="environment" data-index="3">
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/3DD/trinkets/idog.JPG" alt="3D iDog" data-lightbox="environment" data-index="4">
                                <img src="imgs/3DD/trinkets/peng.JPG" alt="3D Penguin Furrybones" data-lightbox="environment" data-index="5">
                                <img src="imgs/3DD/trinkets/fish.JPG" alt="3D Fish Furrybones" data-lightbox="environment" data-index="6">
                                <img src="imgs/3DD/trinkets/bro.JPG" alt="3D Toy" data-lightbox="environment" data-index="7">
                            </div>

                            <a href="#3d-alien"><h4 class="title4gallery">CrashOverride [2024]</h4></a>
                            <div class="image-row ">
                                <img src="imgs/3DD/crashOverride/uiFull.png" alt="UI Design" data-lightbox="environment" data-index="8">
                                <img src="imgs/3DD/crashOverride/map04.png" alt="City Buildings" data-lightbox="environment" data-index="9">
                                <img src="imgs/3DD/crashOverride/C0Zero2.png" alt="Player Character" data-lightbox="environment" data-index="10">                          
                            </div>    
                            <div class="image-row">
                                <img src="imgs/3DD/crashOverride/coNew.png" alt="Title Screen" data-lightbox="environment" data-index="11">
                                <img src="imgs/3DD/crashOverride/map2.png" alt="3D City Buildings" data-lightbox="environment" data-index="12">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/crashOverride/buggieieie.png" alt="Player Character" data-lightbox="environment" data-index="13">
                                <img src="imgs/3DD/crashOverride/sky.png" alt="Cityscape" data-lightbox="environment" data-index="14">
                                <img src="imgs/3DD/crashOverride/fly.png" alt="Player Character" data-lightbox="environment" data-index="15">                           
                            </div>
                        <div class="image-row">
                                <img src="imgs/3DD/crashOverride/map1.png" alt="City Buildings" data-lightbox="environment" data-index="16">
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/3DD/crashOverride/device.png" alt="Device" data-lightbox="environment" data-index="17">
                                <img src="imgs/3DD/crashOverride/bugFLY.png" alt="Player Character" data-lightbox="environment" data-index="18">   
                                <img src="imgs/3DD/crashOverride/map3.png" alt="City Buildings" data-lightbox="environment" data-index="19">   
                                <img src="imgs/3DD/crashOverride/coinNEW.png" alt="Coin" data-lightbox="environment" data-index="20">                       
                             </div>

                             <a href="#3d-cat"><h4 class="title4gallery">LuvDrive: Scenes [2023]</h4></a>
                            <div class="image-row">
                                <img src="imgs/3DD/luvdrive/LDR1.png" alt="Living Room" data-lightbox="environment" data-index="21">
                                <img src="imgs/3DD/luvdrive/LDR5.png" alt="Kitchen" data-lightbox="environment" data-index="22">
                            </div>
                            <div class="image-row square-row">   
                                <img src="imgs/3DD/luvdrive/LDR7.png" alt="Kitchen" data-lightbox="environment" data-index="23">
                                <img src="imgs/3DD/luvdrive/LDR8.png" alt="Bedroom Shelf" data-lightbox="environment" data-index="24">
                                <img src="imgs/3DD/luvdrive/LDR10.png" alt="Dining Area" data-lightbox="environment" data-index="25">
                                <img src="imgs/3DD/luvdrive/luvdrive.png" alt="Living Room & Dining Area" data-lightbox="environment" data-index="26">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/luvdrive/LDR4.png" alt="Bedroom" data-lightbox="environment" data-index="27">
                                <img src="imgs/3DD/luvdrive/LDR16.png" alt="Living Room" data-lightbox="environment" data-index="28">
                                <img src="imgs/3DD/luvdrive/LDR12.png" alt="Living Room" data-lightbox="environment" data-index="29">
                            </div>

                             <a href="#3d-alien"><h4 class="title4gallery">Moonstruck [2024]</h4></a>
                            <div class="image-row">
                                <img src="imgs/3DD/moonstruck/moon.png" alt="Moonstruck Cover" data-lightbox="environment" data-index="30">
                                <img src="imgs/3DD/moonstruck/MS3.png" alt="Moonstruck Scene" data-lightbox="environment" data-index="31">
                            </div>
                            <div class="image-row">   
                                <img src="imgs/3DD/moonstruck/MS4.png" alt="Moonstruck Scene" data-lightbox="environment" data-index="32">
                                <img src="imgs/3DD/moonstruck/MS2.png" alt="Moonstruck Scene" data-lightbox="environment" data-index="33">
                            </div>

                             <a href="#3d-alien"><h4 class="title4gallery">Miscellaneous [2023-2025]</h4></a>
                             
                             <div class="image-row square-row">
                                <img src="imgs/3DD/guy copy.png" alt="3D Xbox Avatar" data-lightbox="environment" data-index="34">
                                <img src="imgs/3DD/3dCAT copy.png" alt="3D Cat" data-lightbox="environment" data-index="35">
                                <img src="imgs/3DD/wiiDog copy 2.png" alt="3D Wii Dog" data-lightbox="environment" data-index="36">
                                <img src="imgs/3DD/alien3d copy.png" alt="3D Alien" data-lightbox="environment" data-index="37">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/DESKTOP.png" alt="3D Desktop" data-lightbox="environment" data-index="38">
                                <img src="imgs/3DD/womansit copy 2.png" alt="3D Woman Sitting" data-lightbox="environment" data-index="39">
                                <img src="imgs/3DD/souljaBoy copy.png" alt="3D SouljaBoy" data-lightbox="environment" data-index="40">
                            </div>

                        </div>
                        
                        <button class="back-btn">← Back to 3D Modelling</button>
                    </div>
                </div>
            `
        },
        '3d-caterpillar': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-caterpillar-content">
                </div>
            `
        },
        '3d-zero-cool': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-zero-cool-content">
                    <div class="text-box">
                        <h2>Miscellaneous 3D</h2>
                        <p>This is an archive of both personal work and commissioned pieces.</p>
                        
                        <h3>Project Details</h3>
                        <ul>
                            <li>Software: Maya, Blender, Womp</li>
                            <li>Techniques: Environment modeling, lighting, atmospheric effects</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery trinkets-gallery lightbox-gallery">
                            <div class="image-row">
                                <img src="imgs/3DD/3dCAT copy.png" alt="3D Cat" data-lightbox="misc3d" data-index="0">
                                <img src="imgs/3DD/wiiDog copy 2.png" alt="3D Wii Dog" data-lightbox="misc3d" data-index="1">
                                <img src="imgs/3DD/alien3d copy.png" alt="3D Alien" data-lightbox="misc3d" data-index="2">
                            </div>
                            <div class="image-row">
                                <img src="imgs/3DD/DESKTOP.png" alt="3D Desktop" data-lightbox="misc3d" data-index="3">
                                <img src="imgs/3DD/guy copy.png" alt="3D Xbox Avatar" data-lightbox="misc3d" data-index="4">
                                <img src="imgs/3DD/womansit copy 2.png" alt="3D Woman Sitting" data-lightbox="misc3d" data-index="5">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to 3D Modelling</button>
                    </div>
                </div>
            `
        },
        '3d-eye': {
            type: 'text',
            content: `
                <div class="text-content" id="3d-eye-content">
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
                        <div class="image-gallery subsection-gallery game-dev-vertical">
                            <div class="image-row full-width-row">
                                <div class="subsection-item full-width-item">
                                    <a href="https://bugswillbite.itch.io/crashoverride" target="_blank">
                                        <img src="imgs/3DD/crashOverride/coNew.png" alt="CRASH OVERRIDE">
                                        <div class="subsection-overlay-text">CRASH OVERRIDE</div>
                                    </a>
                                </div>
                            </div>
                            <div class="image-row full-width-row">
                                <div class="subsection-item full-width-item">
                                    <a href="https://bugswillbite.itch.io/luvdrive" target="_blank">
                                        <img src="imgs/3DD/luvdrive/LDR12.png" alt="LUVDRIVE">
                                        <div class="subsection-overlay-text">LUVDRIVE</div>
                                    </a>
                                </div>
                            </div>
                            <div class="image-row full-width-row">
                                <div class="subsection-item full-width-item">
                                    <a href="https://bugswillbite.itch.io/mysa" target="_blank">
                                        <img src="imgs/webDesign/MYSA/M1.png" alt="MYSA">
                                        <div class="subsection-overlay-text">MYSA</div>
                                    </a>
                                </div>
                            </div>
                            <div class="image-row full-width-row">
                                <div class="subsection-item full-width-item">
                                    <a href="https://bugswillbite.itch.io/decorate-my-room" target="_blank">
                                        <img src="imgs/cover2.png" alt="Decorate My Room!">
                                        <div class="subsection-overlay-text">Decorate My Room!</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Unity, C#</li>
                            <li>Storybuilding</li>
                            <li>Level Design</li>
                            <li>Player Mechanics</li>
                            <li>UI/UX Design</li>
                        </ul>
                        
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
                        <div class="image-gallery subsection-gallery">
                            <div class="image-row">
                                <div class="subsection-item" data-project="painting">
                                    <img src="imgs/physical/painting/paint final 2023_icon.png" alt="Painting">
                                    <div class="subsection-overlay-text">Painting</div>
                                </div>
                                <div class="subsection-item" data-project="sculpture">
                                    <img src="imgs/physical/sculpt/C1icon.jpg" alt="Sculpture">
                                    <div class="subsection-overlay-text">Sculpture</div>
                                </div>
                                <div class="subsection-item" data-project="drawing">
                                    <img src="imgs/physical/drawing/space woman 2020 copy.jpeg" alt="Drawing & Illustration">
                                    <div class="subsection-overlay-text">Drawing & Illustration</div>
                                </div>
                            </div>
                            <div class="image-row">
                                <div class="subsection-item" data-project="physical-all">
                                    <img src="imgs/physical/painting/Brother in Thought 2020 copy 2.JPEG" alt="More/See All">
                                    <div class="subsection-overlay-text">More/See All</div>
                                </div>
                            </div>
                        </div>                                                
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Oil & Acrylic Painting</li>
                            <li>Mixed Media</li>
                            <li>Clay Sculpture</li>
                            <li>Illustration, Drawing</li>
                            <li>Screen Printing, Silkscreening</li>
                        </ul>
                        <button class="back-btn">← Back to Mediums</button>
                    </div>
                </div>
            `
        },
        'painting': {
            type: 'text',
            content: `
                <div class="text-content" id="painting-content">
                    <div class="text-box">
                        <h2>Painting</h2>
                        <p>Acrylic and oil paintings exploring color, texture, and form through various techniques and styles.</p>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Media: Acrylic, Oil, Mixed Media</li>
                            <li>Techniques: Color theory, texture work, composition, color</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery image-gallery1 lightbox-gallery lightbox-gallery1">
                            <div class="image-row bit">
                                <img src="imgs/physical/painting/Brother in Thought 2020 copy 2.JPEG" alt="Brothers in Thought [2020, Acrylic on Wood]" data-lightbox="painting" data-index="0">
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/CW2.png" alt="Cave Woman [2021, Oil on Canvas]" data-lightbox="painting" data-index="1">
                                <img src="imgs/physical/painting/face copy.jpg" alt="Face [2024, Acrylic on Paper]" data-lightbox="painting" data-index="2">
                                <img src="imgs/physical/painting/Hand Head Baby 2021.jpg" alt="Hand Head Baby [2021, Acrylic on Paper]" data-lightbox="painting" data-index="3">
                                <img src="imgs/physical/painting/Melora 2020 copy.jpg" alt="Melora [2020, Oil on Canvas]" data-lightbox="painting" data-index="4">
                            </div>
                            <div class="image-row duck">
                                <img src="imgs/physical/painting/duckIcon.jpg" alt="Duck [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="5" data-lightbox-src="imgs/physical/painting/duck.jpg">
                                <img src="imgs/physical/painting/PFCL.jpg" alt="Untitled [2023]" data-lightbox="painting" data-index="6">  
                                <img src="imgs/physical/painting/figure1 2023 copy.jpg" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="7">
                             </div>
                             <div class="image-row square-row">
                                <img src="imgs/physical/painting/figure 2023 copy.jpg" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="8">
                                <img src="imgs/physical/painting/Holding Head Hands 2021.jpg" alt="Holding Head Hands [2021, Acrylic on Paper]" data-lightbox="painting" data-index="9">
                                <img src="imgs/physical/painting/Head Hold 2021.jpeg" alt="Untitled [2021, Acrylic on Canvas]" data-lightbox="painting" data-index="10">
                                <img src="imgs/physical/painting/yawn.png" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="11">
                            </div>
                            <div class="image-row sq2">    
                                <img src="imgs/physical/painting/summer face 2023 copy.jpg" alt="Summer Face [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="12">   
                                <img src="imgs/physical/painting/Skull 2022 copy2.png" alt="Skull [2022, Oil on Canvas]" data-lightbox="painting" data-index="13">
                                <img src="imgs/physical/painting/blue.jpg" alt="The Blue Woman [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="14">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/Self Portrait 2019 copy.jpg" alt="Self Portrait [2019, Acrylic on Wood]" data-lightbox="painting" data-index="15">
                                 <img src="imgs/physical/painting/figure2 2023 copy.JPG" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="16">                           
                                <img src="imgs/physical/painting/figure3 2023 copy.JPG" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="17">
                           </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/momMain.png" alt="Mom [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="18">
                                <img src="imgs/physical/painting/screamBoy copy.png" alt="Scream Boy [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="19">                                                       
                                <img src="imgs/physical/painting/face.jpeg" alt="Face [2023, Acrylic on Paper]" data-lightbox="painting" data-index="20">    
                                 <img src="imgs/physical/painting/Untitled 2021.jpg" alt="Untitled [2021, Acrylic on Paper]" data-lightbox="painting" data-index="21">
                            </div>
                            <div class="image-row sq2">
                                <img src="imgs/physical/painting/Tallulah.jpg" alt="Tallulah [2020, Acrylic on Wood]" data-lightbox="painting" data-index="22">
                                <img src="imgs/physical/painting/meltingMan.jpg" alt="Melting Man [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="23">
                                <img src="imgs/physical/painting/smile.jpeg" alt="Smile [2023, Acrylic on Paper]" data-lightbox="painting" data-index="24">
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/tori.png" alt="Tori [2021, Oil on Canvas]" data-lightbox="painting" data-index="25">
                                <img src="imgs/physical/painting/squishyMain copy.png" alt="Untitled [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="26">
                                <img src="imgs/physical/painting/maxBday.png" alt="Happy Birthday Max [2022, Acrylic on Paper]" data-lightbox="painting" data-index="27">    
                                <img src="imgs/physical/painting/body1.png" alt="Untitled [2021, Acrylic on Canvas]" data-lightbox="painting" data-index="28">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/edwardCRT.jpeg" alt="Edward Scizzorhands [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="29">    
                                <img src="imgs/physical/painting/chameleon.jpg" alt="Chameleon [2023, Acrylic on Paper]" data-lightbox="painting" data-index="30">    
                                <img src="imgs/physical/painting/roach.jpg" alt="Cockroach [2023, Acrylic on Paper]" data-lightbox="painting" data-index="31">    
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/scream.jpeg" alt="Scream [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="32">    
                                <img src="imgs/physical/painting/flowers.jpg" alt="Flowers [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="33">
                                <img src="imgs/physical/painting/bjork.jpg" alt="Bjork [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="34">    
                                <img src="imgs/physical/painting/body.jpg" alt="Body [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="35">
                            </div>
                            <div class="image-row sq2">
                                <img src="imgs/physical/painting/cat.jpeg" alt="Cat [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="36">    
                                <img src="imgs/physical/painting/snail.jpg" alt="Snail [2023, Acrylic on Paper]" data-lightbox="painting" data-index="37">    
                                <img src="imgs/physical/painting/self2023.jpg" alt="Self Portrait [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="38">    
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/orange.jpg" alt="Orange Man [2020, Oil on Canvas]" data-lightbox="painting" data-index="39">    
                                <img src="imgs/physical/painting/clady.jpg" alt="Clady [2023, Acrylic and Clay on Canvas]" data-lightbox="painting" data-index="40">
                                <img src="imgs/physical/painting/eyeLik.jpg" alt="Eye Lick [2021, Acrylic on Paper]" data-lightbox="painting" data-index="41">    
                                <img src="imgs/physical/painting/red.jpg" alt="Untitled [2023, Spray Paint on Paper]" data-lightbox="painting" data-index="42">
                            </div>
                        <button class="back-btn">← Back to Physical Media</button>
                    </div>
                </div>
            `
        },
        'sculpture': {
            type: 'text',
            content: `
                <div class="text-content" id="sculpture-content">
                    <div class="text-box">
                        <h2>Sculpture</h2>
                        <p>Three-dimensional works exploring form, space, and material properties through various sculptural techniques.</p>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Materials: Clay, Found Objects, Wire, Liquid Latex</li>
                            <li>Techniques: Freeform, 3D Printing, Mold Making, Kinetic Sculpture</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery image-gallery1 lightbox-gallery lightbox-gallery1">
                            <h4 class="title4gallery">Lamp [2020]</h4>
                            <div class="image-row lamp">
                                <img src="imgs/physical/sculpt/lamp.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="0">
                                <img src="imgs/physical/sculpt/LAMP2.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="1">
                                <img src="imgs/physical/sculpt/LAMP5.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="2">
                                <img src="imgs/physical/sculpt/LAMP3.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="3">    
                            </div>
                            
                            <h4 class="title4gallery">Creatures [2021]</h4>
                            <h4>Bunny Worm</h4>
                            <div class="image-row c1">
                                <img src="imgs/physical/sculpt/Bunny Worm 2021 copy.jpg" alt="Bunny Worm [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="4">
                                <img src="imgs/physical/sculpt/bunny2.jpg" alt="Bunny Worm [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="5">
                            </div>
                            <h4>Monster 01</h4>
                            <div class="image-row c2">
                                <img src="imgs/physical/sculpt/C1one.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="6">
                                <img src="imgs/physical/sculpt/C1two.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="7">
                            </div>
                            <h4>Monster 02</h4>
                            <div class="image-row c">
                                <img src="imgs/physical/sculpt/C2one.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="8">
                                <img src="imgs/physical/sculpt/C2two.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="9">
                                <img src="imgs/physical/sculpt/C2three.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="10">
                            </div>

                            <h4 class="title4gallery">Tetsuo - Kinetic Sculpture [2021]</h4>
                            <div class="image-row tet">
                                <img src="imgs/physical/sculpt/Tetsuo 1 2021.jpg" alt="Tetsuo [2021, Found Object Kinetic Sculpture]" data-lightbox="sculpture" data-index="11">
                                <img src="imgs/physical/sculpt/Tetsuo 2 2021.png" alt="Tetsuo [2021, Found Object Kinetic Sculpture]" data-lightbox="sculpture" data-index="12">
                            </div>

                            <h4 class="title4gallery">Vomit Gore Guy [2021]</h4>
                            <div class="image-row vgg">
                                <img src="imgs/physical/sculpt/VGG1.jpg" alt="Vomit Gore Guy [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="13">
                                <img src="imgs/physical/sculpt/Vomit Gore Guy 2 2021.jpg" alt="Vomit Gore Guy 2 [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="14">
                            </div>

                            <h4 class="title4gallery">3D Eye Man [2020]</h4>
                            <div class="image-row threed">
                                <img src="imgs/physical/sculpt/3dEYE1.jpeg" alt="3D Eye Man [2020, Clay & Found Object Sculpture]" data-lightbox="sculpture" data-index="15">
                                <img src="imgs/physical/sculpt/3dEYE2.jpeg" alt="3D Eye Man [2020, Clay & Found Object Sculpture]" data-lightbox="sculpture" data-index="16">
                            </div>

                            <h4 class="title4gallery">Fabric Lady [2022]</h4>
                            <div class="image-row tet">
                                <img src="imgs/physical/sculpt/fabricLady1.jpg" alt="Fabric Lady [2022, Fabric Sculpture]" data-lightbox="sculpture" data-index="17">
                                <img src="imgs/physical/sculpt/fabricLady2.jpg" alt="Fabric Lady [2022, Fabric Sculpture]" data-lightbox="sculpture" data-index="18">
                            </div>

                            <h4 class="title4gallery">Bella Haus [2023]</h4>
                            <div class="image-row haus">
                                <img src="imgs/physical/sculpt/BH2.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="19">
                                <img src="imgs/physical/sculpt/BH1.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="20">
                                <img src="imgs/physical/sculpt/BH3.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="21">
                            </div>

                            <h4 class="title4gallery">Trypophobia [2021]</h4>
                            <div class="image-row vgg">
                                <img src="imgs/physical/sculpt/TRY1.jpg" alt="Trypophobia [2021, Latex Sculpture]" data-lightbox="sculpture" data-index="22">
                                <img src="imgs/physical/sculpt/TRY2.jpg" alt="Trypophobia [2021, Latex Sculpture]" data-lightbox="sculpture" data-index="23">
                            </div>

                            <h4 class="title4gallery">Miscellaneous [2020-2025]</h4>
                            <div class="image-row">
                                <img src="imgs/physical/sculpt/BABYicon.jpg" alt="Siamese Baby [2021, 3D Print]" data-lightbox="sculpture" data-index="24">
                                <img src="imgs/physical/sculpt/rock.jpg" alt="Unfinished, Untitled [2022, Rock Chisel]" data-lightbox="sculpture" data-index="25">
                                <img src="imgs/physical/sculpt/wireHead.jpg" alt="WireHead [2021, Wire & Aluminum Sculpture]" data-lightbox="sculpture" data-index="26">
                                <img src="imgs/physical/sculpt/pillow.jpg" alt="Intestinal Pillow [2022, Fabric & Yarn Sculpture]" data-lightbox="sculpture" data-index="27">
                            </div>
                             <div class="image-row">
                                <img src="imgs/physical/sculpt/Sleeper 2021.jpg" alt="Sleeper [2021, Clay Sculpture]" data-lightbox="sculpture" data-index="28">
                                <img src="imgs/physical/sculpt/Smoker 2021.jpg" alt="Smoker [2021, Clay Sculpture]" data-lightbox="sculpture" data-index="29">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Physical Media</button>
                    </div>
                </div>
            `
        },
        'drawing': {
            type: 'text',
            content: `
                <div class="text-content" id="drawing-content">
                    <div class="text-box">
                        <h2>Drawing & Illustration</h2>
                        <p>Pieces exploring line, form, and color.</p>
                        
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Media: Pen, Ink, Marker, Pastel</li>
                            <li>Techniques: Line drawing, composition, screen printing</li>
                        </ul>
                        
                        <h3>Gallery</h3>
                        <div class="image-gallery lightbox-gallery">
                            <h4 class="title4gallery">Ink Drawings</h4>
                            <div class="image-row draw">
                                <img src="imgs/physical/drawing/bella - ink 200101-3.png" alt="Stipling Snail [2018, Ink]" data-lightbox="drawing" data-index="0">
                                <img src="imgs/physical/drawing/mom.jpg" alt="Mom [2023, Ink]" data-lightbox="drawing" data-index="1">
                                <img src="imgs/physical/drawing/rats.jpeg" alt="Rats [2023, Ink]" data-lightbox="drawing" data-index="2">
                            </div>
                            <div class="image-row draw">
                                <img src="imgs/physical/drawing/punk.jpg" alt="Punk Girl [2022, Ink & Marker]" data-lightbox="drawing" data-index="3">
                                <img src="imgs/physical/drawing/stand.jpeg" alt="Stand [2023, Ink]" data-lightbox="drawing" data-index="4">
                                <img src="imgs/physical/drawing/whome.jpeg" alt="Who Me? [2022, Ink & Marker]" data-lightbox="drawing" data-index="5">
                                <img src="imgs/physical/drawing/kiss2.jpeg" alt="Kiss [2024, Ink]" data-lightbox="drawing" data-index="6">
                            </div>
                            <div class="image-row draw">
                                <img src="imgs/physical/drawing/2manblue2019.png" alt="Two Man Blue [2019, Ink & Marker]" data-lightbox="drawing" data-index="7">
                                <img src="imgs/physical/drawing/2019fish.png" alt="Fish House [2019, Ink & Marker]" data-lightbox="drawing" data-index="8">
                                <img src="imgs/physical/drawing/2019heart.png" alt="Heart Man [2019, Ink]" data-lightbox="drawing" data-index="9">
                            </div>
                            <h4 class="title4gallery">Pastel Drawings</h4>
                            <div class="image-row">
                                <img src="imgs/physical/drawing/space woman 2020 copy.jpeg" alt="Space Woman [2020, Pastel on Wood]" data-lightbox="drawing" data-index="10">
                                <img src="imgs/physical/drawing/greenPastel2.png" alt="Alien Smoker [2020, Pastel and Acrylic on Cardboard]" data-lightbox="drawing" data-index="11">
                            </div>
                            <h4 class="title4gallery">Screen Printing</h4>
                            <div class="image-row">
                                <img src="imgs/physical/screenPrint/ScreenPrint1.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="12">
                                <img src="imgs/physical/screenPrint/ScreenPrint2.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="13">
                                <img src="imgs/physical/screenPrint/ScreenPrint3.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="14">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/screenPrint/ScreenPrint4.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="15">
                                <img src="imgs/physical/screenPrint/ScreenPrint6.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="16">
                                <img src="imgs/physical/screenPrint/ScreenPrint5.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="17">
                            </div>
                            <h4 class="title4gallery">Laser Cutting</h4>
                            <div class="image-row">
                                <img src="imgs/physical/laser.png" alt="Amoeba Love-Making [2021, Laser Cut]" data-lightbox="drawing" data-index="18">
                            </div>
                        </div>
                        
                        <button class="back-btn">← Back to Physical Media</button>
                    </div>
                </div>
            `
        },
        'physical-all': {
            type: 'text',
            content: `
                <div class="text-content" id="physical-all-content">
                    <div class="text-box">
                        <h2>Physical Media Archive</h2>
                        <p>A collection of mixed media artworks spanning various techniques and materials.</p>
                        <div class="image-gallery image-gallery1 lightbox-gallery lightbox-gallery1">

                        <h4 class="title4gallery">Painting</h4>

                             <div class="image-row bit">
                                <img src="imgs/physical/painting/Brother in Thought 2020 copy 2.JPEG" alt="Brothers in Thought [2020, Acrylic on Wood]" data-lightbox="painting" data-index="0">
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/CW2.png" alt="Cave Woman [2021, Oil on Canvas]" data-lightbox="painting" data-index="1">
                                <img src="imgs/physical/painting/face copy.jpg" alt="Face [2024, Acrylic on Paper]" data-lightbox="painting" data-index="2">
                                <img src="imgs/physical/painting/Hand Head Baby 2021.jpg" alt="Hand Head Baby [2021, Acrylic on Paper]" data-lightbox="painting" data-index="3">
                                <img src="imgs/physical/painting/Melora 2020 copy.jpg" alt="Melora [2020, Oil on Canvas]" data-lightbox="painting" data-index="4">
                            </div>
                            <div class="image-row duck">
                                <img src="imgs/physical/painting/duckIcon.jpg" alt="Duck [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="5" data-lightbox-src="imgs/physical/painting/duck.jpg">
                                <img src="imgs/physical/painting/PFCL.jpg" alt="Untitled [2023]" data-lightbox="painting" data-index="6">  
                                <img src="imgs/physical/painting/figure1 2023 copy.jpg" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="7">
                             </div>
                             <div class="image-row square-row">
                                <img src="imgs/physical/painting/figure 2023 copy.jpg" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="8">
                                <img src="imgs/physical/painting/Holding Head Hands 2021.jpg" alt="Holding Head Hands [2021, Acrylic on Paper]" data-lightbox="painting" data-index="9">
                                <img src="imgs/physical/painting/Head Hold 2021.jpeg" alt="Untitled [2021, Acrylic on Canvas]" data-lightbox="painting" data-index="10">
                                <img src="imgs/physical/painting/yawn.png" alt="Yawn [2021, Acrylic on Paper]" data-lightbox="painting" data-index="11">
                            </div>
                            <div class="image-row sq2">    
                                <img src="imgs/physical/painting/summer face 2023 copy.jpg" alt="Summer Face [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="12">   
                                <img src="imgs/physical/painting/Skull 2022 copy2.png" alt="Skull [2022, Oil on Canvas]" data-lightbox="painting" data-index="13">
                                <img src="imgs/physical/painting/blue.jpg" alt="The Blue Woman [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="14">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/Self Portrait 2019 copy.jpg" alt="Self Portrait [2019, Acrylic on Wood]" data-lightbox="painting" data-index="15">
                                 <img src="imgs/physical/painting/figure2 2023 copy.JPG" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="16">                           
                                <img src="imgs/physical/painting/figure3 2023 copy.JPG" alt="Figure [2023, Acrylic on Paper]" data-lightbox="painting" data-index="17">
                           </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/momMain.png" alt="Mom [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="18">
                                <img src="imgs/physical/painting/screamBoy copy.png" alt="Scream Boy [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="19">                                                       
                                <img src="imgs/physical/painting/face.jpeg" alt="Face [2023, Acrylic on Paper]" data-lightbox="painting" data-index="20">    
                                 <img src="imgs/physical/painting/Untitled 2021.jpg" alt="Untitled [2021, Acrylic on Paper]" data-lightbox="painting" data-index="21">
                            </div>
                            <div class="image-row sq2">
                                <img src="imgs/physical/painting/Tallulah.jpg" alt="Tallulah [2020, Acrylic on Wood]" data-lightbox="painting" data-index="22">
                                <img src="imgs/physical/painting/meltingMan.jpg" alt="Melting Man [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="23">
                                <img src="imgs/physical/painting/smile.jpeg" alt="Smile [2023, Acrylic on Paper]" data-lightbox="painting" data-index="24">
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/tori.png" alt="Tori [2021, Oil on Canvas]" data-lightbox="painting" data-index="25">
                                <img src="imgs/physical/painting/squishyMain copy.png" alt="Untitled [2020, Acrylic on Canvas]" data-lightbox="painting" data-index="26">
                                <img src="imgs/physical/painting/maxBday.png" alt="Happy Birthday Max [2022, Acrylic on Paper]" data-lightbox="painting" data-index="27">    
                                <img src="imgs/physical/painting/body1.png" alt="Untitled [2021, Acrylic on Canvas]" data-lightbox="painting" data-index="28">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/edwardCRT.jpeg" alt="Edward Scizzorhands [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="29">    
                                <img src="imgs/physical/painting/chameleon.jpg" alt="Chameleon [2023, Acrylic on Paper]" data-lightbox="painting" data-index="30">    
                                <img src="imgs/physical/painting/roach.jpg" alt="Cockroach [2023, Acrylic on Paper]" data-lightbox="painting" data-index="31">    
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/painting/scream.jpeg" alt="Scream [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="32">    
                                <img src="imgs/physical/painting/flowers.jpg" alt="Flowers [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="33">
                                <img src="imgs/physical/painting/bjork.jpg" alt="Bjork [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="34">    
                                <img src="imgs/physical/painting/body.jpg" alt="Body [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="35">
                            </div>
                            <div class="image-row sq2">
                                <img src="imgs/physical/painting/cat.jpeg" alt="Cat [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="36">    
                                <img src="imgs/physical/painting/snail.jpg" alt="Snail [2023, Acrylic on Paper]" data-lightbox="painting" data-index="37">    
                                <img src="imgs/physical/painting/self2023.jpg" alt="Self Portrait [2023, Acrylic on Canvas]" data-lightbox="painting" data-index="38">    
                            </div>
                            <div class="image-row square-row">
                                <img src="imgs/physical/painting/orange.jpg" alt="Orange Man [2020, Oil on Canvas]" data-lightbox="painting" data-index="39">    
                                <img src="imgs/physical/painting/clady.jpg" alt="Clady [2023, Acrylic and Clay on Canvas]" data-lightbox="painting" data-index="40">
                                <img src="imgs/physical/painting/eyeLik.jpg" alt="Eye Lick [2021, Acrylic on Paper]" data-lightbox="painting" data-index="41">    
                                <img src="imgs/physical/painting/red.jpg" alt="Untitled [2023, Spray Paint on Paper]" data-lightbox="painting" data-index="42">
                            </div>

                            <h4 class="title4gallery">Sculpture</h4>
                            <h4>Lamp [2020]</h5>
                                <div class="image-row lamp">
                                <img src="imgs/physical/sculpt/lamp.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="0">
                                <img src="imgs/physical/sculpt/LAMP2.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="1">
                                <img src="imgs/physical/sculpt/LAMP5.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="2">
                                <img src="imgs/physical/sculpt/LAMP3.jpeg" alt="Lamp [2020, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="3">    
                            </div>
                            
                            <h4>CREATURES [2021]<br>
                            <br> Bunny Worm</h4>
                            <div class="image-row c1">
                                <img src="imgs/physical/sculpt/Bunny Worm 2021 copy.jpg" alt="Bunny Worm [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="4">
                                <img src="imgs/physical/sculpt/bunny2.jpg" alt="Bunny Worm [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="5">
                            </div>
                            <h4>Monster 01</h4>
                            <div class="image-row c2">
                                <img src="imgs/physical/sculpt/C1one.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="6">
                                <img src="imgs/physical/sculpt/C1two.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="7">
                            </div>
                            <h4>Monster 02</h4>
                            <div class="image-row c">
                                <img src="imgs/physical/sculpt/C2one.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="8">
                                <img src="imgs/physical/sculpt/C2two.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="9">
                                <img src="imgs/physical/sculpt/C2three.jpg" alt="Creature [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="10">
                            </div>

                            <h4>Tetsuo - Kinetic Sculpture [2021]</h4>
                            <div class="image-row tet">
                                <img src="imgs/physical/sculpt/Tetsuo 1 2021.jpg" alt="Tetsuo [2021, Found Object Kinetic Sculpture]" data-lightbox="sculpture" data-index="11">
                                <img src="imgs/physical/sculpt/Tetsuo 2 2021.png" alt="Tetsuo [2021, Found Object Kinetic Sculpture]" data-lightbox="sculpture" data-index="12">
                            </div>

                            <h4>Vomit Gore Guy [2021]</h4>
                            <div class="image-row vgg">
                                <img src="imgs/physical/sculpt/VGG1.jpg" alt="Vomit Gore Guy [2022, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="13">
                                <img src="imgs/physical/sculpt/Vomit Gore Guy 2 2021.jpg" alt="Vomit Gore Guy 2 [2021, Found Object & Clay Sculpture]" data-lightbox="sculpture" data-index="14">
                            </div>

                            <h4>3D Eye Man [2020]</h4>
                            <div class="image-row threed">
                                <img src="imgs/physical/sculpt/3dEYE1.jpeg" alt="3D Eye Man [2020, Clay & Found Object Sculpture]" data-lightbox="sculpture" data-index="15">
                                <img src="imgs/physical/sculpt/3dEYE2.jpeg" alt="3D Eye Man [2020, Clay & Found Object Sculpture]" data-lightbox="sculpture" data-index="16">
                            </div>

                            <h4>Fabric Lady [2022]</h4>
                            <div class="image-row tet">
                                <img src="imgs/physical/sculpt/fabricLady1.jpg" alt="Fabric Lady [2022, Fabric Sculpture]" data-lightbox="sculpture" data-index="17">
                                <img src="imgs/physical/sculpt/fabricLady2.jpg" alt="Fabric Lady [2022, Fabric Sculpture]" data-lightbox="sculpture" data-index="18">
                            </div>

                            <h4>Bella Haus [2023]</h4>
                            <div class="image-row haus">
                                <img src="imgs/physical/sculpt/BH2.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="19">
                                <img src="imgs/physical/sculpt/BH1.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="20">
                                <img src="imgs/physical/sculpt/BH3.jpg" alt="Bella Haus [2023, Plaster Sculpture]" data-lightbox="sculpture" data-index="21">
                            </div>

                            <h4>Trypophobia [2021]</h4>
                            <div class="image-row vgg">
                                <img src="imgs/physical/sculpt/TRY1.jpg" alt="Trypophobia [2021, Latex Sculpture]" data-lightbox="sculpture" data-index="22">
                                <img src="imgs/physical/sculpt/TRY2.jpg" alt="Trypophobia [2021, Latex Sculpture]" data-lightbox="sculpture" data-index="23">
                            </div>

                            <h4>Miscellaneous [2020-2025]</h4>
                            <div class="image-row">
                                <img src="imgs/physical/sculpt/BABYicon.jpg" alt="Siamese Baby [2021, 3D Print]" data-lightbox="sculpture" data-index="24">
                                <img src="imgs/physical/sculpt/rock.jpg" alt="Unfinished, Untitled [2022, Rock Chisel]" data-lightbox="sculpture" data-index="25">
                                <img src="imgs/physical/sculpt/wireHead.jpg" alt="WireHead [2021, Wire & Aluminum Sculpture]" data-lightbox="sculpture" data-index="26">
                                <img src="imgs/physical/sculpt/pillow.jpg" alt="Intestinal Pillow [2022, Fabric & Yarn Sculpture]" data-lightbox="sculpture" data-index="27">
                            </div>
                             <div class="image-row">
                                <img src="imgs/physical/sculpt/Sleeper 2021.jpg" alt="Sleeper [2021, Clay Sculpture]" data-lightbox="sculpture" data-index="28">
                                <img src="imgs/physical/sculpt/Smoker 2021.jpg" alt="Smoker [2021, Clay Sculpture]" data-lightbox="sculpture" data-index="29">
                            </div>
                        </div>
                            
                            
                            <h4 class="title4gallery">Drawing & Illustration</h4>
                            <h4>Ink Drawings</h4>
                            <div class="image-row draw">
                                <img src="imgs/physical/drawing/bella - ink 200101-3.png" alt="Stipling Snail [2018, Ink]" data-lightbox="drawing" data-index="0">
                                <img src="imgs/physical/drawing/mom.jpg" alt="Mom [2023, Ink]" data-lightbox="drawing" data-index="1">
                                <img src="imgs/physical/drawing/rats.jpeg" alt="Rats [2023, Ink]" data-lightbox="drawing" data-index="2">
                            </div>
                            <div class="image-row draw">
                                <img src="imgs/physical/drawing/punk.jpg" alt="Punk Girl [2022, Ink & Marker]" data-lightbox="drawing" data-index="3">
                                <img src="imgs/physical/drawing/stand.jpeg" alt="Stand [2023, Ink]" data-lightbox="drawing" data-index="4">
                                <img src="imgs/physical/drawing/whome.jpeg" alt="Who Me? [2022, Ink & Marker]" data-lightbox="drawing" data-index="5">
                                <img src="imgs/physical/drawing/kiss2.jpeg" alt="Kiss [2024, Ink]" data-lightbox="drawing" data-index="6">
                            </div>
                            <div class="image-row draw">
                                <img src="imgs/physical/drawing/2manblue2019.png" alt="Two Man Blue [2019, Ink & Marker]" data-lightbox="drawing" data-index="7">
                                <img src="imgs/physical/drawing/2019fish.png" alt="Fish House [2019, Ink & Marker]" data-lightbox="drawing" data-index="8">
                                <img src="imgs/physical/drawing/2019heart.png" alt="Heart Man [2019, Ink]" data-lightbox="drawing" data-index="9">
                            </div>
                            <h4>Pastel Drawings</h4>
                            <div class="image-row">
                                <img src="imgs/physical/drawing/space woman 2020 copy.jpeg" alt="Space Woman [2020, Pastel on Wood]" data-lightbox="drawing" data-index="10">
                                <img src="imgs/physical/drawing/greenPastel2.png" alt="Alien Smoker [2020, Pastel and Acrylic on Cardboard]" data-lightbox="drawing" data-index="11">
                            </div>
                            <h4>Screen Printing</h4>
                            <div class="image-row">
                                <img src="imgs/physical/screenPrint/ScreenPrint1.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="12">
                                <img src="imgs/physical/screenPrint/ScreenPrint2.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="13">
                                <img src="imgs/physical/screenPrint/ScreenPrint3.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="14">
                            </div>
                            <div class="image-row">
                                <img src="imgs/physical/screenPrint/ScreenPrint4.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="15">
                                <img src="imgs/physical/screenPrint/ScreenPrint6.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="16">
                                <img src="imgs/physical/screenPrint/ScreenPrint5.jpg" alt="LEGS Screen Print [2021, Silkscreen Print]" data-lightbox="drawing" data-index="17">
                            </div>
                            <h4>Laser Cutting</h4>
                            <div class="image-row">
                                <img src="imgs/physical/laser.png" alt="Amoeba Love-Making [2021, Laser Cut]" data-lightbox="drawing" data-index="18">
                            </div>
                        
                        <button class="back-btn">← Back to Physical Media</button>
                    </div>
                </div>
            `
        }
    };

    function setupAccordionFolders() {
        const folderTabs = document.querySelectorAll('.folder-tab');
        const folderContents = document.querySelectorAll('.folder-content');
        const folderIcons = document.querySelectorAll('.folder-icon');
        
        folderContents.forEach(content => {
            content.classList.add('active');
        });
        folderIcons.forEach(icon => {
            icon.textContent = '−';
        });
        
        folderTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const folderId = this.getAttribute('data-folder') + '-folder';
                const folderContent = document.getElementById(folderId);
                const icon = this.querySelector('.folder-icon');
                
                if (folderContent.classList.contains('active')) {
                    folderContent.classList.remove('active');
                    icon.textContent = '+';
                } else {
                    folderContent.classList.add('active');
                    icon.textContent = '−';
                }
            });
        });
    }

    function switchContent(sectionName) {
        let section = sectionContent[sectionName] || mediumSubsections[sectionName];
        if (section) {
            contentContainer.innerHTML = section.content;
            
            contentContainer.style.opacity = '0';
            setTimeout(() => {
                contentContainer.style.opacity = '1';
            }, 50);
            
            if (sectionName === 'portfolio' || sectionName === 'all-mediums') {
                setupAccordionFolders();
            }

            if (sectionName === 'contact') {
                setupContactForm();
            }
            
            if (sectionName === 'mediums') {
                setupMediumClickHandlers();
            }
            
            if (sectionName === '3d-modelling') {
                setup3DProjectClickHandlers();
            }
            
            if (sectionName === 'physical-media') {
                setupPhysicalMediaClickHandlers();
            }
            
            if (mediumSubsections[sectionName]) {
                setupBackButton();
            }
        }
    }

    function setupLightbox() {
        const lightboxImages = document.querySelectorAll('.lightbox-gallery img[data-lightbox]');
        
        if (lightboxImages.length === 0) return;
        
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.className = 'lightbox-overlay';
        lightboxOverlay.innerHTML = `
            <div class="lightbox-container">
                <button class="lightbox-close">&times;</button>
                <button class="lightbox-prev">&#8249;</button>
                <img class="lightbox-image" src="" alt="">
                <button class="lightbox-next">&#8250;</button>
                <div class="lightbox-caption"></div>
                <div class="lightbox-counter"></div>
                <div class="lightbox-external-link"></div>
            </div>
        `;
        document.body.appendChild(lightboxOverlay);
        
        const lightboxImg = lightboxOverlay.querySelector('.lightbox-image');
        const lightboxCaption = lightboxOverlay.querySelector('.lightbox-caption');
        const lightboxCounter = lightboxOverlay.querySelector('.lightbox-counter');
        const lightboxExternalLink = lightboxOverlay.querySelector('.lightbox-external-link');
        const closeBtn = lightboxOverlay.querySelector('.lightbox-close');
        const prevBtn = lightboxOverlay.querySelector('.lightbox-prev');
        const nextBtn = lightboxOverlay.querySelector('.lightbox-next');
        
        let currentIndex = 0;
        const images = Array.from(lightboxImages);
        
        function isFullscreen() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || 
                     document.mozFullScreenElement || document.msFullscreenElement);
        }
        
        function showImage(index) {
            const img = images[index];
            const lightboxSrc = img.getAttribute('data-lightbox-src') || img.src;
            lightboxImg.src = lightboxSrc;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = img.alt;
            lightboxCounter.textContent = `${index + 1} / ${images.length}`;
            
            // Handle external link display
            const externalLink = img.getAttribute('data-external-link');
            if (externalLink && isFullscreen()) {
                lightboxExternalLink.innerHTML = `<a href="${externalLink}" target="_blank">View Project →</a>`;
            } else if (externalLink) {
                lightboxExternalLink.innerHTML = `<span class="fullscreen-hint">Enter fullscreen to access external links</span>`;
            } else {
                lightboxExternalLink.innerHTML = '';
            }
            
            currentIndex = index;
        }
        
        function showLightbox(index) {
            showImage(index);
            lightboxOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function hideLightbox() {
            lightboxOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
        
        lightboxImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                showLightbox(index);
            });
            img.style.cursor = 'pointer';
        });
        
        closeBtn.addEventListener('click', hideLightbox);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                hideLightbox();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (lightboxOverlay.style.display === 'flex') {
                switch(e.key) {
                    case 'Escape':
                        hideLightbox();
                        break;
                    case 'ArrowRight':
                        nextImage();
                        break;
                    case 'ArrowLeft':
                        prevImage();
                        break;
                }
            }
        });
        
        // Listen for fullscreen changes to update external links
        document.addEventListener('fullscreenchange', () => {
            if (lightboxOverlay.style.display === 'flex') {
                showImage(currentIndex);
            }
        });
        
        document.addEventListener('webkitfullscreenchange', () => {
            if (lightboxOverlay.style.display === 'flex') {
                showImage(currentIndex);
            }
        });
    }

    function setupBackButton() {
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.textContent.includes('3D Modelling')) {
                    switchContent('3d-modelling');
                } else if (this.textContent.includes('Physical Media')) {
                    switchContent('physical-media');
                } else {
                    switchContent('mediums');
                }
            });
        }
        
        setupLightbox();
    }

    function setupMediumClickHandlers() {
        const mediumItems = document.querySelectorAll('.medium-item[data-medium]');
        mediumItems.forEach(item => {
            item.addEventListener('click', function() {
                const mediumType = this.getAttribute('data-medium');
                switchContent(mediumType);
            });
        });
        
        setup3DProjectClickHandlers();
        setupPhysicalMediaClickHandlers();
    }

    function setup3DProjectClickHandlers() {
        const projectItems = document.querySelectorAll('.subsection-item[data-project]');
        projectItems.forEach(item => {
            item.addEventListener('click', function() {
                const projectType = this.getAttribute('data-project');
                if (projectType) {
                    switchContent(projectType);
                }
            });
        });
    }

    function setupPhysicalMediaClickHandlers() {
        const physicalMediaItems = document.querySelectorAll('#physical-media-content .subsection-item[data-project]');
        physicalMediaItems.forEach(item => {
            item.addEventListener('click', function() {
                const projectType = this.getAttribute('data-project');
                if (projectType) {
                    switchContent(projectType);
                }
            });
        });
    }

    function setupContactForm() {
        const form = document.querySelector('#contact-content form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = form.querySelector('input[placeholder="Your Name"]').value;
                const email = form.querySelector('input[placeholder="Your Email"]').value;
                const subject = form.querySelector('input[placeholder="Subject"]').value;
                const message = form.querySelector('textarea[placeholder="Your Message"]').value;
                
                const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=bella.podowski@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
                
                window.open(gmailURL, '_blank');
                
                const button = form.querySelector('button[type="submit"]');
                const originalText = button.textContent;
                button.textContent = 'Gmail Opened!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '#fa5b21';
                    form.reset();
                }, 3000);
            });
        }
    }

    navDivs.forEach(div => {
        div.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('data-section');
            switchContent(sectionName);
            
            navDivs.forEach(d => {
                d.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });

    document.querySelector('div.op1').classList.add('active');
    
    if (document.querySelector('#contact-content')) {
        setupContactForm();
    }
    
    if (document.querySelector('#mediums-content')) {
        setupMediumClickHandlers();
    }
});
