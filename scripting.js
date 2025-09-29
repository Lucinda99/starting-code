
// Minimal JS to power interactions referenced by the HTML
document.documentElement.setAttribute('data-theme','light');

function togglePanel(){
  const p = document.getElementById('customPanel');
  if(!p) return;
  p.style.display = p.style.display === 'block' ? 'none' : 'block';
}

function changeTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
}

function changeColor(varName, value){
  document.documentElement.style.setProperty(`--${varName}`, value);
}

function changeFontSize(val){
  document.documentElement.style.fontSize = val + 'px';
  const el = document.getElementById('fontSizeValue');
  if(el) el.textContent = val + 'px';
}

function changeBorderRadius(val){
  document.documentElement.style.setProperty('--radius', val + 'px');
  const el = document.getElementById('borderRadiusValue');
  if(el) el.textContent = val + 'px';
}

function setActiveNav(el){
  document.querySelectorAll('.nav-item').forEach(i=> i.classList.remove('active'));
  el.classList.add('active');
}

function toggleDropdown(btn){
  const menu = btn.nextElementSibling;
  if(!menu) return;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  setTimeout(()=> document.addEventListener('click', function handler(e){
    if(!btn.contains(e.target)) { menu.style.display='none'; document.removeEventListener('click', handler) }
  }), 10);
}

function toggleChip(el){
  el.classList.toggle('active');
}

function removeChip(e, chip){
  e.stopPropagation();
  chip.remove();
}

function updateSliderValue(inputId, displayId){
  const input = document.getElementById(inputId);
  const display = document.getElementById(displayId);
  if(!input || !display) return;
  display.textContent = input.value + '%';
}

function updateOpacity(val){
  document.documentElement.style.setProperty('--card-shadow', `0 4px 6px rgba(0,0,0,${val/100 * 0.12})`);
}

function openTab(evt, id){
  document.querySelectorAll('.tab-link').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  evt.currentTarget.classList.add('active');
  document.getElementById(id).classList.add('active');
}

function showToast(msg, type='info'){
  const c = document.getElementById('toastContainer');
  if(!c) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = 'background:var(--card-bg); border:1px solid var(--border-color); padding:10px 12px; border-radius:8px; margin-bottom:8px; box-shadow:var(--card-shadow)';
  toast.textContent = msg;
  c.appendChild(toast);
  setTimeout(()=> toast.style.opacity=0, 2700);
  setTimeout(()=> toast.remove(), 3000);
}

function setClockType(type){
  document.getElementById('digitalToggle').classList.toggle('active', type==='digital');
  document.getElementById('analogToggle').classList.toggle('active', type==='analog');
  document.getElementById('analog-clock-container').style.display = type==='analog' ? 'block' : 'none';
}

function handleFormSubmit(e){
  e.preventDefault();
  showToast('Form submitted — thank you!', 'success');
}

function toggleAccordion(header){
  header.classList.toggle('open');
  const content = header.nextElementSibling;
  if(content) content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function openModal(){ document.getElementById('modal').style.display='flex' }
function closeModal(){ document.getElementById('modal').style.display='none' }
function closeAlert(el){ el.remove() }
function editItem(btn){ showToast('Edit item — not implemented','info') }
function deleteItem(btn){ btn.closest('tr').remove(); showToast('Item deleted','warning') }
function animateProgress(id, val){ const el = document.getElementById(id); if(el) el.style.width = val + '%'}
function changePage(p){ showToast('Page: ' + p, 'info') }
function navigateBreadcrumb(label){ showToast('Navigate: ' + label, 'info') }
function selectListItem(li){ document.querySelectorAll('.list-item').forEach(x=>x.classList.remove('selected')); li.classList.add('selected') }
