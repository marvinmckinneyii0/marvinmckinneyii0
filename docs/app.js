'use strict';
const projects={
  savvy:{name:'Savvy Analytics',category:'CONSULTING & SYSTEMS',status:'Active practice',summary:'Practical AI transformation for smaller businesses.',purpose:'Connect AI and data work to a business problem people can actually recognize: an unclear decision, a slow process, or a missing capability.',focus:['AI strategy, readiness reviews, and delivery roadmaps.','Analytics, data engineering, and workflow automation.','AI-enabled websites and bounded customer experiences for HVAC and home services.'],state:'Savvy Analytics is my consulting practice. The current small-business focus is HVAC and home services, alongside AI transformation and custom software work for larger teams.'},
  saint:{name:'SavvyClean / SAINT',category:'DATA QUALITY PRODUCT',status:'In development',summary:'A clearer foundation for reporting, operations, and AI.',purpose:'Make data quality problems visible and give people a way to review proposed cleaning and validation steps before relying on the result.',focus:['Data validation and understandable cleaning behavior.','Reviewable changes and clear human checkpoints.','Data readiness, observability, and governance as product design goals.'],state:'SavvyClean and SAINT refer to the same product. It is under active development. This portfolio describes the direction of the work; it is not a live product demo or a claim of general availability.'},
  cortex:{name:'SavvyCortex',category:'AI BUSINESS OS',status:'In development',summary:'Exploring how AI can coordinate business operations.',purpose:'Bring business objectives, knowledge, and workflows into a more coherent operating system for smaller organizations.',focus:['Coordination across business workflows and AI agents.','Clear permissions, evaluation, and human approval.','An architecture that can grow beyond an internal prototype.'],state:'SavvyCortex is a separate product initiative from SavvyClean / SAINT. It remains in development. Private business administration and internal AIOS infrastructure are separate from this portfolio.'},
  warfox:{name:'WarFox',category:'WORLD BUILDING & VISUAL DESIGN',status:'Ongoing creative work',summary:'An original 22nd-century universe about humanity and power.',purpose:'Explore identity, augmentation, corporate power, and the consequences of technological change through characters and a consistent speculative world.',focus:['Character development and canon continuity.','Grounded 22nd-century technology and minimalist visual design.','Writing and visual storytelling that keep human choices at the center.'],state:'WarFox is my ongoing creative project. The visual here is original architectural artwork for this portfolio, rather than a released scene or a finished product.'}
};
const dialog=document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const project=projects[button.dataset.project];
  document.getElementById('dialog-title').textContent=project.name;
  document.getElementById('dialog-category').textContent=project.category;
  document.getElementById('dialog-status').textContent=project.status;
  document.getElementById('dialog-summary').textContent=project.summary;
  document.getElementById('dialog-purpose').textContent=project.purpose;
  document.getElementById('dialog-state').textContent=project.state;
  document.getElementById('dialog-focus').replaceChildren(...project.focus.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
  const websiteLink=document.getElementById('dialog-website');
  const websiteUrl=button.dataset.project==='savvy'?window.PortfolioLinks?.savvyAnalytics:null;
  if(websiteUrl&&new URL(websiteUrl).protocol==='https:'){
    websiteLink.href=websiteUrl;
    websiteLink.hidden=false;
  }else{
    websiteLink.hidden=true;
    websiteLink.removeAttribute('href');
  }
  document.getElementById('dialog-email').href='mailto:marvinmckinneyii0@gmail.com?subject='+encodeURIComponent('Let’s talk about '+project.name);
  document.body.classList.add('dialog-open');
  dialog.showModal();
}));
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  let count=0;
  document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});
  document.getElementById('filter-status').textContent=count+' project'+(count===1?'':'s')+' shown.';
}));
const form=document.getElementById('brief-form'),steps=[...document.querySelectorAll('.brief-step')],next=document.getElementById('brief-next'),back=document.getElementById('brief-back'),hint=document.getElementById('brief-hint'),result=document.getElementById('brief-result');
const names=['priority','context','stage'];
let currentStep=0,currentBrief=null;
form.hidden=false;
function selected(name){return form.querySelector('input[name="'+name+'"]:checked')?.value;}
function updateStep(focus){
  steps.forEach((step,i)=>step.hidden=i!==currentStep);
  next.disabled=!selected(names[currentStep]);
  next.innerHTML=currentStep===2?'See my starting point <span aria-hidden="true">↗</span>':'Continue <span aria-hidden="true">→</span>';
  back.hidden=currentStep===0;
  hint.hidden=currentStep!==0;
  hint.textContent=next.disabled?'Select one to continue.':'Ready when you are.';
  document.getElementById('step-label').textContent='QUESTION 0'+(currentStep+1)+' / 03';
  document.querySelectorAll('.progress-bars i').forEach((bar,i)=>bar.classList.toggle('filled',i<=currentStep));
  if(focus){const legend=steps[currentStep].querySelector('legend');legend.tabIndex=-1;legend.focus();}
}
form.addEventListener('change',()=>updateStep(false));
back.addEventListener('click',()=>{if(currentStep>0){currentStep--;updateStep(true);}});
form.addEventListener('submit',event=>{
  event.preventDefault();if(!selected(names[currentStep]))return;
  if(currentStep<2){currentStep++;updateStep(true);return;}
  currentBrief=StudioBrief.createBrief(Object.fromEntries(names.map(name=>[name,selected(name)])));
  document.getElementById('result-title').textContent=currentBrief.title;
  document.getElementById('result-description').textContent=currentBrief.description;
  document.getElementById('result-context').textContent=currentBrief.context+' · '+currentBrief.stage+'. '+currentBrief.contextNote;
  document.getElementById('result-steps').replaceChildren(...currentBrief.steps.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
  document.getElementById('brief-email').href=currentBrief.email;
  form.hidden=true;result.hidden=false;result.focus();
});
document.getElementById('brief-reset').addEventListener('click',()=>{
  form.reset();currentStep=0;currentBrief=null;form.hidden=false;result.hidden=true;document.getElementById('copy-brief').textContent='Copy brief';document.getElementById('copy-status').textContent='';updateStep(true);
});
document.getElementById('copy-brief').addEventListener('click',async()=>{
  if(!currentBrief)return;
  try{
    if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(currentBrief.text);
    else{const field=document.createElement('textarea');field.value=currentBrief.text;field.setAttribute('aria-label','Project brief');field.style.position='fixed';field.style.left='-9999px';document.body.append(field);field.select();const ok=document.execCommand('copy');field.remove();if(!ok)throw new Error('Copy unavailable');}
    document.getElementById('copy-brief').textContent='Copied ✓';document.getElementById('copy-status').textContent='Project brief copied to your clipboard.';
  }catch{document.getElementById('copy-status').textContent='Clipboard access is unavailable. Use Email this brief to open the full text in your email app.';document.getElementById('copy-brief').textContent='Use email instead';}
});
updateStep(false);
