
/* ==================================================
   多田道場 JS PART 1
   メニュー・スクロール・基本操作
================================================== */

/* =========================
   ハンバーガーメニュー
========================= */

const menuBtn = document.getElementById('menuBtn');
const navDrawer = document.getElementById('navDrawer');

menuBtn.addEventListener('click', () => {

const isOpen = navDrawer.classList.toggle('open');

menuBtn.classList.toggle('open', isOpen);

});

/* ナビリンク押したら閉じる */

document.querySelectorAll('.nav-link')
.forEach(link => {

link.addEventListener('click', () => {

navDrawer.classList.remove('open');

menuBtn.classList.remove('open');

});

});

/* =========================
   ドロワー外クリックで閉じる
========================= */

document.addEventListener('click', (e) => {

if (

!navDrawer.contains(e.target) &&
!menuBtn.contains(e.target)

) {

navDrawer.classList.remove('open');

menuBtn.classList.remove('open');

}

});

/* =========================
   スムーズスクロール
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener('click', (e) => {

const targetId = anchor.getAttribute('href');

if (targetId === '#') return;

const target = document.querySelector(targetId);

if (!target) return;

e.preventDefault();

const headerHeight =
document.getElementById('header').offsetHeight;

window.scrollTo({

top:

target.offsetTop - headerHeight - 10,

behavior: 'smooth'

});

});

});

/* =========================
   スクロール進捗バー
========================= */

const progressBar =
document.getElementById('progressBar');

window.addEventListener('scroll', () => {

const scrollTop = window.scrollY;

const docHeight =
document.documentElement.scrollHeight
- window.innerHeight;

const progress =
(scrollTop / docHeight) * 100;

progressBar.style.width = progress + '%';

});



/* ==================================================
   多田道場 JS PART 2
   スクロール演出・アニメーション・仕上げ
================================================== */

/* =========================
   スクロールアニメーション（フェードイン）
========================= */

const revealEls = document.querySelectorAll('.rv');

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add('on');

observer.unobserve(entry.target); // 1回だけ発火

}

});

}, {

threshold: 0.15,

rootMargin: '0px 0px -60px 0px'

});

revealEls.forEach(el => {

observer.observe(el);

});

/* =========================
   ヘッダー影エフェクト
========================= */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

if (window.scrollY > 10) {

header.style.boxShadow =
'0 6px 18px rgba(0,0,0,0.08)';

} else {

header.style.boxShadow =
'0 2px 10px rgba(0,0,0,0.05)';

}

}, { passive: true });

/* =========================
   スクロール方向で軽く動き（高級感）
========================= */

let lastScroll = 0;

window.addEventListener('scroll', () => {

const current = window.scrollY;

const hero = document.querySelector('.hero-content');

if (!hero) return;

/* 上下で微妙に動く */

hero.style.transform =
`translateY(${current * 0.05}px)`;

lastScroll = current;

});

/* =========================
   ボタン・カード微アニメ（追加演出）
========================= */

document.querySelectorAll('.activity-card, .schedule-card, .fee-box')
.forEach(el => {

el.addEventListener('mouseenter', () => {

el.style.transform = 'translateY(-5px) scale(1.01)';

el.style.transition = '0.3s';

});

el.addEventListener('mouseleave', () => {

el.style.transform = 'translateY(0) scale(1)';

});

});

/* =========================
   完了ログ（デバッグ用）
========================= */

console.log("多田道場サイト：読み込み完了");

document.querySelectorAll('a[href="#contact"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.getElementById('contact');
    const header = document.getElementById('header');

    const offset =
      target.offsetTop - header.offsetHeight - 10;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});