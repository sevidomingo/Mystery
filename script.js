document.addEventListener("DOMContentLoaded", () => {

  /*****************
   THINGS
   *****************/

  const INTRO_STEPS = [
  {
    id: "intro-1",
    text: "Hi, Ji !\nYou’re here :))",
    options: [
      {
        label: "Hello",
        next: "intro-hello",
      },
      {
        label: "Wsg",
        next: "intro-wsg",
      }
    ]
  },

  {
    id: "intro-hello",
    text: "Hehe.\nThank you for being here.",
    next: "intro-2"
  },

  {
    id: "intro-wsg",
    text: "You are, pretty boy.\n(Fuck that don't make sense)",
    next: "intro-2"
  },

  {
    id: "intro-2",
    text: "So…",
    options: [
      {
        label: "Whatever",
        next: "intro-whatever"
      },
      {
        label: "*cringes*",
        next: "intro-cringe"
      }
    ]
  },

  {
    id: "intro-whatever",
    text:
      "So cold naman po !\n" +
      "Want to borrow my jacket?\n" +
      "Or I could warm you up na lang?",
    next: "intro-3"
  },

  {
    id: "intro-cringe",
    text:
      "Shut up.\n" +
      "You literally did DnD and League.\n" +
      "I love you, but you’re more cringe.",
    next: "intro-3"
  },

  {
    id: "intro-3",
    text: "Anyway—",
    options: [
      {
        label: "I’m gonna go",
        next: "intro-leave"
      },
      {
        label: "*cringes more*",
        next: "intro-more-cringe"
      }
    ]
  },

  {
    id: "intro-leave",
    text:
      "WAIT—\n" +
      "Okay, okay.\n" +
      "Let’s move forward.\n\n" +
      "How are you?",
    next: "intro-input"
  },

  {
    id: "intro-more-cringe",
    text:
      "HUHU okay wag na lang.\n\n" +
      "How are you feeling?",
    next: "intro-input"
  },

  {
    id: "intro-input",
    text: "I’m _______",
    input: {
      placeholder: "typing…",
      saveAs: "playerFeeling"
    },
    next: "intro-name"
  },

  {
    id: "intro-name",
    text: state =>
      `Hi, ${state.playerFeeling || "there"}.\nI’m Sevi.`,
    options: [
      {
        label: "*Eye roll*",
        next: "intro-ready"
      }
    ]
  },

  {
    id: "intro-ready",
    text: "Okay hehe.\nReady?",
    options: [
      {
        label: "Start",
        action: "START_GAME"
      }
    ]
  }
];



  const LETTERS = {
  1: {
    bg: "linear-gradient(180deg, #1a234a, #0b1020)",
    html: `
      <p><strong>My love,</strong></p>

      <p>
        I just want to preface this by saying I am not a writer. So, this is especially
        difficult to write as I don’t know how to start a letter to someone who already
        knows the worst and best parts of me. I remember how you once worried about
        beginnings — whether greetings were too stiff, whether skipping them would be
        dishonest, whether starting wrong would ruin the truth. So I’ll do what you did.
      </p>

      <p><em>I’ll start uncertain, but honest.</em></p>

      <p>
        Redemption was a hard concept to grasp for me. Maybe because I didn't believe in it.
        Maybe I didn't believe in me. But, now that I'm slowly climbing out the hole life
        and myself dug out, I think I'm starting to get it. Redemption isn't pretending
        nothing happened, it's learning from your past to build a better future, starting
        in the present. It's the kind that doesn't rush forgiveness, the kind that
        understands healing isn't linear —
        <em>na minsan, uulit at uulit before it feels better.</em>
      </p>

      <p>
        I’m sorry my eyes wandered. It was never a lack within you — it was a lack of love
        within myself. Though, I'm sure you're well aware of that now. I just wanted to say
        it again :))
      </p>

      <p>
        I could give a million reasons why my life led me there. I could explain every
        step, every fracture, every moment of weakness. But reasons are not repairs.
      </p>

      <p>
        <del>What mattress</del> <em>(fuck)</em>
      </p>

      <p>
        <strong>What matters is this:</strong><br>
        going forward, I choose differently.
      </p>

      <p>
        I choose to be truthful, I choose integrity.<br>
        I choose to be faithful, I choose love.<br>
        The love I want, I choose to risk it all.<br>
        I choose you — not just in feeling, but in action.
      </p>

      <p>
        I think about puzzles a lot lately. How at first, nothing fits. You force pieces
        together because you want the picture <em>now</em>, and all you do is bend the edges.
        Maybe that was just me.
      </p>

      <p>
        But once you slow down, once I stop insisting on the whole image too early,
        patterns begin to show. One piece clicks. Then another. And suddenly, what felt
        impossible starts to make sense.
      </p>

      <p>
        I don’t think we were broken, especially not beyond repair. I think we were
        unfinished. Still writing our story, still painting our picture.
      </p>

      <p>
        You once wrote about wanting to keep my words somewhere safe, as if they were
        fragile things you didn’t want to lose. I didn’t understand then how sacred that
        kind of care was. Though, it's a little late, better than never?
      </p>

      <p>
        You gave me a handkerchief once — an apology folded into fabric, a promise to stop
        my tears. I think you probably need it more than I do now. But I won't offer it
        back, instead I give you my shoulder
        <em>(shuddup I know I'm too short).</em>
        The handkerchief is mine to keep.
      </p>

      <p>
        And yes — maybe I’m selfish — but in this,
        <em>ikaw lang ang gusto kong hawakan.</em>
        You’re all mine in the way that matters:
        <strong>chosen, protected, stayed with.</strong>
      </p>

      <p>
        You wrote about how love didn’t arrive suddenly for you — how it built itself
        slowly, like shifting tides, memories layering, meaning accumulating. Loving you
        has felt the same.
      </p>

      <p>
        It’s choosing again after disappointment. Staying when leaving would be easier.
        Learning how to be gentle without being careless.
      </p>

      <p>
        I don’t promise perfection.<br>
        <strong>I promise presence.</strong><br>
        I promise to try.
      </p>

      <p>
        I want to rebuild what we had, together. I want to sit with you while the picture
        is still unclear, trusting that if we keep going — patiently, honestly — the image
        will reveal itself.
      </p>

      <p>
        <em>Hindi agad.</em><br>
        <em>Pero darating.</em>
      </p>

      <p>
        So this is me, writing anyway.<br>
        Owning what I broke.<br>
        Choosing to do better.
      </p>

      <p>
        Choosing you — again, and on purpose.
      </p>

      <p><strong>Always and forever, mahal ko.</strong></p>

      <p>
        <strong>Sa’yo pa rin,</strong><br>
        Sevi
      </p>
    `
  },

  2: {
    bg: "linear-gradient(180deg, #0e2a2a, #050b0b)",
    html: `
      <p><strong>Jay,</strong></p>

      <p>
        I’ve been sitting with this for a while, trying to find words that are
        <em>honest without being heavy</em>, and <em>clear without being final</em>.
        I don’t want to speak from hurt, and I don’t want to say anything that
        boxes either of us into something we didn’t consciously choose.
      </p>

      <p>
        <strong>What we had mattered to me.</strong> It was real, and it wasn’t small.
        There was care, connection, laughter, and a closeness I don’t take lightly.
        I don’t regret that, and I don’t want to rewrite it just because things are
        complicated now.
      </p>

      <p>
        I also need to be honest with myself. The way I’ve been holding on —
        living in uncertainty, absorbing pain, trying to understand where I stand —
        has been hurting me more than I can keep carrying.
        That doesn’t erase how I feel about you.
        It just means I need to change how I show up so I’m not stuck in a cycle
        that keeps reopening the same wounds.
      </p>

      <p>
        I’m not asking you to decide anything.
        I know where you are right now is your choice, and I respect that.
        This isn’t me trying to convince you, rush you, or pull you back into something
        you’re not ready for.
        It’s simply me acknowledging my limits with care.
      </p>

      <p>
        I still appreciate you deeply —
        <em>who you are, what we shared, and the ways we showed up for each other
        when things were good</em>.
        I hope, in time, whatever path you’re on feels lighter and more grounded.
        And I hope that if our paths ever cross again in a meaningful way,
        it’s from a place that feels <strong>healthier and kinder for both of us</strong>.
      </p>

      <p>
        If there ever comes a time when you want to reach out with
        <strong>clarity and intention</strong> —
        not out of habit, guilt, or uncertainty — you can.
        I’m not closing the door, and I’m not erasing the past.
        I just can’t stay in a space of resentment, distance, or half-presence anymore.
      </p>

      <p>
        Whatever happens, <em>I’m grateful for what was real between us</em>.
        I truly wish you well.
      </p>

      <p>
        Always,<br>
        I <strong>wambamtripledamn love you</strong>, Ji.<br>
        — <em>Sevi</em>
      </p>

      <p class="closing">This is where it ends.</p>
    `
  }
};

  const DONE_MESSAGES = [
    "Done! Good job!",
    "Congrats! Woo!",
    "Galing :)) I'm proud",
    "That's my pretty boy, hehe",
    "Nice work 💙"
  ];

  /*****************
   * STATE
   *****************/
  const state = {
    mode: "menu", // menu | intro | puzzle | finale | letter
    introIndex: 0,
    level: 1,
    skipsUsed: 0,
    currentLetter: null,
    music: null
  };

  const MAX_SKIPS = 3; // debug mode = 9
  const app = document.getElementById("app");

  function clearScreen() {
    app.innerHTML = "";
  }

  const NOTES = {
  1: "i'll always cherish this, and you",
  2: "wham !",
  3: "you look so cool here, ji ! so nonchalant",
  4: "this is a sunset picture i took when i was in boracay, thought it would be a nice touch.",
  5: "Me with my favorite pretty boy ! I'm happy this wasnt the ending of our story.",
  6: "Shades of blue (This and the rest are pretty hard to do, good luck)",
  7: "Matching ! Thank you for the last month.",
  8: "You'll have a place in my heart.",
  9: "Maybe we can end up like them in the future."
};


  /*****************
   * AUDIO
   *****************/
  const audio = new Audio();
  audio.loop = true;
  audio.volume = 0.1;

  function playSnap() {
    const snap = new Audio("assets/sfx/snap.mp3");
    snap.volume = 0.4;
    snap.play().catch(() => {});
  }

  function playMusic(src, fadeDuration = 800) {
    if (state.music === src) return;

    const fadeSteps = 20;
    const stepTime = fadeDuration / fadeSteps;
    const volumeStep = 1 / fadeSteps;

    if (!audio.paused && audio.volume > 0) {
      let v = audio.volume;
      const fadeOut = setInterval(() => {
        v -= volumeStep;
        if (v <= 0) {
          clearInterval(fadeOut);
          audio.pause();
          audio.volume = 0;
          startNewTrack();
        } else {
          audio.volume = v;
        }
      }, stepTime);
    } else {
      startNewTrack();
    }

    function startNewTrack() {
      state.music = src;
      audio.src = src;
      audio.play().catch(() => {});

      let v = 0;
      const fadeIn = setInterval(() => {
        v += volumeStep;
        if (v >= 1) {
          audio.volume = 1;
          clearInterval(fadeIn);
        } else {
          audio.volume = v;
        }
      }, stepTime);
    }
  }


  /*****************
   * UTILS
   *****************/
  function button(label, onClick) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = onClick;
    return btn;
  }

  function getRandomDoneMessage() {
    return DONE_MESSAGES[Math.floor(Math.random() * DONE_MESSAGES.length)];
  }

  /*****************
   * MENU
   *****************/
  function renderMenu() {
    clearScreen();
    state.mode = "menu";

    const container = document.createElement("div");
    container.className = "menu";

    container.innerHTML = `
      <h1>Memories</h1>
      <button id="beginBtn">Begin</button>
    `;

    app.appendChild(container);

    document.getElementById("beginBtn").onclick = () => {
      playMusic("assets/music/blue.mp3");
      state.currentIntroId = "intro-1";
      renderIntro();
    };
  }

  /*****************
   * INTRO
   *****************/
  function renderIntro() {
  clearScreen();

  const box = document.createElement("div");
  box.className = "intro-box";
  app.appendChild(box);

  const step = INTRO_STEPS.find(s => s.id === state.currentIntroId);
  if (!step) return;

  const text =
    typeof step.text === "function"
      ? step.text(state)
      : step.text;

  const p = document.createElement("p");
  p.innerText = text;
  box.appendChild(p);

  if (step.input) {
    const input = document.createElement("input");
    input.placeholder = step.input.placeholder;
    input.oninput = e => {
      state[step.input.saveAs] = e.target.value;
    };
    box.appendChild(input);
  }

  if (step.options) {
    step.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.label;
      btn.onclick = () => {
        if (opt.startMusic) playMusic(opt.startMusic);

        if (opt.action === "START_GAME") {
          startPuzzles();
          return;
        }

        state.currentIntroId = opt.next;
        renderIntro();
      };
      box.appendChild(btn);
    });
  }

  if (step.next) {
    const btn = document.createElement("button");
    btn.textContent = "Continue";
    btn.onclick = () => {
      state.currentIntroId = step.next;
      renderIntro();
    };
    box.appendChild(btn);
  }
}



  /*****************
   * PUZZLES
   *****************/
  function startPuzzles() {
    state.mode = "puzzle";
    state.level = 1;
    state.skipsUsed = 0;
    renderPuzzle();
  }

