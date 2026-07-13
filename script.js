// =====================================================
// HAPPY BIRTHDAY SHRAVANI
// SCRIPT.JS - PART 1
// =====================================================

// ==============================
// LOADER
// ==============================

let heartInterval;
let flowerInterval;
let balloonInterval;
let sparkleInterval;

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2500);

});

// ==============================
// ELEMENTS
// ==============================

const lockScreen = document.getElementById("lockScreen");
const website = document.getElementById("website");
const unlockBtn = document.getElementById("unlockBtn");
const password = document.getElementById("password");
const wrongPassword = document.getElementById("wrongPassword");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const typingText = document.getElementById("typingText");

// Hide website initially

website.style.display = "none";

// =====================================================
// TYPEWRITER VARIABLES
// =====================================================

const message = `

Dear Shravani,

Wishing you a very Happy Birthday! 🎉

May your life always be filled with happiness, success, good health and beautiful memories.

Keep smiling,
keep shining,
and never stop being the amazing person you are.

Thank you for being one of my favourite people.

May this year bring countless reasons to smile.

Happy Birthday once again.

❤️

`;

let index = 0;

// =====================================================
// TYPEWRITER FUNCTION
// =====================================================

function typeWriter(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

// =====================================================
// PASSWORD
// =====================================================

unlockBtn.addEventListener("click",()=>{

    const pass=password.value.trim();

    if(pass==="28/09/2004"){

        unlockWebsite("👨‍💻 Developer Mode Activated");

    }

    else if(pass==="28/07/2006"){

        unlockWebsite("🎉 Welcome Shravani ❤️");

    }

    else{

        wrongPassword.style.color="#ff4d4d";

        wrongPassword.innerHTML="❌ Wrong Password";

    }

});

// =====================================================
// UNLOCK WEBSITE
// =====================================================

function unlockWebsite(messageText){

    wrongPassword.style.color="#00ff99";

    wrongPassword.innerHTML=messageText;

    setTimeout(()=>{

        lockScreen.style.display="none";

        website.style.display="block";

        typingText.innerHTML="";

        index=0;

        typeWriter();

        music.play().catch(()=>{});

        musicBtn.classList.add("music-playing");

        musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

    },1000);
       

}

// =====================================================
// MUSIC BUTTON
// =====================================================

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.classList.add("music-playing");

        musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

    }

    else{

        music.pause();

        musicBtn.classList.remove("music-playing");

        musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

    }

});

// =====================================================
// COUNTDOWN
// =====================================================

const today = new Date();

let year = today.getFullYear();

let birthday = new Date(year,6,28);

if(today > birthday){

    birthday = new Date(year+1,6,28);

}

birthday = birthday.getTime();

const countdownInterval = setInterval(()=>{

    const now = new Date().getTime();

    const distance = birthday-now;

    if(distance<=0){

    clearInterval(countdownInterval);

    birthdayCelebration();

    return;

}

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

},1000);

// =====================================================
// SCRIPT.JS - PART 2
// Cake + Gift + Hearts + Flowers + Balloons + Stars
// =====================================================

// ==============================
// CAKE
// ==============================

const cake = document.getElementById("cake");

cake.addEventListener("click", () => {

    celebrate();
    startFireworks();

    cake.innerHTML = `
        <div class="wish-card">

            <div class="wish-cake">🎂</div>

            <h2>✨ Wish Made ✨</h2>

            <p>

                May every dream you wish for today
                find its way into your life.

                <br><br>

                Happy Birthday, Shravani ❤️

            </p>

        </div>
    `;

});

// ==============================
// GIFT
// ==============================

const gift=document.getElementById("gift");

if(gift){

gift.addEventListener("click",()=>{

    celebrate();

    startFireworks();

    gift.style.transform="scale(1.08) rotate(5deg)";

    gift.innerHTML = `

<div class="gift-message">

    <div class="gift-emoji">🎉</div>

    <div class="gift-title">
        Happy Birthday Shravani ❤️
    </div>

    <div class="gift-text">

        Wishing you a day filled with joy,
        laughter and unforgettable moments.

        <br><br>

        May all your dreams come true,
        and may you always stay as wonderful
        as you are.

        <br><br>

        💜 Keep smiling. Keep shining. 💜

        <br><br>

        <strong>Happy Birthday! 🎂</strong>

    </div>

</div>

`;

});

}

// ==============================
// FLOATING HEARTS
// ==============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,2000);

// ==============================
// FLOWERS
// ==============================

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.fontSize=(20+Math.random()*20)+"px";

    flower.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },10000);

}

setInterval(createFlower,2500);

