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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The camera doesn't lie, they say, but it doesn't tell the whole truth either. Each frame is a carefully constructed fiction, a selective memory that omits more than it reveals.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600" alt="Urban photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600" alt="City scene" class="blog-img">
                </div>

                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Walking the same streets day after day, you start to see patterns in the chaos. The way people move through space, the rhythms of traffic lights, the shadows that dance across concrete at exactly 3:47 PM.</p>

                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sometimes the best shots are the ones you almost miss, the ones you catch out of the corner of your eye while looking for something else entirely.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1000" alt="Street detail" class="blog-img">
                </div>

                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The digital age has made us all photographers, but it hasn't made photography any easier. If anything, the abundance of images makes it harder to create something that matters.</p>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Every photograph is a conversation between light and shadow, between what's revealed and what's concealed.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Architecture" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Urban detail" class="blog-img">
                </div>

                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. The camera sees differently than the eye, and that's both its limitation and its power.</p>
            `
        },
        '003': {
            title: 'Blog 003',
            date: '09/03/2025',
            content: `
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Rain on the lens creates its own kind of poetry, distorting reality into something more impressionistic, more honest somehow. The city looks different when it's wet, like it's revealing its true nature.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600" alt="Rainy street" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600" alt="Night scene" class="blog-img">
                </div>

                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit. There's a certain kind of magic in the mundane, in finding beauty in parking lots and chain-link fences and peeling paint. Anyone can make a sunset look beautiful, but it takes real vision to see the poetry in decay.</p>

                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. I've been thinking about the ethics of street photography lately, about the responsibility we have to the people we photograph without asking.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1000" alt="Urban exploration" class="blog-img">
                </div>

                <p>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Are we documenting reality or exploiting it? The answer probably depends on the intention behind the camera, the respect we bring to the moment.</p>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Black and white strips away the distraction of color, forces the viewer to focus on form and contrast and texture.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600" alt="B&W photography" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600" alt="Monochrome" class="blog-img">
                </div>

                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati. Sometimes it feels like a cliché, but there's a reason the masters preferred it.</p>
            `
        },
        '004': {
            title: 'Blog 004',
            date: '09/04/2025',
            content: `
                <p>Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi. The morning light has a quality that afternoon can never match, something about the angle and the softness and the way it catches dust particles suspended in the air. Golden hour gets all the attention, but blue hour is where the real magic happens.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Morning light" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600" alt="Blue hour" class="blog-img">
                </div>

                <p>Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. I've been experimenting with long exposures lately, letting motion blur into abstraction. Cars become streaks of light, pedestrians become ghosts, the city transforms into something fluid and dreamlike.</p>

                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. It's a different way of seeing time, compressing minutes into a single frame, showing movement and stillness simultaneously.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=1000" alt="Long exposure" class="blog-img">
                </div>

                <p>Quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. The thing about photography is that it's both immediate and delayed. You capture the moment instantly, but you don't really see it until later, in the editing, in the reviewing, in the slow consideration of what you actually caught.</p>

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint. Sometimes I see the shot weeks after I took it, suddenly understanding what I was trying to say without knowing I was saying it.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600" alt="Street moment" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600" alt="Captured time" class="blog-img">
                </div>

                <p>Molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus. The camera is just a tool, but in the right hands it becomes a way of thinking, a way of seeing, a way of being in the world.</p>
            `
        },
        '005': {
            title: 'Blog 005',
            date: '09/05/2025',
            content: `
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. There's something hypnotic about industrial landscapes, all those geometric shapes and harsh angles and unexpected pockets of beauty in places designed purely for function. Warehouses, factories, shipping containers—spaces that were never meant to be photographed but somehow demand it.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600" alt="Industrial" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600" alt="Urban geometry" class="blog-img">
                </div>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. I've been thinking about negative space lately, about what's not in the frame being as important as what is. Every photograph is as much about exclusion as inclusion, about what you choose to leave out.</p>

                <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. The edges of the frame are where the magic happens, where the viewer's imagination takes over and completes the story you've started.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1000" alt="Minimal composition" class="blog-img">
                </div>

                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores. Digital photography has made me lazy in some ways, more careful in others. The ability to take thousands of shots means I do, but it also means I'm more willing to experiment, to try things I'd never waste film on.</p>

                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sometimes I miss the discipline of film, the way it forced you to think before you clicked, to be more intentional about every frame.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600" alt="Film aesthetic" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600" alt="Digital capture" class="blog-img">
                </div>

                <p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. But there's no going back, only forward, finding new ways to bring that same intentionality to digital shooting.</p>
            `
        },
        '006': {
            title: 'Blog 006',
            date: '09/06/2025',
            content: `
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Weather is a photographer's best friend and worst enemy. Rain, fog, snow—they all create atmosphere, mood, visual interest. But they also destroy equipment, obscure details, make everything more difficult. The best conditions for photography are often the worst conditions for being outside.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600" alt="Fog" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600" alt="Weather" class="blog-img">
                </div>

                <p>Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate. I've been working on a series about reflections lately, about how the world doubles and distorts in puddles and windows and polished surfaces. It's like finding a parallel universe right here in the ordinary world.</p>

                <p>Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. The reflected world is often more interesting than the real one, more abstract, more open to interpretation.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1000" alt="Reflections" class="blog-img">
                </div>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. The hardest part of photography isn't taking the pictures, it's editing them down. For every shot I share, there are a hundred I delete, a thousand I never even review. Learning what to keep is harder than learning what to shoot.</p>

                <p>Corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. It's a muscle you have to develop, the ability to be ruthlessly critical of your own work while still maintaining the confidence to create more.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600" alt="Selection process" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600" alt="Editing" class="blog-img">
                </div>

                <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Kill your darlings, they say, and it's true in photography as much as in writing.</p>
            `
        },
        '007': {
            title: 'Blog 007',
            date: '09/07/2025',
            content: `
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis. Nighttime photography opens up a completely different world, where artificial light becomes the subject as much as anything it illuminates. Neon signs, streetlights, car headlights, the glow from windows—each source creates its own color temperature, its own mood, its own story.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600" alt="Night lights" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600" alt="Urban night" class="blog-img">
                </div>

                <p>Est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. The city at night is a different beast than the city during the day. It's more honest somehow, stripped of its daytime pretenses, revealing its true character in the interplay of light and shadow.</p>

                <p>Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis. I've been thinking about the relationship between photography and memory, about how every photograph is both a preservation and a betrayal of the original moment.</p>

                <div class="blog-images-single">
                    <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=1000" alt="Memory and moment" class="blog-img">
                </div>

                <p>Aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. We remember the photograph, not the moment. The image replaces the reality, becomes more real than the thing it represents. It's a strange kind of power, and a strange kind of responsibility.</p>

                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur. Maybe that's why I keep shooting, keep trying to capture something true even knowing it's impossible. The attempt is the point, not the success.</p>

                <div class="blog-images-row">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600" alt="Truth in images" class="blog-img">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600" alt="Reality captured" class="blog-img">
                </div>

                <p>Aut perferendis doloribus asperiores repellat. Nam libero tempore, cum soluta nobis est eligendi optio. The camera lies, but it tells beautiful lies, and sometimes that's enough.</p>
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
