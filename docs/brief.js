/* A deterministic guide, based on the visitor's choices. No AI or network calls. */
(function(root){
  'use strict';
  const priorities={
    direction:{label:'A clear AI direction',title:'An AI opportunity & readiness review',description:'Start by connecting your business goals to a small number of practical AI opportunities, then decide what is worth testing.',steps:['Identify the business outcome and the decisions behind it.','Review the process, available data, and practical constraints.','Choose one useful experiment and define how to evaluate it.']},
    workflow:{label:'Less manual work',title:'A focused workflow discovery',description:'Choose one recurring process, map where time is lost, and define a small automation that a real team can use.',steps:['Walk through one recurring task from start to finish.','Identify the systems, handoffs, and human decisions involved.','Scope a first automation with clear boundaries and a success measure.']},
    data:{label:'More dependable data',title:'A data quality & readiness review',description:'Find what makes your data difficult to trust and agree on the smallest useful step toward clearer reporting or AI readiness.',steps:['Choose a dataset and the business decision it supports.','Review quality rules, inconsistencies, and how errors are handled.','Prioritize a validation or reporting improvement with a visible review step.']},
    product:{label:'An AI product',title:'A product feasibility & architecture session',description:'Turn a product idea into a focused first version with a clear user, a bounded workflow, and a way to assess reliability.',steps:['Define the user, their task, and the result they need.','Examine data, integrations, evaluation, and human oversight.','Outline a useful first version and the assumptions it must prove.']}
  };
  const contexts={home:'HVAC / home services',business:'Small or medium business',team:'Product or technical team'};
  const stages={explore:'Exploring possibilities',defined:'A specific problem to solve',scale:'Improving an existing system'};
  function createBrief(answers){
    const p=priorities[answers.priority],context=contexts[answers.context],stage=stages[answers.stage];
    if(!p||!context||!stage) throw new Error('Complete all three questions before creating a brief.');
    const steps=p.steps.slice();
    if(answers.stage==='scale') steps[0]='Review the existing system, its users, and the specific reliability or growth constraint.';
    const contextNote=answers.context==='home' && answers.priority==='workflow' ? 'For home services, we can look at enquiry handling, booking handoffs, or follow-up as possible starting points.' : answers.context==='home' && answers.priority==='direction' ? 'For home services, the review can start with the customer journey and the work your team repeats every day.' : 'The exact scope comes from your workflow, your data, and a conversation.';
    const text=['PROJECT BRIEF FOR MARVIN MCKINNEY','',p.title,'','Priority: '+p.label,'Context: '+context,'Stage: '+stage,'',p.description,'',contextNote,'','A first conversation could cover:',...steps.map((s,i)=>(i+1)+'. '+s),'','This is a suggested starting point; scope and feasibility need a conversation.'].join('\n');
    return {title:p.title,description:p.description,context,stage,contextNote,steps,text,email:'mailto:marvinmckinneyii0@gmail.com?subject='+encodeURIComponent('Project conversation: '+p.title)+'&body='+encodeURIComponent('Hi Marvin,\n\nI used your project guide. Here is my starting brief:\n\n'+text+'\n\nA little more about my situation:\n')};
  }
  const api={createBrief,priorities,contexts,stages};
  if(typeof module!=='undefined'&&module.exports) module.exports=api;
  root.StudioBrief=api;
})(typeof window!=='undefined'?window:globalThis);
