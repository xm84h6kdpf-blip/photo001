/* ===============================================
   PHOTOS 001 - JAVASCRIPT
   Interactive features and lightbox functionality
   =============================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================================
    // LIGHTBOX FUNCTIONALITY
    // ===============================================
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    let currentImages = [];
    let currentIndex = 0;
    
    // Get all gallery and blog images
    const galleryImages = document.querySelectorAll('.gallery-img, .blog-img, .collage-item img');
    
    // Store all images in array for navigation
    galleryImages.forEach((img, index) => {
        currentImages.push(img.src);
        
        // Add click event to open lightbox
        img.addEventListener('click', function() {
            openLightbox(index);
        });
    });
    
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = currentImages[currentIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Close lightbox on X button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Close lightbox on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Lightbox navigation buttons
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            lightboxImg.src = currentImages[currentIndex];
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % currentImages.length;
            lightboxImg.src = currentImages[currentIndex];
        });
    }
    
    // Keyboard navigation in lightbox
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            lightboxImg.src = currentImages[currentIndex];
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % currentImages.length;
            lightboxImg.src = currentImages[currentIndex];
        }
    });
    
    
    // ===============================================
    // ALBUM DATA AND NAVIGATION
    // ===============================================
    
    const albums = {
        vancouver: {
            title: 'Vancouver',
            images: [
                'https://i.imgur.com/jt88DIQ.jpg',
                'https://i.imgur.com/Me8FYCF.jpg',
                'https://i.imgur.com/xMQevUH.jpg',
                'https://i.imgur.com/1y56njF.jpg',
		'https://i.imgur.com/5toutdy.jpg',
		'https://i.imgur.com/VpSFVgl.jpg'
            ]
        },
        alaska: {
            title: 'Alaska',
            images: [
                'https://images.unsplash.com/photo-1523581910442-a43f68d4c2e8?w=1200',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
                'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=800',
                'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200'
            ]
        },
        ontour: {
            title: 'On Tour',
            images: [
                'https://i.imgur.com/0L5HA4n.jpg',
		'https://i.imgur.com/vd2zSCM.jpg',
		'https://i.imgur.com/sqogAZa.jpg',
		'https://i.imgur.com/GzVmMWE.jpg',
		'https://i.imgur.com/akLtH0W.jpg',
		'https://i.imgur.com/aJ33mbq.jpg',
		'https://i.imgur.com/bJT3G8T.jpg',
		'https://i.imgur.com/4jZajeT.jpg',
		'https://i.imgur.com/DQRNCnp.jpg',
		'https://i.imgur.com/5Mak5nG.jpg',
		'https://i.imgur.com/EHb71H4.jpg',
		'https://i.imgur.com/G3X0Ff8.jpg',
		'https://i.imgur.com/EWKAjBG.jpg',
		'https://i.imgur.com/j5PTnhP.jpg',
		'https://i.imgur.com/TtBmbvF.jpg',
		'https://i.imgur.com/ysuq746.jpg',
		'https://i.imgur.com/xVxj9NZ.jpg',
            ]
        },
        street: {
            title: 'Street',
            images: [
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200',
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
                'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
                'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200'
            ]
        },
        motorsports: {
            title: 'Motorsports',
            images: [
                'https://images.unsplash.com/photo-1532906619279-a4b7267faa66?w=1200',
                'https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=800',
                'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
                'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200'
            ]
        },
        michigan: {
            title: 'Michigan',
            images: [
                'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1200',
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
                'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200'
            ]
        },
        denali: {
            title: 'Denali',
            images: [
		'https://i.imgur.com/hxhUvgy.jpg',
		'https://i.imgur.com/O2qqGPR.jpg',
		'https://i.imgur.com/2uP82jw.jpg',
		'https://i.imgur.com/hYIRkwX.jpg',
		'https://i.imgur.com/Gc7TpYC.jpg',
		'https://i.imgur.com/FxJL9y4.jpg',
		'https://i.imgur.com/aWOLxQu.jpg',
		'https://i.imgur.com/LJorzq2.jpg',
		'https://i.imgur.com/sXaTicp.jpg',
		'https://i.imgur.com/tUFjXKC.jpg',
		'https://i.imgur.com/f8ngjTy.jpg',
		'https://i.imgur.com/wRqzgzx.jpg',
		'https://i.imgur.com/bGbpZq4.jpg',
		'https://i.imgur.com/tVrSlzu.jpg',
		'https://i.imgur.com/AfzRGEH.jpg',
		'https://i.imgur.com/jIXsBU7.jpg',
		'https://i.imgur.com/1SoeF0x.jpg',
		'https://i.imgur.com/Wfqw1NA.jpg',
		'https://i.imgur.com/gkFtT3p.jpg',
		'https://i.imgur.com/jCLBAUj.jpg',
		'https://i.imgur.com/x1elHDv.jpg',
		'https://i.imgur.com/hKqPGcf.jpg',
		'https://i.imgur.com/AtG0OaO.jpg',
		'https://i.imgur.com/GPZswah.jpg',
		'https://i.imgur.com/IHKc2pC.jpg',
		'https://i.imgur.com/IyrF6sZ.jpg',
		'https://i.imgur.com/PQfxKsQ.jpg',
		'https://i.imgur.com/hSHklDJ.jpg',
		'https://i.imgur.com/TZEwFrP.jpg',
		'https://i.imgur.com/kLVc6Sx.jpg',
		'https://i.imgur.com/a3VCoM9.jpg',
		'https://i.imgur.com/gEuUisn.jpg',
		'https://i.imgur.com/xMIcRZA.jpg'
            ]
        }
    };
    
    // Get current album from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const currentAlbum = urlParams.get('album') || 'vancouver';
    
    // Load album if on albums page
    if (document.querySelector('.albums-page')) {
        loadAlbum(currentAlbum);
        
        // Set active state on album links
        document.querySelectorAll('.album-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.album === currentAlbum) {
                link.classList.add('active');
            }
        });
    }
    
    function loadAlbum(albumKey) {
        const album = albums[albumKey];
        if (!album) return;
        
        const albumTitle = document.getElementById('albumTitle');
        const gallery = document.getElementById('photoGallery');
        
        if (albumTitle) {
            albumTitle.textContent = album.title;
        }
        
        if (gallery) {
            // Clear existing gallery
            gallery.innerHTML = '';
            
            // Check if this is Denali album for special single-column layout
            if (albumKey === 'denali') {
                gallery.classList.add('gallery-single-column');
            } else {
                gallery.classList.remove('gallery-single-column');
            }
            
            // Add new images
            const layouts = ['large', 'medium', 'medium', 'wide'];
            album.images.forEach((imgSrc, index) => {
                const div = document.createElement('div');
                div.className = `gallery-item ${layouts[index]}`;
                
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = `${album.title} photo ${index + 1}`;
                img.className = 'gallery-img';
                
                // Add click event for lightbox
                img.addEventListener('click', function() {
                    openLightbox(index);
                });
                
                div.appendChild(img);
                gallery.appendChild(div);
            });
            
            // Update currentImages array for lightbox
            currentImages = album.images;
        }
        
        // Update album navigation
        updateAlbumNavigation(albumKey);
    }
    
    function updateAlbumNavigation(currentAlbum) {
        const albumKeys = Object.keys(albums);
        const currentIndex = albumKeys.indexOf(currentAlbum);
        const prevIndex = (currentIndex - 1 + albumKeys.length) % albumKeys.length;
        const nextIndex = (currentIndex + 1) % albumKeys.length;
        
        const prevAlbum = document.getElementById('prevAlbum');
        const nextAlbum = document.getElementById('nextAlbum');
        
        if (prevAlbum) {
            prevAlbum.textContent = albums[albumKeys[prevIndex]].title;
            prevAlbum.href = `albums.html?album=${albumKeys[prevIndex]}`;
        }
        
        if (nextAlbum) {
            nextAlbum.textContent = albums[albumKeys[nextIndex]].title;
            nextAlbum.href = `albums.html?album=${albumKeys[nextIndex]}`;
        }
    }
    
    
    // ===============================================
    // BLOG POST DATA
    // ===============================================

    const blogPosts = {
        '001': {
            title: 'Blog 001',
            date: '09/01/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        },
        '002': {
            title: 'Blog 002',
            date: '09/02/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        },
        '003': {
            title: 'Blog 003',
            date: '09/03/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        },
        '004': {
            title: 'Blog 004',
            date: '09/04/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        },
        '005': {
            title: 'Blog 005',
            date: '09/05/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        },
        '006': {
            title: 'Blog 006',
            date: '09/06/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        },
        '007': {
            title: 'Blog 007',
            date: '09/07/2025',
            content: `
                <p>The light was all wrong but somehow that made it right, you know? That golden hour everyone talks about had already slipped away into the bruised purple of almost-night, and I was with my camera anyway, clicking away at nothing in particular. The way the streetlamp caught the edge of that building, how it carved shadows into geometry I'd walked past a thousand times without seeing.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban scene" class="blog-img">
                </div>

                <p>Every photograph is a little lie we tell ourselves about remembering. This moment, caught, suspended, pinned like a butterfly in a collection. But the air temperature isn't there, is it? The smell of wet pavement, the sound of someone's laughter three streets over, the ache in your feet from standing too long—all gone, distilled down to pixels and light.</p>

                <p>I keep coming back to doorways. Why doorways? Thresholds between here and there, between known and unknown. The peeling paint tells better stories than I ever could with words. Blue paint, green paint, layers of different lives all living in the same space, separated only by time and bad renovation decisions.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Architecture detail" class="blog-img">
                </div>

                <p>The blurry ones are sometimes better. Fight me on this. That accidental motion blur that comes from being cold, into a ghost, into a question mark, into the feeling of a moment rather than the documentary proof of it.</p>

                <p>The concrete was cracked in that particular way that only decades of freeze-thaw cycles can accomplish. Like a spiderweb spun out from the center like someone dropped the whole world and it shattered just a little bit. You captured it in an awkward moment, didn't you? Not staged down like some sort of municipal survey documentation, but tilted, diagonal, making the viewer feel slightly off-balance, slightly seasick. Good. Comfort is overrated in photography.</p>

                <p>And that series with the windows—god, the windows. Seventeen shots of the same window at different times of day and somehow they're seventeen completely different windows. Morning light makes it look hopeful, like someone's about to lean out and call you in for breakfast. Afternoon turns it into a cyclops eye, glaring, judgmental. Evening and it's just sad, reflecting back the pink-orange sky like it's trying to remember what warmth felt like.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Street detail" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Urban landscape" class="blog-img">
                </div>

                <p>The parking lot at 2 AM—empty except for three cars huddled together like they're sharing secrets. The sodium vapor lights turning everything sickly yellow-green, science fiction dystopia lighting.</p>
            `
        }
    };

    // ===============================================
    // BLOG POST NAVIGATION
    // ===============================================

    const currentPost = urlParams.get('post') || '001';

    if (document.querySelector('.blog-page')) {
        // Load blog post content
        loadBlogPost(currentPost);

        // Set active state on blog links
        document.querySelectorAll('.blog-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.post === currentPost) {
                link.classList.add('active');
            }
        });

        updateBlogNavigation(currentPost);
    }

    function loadBlogPost(postId) {
        const post = blogPosts[postId];
        if (!post) return;

        const blogTitle = document.querySelector('.blog-title');
        const blogDate = document.querySelector('.blog-date');
        const blogContent = document.querySelector('.blog-post');

        if (blogTitle) {
            blogTitle.textContent = post.title;
        }

        if (blogDate) {
            blogDate.textContent = post.date;
        }

        if (blogContent) {
            blogContent.innerHTML = post.content;

            // Re-attach lightbox listeners to newly loaded images
            const blogImages = blogContent.querySelectorAll('.blog-img');
            currentImages = [];
            blogImages.forEach((img, index) => {
                currentImages.push(img.src);
                img.addEventListener('click', function() {
                    openLightbox(index);
                });
            });
        }
    }

    function updateBlogNavigation(currentPost) {
        const postNumber = parseInt(currentPost);
        const prevNumber = String(Math.max(1, postNumber - 1)).padStart(3, '0');
        const nextNumber = String(Math.min(7, postNumber + 1)).padStart(3, '0');

        const prevPost = document.getElementById('prevPost');
        const nextPost = document.getElementById('nextPost');

        if (prevPost) {
            if (postNumber === 1) {
                prevPost.style.visibility = 'hidden';
            } else {
                prevPost.href = `blog.html?post=${prevNumber}`;
            }
        }

        if (nextPost) {
            if (postNumber === 7) {
                nextPost.style.visibility = 'hidden';
            } else {
                nextPost.href = `blog.html?post=${nextNumber}`;
            }
        }
    }
    
    
    // ===============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ===============================================
    
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
    
});
