/* ============================================================
   Configuracao
   ============================================================ */
const LOGIN_PASSWORD_HASH = "0b3057f0372777c74411eed7bcca8d97bc7780e7a184bbec8a1ae3b0731be1f8";
const AUTH_KEY = "gift_site_auth";
const LOGIN_LOOP_START = 4.26;
const LOGIN_LOOP_END = 4.86;
const LOGIN_UNLOCK_END = 9.99;
const LOGIN_LOOP_FRAME_COUNT = 36;
const LOGIN_LOOP_FRAME_MS = 40;
const DIRECT_DELAY_MS = 30000;
const STORY_DURATION_MS = 6000;
const FEED_AUDIO_VOLUME = 0.28;
const DIRECT_SENDER = "amor 🤍";
const DIRECT_MESSAGE_TEXT = `Olá meu amor, se você entrou aqui, provavelmente conseguiu acertar a senha...
bom, fiz isso tudo com muito amor, carinho e dedicação, para você meu amor; 
sei que pode parecer algo simples, mas eu me empenhei muito por  horas 
foram noites de sono que eu nao reclamo por não ter dormido, mas fico feliz porque
cheguei exatamente no resultado que eu queria.
Bom, venho preparando isso porque sei que não estariamos/estaremos juntos no dia 28.04
então, pra não passar em branco, eu elaborei algo com bastante dedicação pensando em nós
um aplicativo, semelhante a uma rede social, nossa... com nossos momentos, nossa musica...
usei sua princesa favorita, a 'merida' kkk, sabia que isso iria lhe impressionar.
fico triste por não estar com você mas feliz ao mesmo tempo por ver que você está se divertindo
bastante.
queria te entregar algo mesmo estando a mais de 10 mil km de distancia...
acredito que isso tudo não foi 1% do quanto eu te amo vida, como eu citei em uma das fotos
você me faz tão feliz, eu sou tão grato por ter você ao meu lado, cada momento com você pra mim
se torna especial demais, você me faz querer viver, você faz eu me sentir vivo, acordar sem uma mensagem sua
no dia seguinte nem em outra realidade é comum mais.
quero realizar todos os meus planos com você ao meu lado, quero crescer com você nessa vida, viajar, acordar ao seu lado
toda manhã, dormir com você todas as noites, abraçadinhos, tomar nosso café da manhã, nosso almoço e nosso jantar diariamente
e eu vou fazer tudo isso acontecer meu amor.
obrigado por tanto, eu to com muita saudade vida, demais que chega a doer o peito... mas em breve estaremos juntinhos de novo, eu te amo muito
a merida pode ser a boa princesa que a disney possui, mas você, é a princesa mais linda e perfeita que a disney não tem e eu tenho, feliz 1 mês, eu te amo.`;

/* ============================================================
   Conteudo
   ============================================================ */
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

const coupleStories = [
  { user: "Caio e Maria Eduarda", src: "stories1.jpeg", type: "image", label: "story 1", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories2.mp4", type: "video", label: "story 2", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories3.jpeg", type: "image", label: "story 3", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories4.jpeg", type: "image", label: "story 4", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories5.jpeg", type: "image", label: "story 5", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories6.jpeg", type: "image", label: "story 6", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories7.mp4", type: "video", label: "story 7", caption: "" },
  { user: "Caio e Maria Eduarda", src: "stories8.mp4", type: "video", label: "story 8", caption: "" }
];

/* ============================================================
   Elementos da pagina
   ============================================================ */
const loginScreen = document.getElementById("loginScreen");
const loginVideo = document.getElementById("loginVideo");
const loginLoopCanvas = document.getElementById("loginLoopCanvas");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");
const tabButtons = document.querySelectorAll(".tab");
const storyList = document.getElementById("storyList");
const storyViewer = document.getElementById("storyViewer");
const storyViewerAvatar = document.getElementById("storyViewerAvatar");
const storyViewerUser = document.getElementById("storyViewerUser");
const storyViewerImage = document.getElementById("storyViewerImage");
const storyViewerVideo = document.getElementById("storyViewerVideo");
const storyViewerCaption = document.getElementById("storyViewerCaption");
const storyProgress = document.getElementById("storyProgress");
const storyClose = document.getElementById("storyClose");
const storyPrev = document.getElementById("storyPrev");
const storyNext = document.getElementById("storyNext");
const feedList = document.getElementById("feedList");
const reelList = document.getElementById("reelList");
const feedAudio = document.getElementById("feedAudio");
const directButton = document.getElementById("directButton");
const directBadge = document.getElementById("directBadge");
const directView = document.getElementById("directView");
const directToast = document.getElementById("directToast");
const directToastAction = document.getElementById("directToastAction");

