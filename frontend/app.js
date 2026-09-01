const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const messages=$('#messages'), prompt=$('#prompt');
function add(text,type='ai'){const el=document.createElement('div');el.className='msg '+type;el.innerHTML=`<span class="avatar">${type==='ai'?'PT':'U'}</span><div><b>${type==='ai'?'PURPLE TRASH':'YOU'}</b><p>${escapeHtml(text).replace(/\n/g,'<br>')}</p></div>`;messages.appendChild(el);messages.scrollTop=messages.scrollHeight}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
$('#composer').addEventListener('submit',async e=>{e.preventDefault();const text=prompt.value.trim();if(!text)return;add(text,'user');prompt.value='';add('Task received. Connect a provider in the backend adapter to generate a model response. For security workflows, keep the target and authorization scope explicit.','ai')});
$('#newChat').onclick=()=>{messages.innerHTML='';add('New session initialized. Core ready.','ai')};
$$('.chip').forEach(b=>b.onclick=()=>{prompt.value=b.textContent;prompt.focus()});
$$('.nav').forEach(b=>b.onclick=()=>{ $$('.nav').forEach(x=>x.classList.remove('active'));b.classList.add('active');add(`${b.textContent.trim()} module selected.`,'ai')});