function renderPuzzle() {
  clearScreen();
  playMusic("assets/music/yourFace.mp3");

  const title = document.createElement("h2");
  title.textContent = `Puzzle ${state.level}`;

  let note = null;
  if (NOTES[state.level]) {
    note = document.createElement("div");
    note.className = "puzzle-note";
    note.textContent = NOTES[state.level];
  }

  const pieceCount = getPieceCount(state.level);
  const size = Math.sqrt(pieceCount);

  const grid = document.createElement("div");
  grid.className = "puzzle-grid";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const pieces = [];
  let touchStartIndex = null;

  for (let i = 0; i < pieceCount; i++) {
    const img = document.createElement("img");
    img.src = getPieceSrc(state.level, i);
    img.dataset.correct = i;
    img.draggable = true;

    /* ===== MOBILE TOUCH ===== */
    img.addEventListener("touchstart", () => {
      touchStartIndex = pieces.indexOf(img);
    }, { passive: true });

    img.addEventListener("touchend", e => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const targetImg = target && target.closest(".puzzle-grid img");
      if (!targetImg) return;

      const to = pieces.indexOf(targetImg);
      if (touchStartIndex !== null && to !== -1) {
        swapPieces(pieces, touchStartIndex, to);
      }
      touchStartIndex = null;
    });

    /* ===== DESKTOP DRAG ===== */
    img.ondragstart = e => {
      e.dataTransfer.setData("from", pieces.indexOf(img));
    };

    img.ondragover = e => e.preventDefault();

    img.ondrop = e => {
      e.preventDefault();
      const from = Number(e.dataTransfer.getData("from"));
      const to = pieces.indexOf(img);
      swapPieces(pieces, from, to);
    };

    img.oncontextmenu = e => e.preventDefault();

    pieces.push(img);
    grid.appendChild(img);
  }

  shufflePieces(pieces);

  const skipBtn = button(
    `Skip (${Math.max(0, MAX_SKIPS - state.skipsUsed)})`,
    () => {
      if (state.skipsUsed >= MAX_SKIPS) return;
      state.skipsUsed++;
      nextLevel();
    }
  );

  if (note) {
    app.append(title, note, grid, skipBtn);
  } else {
    app.append(title, grid, skipBtn);
  }
}



  function isSolved(pieces) {
    return pieces.every((img, index) => {
      const srcIndex = Number(
        img.src.split("/").pop().replace(".png", "")
      );
      return srcIndex === index;
    });
  }


  function shufflePieces(pieces) {
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      // swap visuals only
      [pieces[i].src, pieces[j].src] =
        [pieces[j].src, pieces[i].src];

      [pieces[i].dataset.correct, pieces[j].dataset.correct] =
        [pieces[j].dataset.correct, pieces[i].dataset.correct];
    }
  }

  function nextLevel() {
    state.level++;
    if (state.level > 9) {
      renderFinale();
    } else {
      renderPuzzle();
    }
  }

  function getPieceCount(level) {
    if (level <= 3) return 9;
    if (level <= 6) return 16;
    return 25;
  }

  function getPieceSrc(level, index) {
    const layer = level <= 3 ? 1 : level <= 6 ? 2 : 3;
    return `assets/images/layer_${layer}/puzzle_${level}/${index}.png`;
  }

  function showLevelComplete() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const message = getRandomDoneMessage();

    overlay.innerHTML = `
      <div class="popup">
        <p><strong>${message}</strong></p>
        <button id="nextLevelBtn">Let’s go</button>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("nextLevelBtn").onclick = () => {
      overlay.remove();
      nextLevel();
    };
  }

  function swapPieces(pieces, from, to) {
  if (from === to) return;

  // swap visuals
  [pieces[from].src, pieces[to].src] =
    [pieces[to].src, pieces[from].src];

  // swap correctness metadata
  [pieces[from].dataset.correct, pieces[to].dataset.correct] =
    [pieces[to].dataset.correct, pieces[from].dataset.correct];

  playSnap();

  if (isSolved(pieces)) {
    setTimeout(showLevelComplete, 300);
  }
}




  /*****************
   * FINALE
   *****************/
  function renderFinale() {
    state.mode = "finale";
    clearScreen();

    const container = document.createElement("div");
    container.className = "finale";

    const img = document.createElement("img");
    img.src = "assets/final/final.png";
    img.className = "final-image";

    const hv = button("Happy Valentines", () => showLetter(0));
    const ty = button("Thank You", () => showLetter(1));

    container.append(img, hv, ty);
    app.appendChild(container);
  }


  /*****************
   * LETTERS
   *****************/
  function showWhenTimeIsRight() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    overlay.innerHTML = `
      <div class="popup">
        <p><strong>When the time is right :))</strong></p>
        <button id="closePrompt">Okay</button>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("closePrompt").onclick = () => {
      overlay.remove();
    };
  }

  function showLetter(index) {
    state.mode = "letter";
    state.currentLetter = index;
    clearScreen();

    playMusic("assets/music/herEyes.mp3", 1400);

    const text = document.createElement("div");
    text.className = "letter";
    const letter = LETTERS[index + 1];
    text.innerHTML = letter.html;
    document.body.style.background = letter.bg;


    const switchBtn = button(
      index === 0 ? "Thank You" : "Happy Valentines",
      () => showLetter(index === 0 ? 1 : 0)
    );

    const backToFinale = button("See the picture again", () => {
      document.body.style.background = ""; // reset background
      renderFinale();
    });

    const restart = button("Fresh Start?", showWhenTimeIsRight);

    app.append(text, switchBtn, backToFinale, restart);

  }

  /*****************
   * START
   *****************/
  renderMenu();
});