let directTimerStarted = false;
let directMessageArrived = false;
let directMessageOpened = false;
let notificationAudioContext = null;
let notificationDuckTimer = null;
let activeStoryIndex = 0;
let storyTimer = null;
let reelsSoundEnabled = false;

/* Paineis principais */
const panels = {
  feed: document.getElementById("panel-feed"),
  reels: document.getElementById("panel-reels"),
  direct: document.getElementById("panel-direct")
};


/* ============================================================
   Utilitarios
   ============================================================ */
async function sha256Text(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
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

function getNotificationAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!notificationAudioContext) {
    notificationAudioContext = new AudioContextClass();
  }

  return notificationAudioContext;
}

function unlockNotificationAudio() {
  const context = getNotificationAudioContext();
  if (context && context.state === "suspended") {
    context.resume().catch(() => {});
  }
}

function duckFeedAudioForNotification() {
  if (!feedAudio || feedAudio.paused) {
    return;
  }

  if (notificationDuckTimer) {
    clearTimeout(notificationDuckTimer);
  }

  feedAudio.volume = Math.min(feedAudio.volume, 0.08);
  notificationDuckTimer = setTimeout(() => {
    feedAudio.volume = FEED_AUDIO_VOLUME;
    notificationDuckTimer = null;
  }, 1350);
}

function playDirectNotificationSound() {
  const context = getNotificationAudioContext();
  if (!context || context.state === "suspended") {
    return;
  }

  duckFeedAudioForNotification();

  const now = context.currentTime;
  const masterGain = context.createGain();
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.42, now + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.74);
  masterGain.connect(context.destination);

  [
    { frequency: 783.99, start: 0, duration: 0.11 },
    { frequency: 987.77, start: 0.1, duration: 0.12 },
    { frequency: 1318.51, start: 0.22, duration: 0.24 }
  ].forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = now + note.start;
    const endAt = startAt + note.duration;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(note.frequency, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(1.15, startAt + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, endAt);

    oscillator.connect(gain);
    gain.connect(masterGain);
    oscillator.start(startAt);
    oscillator.stop(endAt + 0.02);
  });

  const sparkle = context.createOscillator();
  const sparkleGain = context.createGain();
  sparkle.type = "triangle";
  sparkle.frequency.setValueAtTime(2093, now + 0.28);
  sparkle.frequency.exponentialRampToValueAtTime(3136, now + 0.58);
  sparkleGain.gain.setValueAtTime(0.0001, now + 0.28);
  sparkleGain.gain.exponentialRampToValueAtTime(0.28, now + 0.34);
  sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.68);
  sparkle.connect(sparkleGain);
  sparkleGain.connect(masterGain);
  sparkle.start(now + 0.28);
  sparkle.stop(now + 0.7);
}

/* ============================================================
   Renderizacao
   ============================================================ */
function createStoryButton(story, index) {
  const preview = story.type === "video"
    ? `<video src="${story.src}" muted playsinline webkit-playsinline preload="metadata"></video>`
    : `<img src="${story.src}" alt="">`;

  return `
    <button class="story-button" type="button" data-story-index="${index}" aria-label="Abrir story ${story.label}">
      <span class="story-ring">
        ${preview}
      </span>
    </button>
  `;
}

function renderStories() {
  if (!storyList) {
    return;
  }

  storyList.innerHTML = coupleStories.map(createStoryButton).join("");
  storyList.querySelectorAll(".story-button").forEach((button) => {
    button.addEventListener("click", () => {
      openStory(Number(button.dataset.storyIndex));
    });
  });
}

