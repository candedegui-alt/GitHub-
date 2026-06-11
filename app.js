/* ===================== STARPOINT · Mockup — interacciones ===================== */
(function () {
  'use strict';

  var LABELS = {
    inicio: 'Inicio',
    vivo: 'En vivo',
    copa: 'Máster Cup',
    stats: 'Stats · Premier Pádel',
    comunidad: 'Comunidad',
    membresias: 'Membresías',
    perfil: 'Perfil'
  };

  var views = document.querySelectorAll('.view');
  var tabbarBtns = document.querySelectorAll('.tabbar-btn');
  var label = document.getElementById('screenLabel');

  /* ---------- Navegación entre pantallas ---------- */
  function showScreen(name) {
    views.forEach(function (v) {
      v.classList.toggle('is-active', v.id === 'view-' + name);
    });
    tabbarBtns.forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-nav') === name);
    });
    if (label) label.textContent = 'Pantalla: ' + (LABELS[name] || name);
    // resetear el scroll de la vista activa
    var active = document.getElementById('view-' + name);
    if (active) {
      var sc = active.querySelector('.scroll');
      if (sc) sc.scrollTop = 0;
    }
  }

  document.addEventListener('click', function (e) {
    var nav = e.target.closest('[data-nav]');
    if (nav) {
      showScreen(nav.getAttribute('data-nav'));
    }
  });

  /* ---------- Enlaces directos por pantalla (#vivo, #stats, …) + modo captura ---------- */
  function initFromUrl() {
    var h = (location.hash || '').replace('#', '');
    if (LABELS[h]) showScreen(h);
    if (/[?&]solo=1/.test(location.search)) document.body.classList.add('solo');
  }
  initFromUrl();
  window.addEventListener('hashchange', initFromUrl);

  /* ---------- Selección de cámara ---------- */
  var camChips = document.getElementById('camChips');
  var camLabel = document.getElementById('camLabel');
  if (camChips) {
    camChips.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      camChips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-on'); });
      chip.classList.add('is-on');
      if (camLabel) camLabel.textContent = chip.getAttribute('data-cam');
    });
  }

  /* ---------- Pantalla dividida ---------- */
  var splitToggle = document.getElementById('splitToggle');
  var playerWrap = document.getElementById('playerWrap');
  if (splitToggle && playerWrap) {
    splitToggle.addEventListener('click', function () {
      var on = playerWrap.classList.toggle('split');
      splitToggle.classList.toggle('is-on', on);
      splitToggle.innerHTML = on
        ? '<span class="st-ico">⊟</span> Volver a pantalla completa'
        : '<span class="st-ico">⊞</span> Pantalla dividida';
    });
  }

  /* ---------- Tabs del reproductor en vivo ---------- */
  var liveTabs = document.getElementById('liveTabs');
  if (liveTabs) {
    liveTabs.addEventListener('click', function (e) {
      var tab = e.target.closest('.tab');
      if (!tab) return;
      var name = tab.getAttribute('data-tab');
      liveTabs.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('is-on'); });
      tab.classList.add('is-on');
      document.querySelectorAll('#view-vivo .tab-pane').forEach(function (p) {
        p.classList.toggle('is-on', p.id === 'tab-' + name);
      });
    });
  }

  /* ---------- Votaciones (predicción + Máster Cup) ---------- */
  document.querySelectorAll('[data-vote]').forEach(function (group) {
    var opts = group.querySelectorAll('.vote-opt');
    group.addEventListener('click', function (e) {
      var opt = e.target.closest('.vote-opt');
      if (!opt || group.dataset.voted) return;
      group.dataset.voted = '1';
      // porcentaje aleatorio realista, sesgado hacia el voto elegido
      var a = 45 + Math.floor(Math.random() * 25); // 45–69
      var pcts = [a, 100 - a];
      var chosen = Array.prototype.indexOf.call(opts, opt);
      if (chosen === 1) pcts.reverse();
      opts.forEach(function (o, i) {
        var bar = o.querySelector('.vo-bar i');
        var pct = o.querySelector('.vo-pct');
        if (bar) bar.style.width = pcts[i] + '%';
        if (pct) pct.textContent = pcts[i] + '%';
      });
      opt.classList.add('voted');
      var hint = group.querySelector('.vote-hint');
      if (hint) hint.textContent = '¡Voto registrado! +50 pts para tu Fantasy.';
    });
  });

  /* ---------- Velocímetro animado (Stats) ---------- */
  var speedNum = document.getElementById('speedNum');
  if (speedNum) {
    var speeds = [187, 173, 165, 191, 178, 169, 184, 196, 172];
    var i = 0;
    setInterval(function () {
      // solo animar si la pantalla de stats está visible
      var statsView = document.getElementById('view-stats');
      if (!statsView || !statsView.classList.contains('is-active')) return;
      i = (i + 1) % speeds.length;
      speedNum.textContent = speeds[i];
    }, 1600);
  }

})();
