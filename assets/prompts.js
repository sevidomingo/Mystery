const INTRO_STEPS = [
  {
    id: "intro-1",
    text: "Hi, Ji !\nYou’re here :))",
    options: [
      {
        label: "Hello",
        next: "intro-hello",
        startMusic: "blue.mp3"
      },
      {
        label: "Wsg",
        next: "intro-wsg",
        startMusic: "blue.mp3"
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
    text: "You are, pretty boy.",
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

