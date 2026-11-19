// Lightbox for the Legal Sphere gallery 
const thumbs   = document.querySelectorAll(".thumb"); 
const lightbox = document.getElementById("lightbox"); 
const lbImg    = document.getElementById("lb-img"); 
const lbCap    = document.getElementById("lb-caption"); 
const btnClose = document.getElementById("lb-close"); 
const btnPrev  = document.getElementById("lb-prev"); 
const btnNext  = document.getElementById("lb-next"); 
let current = 0;        
// index of the image being shown 
let lastFocused = null; // remember which thumbnail opened the lightbox 
   
function show(index) { 
// wrap around at the ends 
current = (index + thumbs.length) % thumbs.length; 
const img = thumbs[current].querySelector("img"); 
const title = thumbs[current].closest("figure").querySelector("h3").textContent; 
lbImg.src = img.src; 
lbImg.alt = img.alt; 
lbCap.textContent = title + " (" + (current + 1) + " of " + thumbs.length + ")"; 
} 
function openLightbox(index) { 
lastFocused = document.activeElement; 
show(index); 
lightbox.hidden = false; 
document.body.style.overflow = "hidden"; // stop page scrolling behind 
btnClose.focus(); 
} 
function closeLightbox() { 
lightbox.hidden = true; 
document.body.style.overflow = ""; 
} 
}); 
if (lastFocused) lastFocused.focus();     // return focus for keyboard users 
thumbs.forEach(function (t, i) { 
t.addEventListener("click", function () { openLightbox(i); }); 
btnClose.addEventListener("click", closeLightbox); 
btnPrev.addEventListener("click", function () { show(current - 1); }); 
btnNext.addEventListener("click", function () { show(current + 1); }); 
// Click on the dark background closes the lightbox 
lightbox.addEventListener("click", function (e) { 
                                  
  
if (e.target === lightbox) closeLightbox(); 
}); 
// Keyboard: Esc closes, arrows move, Tab stays inside the lightbox 
document.addEventListener("keydown", function (e) { 
if (lightbox.hidden) return; 
if (e.key === "Escape") closeLightbox(); 
if (e.key === "ArrowLeft") show(current - 1); 
if (e.key === "ArrowRight") show(current + 1); 
if (e.key === "Tab") { 
const items = [btnClose, btnPrev, btnNext]; 
const first = items[0], last = items[items.length - 1]; 
if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } 
else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } 
} 
});