// ==============================
// BALLOONS
// ==============================

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    const balloons=["🎈","🎈","🎈","🎈"];

    balloon.innerHTML=
    balloons[Math.floor(Math.random()*balloons.length)];

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.animationDuration=(8+Math.random()*5)+"s";

    document.body.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },14000);

}

setInterval(createBalloon,6000);

// ==============================
// STARS
// ==============================

for(let i=0;i<25;i++){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(8+Math.random()*12)+"px";

    star.style.animationDelay=Math.random()*2+"s";

    document.body.appendChild(star);

}

// ==============================
// SIMPLE CONFETTI
// ==============================

function celebrate(){

    for(let i=0;i<35;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML="🎊";

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-40px";

        confetti.style.fontSize=(18+Math.random()*18)+"px";

        confetti.style.pointerEvents="none";

        confetti.style.transition="4s linear";

        confetti.style.zIndex="9999";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";

            confetti.style.transform=
            "rotate(720deg)";

        },20);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

}

// ==============================
// FIREWORKS
// ==============================

function startFireworks(){

    for(let i=0;i<10;i++){

        setTimeout(()=>{

            celebrate();

            createHeart();

        },i*180);

    }

}

// =====================================================
// SCRIPT.JS - PART 3
// Lightbox + Scroll Reveal + Final Effects
// =====================================================

// ==============================
// IMAGE LIGHTBOX
// ==============================

const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

let currentImage = 0;

function openLightbox(index){

    currentImage = index;

    lightbox.style.display = "flex";

    lightboxImg.src = images[index].src;

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openLightbox(index);

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

// ==============================
// KEYBOARD CONTROLS
// ==============================

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

    if(e.key==="ArrowRight"){

        currentImage++;

        if(currentImage>=images.length){

            currentImage=0;

        }

        lightboxImg.src=images[currentImage].src;

    }

    if(e.key==="ArrowLeft"){

        currentImage--;

        if(currentImage<0){

            currentImage=images.length-1;

        }

        lightboxImg.src=images[currentImage].src;

    }

});

// ==============================
// SCROLL REVEAL
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});

// ==============================
// GLOW BUTTONS
// ==============================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.classList.add("glow");

    });

    btn.addEventListener("mouseleave",()=>{

        btn.classList.remove("glow");

    });

});

// ==============================
// PARALLAX HERO
// ==============================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-image");

    if(hero){

        hero.style.transform=
        `translateY(${window.scrollY*0.2}px) scale(1.08)`;

    }

});

// ==============================
// RANDOM SPARKLES
// ==============================

function sparkle(){

    const spark=document.createElement("div");

    spark.innerHTML="✨";

    spark.style.position="fixed";

    spark.style.left=Math.random()*100+"vw";

    spark.style.top=Math.random()*100+"vh";

    spark.style.fontSize=(10+Math.random()*15)+"px";

    spark.style.pointerEvents="none";

    spark.style.opacity="1";

    spark.style.transition="2s";

    spark.style.zIndex="999";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.style.opacity="0";

        spark.style.transform="scale(2)";

    },50);

    setTimeout(()=>{

        spark.remove();

    },2000);

}

setInterval(sparkle,3500);

// ==============================
// FINAL MESSAGE
// ==============================

console.log("🎉 Happy Birthday Shravani ❤️");
console.log("Website Developed with ❤️ by Ayush");

// =====================================================
// END OF SCRIPT.JS
// =====================================================

// ==========================================
// GRAND BIRTHDAY CELEBRATION
// ==========================================

let celebrationStarted = false;

function birthdayCelebration(){

    if(celebrationStarted) return;

    celebrationStarted = true;

    const overlay = document.getElementById("birthdayOverlay");
    const text = document.getElementById("celebrationText");

    overlay.style.display = "flex";

    celebrate();
    startFireworks();

    for(let i=0;i<50;i++){

        setTimeout(createHeart,i*120);

    }

    music.play().catch(()=>{});

    const messages=[

        "Today is your special day 🌸",

        "May every dream come true ✨",

        "May your smile never fade ❤️",

        "May happiness always stay with you 😊",

        "Thank you for being one of my favourite people 💜",

        "Enjoy every moment of your birthday 🎂",

        "Made with ❤️ by Ayush"

    ];

    let i=0;

    function showMessage(){

        if(i>=messages.length){

            setTimeout(()=>{

                overlay.style.display="none";

                document.getElementById("cakeSection")
                .scrollIntoView({

                    behavior:"smooth"

                });

            },3000);

            return;

        }

        text.style.opacity=0;

        setTimeout(()=>{

            text.innerHTML=messages[i];

            text.style.opacity=1;

            i++;

            setTimeout(showMessage,2500);

        },300);

    }

    showMessage();

}