const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const serviceSelect=document.getElementById('service');document.querySelectorAll('.package-order').forEach(button=>button.addEventListener('click',()=>{if(serviceSelect)serviceSelect.value=button.dataset.package;document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});}));
const form=document.getElementById('contactForm');form?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const phone=document.getElementById('phone').value.trim();const address=document.getElementById('address').value.trim();const service=document.getElementById('service').value;const message=document.getElementById('message').value.trim();const number=document.getElementById('whatsappNumber').value;const text=`Здравствуйте! Хочу оставить заявку на IT-услуги.

Имя: ${name}
Телефон: ${phone}
Организация / адрес: ${address||'не указано'}
Выбранная услуга: ${service}
Описание: ${message}

Заявка отправлена с сайта Natalya IT.`;window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,'_blank','noopener');});