function createPostCard(post) {
  return `
    <article class="post" data-like-card>
      <div class="post-header">
        <div class="post-author">
          <img src="${post.avatar}" alt="avatar do casal">
          <span>${post.user}</span>
        </div>
        <span class="menu-dot" aria-hidden="true">✦</span>
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

function renderDirectEmpty() {
  if (!directView) {
    return;
  }

  directView.innerHTML = `
    <div class="direct-empty">
      <div class="direct-empty-icon" aria-hidden="true">✉</div>
      <h2>Não há nada aqui</h2>
      <p>Por enquanto, nenhuma mensagem nova apareceu nessa clareira.</p>
    </div>
  `;
}

function renderDirectInbox() {
  if (!directView) {
    return;
  }

  directView.innerHTML = `
    <div class="direct-inbox">
      <h2 class="direct-inbox-title">Direct</h2>
      <button class="direct-card" type="button" id="directMessageCard">
        <img class="direct-avatar" src="foto4.jpg" alt="">
        <span class="direct-card-text">
          <span class="direct-card-name">${DIRECT_SENDER}</span>
          <span class="direct-card-preview">Mensagem nova para você abrir...</span>
        </span>
        <span class="direct-card-dot" aria-hidden="true"></span>
      </button>
    </div>
  `;

  const card = document.getElementById("directMessageCard");
  if (card) {
    card.addEventListener("click", openDirectThread);
  }
}

function openDirectThread() {
  directMessageOpened = true;
  if (directBadge) {
    directBadge.classList.add("hidden");
  }

  if (!directView) {
    return;
  }

  directView.innerHTML = `
    <div class="direct-thread">
      <button class="direct-back" type="button" id="directBackButton">Voltar</button>
      <div class="direct-thread-header">
        <img class="direct-thread-avatar" src="foto4.jpg" alt="">
        <h2 class="direct-thread-title">${DIRECT_SENDER}</h2>
      </div>
      <div class="direct-message">${DIRECT_MESSAGE_TEXT}</div>
    </div>
  `;

  const back = document.getElementById("directBackButton");
  if (back) {
    back.addEventListener("click", renderDirectInbox);
  }
}

function showDirectToast() {
  if (!directToast) {
    return;
  }

  playDirectNotificationSound();
  directToast.classList.remove("show");
  directToast.classList.remove("hidden");
  void directToast.offsetWidth;
  requestAnimationFrame(() => directToast.classList.add("show"));
  setTimeout(() => {
    directToast.classList.remove("show");
    setTimeout(() => directToast.classList.add("hidden"), 260);
  }, 5200);
}

function openDirectFromToast() {
  if (directToast) {
    directToast.classList.remove("show");
    directToast.classList.add("hidden");
  }

  selectTab("direct");
}

function deliverDirectMessage() {
  if (directMessageArrived) {
    return;
  }

  directMessageArrived = true;
  if (directBadge && !directMessageOpened) {
    directBadge.classList.remove("hidden");
  }
  renderDirectInbox();
  showDirectToast();
}

function startDirectTimer() {
  if (directTimerStarted) {
    return;
  }

  directTimerStarted = true;
  setTimeout(deliverDirectMessage, DIRECT_DELAY_MS);
}

function clearStoryTimer() {
  if (storyTimer) {
    clearTimeout(storyTimer);
    storyTimer = null;
  }
}

function restartStoryProgress(durationMs = STORY_DURATION_MS) {
  clearStoryTimer();

  if (storyProgress) {
    storyProgress.style.animation = "none";
    void storyProgress.offsetWidth;
    storyProgress.style.animation = `storyProgress ${durationMs}ms linear forwards`;
  }

  storyTimer = setTimeout(() => {
    showStory(activeStoryIndex + 1);
  }, durationMs);
}

function showStory(index) {
  if (!storyViewer || !coupleStories.length) {
    return;
  }

  if (index >= coupleStories.length) {
    closeStoryViewer();
    return;
  }

  activeStoryIndex = Math.max(0, index);
  const story = coupleStories[activeStoryIndex];

  if (storyViewerAvatar) {
    storyViewerAvatar.src = "foto1.jpg";
  }
  if (storyViewerUser) {
    storyViewerUser.textContent = story.user;
  }
  if (storyViewerCaption) {
    storyViewerCaption.textContent = story.caption;
    storyViewerCaption.classList.toggle("hidden", !story.caption);
  }

  if (storyViewerVideo) {
    storyViewerVideo.pause();
    storyViewerVideo.removeAttribute("src");
    storyViewerVideo.onloadedmetadata = null;
    storyViewerVideo.onended = null;
    storyViewerVideo.classList.add("hidden");
  }

  if (story.type === "video" && storyViewerVideo) {
    pauseFeedAudio();
    storyViewerVideo.src = story.src;
    storyViewerVideo.muted = false;
    storyViewerVideo.volume = 1;
    storyViewerVideo.classList.remove("hidden");

    if (storyViewerImage) {
      storyViewerImage.classList.add("hidden");
    }

    storyViewerVideo.onloadedmetadata = () => {
      if (Number.isFinite(storyViewerVideo.duration) && storyViewerVideo.duration > 0) {
        restartStoryProgress(Math.max(2500, storyViewerVideo.duration * 1000));
      }
    };
    storyViewerVideo.onended = showNextStory;
    storyViewerVideo.play().catch(() => {});
  } else if (storyViewerImage) {
    if (!panels.reels.classList.contains("active") && !appShell.classList.contains("hidden")) {
      playFeedAudio();
    }

    storyViewerImage.src = story.src;
    storyViewerImage.classList.remove("hidden");
  }

  const button = storyList ? storyList.querySelector(`[data-story-index="${activeStoryIndex}"]`) : null;
  if (button) {
    button.classList.add("viewed");
  }

  storyViewer.classList.remove("hidden");
  storyViewer.classList.add("show");
  restartStoryProgress();
}

function openStory(index) {
  pauseAllReels();
  showStory(index);
}

function closeStoryViewer() {
  clearStoryTimer();

  if (storyProgress) {
    storyProgress.style.animation = "";
  }
  if (storyViewerVideo) {
    storyViewerVideo.pause();
    storyViewerVideo.removeAttribute("src");
    storyViewerVideo.load();
    storyViewerVideo.onloadedmetadata = null;
    storyViewerVideo.onended = null;
  }
  if (storyViewer) {
    storyViewer.classList.remove("show");
    storyViewer.classList.add("hidden");
  }

  if (panels.reels.classList.contains("active")) {
    playFirstReel();
  } else if (!appShell.classList.contains("hidden")) {
    playFeedAudio();
  }
}

function showPreviousStory() {
  showStory(activeStoryIndex - 1);
}

function showNextStory() {
  showStory(activeStoryIndex + 1);
}

function renderContent() {
  renderStories();
  feedList.innerHTML = couplePosts.map(createPostCard).join("");
  reelList.innerHTML = coupleReels.map(createReelCard).join("");
  renderDirectEmpty();
}

/* ============================================================
   Curtidas e interacoes de midia
   ============================================================ */
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

  reelsSoundEnabled = video.muted;
  document.querySelectorAll(".reel-video").forEach((reelVideo) => {
    const reelIndicator = reelVideo.closest(".reel-item").querySelector("[data-sound-indicator]");
    reelVideo.muted = !reelsSoundEnabled;
    reelIndicator.textContent = reelsSoundEnabled ? "Som ligado" : "Som desligado";
  });

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

/* ============================================================
   Reels e audio
   ============================================================ */
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
          entry.target.muted = !reelsSoundEnabled;
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

function playFeedAudio() {
  if (!feedAudio) {
    return;
  }

  feedAudio.volume = FEED_AUDIO_VOLUME;
  feedAudio.play().catch(() => {});
}

function pauseFeedAudio() {
  if (feedAudio) {
    feedAudio.pause();
  }
}

function pauseAllReels() {
  document.querySelectorAll(".reel-video").forEach((video) => video.pause());
}

function playFirstReel() {
  const first = document.querySelector(".reel-video");
  if (first) {
    first.muted = !reelsSoundEnabled;
    first.play().catch(() => {});
  }
}

/* ============================================================
   Video de entrada
   ============================================================ */
let loginLooping = false;
let loginUnlocked = false;
let loginControlsReady = false;
let loginOpenTimer = null;
let loginLoopPreparing = false;
let loginLoopFrameId = null;
let loginLoopFrames = [];
let loginLoopFrameIndex = 0;
let loginLoopDirection = 1;
let loginLoopLastTs = 0;
const loginLoopContext = loginLoopCanvas ? loginLoopCanvas.getContext("2d") : null;

function stopLoginFrameLoop() {
  if (loginLoopFrameId) {
    cancelAnimationFrame(loginLoopFrameId);
    loginLoopFrameId = null;
  }
  loginLoopLastTs = 0;
}

function makeFrameFromVideo(width, height) {
  const frame = document.createElement("canvas");
  frame.width = width;
  frame.height = height;
  frame.getContext("2d").drawImage(loginVideo, 0, 0, width, height);
  return frame;
}

function drawLoginLoopFrame() {
  if (!loginLoopContext || !loginLoopCanvas || !loginLoopFrames.length) {
    return;
  }

  const frame = loginLoopFrames[loginLoopFrameIndex];
  loginLoopContext.clearRect(0, 0, loginLoopCanvas.width, loginLoopCanvas.height);
  loginLoopContext.drawImage(frame, 0, 0, loginLoopCanvas.width, loginLoopCanvas.height);
}

function animateLoginFrameLoop(timestamp) {
  if (!loginLooping || loginUnlocked || !loginLoopFrames.length) {
    stopLoginFrameLoop();
    return;
  }

  if (!loginLoopLastTs) {
    loginLoopLastTs = timestamp;
  }

  if (timestamp - loginLoopLastTs >= LOGIN_LOOP_FRAME_MS) {
    loginLoopLastTs = timestamp;
    loginLoopFrameIndex += loginLoopDirection;

    if (loginLoopFrameIndex >= loginLoopFrames.length - 1) {
      loginLoopFrameIndex = loginLoopFrames.length - 1;
      loginLoopDirection = -1;
    } else if (loginLoopFrameIndex <= 0) {
      loginLoopFrameIndex = 0;
      loginLoopDirection = 1;
    }

    drawLoginLoopFrame();
  }

  loginLoopFrameId = requestAnimationFrame(animateLoginFrameLoop);
}

function startLoginFrameLoop() {
  if (!loginLoopFrames.length || !loginLoopCanvas) {
    return;
  }

  stopLoginFrameLoop();
  loginLoopFrameIndex = 0;
  loginLoopDirection = 1;
  drawLoginLoopFrame();
  loginScreen.classList.add("loop-canvas-ready");
  loginLoopFrameId = requestAnimationFrame(animateLoginFrameLoop);
}

function waitForLoginVideoMetadata() {
  if (!loginVideo || loginVideo.readyState >= 1) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    loginVideo.addEventListener("loadedmetadata", resolve, { once: true });
  });
}

function seekLoginVideo(time) {
  return new Promise((resolve) => {
    if (!loginVideo) {
      resolve();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) {
        return;
      }
      done = true;
      loginVideo.removeEventListener("seeked", finish);
      resolve();
    };

    loginVideo.addEventListener("seeked", finish);
    loginVideo.currentTime = time;
    setTimeout(finish, 450);
  });
}

async function prepareLoginLoopFrames() {
  if (!loginVideo || !loginLoopCanvas || !loginLoopContext || loginLoopPreparing || loginLoopFrames.length) {
    return;
  }

  loginLoopPreparing = true;

  try {
    await waitForLoginVideoMetadata();
    loginVideo.pause();

    const width = loginVideo.videoWidth || 720;
    const height = loginVideo.videoHeight || 1280;
    loginLoopCanvas.width = width;
    loginLoopCanvas.height = height;

    const frames = [];
    for (let index = 0; index < LOGIN_LOOP_FRAME_COUNT; index += 1) {
      const percent = index / (LOGIN_LOOP_FRAME_COUNT - 1);
      const time = LOGIN_LOOP_START + (LOGIN_LOOP_END - LOGIN_LOOP_START) * percent;
      await seekLoginVideo(time);
      frames.push(makeFrameFromVideo(width, height));

      if (index === 0) {
        loginLoopFrames = frames;
        loginLoopFrameIndex = 0;
        drawLoginLoopFrame();
        loginScreen.classList.add("loop-canvas-ready");
      }
    }

    loginLoopFrames = frames;
    if (loginLooping && !loginUnlocked) {
      startLoginFrameLoop();
    }
  } catch (error) {
    loginVideo.currentTime = LOGIN_LOOP_START;
    loginVideo.pause();
  } finally {
    loginLoopPreparing = false;
  }
}

function revealLoginControls() {
  if (loginControlsReady || loginUnlocked) {
    return;
  }

  loginControlsReady = true;
  loginLooping = true;
  loginScreen.classList.remove("intro-running");
  loginScreen.classList.add("loop-ready");

  if (loginVideo) {
    loginVideo.pause();
    loginVideo.currentTime = LOGIN_LOOP_START;
    prepareLoginLoopFrames();
  }
}

function startLoginVideoIntro() {
  if (!loginVideo) {
    revealLoginControls();
    return;
  }

  loginVideo.muted = true;
  loginVideo.setAttribute("playsinline", "");
  loginVideo.currentTime = 0;

  loginVideo.play().catch(() => {
    revealLoginControls();
  });
}

function finishLoginVideoThenOpen() {
  if (loginUnlocked) {
    return;
  }

  loginUnlocked = true;
  loginLooping = false;
  stopLoginFrameLoop();
  loginScreen.classList.remove("intro-running", "loop-ready", "loop-canvas-ready", "login-shake");
  loginScreen.classList.add("unlocking");

  if (!loginVideo) {
    openApp();
    return;
  }

  const resumeAt = Math.max(loginVideo.currentTime, LOGIN_LOOP_END);
  if (Number.isFinite(loginVideo.duration)) {
    loginVideo.currentTime = Math.min(resumeAt, Math.max(0, loginVideo.duration - 0.1));
  } else {
    loginVideo.currentTime = resumeAt;
  }

  const outroEnd = Number.isFinite(loginVideo.duration)
    ? Math.min(loginVideo.duration, LOGIN_UNLOCK_END)
    : LOGIN_UNLOCK_END;

  const openOnce = () => {
    if (loginOpenTimer) {
      clearTimeout(loginOpenTimer);
      loginOpenTimer = null;
    }
    openApp();
  };

  const watchOutro = () => {
    if (!loginUnlocked || loginScreen.classList.contains("hidden")) {
      return;
    }

    if (loginVideo.currentTime >= outroEnd || loginVideo.ended) {
      openOnce();
      return;
    }

    requestAnimationFrame(watchOutro);
  };

  loginVideo.play().then(() => {
    requestAnimationFrame(watchOutro);
  }).catch(openOnce);

  const fallbackMs = Math.max(900, (outroEnd - loginVideo.currentTime + 0.45) * 1000);
  loginOpenTimer = setTimeout(openOnce, fallbackMs);
}

if (loginVideo) {
  loginVideo.addEventListener("timeupdate", () => {
    if (loginUnlocked) {
      return;
    }

    if (!loginControlsReady && loginVideo.currentTime >= LOGIN_LOOP_START) {
      revealLoginControls();
    }
  });

  loginVideo.addEventListener("ended", () => {
    if (loginUnlocked) {
      openApp();
    } else {
      revealLoginControls();
    }
  });
}

/* ============================================================
   Navegacao principal
   ============================================================ */
function openApp() {
  stopLoginFrameLoop();
  if (loginVideo) {
    loginVideo.pause();
  }
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  if (panels.feed.classList.contains("active")) {
    playFeedAudio();
  }
  startDirectTimer();
}

function selectTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  if (directButton) {
    directButton.classList.toggle("active", tabName === "direct");
  }

  Object.entries(panels).forEach(([name, panel]) => {
    if (panel) {
      panel.classList.toggle("active", name === tabName);
    }
  });

  if (tabName === "reels") {
    pauseFeedAudio();
    playFirstReel();
  } else if (tabName === "feed") {
    pauseAllReels();
    playFeedAudio();
  } else {
    pauseAllReels();
    playFeedAudio();
    if (directMessageArrived) {
      renderDirectInbox();
    } else {
      renderDirectEmpty();
    }
  }
}

/* ============================================================
   Inicializacao e eventos globais
   ============================================================ */
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
} else {
  startLoginVideoIntro();
}

passwordInput.addEventListener("input", () => {
  loginScreen.classList.toggle("is-aiming", passwordInput.value.trim().length > 0);
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  unlockNotificationAudio();

  const enteredPassword = passwordInput.value.trim();
  const enteredPasswordHash = await sha256Text(enteredPassword);

  if (enteredPasswordHash === LOGIN_PASSWORD_HASH) {
    sessionStorage.setItem(AUTH_KEY, "ok");
    errorText.textContent = "";
    finishLoginVideoThenOpen();
  } else {
    loginScreen.classList.remove("login-shake");
    void loginScreen.offsetWidth;
    loginScreen.classList.add("login-shake");
    errorText.textContent = "Senha incorreta. Tente novamente.";
  }
});

document.addEventListener("pointerdown", () => {
  unlockNotificationAudio();

  if (!appShell.classList.contains("hidden") && panels.feed.classList.contains("active") && feedAudio && feedAudio.paused) {
    playFeedAudio();
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => selectTab(button.dataset.tab));
});


if (directButton) {
  directButton.addEventListener("click", () => selectTab("direct"));
}

if (directToastAction) {
  directToastAction.addEventListener("click", openDirectFromToast);
}

if (storyClose) {
  storyClose.addEventListener("click", closeStoryViewer);
}

if (storyPrev) {
  storyPrev.addEventListener("click", showPreviousStory);
}

if (storyNext) {
  storyNext.addEventListener("click", showNextStory);
}

document.addEventListener("keydown", (event) => {
  if (!storyViewer || storyViewer.classList.contains("hidden")) {
    return;
  }

  if (event.key === "Escape") {
    closeStoryViewer();
  } else if (event.key === "ArrowLeft") {
    showPreviousStory();
  } else if (event.key === "ArrowRight") {
    showNextStory();
  }
});
