const games = [
  {
    slug: 'westeros-atlas', title: 'Atlas of Ice & Fire', type: 'Exploration / fantasy',
    url: 'https://oviiy.github.io/mw_lab/games/westeros-atlas/dist/',
    thought: 'Reading A Song of Ice and Fire made the world feel larger than any single map. The atlas turns that curiosity into a place to wander, while distinguishing book facts from interpretation.',
    play: 'Pan across the bilingual world map, search for a place or house, then step into one of 40 explorable 3D locations. Open a location card and try its guided tour.',
    cue: 'Try: search for Winterfell, then enter the scene.',
    image: 'An illustrated map from the Atlas of Ice and Fire'
  },
  {
    slug: 'open-outcry', title: 'Open Outcry: 1987', type: 'Market game / decision making',
    url: 'https://oviiy.github.io/mw_lab/games/trading-floor-87/dist/',
    thought: 'A market crash becomes more immediate when you have to make the next trade yourself. This game makes price, inventory, and panic part of the same fast decision.',
    play: 'You are on the S&P 500 futures floor on Black Monday. Click shouted bids and offers, watch the big board, and manage your position before the heat of a crowded book catches up.',
    cue: 'Try: take one attractive quote, then flatten with Space.',
    image: 'The trading pit and quote board in Open Outcry 1987'
  },
  {
    slug: 'particell', title: 'Particell', type: 'Physics / sandbox',
    url: 'https://oviiy.github.io/mw_lab/games/Particell.html',
    thought: 'A handful of local rules can create surprising behavior. Particell gives every cell a temperature, then lets heat, phase changes, and materials do the storytelling.',
    play: 'Paint matter into a small world, change the weather, and watch reactions emerge. Pour lava into water for steam and obsidian, or cool and heat materials directly.',
    cue: 'Try: choose Free Sandbox, then paint lava into water.',
    image: 'The Particell thermal sandbox and its material palette'
  },
  {
    slug: 'three-body', title: 'Three Body', type: 'Simulation / space',
    url: 'https://oviiy.github.io/mw_lab/games/ThreeBody.html',
    thought: 'The beauty of the three-body problem is how quickly simple gravity becomes choreography—or chaos. This simulation makes those orbits something you can inspect.',
    play: 'Start a preset such as the figure-eight or Lagrange configuration, then pan, zoom, and watch the bodies and their trails. The display also tracks energy error.',
    cue: 'Try: start the figure-eight preset and watch the trails.',
    image: 'The starfield and three-body gravity simulation'
  },
  {
    slug: 'tiny-gods', title: 'Tiny Gods', type: 'Puzzle / civilization',
    url: 'https://oviiy.github.io/mw_lab/games/tiny-gods.html',
    thought: 'What if every match-three move altered a living world? Tiny Gods links the familiar puzzle board to the needs of a civilization across seven ages.',
    play: 'Swap neighboring tiles to match rain, sun, earth, fire, or spirit. Feed and shelter your people, respond to threats, and guide them from standing stones toward the future.',
    cue: 'Try: start a New World and make a rain or sun match.',
    image: 'The title and puzzle world of Tiny Gods'
  },
  {
    slug: 'hexloop', title: 'Hexloop', type: 'Tactics / roguelike',
    url: 'https://oviiy.github.io/mw_lab/games/hexloop/dist/',
    thought: 'Movement becomes the weapon: a glowing tail can enclose enemies instead of striking them directly. Every hex asks you to think about space and the next turn.',
    play: 'Trace a route across the hex grid, loop around enemies to clear them, and choose upgrades as the sectors grow tougher. The opening tutorial teaches the gesture.',
    cue: 'Try: follow the tutorial and loop your first drone.',
    image: 'The neon hex grid and glowing tail in Hexloop'
  },
  {
    slug: 'proverbs', title: 'Proverbs: Four Paintings', type: 'Logic / art',
    url: 'https://oviiy.github.io/mw_lab/games/proverbs/',
    thought: 'A painting is more rewarding to uncover when each patch is earned. Four hidden artworks become logic puzzles that gradually reveal an image and its sayings.',
    play: 'Choose a painting, then use the numbered regions to decide which cells to fill or leave empty. Zoom into the canvas, use a hint if needed, and collect the sayings.',
    cue: 'Try: choose one painting and solve its first region.',
    image: 'The painting gallery in Proverbs'
  },
  {
    slug: 'cat-run', title: 'Cat Run', type: 'Runner / arcade',
    url: 'https://oviiy.github.io/mw_lab/games/Catrun.html',
    thought: 'A burst of cat zoomies is a natural starting point for a bright, quick arcade game. Short runs and changing obstacles keep the rhythm playful.',
    play: 'Pick Adventure or Endless, then jump and slide through a colorful course. Collect coins, build a combo, and see how far a single run can go.',
    cue: 'Try: choose Endless and clear the first few obstacles.',
    image: 'The colorful Cat Run Zoomies Edition menu'
  },
  {
    slug: 'blitz', title: 'Blitz', type: 'Survival / build crafting',
    url: 'https://oviiy.github.io/mw_lab/games/Blitz.html',
    thought: 'Survival games are most interesting when the build changes your decisions. Blitz drafts a different protocol at the start of each run, with active skills layered over automatic weapons.',
    play: 'Deploy, choose one of three kits, and survive waves in a pixel arena. Move to stay alive; use left and right mouse skills to shape the fight as the build grows.',
    cue: 'Try: deploy, choose a protocol, then use both mouse skills.',
    image: 'The Blitz pixel survivor start screen'
  },
  {
    slug: 'dragon-turf', title: 'Dragon Turf', type: 'Open world / top-down',
    url: 'https://oviiy.github.io/mw_lab/games/dragon-turf/',
    thought: 'A whole city can feel alive without a pile of art assets. This top-down Chinatown is generated in code, then filled with rival crews, traffic, weather, and competing pressures.',
    play: 'Roam six districts, take on jobs, drive, trade contraband, and contest 14 turfs. Police heat rises when crimes are witnessed; rival crews do not wait for you.',
    cue: 'Try: begin a new game and walk down Dragon Street.',
    image: 'The code-generated Chinatown of Dragon Turf'
  },
  {
    slug: 'neon-heist', title: 'Neon Heist', type: 'Open world / 3D',
    url: 'https://oviiy.github.io/mw_lab/games/neon-heist/dist/',
    thought: 'How much of an open-world city can be built procedurally in a browser? Neon Heist explores that question with 3D streets, vehicles, pedestrians, missions, and sound made in code.',
    play: 'Walk or drive through Los Santitos, follow jobs, and watch the city react. A day-night cycle, traffic, wanted system, and enterable shops make room for unscripted moments.',
    cue: 'Try: start the game, then take a walk or enter a car.',
    image: 'The procedural 3D city in Neon Heist'
  }
];

