const LOGIN_PASSWORD = "180418082803";
const AUTH_KEY = "gift_site_auth";

const couplePosts = [
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto1.jpg", caption: "Um dia muito especial para nos dois, nosso dia 28. eu estava nervoso e ansioso para esse momento meu amor, lembro de ter decidido tudo um dia antes e foi aquela correria para comprar tudo kkk. Pedi ajuda da malu, da maria clara e até da sua mãe, quem diria kk, meu coração até erravas as batidas." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto2.jpg", caption: "aqui eu tava me tremendo tanto que esqueci de ajoelhar KKK, mas deu tudo certo no final, eu te amo tanto que eu acho que nem nesse momento eu consegui mostrar 1% desse amor todo vida, eu te quero pra sempre." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto3.jpg", caption: "Esse dia foi mágico né kkk..." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto4.jpg", caption: "Minha foto favorita e também o dia em que sua mãe deixou você ir pra 'longe' comigo, ela confiou kkk." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto5.jpg", caption: "Foto fofa kkk." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto6.jpg", caption: "Acredito que seja top fotos midia que a gente tem fácil." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto7.jpg", caption: "e esse dia, dia em que a gente saiu pela primeira vez e eu conheci a sua avó, dia memorável kkkkkkk." },
  { user: "Caio e Maria Eduarda", avatar: "foto1.jpg", image: "foto8.jpg", caption: "Foto vibe um pouco pinterest misturado com TUMBLR." }
];

const coupleReels = [
  { user: "@Caio e Maria Eduarda", video: "video1.mp4", poster: "foto1.jpg", caption: "Registrando aqui o dia do pedido né kkkk." },
  { user: "@Caio e Maria Eduarda", video: "video2.mp4", poster: "foto2.jpg", caption: "Dia que quebrou seu chinelo KKKKKKKKKKKK." },
  { user: "@Caio e Maria Eduarda", video: "video3.mp4", poster: "foto3.jpg", caption: "Diz que eu não te amo agr diz ai." },
  { user: "@Caio e Maria Eduarda", video: "video4.mp4", poster: "foto4.jpg", caption: "Não me lembro quando que foi isso." },
  { user: "@Caio e Maria Eduarda", video: "video5.mp4", poster: "foto5.jpg", caption: "Mortos pós piscina KKKK com os celulares prestes a explodir." },
  { user: "@Caio e Maria Eduarda", video: "video6.mp4", poster: "foto6.jpg", caption: "Dormimo aq KKKKKKKKKKK." }
];

const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");
const tabButtons = document.querySelectorAll(".tab");
const feedList = document.getElementById("feedList");
const reelList = document.getElementById("reelList");

const panels = {
  feed: document.getElementById("panel-feed"),
  reels: document.getElementById("panel-reels")
};

function syncViewportHeight() {
  document.documentElement.style.setProperty("--real-vh", `${window.innerHeight}px`);

  const vv = window.visualViewport;
  let overlayOffset = 0;

  if (vv) {
    // iOS Safari can overlay browser chrome over the page; compensate overlays for that area.
    overlayOffset = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop));
  }

  document.documentElement.style.setProperty("--browser-ui-offset", `${overlayOffset}px`);
}

function createPostCard(post) {
  return `
    <article class="post" data-like-card>
      <div class="post-header">
        <div class="post-author">
          <img src="${post.avatar}" alt="avatar do casal">
          <span>${post.user}</span>
        </div>
        <span class="menu-dot">...</span>
      </div>
      <div class="media-wrap">
        <img class="post-image" src="${post.image}" alt="foto do casal">
      </div>
      <div class="post-actions">
        <div class="left-actions">
          <button type="button" class="like-btn" data-liked="false" aria-label="curtir">&#9825;</button>
          <span class="plain-icon" aria-hidden="true">&#128172;</span>
          <span class="plain-icon" aria-hidden="true">&#10148;</span>
        </div>
        <span class="plain-icon" aria-hidden="true">&#128278;</span>
      </div>
      <p class="caption"><b>${post.user}</b>${post.caption}</p>
    </article>
  `;
}

