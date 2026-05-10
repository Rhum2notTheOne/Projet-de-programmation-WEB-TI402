document.addEventListener('DOMContentLoaded', () => {

  const hb = document.querySelector('.hamburger');
  const mn = document.querySelector('.mobile-nav');

  if (hb && mn) {
    hb.addEventListener('click', () => {
      hb.classList.toggle('open');
      mn.classList.toggle('open');
    });
    mn.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hb.classList.remove('open');
        mn.classList.remove('open');
      });
    });
  }

  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');

  if (track && dots.length) {
    let cur = 0;
    const tot = dots.length;
    let timer;

    function go(i) {
      cur = ((i % tot) + tot) % tot;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle('on', j === cur));
    }

    function rs() {
      clearInterval(timer);
      timer = setInterval(() => go(cur + 1), 5000);
    }

    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); rs(); }));
    if (prev) prev.addEventListener('click', () => { go(cur - 1); rs(); });
    if (next) next.addEventListener('click', () => { go(cur + 1); rs(); });

    rs();

    const w = document.querySelector('.carousel');
    if (w) {
      let sx = 0;
      w.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
      w.addEventListener('touchend', e => {
        const d = sx - e.changedTouches[0].clientX;
        if (Math.abs(d) > 50) { go(d > 0 ? cur + 1 : cur - 1); rs(); }
      }, { passive: true });
    }
  }

  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const f = q.closest('.faq');
      const wasOpen = f.classList.contains('open');
      document.querySelectorAll('.faq').forEach(x => x.classList.remove('open'));
      if (!wasOpen) f.classList.add('open');
    });
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll('.fg').forEach(g => g.classList.remove('err'));

      const n = form.querySelector('#name');
      const em = form.querySelector('#email');
      const msg = form.querySelector('#message');

      if (n && n.value.trim().length < 2) {
        n.closest('.fg').classList.add('err'); ok = false;
      }
      if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())) {
        em.closest('.fg').classList.add('err'); ok = false;
      }
      if (msg && msg.value.trim().length < 10) {
        msg.closest('.fg').classList.add('err'); ok = false;
      }

      if (ok) {
        form.classList.add('cf-hidden');
        const s = document.querySelector('.fsuccess');
        if (s) s.classList.add('on');
      }
    });

    form.querySelectorAll('input, textarea').forEach(i => {
      i.addEventListener('input', () => i.closest('.fg').classList.remove('err'));
    });
  }

  const obs = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  const tabs = document.querySelectorAll('.ptab');
  const conts = document.querySelectorAll('.pcontent');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('on'));
      t.classList.add('on');
      conts.forEach(c => c.classList.toggle('on', c.dataset.tab === t.dataset.tab));
    });
  });

});