const jump = document.querySelector('#jump-links');
const list = document.querySelector('#game-list');
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

jump.innerHTML = games.map((game, index) => `<a href="#${game.slug}"><small>${String(index + 1).padStart(2, '0')}</small> ${escape(game.title)}</a>`).join('');
list.innerHTML = games.map((game, index) => `
  <article class="game" id="${game.slug}" data-url="${escape(game.url)}" data-title="${escape(game.title)}">
    <div class="game-image">
      <img src="assets/game-lab/${game.slug}.jpg" alt="${escape(game.image)}" loading="lazy" width="1280" height="720">
      <div class="live-frame" hidden></div>
      <span class="image-label">ACTUAL GAME CAPTURE / ${String(index + 1).padStart(2, '0')}</span>
    </div>
    <div class="game-content">
      <div class="game-meta"><span>NO. ${String(index + 1).padStart(2, '0')} / 11</span><span>${escape(game.type)}</span></div>
      <h3>${escape(game.title)}</h3>
      <div class="game-rule"></div>
      <div class="note"><h4>The idea</h4><p>${escape(game.thought)}</p></div>
      <div class="note"><h4>In the game</h4><p>${escape(game.play)}</p></div>
      <p class="demo-cue">${escape(game.cue)}</p>
      <div class="game-actions"><button type="button" class="demo-button" aria-expanded="false">Try the live demo <span aria-hidden="true">↗</span></button><a href="${escape(game.url)}" target="_blank" rel="noopener">Open full game ↗</a></div>
    </div>
  </article>`).join('');

let openGame = null;
function closeDemo(article) {
  if (!article) return;
  const frame = article.querySelector('.live-frame');
  frame.replaceChildren();
  frame.hidden = true;
  article.querySelector('.game-image img').hidden = false;
  article.querySelector('.demo-button').setAttribute('aria-expanded', 'false');
  article.querySelector('.demo-button').innerHTML = 'Try the live demo <span aria-hidden="true">↗</span>';
  article.classList.remove('is-playing');
  if (openGame === article) openGame = null;
}

list.addEventListener('click', event => {
  const button = event.target.closest('.demo-button');
  if (!button) return;
  const article = button.closest('.game');
  if (openGame === article) { closeDemo(article); return; }
  closeDemo(openGame);
  const frame = article.querySelector('.live-frame');
  const iframe = document.createElement('iframe');
  iframe.src = article.dataset.url;
  iframe.title = `${article.dataset.title} playable demo`;
  iframe.allow = 'fullscreen; autoplay; gamepad';
  iframe.loading = 'eager';
  frame.append(iframe);
  frame.hidden = false;
  article.querySelector('.game-image img').hidden = true;
  button.setAttribute('aria-expanded', 'true');
  button.innerHTML = 'Close the demo <span aria-hidden="true">×</span>';
  article.classList.add('is-playing');
  openGame = article;
  article.querySelector('.game-image').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && openGame) closeDemo(openGame);
});