function createReelCard(reel) {
  return `
    <article class="reel-item" data-like-card>
      <div class="media-wrap reel-media-wrap">
        <video class="reel-video" loop playsinline muted preload="metadata" poster="${reel.poster}">
          <source src="${reel.video}" type="video/mp4">
        </video>
        <span class="sound-indicator" data-sound-indicator>Som desligado</span>
        <button type="button" class="like-btn reel-like-btn" data-liked="false" aria-label="curtir">&#9825;</button>
        <div class="reel-info">
          <p class="reel-user">${reel.user}</p>
          <p class="reel-caption">${reel.caption}</p>
        </div>
      </div>
    </article>
  `;
}

function renderContent() {
  feedList.innerHTML = couplePosts.map(createPostCard).join("");
  reelList.innerHTML = coupleReels.map(createReelCard).join("");
}

function heartBurst(targetWrap) {
  const heart = document.createElement("span");
  heart.className = "like-burst";
  heart.innerHTML = "&#10084;";
  targetWrap.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function toggleLike(button, forceLike) {
  const likeCard = button.closest("[data-like-card]");
  const wrap = likeCard.querySelector(".media-wrap");
  const liked = button.dataset.liked === "true";
  const shouldLike = forceLike ? true : !liked;

  if (liked === shouldLike) {
    if (forceLike) {
      heartBurst(wrap);
    }
    return;
  }

  button.dataset.liked = shouldLike ? "true" : "false";
  button.classList.toggle("liked", shouldLike);
  button.innerHTML = shouldLike ? "&#10084;" : "&#9825;";

  if (shouldLike) {
    heartBurst(wrap);
  }
}

function toggleVideoSound(video) {
  const reelCard = video.closest(".reel-item");
  const indicator = reelCard.querySelector("[data-sound-indicator]");

  video.muted = !video.muted;
  indicator.textContent = video.muted ? "Som desligado" : "Som ligado";
  indicator.classList.add("show");

  if (indicator._timer) {
    clearTimeout(indicator._timer);
  }
  indicator._timer = setTimeout(() => {
    indicator.classList.remove("show");
  }, 850);
}

function bindInteractionEvents() {
  document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLike(button, false);
    });
  });

  document.querySelectorAll(".post-image").forEach((image) => {
    image.addEventListener("dblclick", () => {
      const card = image.closest("[data-like-card]");
      const likeBtn = card.querySelector(".like-btn");
      toggleLike(likeBtn, true);
    });
  });

  document.querySelectorAll(".reel-video").forEach((video) => {
    let clickTimer = null;

    video.addEventListener("click", () => {
      clickTimer = setTimeout(() => {
        toggleVideoSound(video);
        clickTimer = null;
      }, 220);
    });

    video.addEventListener("dblclick", () => {
      if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
      }

      const card = video.closest("[data-like-card]");
      const likeBtn = card.querySelector(".reel-like-btn");
      toggleLike(likeBtn, true);
    });
  });
}

function setupReelsObserver() {
  const videos = document.querySelectorAll(".reel-video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!panels.reels.classList.contains("active")) {
          entry.target.pause();
          return;
        }

        if (entry.intersectionRatio >= 0.75) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: [0.25, 0.75] }
  );

  videos.forEach((video) => observer.observe(video));
}

function pauseAllReels() {
  document.querySelectorAll(".reel-video").forEach((video) => video.pause());
}

function playFirstReel() {
  const first = document.querySelector(".reel-video");
  if (first) {
    first.play().catch(() => {});
  }
}

function openApp() {
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
}

function selectTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  Object.entries(panels).forEach(([name, panel]) => {
    panel.classList.toggle("active", name === tabName);
  });

  if (tabName === "reels") {
    playFirstReel();
  } else {
    pauseAllReels();
  }
}

renderContent();
bindInteractionEvents();
setupReelsObserver();
syncViewportHeight();

window.addEventListener("resize", syncViewportHeight);
window.addEventListener("orientationchange", () => {
  setTimeout(syncViewportHeight, 120);
});
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", syncViewportHeight);
  window.visualViewport.addEventListener("scroll", syncViewportHeight);
}

if (sessionStorage.getItem(AUTH_KEY) === "ok") {
  openApp();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === LOGIN_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, "ok");
    errorText.textContent = "";
    openApp();
  } else {
    errorText.textContent = "Senha incorreta. Tente novamente.";
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => selectTab(button.dataset.tab));
});
