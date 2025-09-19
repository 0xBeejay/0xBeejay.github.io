document.addEventListener('DOMContentLoaded', ()=> {
  document.querySelectorAll('pre code').forEach((block) => {
    const btn = document.createElement('button');
    btn.innerText = 'copy';
    btn.className = 'copy-btn';
    const pre = block.parentNode;
    pre.style.position = 'relative';
    pre.appendChild(btn);
    btn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(block.innerText);
        btn.innerText = 'copied';
        setTimeout(()=> btn.innerText = 'copy', 1500);
      } catch(e) { btn.innerText = 'err'; }
    }
  });
});
