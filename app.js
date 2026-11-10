'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const jobs=[{"company": "LivePerson GmbH", "role": "Release Lead & Senior Automation Engineer", "dates": "06/2020 – Present", "location": "Magdeburg, Germany", "summary": "", "points": ["Evolved into a release-focused quality leader, aligning engineering teams around clear priorities, accountable decisions and dependable delivery.","Helped turn automation into a practical release enabler, strengthening confidence across interconnected web, API and mobile experiences."]}, {"company": "Synechron Technologies", "role": "Senior Automation Test Engineer", "dates": "04/2019 – 01/2020", "location": "India", "summary": "", "points": ["Made behavior-driven testing more effective for teams, helping streamline regression cycles and accelerate feedback on critical business journeys.","Shared automation knowledge through hands-on coaching while connecting test execution more closely with day-to-day delivery."]}, {"company": "Nisum Technologies", "role": "Automation Team Lead", "dates": "01/2018 – 04/2019", "location": "India", "summary": "", "points": ["Stepped into team leadership, supporting engineers through thoughtful reviews, technical guidance and shared ownership of software quality.","Brought a release-oriented mindset to automation, emphasizing early build feedback and dependable production outcomes."]}, {"company": "Accenture", "role": "Test Automation Engineer", "dates": "01/2015 – 01/2018", "location": "India", "summary": "", "points": ["Built a strong foundation in end-to-end quality engineering by identifying the business journeys that mattered most and making them repeatably testable.","Helped reduce repetitive manual verification through targeted automation, creating more room for exploratory and higher-value testing."]}];
const profiles={automation:{title:'Build confidence into every layer.',text:'11+ years of quality engineering across web, API and mobile. Framework architecture, practical automation and reliable continuous integration.',bullets:['Playwright, Selenium WebDriver, Appium and BDD','Java, JavaScript / Node.js, Postman and REST Assured','GitLab CI/CD, Jenkins and BrowserStack']},leadership:{title:'Connect engineering with delivery.',text:'Release and QA leadership that brings scope, schedules, strategy and people together.',bullets:['Release operations and quality governance for 4 QA engineers at LivePerson','Leadership of 3 automation engineers at Nisum','Technical workshops, Agile coaching and cross-functional quality standards']}};
const stories=[{type:'Automation',metric:'90%',label:'manual suites automated',title:'From repetitive testing to scalable execution',context:'Enterprise testing needed scalable, repeatable automated execution.',action:'Designed an enterprise test framework and transitioned manual suites to automation.',result:'90% of manual test suites automated, yielding $200K in annual savings.'},{type:'Delivery',metric:'70%',label:'less test execution time',title:'Shorter feedback loops. Faster decisions.',context:'Test execution duration slowed feedback.',action:'Overhauled execution pipelines to accelerate test runs.',result:'Overall test execution duration reduced by 70%.'},{type:'Automation',metric:'120h',label:'manual effort saved each month',title:'Make regression work for the team',context:'Recurring regression testing consumed manual effort at Accenture.',action:'Automated high-volume regression suites and prioritized critical business flows.',result:'120 hours of manual testing effort saved monthly.'},{type:'Leadership',metric:'4',label:'engineers in the QA unit',title:'Own the quality of the release',context:'A QA unit needed coordinated release delivery at LivePerson.',action:'Directed scope definition, release scheduling, strategy planning and quality governance.',result:'Accountability for release operations and test deliverables across a 4-engineer QA unit.'}];
const skills={"Test Automation": ["Playwright", "Selenium WebDriver", "Appium", "Cucumber (BDD)", "TestNG", "JUnit"], "Programming Languages": ["Java", "JavaScript / Node.js"], "API Testing": ["Postman", "REST Assured"], "CI/CD & Cloud": ["Jenkins", "GitLab CI/CD", "BrowserStack"], "Version Control & Management": ["Git", "GitHub", "GitLab"], "Defect & Project Tracking": ["JIRA", "HP ALM"], "Methodologies & Processes": ["Agile (Scrum)", "Waterfall", "STLC", "SDLC", "Release Management"]};
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e}
function profile(key){const p=profiles[key],target=$('#brief-content');target.replaceChildren(el('span',key==='automation'?'BUILD / AUTOMATE / OPTIMIZE':'ALIGN / MENTOR / DELIVER','eyebrow'),el('h3',p.title),el('p',p.text));const list=el('ul');p.bullets.forEach(t=>list.append(el('li',t)));target.append(list);$$('[data-profile]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.profile===key)))}
$$('[data-profile]').forEach(b=>b.onclick=()=>profile(b.dataset.profile));profile('automation');
function job(index){const j=jobs[index],target=$('#job');target.replaceChildren(el('span',j.location+' / '+j.dates,'eyebrow'),el('h3',j.company),el('h4',j.role),el('p',j.summary,'job-summary'));const list=el('ul');j.points.forEach(p=>list.append(el('li',p)));target.append(list,el('span',String(index+1).padStart(2,'0')+' / 04','job-count'));$$('[data-job]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.job)===index)))}
jobs.forEach((j,i)=>{const b=el('button');b.dataset.job=i;b.append(el('small','0'+(i+1)),el('strong',j.company),el('span',j.dates));b.onclick=()=>job(i);$('.employers').append(b)});job(0);
function filterStories(filter){$('.stories').replaceChildren();stories.filter(s=>filter==='All'||s.type===filter).forEach(s=>{const card=el('article',undefined,'story');card.append(el('span',s.type.toUpperCase()+' ↗','eyebrow'),el('strong',s.metric,'metric'),el('span',s.label,'metric-label'),el('h3',s.title));const detail=el('details'),summary=el('summary','Explore the story +');detail.append(summary);[['Context',s.context],['Contribution',s.action],['Outcome',s.result]].forEach(([t,v])=>{detail.append(el('h4',t),el('p',v))});card.append(detail);$('.stories').append(card)});$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)))}
$$('[data-filter]').forEach(b=>b.onclick=()=>filterStories(b.dataset.filter));filterStories('All');
function renderSkills(){$('#skill-grid').replaceChildren();Object.entries(skills).forEach(([title,items])=>{const group=el('article'),tags=el('div',undefined,'tags');group.append(el('h3',title));items.forEach(s=>tags.append(el('span',s)));group.append(tags);$('#skill-grid').append(group)})}renderSkills();
function assessRelease(s){
 const total=s.passed+s.failed+s.blocked+s.notrun,pass=total?s.passed/total*100:0,execution=total?(s.passed+s.failed)/total*100:0;
 const hard=[];if(!s.objectives)hard.push('Meet the agreed scope, objectives and acceptance criteria.');if(!s.nonfunctional)hard.push('Meet applicable nonfunctional exit criteria.');if(s.coverage<100)hard.push('Test and pass every identified critical journey.');if(s.critical>0)hard.push('Resolve and retest all release-blocking defects.');if(!total)hard.push('Provide test evidence; an empty suite cannot qualify.');
 const residual=s.failed+s.blocked+s.notrun+s.other>0||pass<s.target;
 const accepted=s.reviewed&&s.accepted&&s.owner.trim().length>0&&s.note.trim().length>0;
 const qa=hard.length?'BLOCKED':residual&&!accepted?'RISK REVIEW REQUIRED':residual?'QA SIGNOFF WITH ACCEPTED RISK':'QA SIGNOFF';
 const status=hard.length?'NO-GO':qa==='RISK REVIEW REQUIRED'?'PENDING RISK REVIEW':!s.ops||!s.approved?'PENDING RELEASE APPROVAL':residual?'GO · ACCEPTED RISK':'GO';
 return {total,pass,execution,hard,residual,accepted,qa,status};
}
function gate(){
 const num=id=>{const e=$('#'+id),n=Number(e.value);return Math.max(0,Math.min(10000,Number.isFinite(n)?Math.floor(n):0))},checked=id=>$('#'+id).checked;
 const s={passed:num('passed'),failed:num('failed'),blocked:num('blocked'),notrun:num('notrun'),coverage:num('coverage'),critical:num('critical-count'),other:num('other-defects'),target:Math.max(1,Math.min(100,num('pass-target'))),objectives:checked('objectives'),nonfunctional:checked('nonfunctional'),reviewed:checked('risk-reviewed'),accepted:checked('risk-accepted'),owner:$('#risk-owner').value,note:$('#risk-note').value,ops:checked('ops-ready'),approved:checked('release-approved')};
 const r=assessRelease(s);$('#coverage-value').textContent=s.coverage+'%';$('#test-metrics').textContent=r.total+' planned · '+r.execution.toFixed(1)+'% executed · '+r.pass.toFixed(1)+'% of planned tests passed';
 $('#test-bar').replaceChildren(...['passed','failed','blocked','notrun'].map(k=>{const x=el('span',undefined,k);x.style.width=(r.total?s[k]/r.total*100:0)+'%';return x}));
 $('#gate-status').textContent=r.status;$('#gate-status').className=r.status.startsWith('GO')?'decision-go':r.status==='NO-GO'?'decision-no':'decision-pending';$('#qa-state').textContent='QA recommendation: '+r.qa;
 const notes=[...r.hard];if(r.residual){notes.push('Residual evidence: '+s.failed+' failed, '+s.blocked+' blocked, '+s.notrun+' not run; '+s.other+' other open defects.');if(r.pass<s.target)notes.push('Pass target not met ('+s.target+'% of planned tests). Any exception requires explicit risk review.');notes.push(r.accepted?'Residual risk acceptance recorded in this simulation.':'Review residual risks and supply an accountable owner/reference, mitigation and explicit acceptance.');}if(!s.ops)notes.push('Confirm operational readiness.');if(!s.approved)notes.push('Obtain accountable stakeholder release approval.');if(!notes.length)notes.push('Example policy gates met. Evidence and approvals apply only to this simulated release.');$('#gate-result').replaceChildren(...notes.map(n=>el('p',n)));
}
$$('#lab input, #lab textarea').forEach(e=>e.addEventListener('input',gate));
$$('[data-scenario]').forEach(b=>b.onclick=()=>{const k=b.dataset.scenario;const values={coverage:k==='blocked'?70:100,passed:k==='blocked'?65:k==='risk'?95:100,failed:k==='blocked'?10:k==='risk'?2:0,blocked:k==='blocked'?5:0,notrun:k==='blocked'?20:k==='risk'?3:0,'critical-count':k==='blocked'?2:0,'other-defects':k==='risk'?2:0,'pass-target':95};Object.entries(values).forEach(([id,v])=>$('#'+id).value=v);['objectives','nonfunctional'].forEach(id=>$('#'+id).checked=true);['risk-reviewed','risk-accepted'].forEach(id=>$('#'+id).checked=false);$('#risk-owner').value='';$('#risk-note').value='';$('#ops-ready').checked=k==='go';$('#release-approved').checked=k==='go';gate()});gate();
let timer;$('#run-demo').onclick=()=>{clearInterval(timer);let i=0;const steps=$$('.pipeline span');steps.forEach(x=>x.className='');$('#run-demo').disabled=true;$('#pipeline-status').textContent='Checking commit…';steps[0].className='active';timer=setInterval(()=>{steps[i].className='done';i++;if(i===steps.length){clearInterval(timer);$('#run-demo').disabled=false;$('#run-demo').textContent='Replay ↻';$('#pipeline-status').textContent='Demo checks passed. Ready for release review.'}else{steps[i].className='active';$('#pipeline-status').textContent='Validating '+steps[i].querySelector('b').textContent.toLowerCase()+'…'}},650)};
$('.motion-toggle').onclick=()=>{const paused=document.body.classList.toggle('paused');$('.motion-toggle').textContent=paused?'Enable animation':'Pause animation';$('.motion-toggle').setAttribute('aria-pressed',String(paused))};$('.theme').onclick=()=>{const light=document.body.classList.toggle('light');$('.theme').setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme')};function progress(){const h=document.documentElement.scrollHeight-innerHeight;$('.progress').style.width=(h>0?scrollY/h*100:0)+'%'}addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();
$('#copy-email').onclick=async()=>{try{await navigator.clipboard.writeText('pradyumnavissapragada@gmail.com');$('#copy-status').textContent='Email copied.'}catch{$('#copy-status').textContent='Copy this address: pradyumnavissapragada@gmail.com'}};
const knowledge=[
{keys:/contact|email|gmail|phone|call|speak|reach|interview|hire|connect/,answer:'You can contact Pradyumna at pradyumnavissapragada@gmail.com or +49 152 38763124. The buttons below open your email app or phone dialer. This guide cannot book a meeting or place a call on your behalf.',contact:true},
{keys:/salary|visa|availab|remote|relocat|start date|notice period/,answer:'The resume does not confirm salary expectations, work authorization, availability or working arrangements. Please contact Pradyumna directly for current details.',contact:true},
{keys:/saving|cost|roi|200|400/,answer:'The updated resume reports $200K in annual cost savings from an enterprise framework that transitioned 90% of manual test suites to automated execution.'},
{keys:/lead|manage|team|release/,answer:'At LivePerson, Pradyumna directs release operations and test deliverables for a 4-engineer QA unit, covering scope, scheduling, strategy and quality governance. At Nisum he supervised 3 automation engineers, reviewed code and oversaw releases. He also runs technical workshops and Agile coaching.'},
{keys:/skill|stack|tool|java|playwright|selenium|appium|api|mobile|framework|automat/,answer:'His resume lists Playwright, Selenium WebDriver, Appium, Cucumber, TestNG and JUnit; Java and JavaScript / Node.js; Postman and REST Assured; and Jenkins, GitLab CI/CD and BrowserStack. His framework experience spans web, API and mobile.'},
{keys:/result|impact|achievement|metric/,answer:'Resume-reported results include 90% of manual suites automated with $200K annual savings, 70% shorter test execution duration, 40% improved coverage at LivePerson, 50% less regression effort at Synechron and 120 hours saved monthly at Accenture.'},
{keys:/award|recognition|savior|furious/,answer:'His organizational performance awards include “The Savior” and “Fast & Furious,” recognizing problem-solving and rapid delivery.'},
{keys:/location|germany|based|live\b/,answer:'Pradyumna is based in Magdeburg, Germany, according to his updated resume.'},
{keys:/synechron/,answer:'At Synechron (April 2019–January 2020), he was a Senior Automation Test Engineer. He built Selenium, Java and Cucumber BDD suites, reduced regression effort and duration by 50%, integrated Jenkins execution and delivered technical workshops.'},
{keys:/nisum/,answer:'At Nisum (January 2018–April 2019), he was an Automation Team Lead, supervising 3 engineers, maintaining Java/Selenium/BDD regression suites, reviewing code and overseeing production releases.'},
{keys:/accenture/,answer:'At Accenture (January 2015–January 2018), he built web and mobile frameworks, improved API validation efficiency and accuracy by 30% with Postman and saved 120 hours of monthly manual effort through regression automation.'},
{keys:/experience|career|company|companies|liveperson|background|about|summary|who/,answer:'Pradyumna Vissapragada is a Senior Test Automation Engineer with 11+ years of experience. His updated resume lists LivePerson (June 2020–present), Synechron (April 2019–January 2020), Nisum (January 2018–April 2019) and Accenture (January 2015–January 2018). He combines automation architecture with QA and release leadership.'},
{keys:/hello|hi\b|hey|thank/,answer:'Hello! I can help you explore Pradyumna’s career, skills, leadership, achievements or contact details. What would you like to know?'}];
const commonFAQs=[
 {keys:/\b(what can you do|help|options|menu|topics|questions|faq)\b/i,answer:"I can answer questions about Pradyumna’s experience, employers, UI/API/mobile automation, frameworks, tools, CI/CD, release leadership, testing strategy, measurable achievements and contact details. What would you like to explore?"},
 {keys:/\b(who (are|is) (you|this)|are you (a bot|human|real)|chatbot)\b/i,answer:"I’m an automated portfolio assistant, not Pradyumna himself. I use information published in this portfolio and can direct you to his email when I can’t verify an answer."},
 {keys:/\b(years|how long|how much experience|seniority)\b/i,answer:"Pradyumna has over 11 years of experience in software quality engineering, automation and release leadership, including roles at LivePerson, Synechron, Nisum and Accenture."},
 {keys:/\b(current role|latest role|present role|job title|position)\b/i,answer:"His portfolio lists his latest role at LivePerson as Release Lead & Senior Automation Engineer, combining quality governance, release coordination and automation engineering."},
 {keys:/\b(why (hire|choose)|strengths|stand out|value bring)\b/i,answer:"His strengths combine hands-on UI, API and mobile automation, scalable test practices, mentoring and evidence-led release decisions. The portfolio also highlights measurable efficiency improvements."},
 {keys:/\b(ui testing|web testing|frontend|end.to.end|e2e|selenium)\b/i,answer:"His web automation background includes Selenium WebDriver, Java and JavaScript-based testing. The portfolio also features an illustrative Playwright and TypeScript framework showcase."},
 {keys:/\b(api testing|rest api|postman|rest assured|backend testing)\b/i,answer:"His API testing experience includes Postman, REST Assured, service validation and integrating API checks into broader test automation."},
 {keys:/\b(mobile testing|android|ios|appium|browserstack)\b/i,answer:"He has worked on mobile automation using Appium and BrowserStack, alongside web and API testing."},
 {keys:/\b(playwright|typescript|type script)\b/i,answer:"The portfolio demonstrates a proposed Playwright + TypeScript architecture for UI and API checks, reusable fixtures and CI quality gates. It is a conceptual showcase, not evidence of a deployed production project."},
 {keys:/\b(ci\/cd|pipeline|jenkins|gitlab|continuous integration|devops)\b/i,answer:"His tooling includes Jenkins, GitLab CI/CD and BrowserStack. He uses automated test execution and feedback to support release confidence."},
 {keys:/\b(test strategy|risk.based|test plan|regression|coverage|quality assurance)\b/i,answer:"His quality approach emphasizes risk-based scope, critical-path coverage, regression evidence, defect assessment and clear entry/exit criteria for release decisions."},
 {keys:/\b(quality lab|go.no.go|signoff|sign.off|release readiness|release decision)\b/i,answer:"The Quality Lab is an interactive educational release-readiness simulation. It reviews objectives, test coverage, defects, residual risk and release approval. Its thresholds are illustrative team policy, not mandatory ISTQB rules."},
 {keys:/\b(leadership style|collaboration|stakeholder|cross.functional)\b/i,answer:"His leadership approach emphasizes clear communication, shared quality ownership, mentoring and coordination between QA, Development, Product and DevOps."},
 {keys:/\b(education|degree|university|certification|certified)\b/i,answer:"The current portfolio does not provide verified education or certification details. Please email Pradyumna for an up-to-date answer.",contact:true},
 {keys:/\b(resume|cv|download)\b/i,answer:"Please use the resume or download option on the portfolio if available. For the most current CV, email Pradyumna directly.",contact:true},
 {keys:/\b(portfolio|website|projects|showcase)\b/i,answer:"The portfolio includes a career explorer, measurable achievements, an interactive automation framework showcase, a release-readiness Quality Lab and a technical toolkit."},
 {keys:/\b(time zone|where (is|does) he|city|based|magdeburg)\b/i,answer:"Pradyumna is based in Magdeburg, Germany."},
 {keys:/\b(available|availability|notice period|start date|salary|compensation|rate|remote|hybrid|relocat|visa|work permit|citizenship)\b/i,answer:"Those details can change and are not verified by the portfolio. Please email Pradyumna directly to discuss current availability, work arrangements or compensation.",contact:true},
 {keys:/\b(schedule|meeting|appointment|calendar|book a call)\b/i,answer:"I can’t schedule meetings directly. Please email Pradyumna with your preferred date, time and reason for reaching out.",contact:true}
];
function casualAnswer(q,previousTopic=''){
 const t=q.trim().toLowerCase().replace(/[!?.,]+$/,'').trim();
 if(/^(hi|hello|hey|hello there|hi there|hey there|namaste|good morning|good afternoon|good evening)$/.test(t))
   return {answer:"Hello there! 👋 Welcome to Pradyumna's portfolio. How can I help you today?"};
 if(/^(how are you|how are you doing|how's it going|how is it going|how do you do)$/.test(t))
   return {answer:"I'm doing well and ready to help! 😊 How are you? Would you like to explore Pradyumna's work or just ask me a question?"};
 if(/^(how is your day|how's your day|how was your day|how is your day going|how's your day going)$/.test(t))
   return {answer:"Thanks for asking! My day is going well—I'm here helping visitors explore this portfolio. How's your day going?"};
 if(/^(what's up|whats up|sup|what are you up to|what's going on)$/.test(t))
   return {answer:"Not much—just here to help! 😄 You can ask me about Pradyumna's career, automation skills, release leadership or anything I can reliably answer."};
 if(/^(i'm (good|fine|great|okay|ok)|i am (good|fine|great|okay|ok)|doing (good|well|great)|not bad)$/.test(t))
   return {answer:"Glad to hear that! 😊 What would you like to chat about?"};
 if(/^(i'm (not good|bad|tired)|i am (not good|bad|tired)|not great)$/.test(t))
   return {answer:"Sorry to hear that. I hope things get better. If you'd like, we can chat about the portfolio or I can help you find Pradyumna's contact details."};
 if(/^(what('s| is) the time|what time is it|current time|tell me the time|what's the date|what is the date|today's date|what day is it)$/.test(t)){
   const now=new Date();const date=/date|day/.test(t);
   return {answer:date?"According to your device, today is "+new Intl.DateTimeFormat(undefined,{weekday:'long',year:'numeric',month:'long',day:'numeric'}).format(now)+".":"According to your device, the local time is "+new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit',timeZoneName:'short'}).format(now)+".",};
 }
 if(/^(what('s| is) happening (around|in) the world|world news|latest news|what('s| is) in the news|current events|what's happening globally)$/.test(t))
   return {answer:"I don't have a live news feed, so I can't verify today's headlines. You can check Reuters or BBC News for current world updates. I'm happy to help with questions about this portfolio!",news:true};
 if(/^(tell me more|more details|can you elaborate|explain more|what about that|and that)$/.test(t)&&!previousTopic)
   return {answer:"Of course! What would you like to know more about—Pradyumna's experience, automation framework, achievements or release leadership?"};
 return null;
}
function advancedAnswer(q){
 const t=q.toLowerCase();
 if(/\b(job description|job posting|job requirements|match my job|match this role|fit for this role|jd match)\b/.test(t)){
   const skills=[['UI automation',/selenium|playwright|ui automation|web testing/],['API testing',/api|rest|postman/],['Mobile automation',/appium|mobile|android|ios/],['CI/CD',/jenkins|gitlab|pipeline|ci\/cd/],['QA leadership',/lead|manager|strategy|release/],['TypeScript',/typescript/],['Python',/python/],['Cloud',/aws|azure|gcp/]];
   const matched=skills.filter(([,re])=>re.test(t)).map(([name])=>name);
   return {answer:matched.length?"I can identify these requirements in the text: "+matched.join(', ')+". Pradyumna's portfolio provides evidence for web/API/mobile automation, CI/CD and release leadership. Playwright/TypeScript is shown as an illustrative architecture. Other requirements need individual verification. For a complete tailored comparison, please email the job description to Pradyumna.":"Paste a job description and I can highlight matching automation and QA leadership skills. I won't invent experience that isn't verified."};
 }
 if(/\b(release readiness|go\/no.go|should we release|release decision|regression pass|critical defect|p1 defect|risk acceptance)\b/.test(t)){
  const pct=t.match(/(\d{1,3}(?:\.\d+)?)\s*%/);
  const critical=/\b(no|zero|0)\s+(open\s+)?(critical|p0|p1)/.test(t)?false:/\b(critical defect|p0 defect|p1 defect|blocker)\b/.test(t);
  return {answer:"Release readiness advisory"+(pct?" (reported pass rate: "+pct[1]+"%)":"")+": Review critical-path coverage, failed/blocked tests, open defect severity, residual risk and documented stakeholder acceptance. "+(critical?"Potential release blocker mentioned: resolve or formally assess critical defects before approval. ":"")+"A pass rate alone cannot justify GO. The accountable release owner makes the final decision; no universal ISTQB pass percentage applies."};
 }
 if(/\b(automation architecture|hybrid framework|design a framework|page object|flaky tests|test fixtures|test pyramid|api framework|playwright framework)\b/.test(t))
  return {answer:"A practical hybrid automation design separates UI journeys, API clients, typed fixtures, test data, environment configuration and reporting. With Playwright + TypeScript, run fast API checks and focused UI smoke tests in CI, collect traces for failures and quarantine flaky tests only with tracked remediation. The portfolio's framework is an illustrative architecture rather than a deployed project."};
 return null;
}
function answerQuestion(q,previousTopic=''){
 const casual=casualAnswer(q,previousTopic);if(casual)return casual;
 const text=q.trim().toLowerCase();
 if(/^(hi|hello|hey|good (morning|afternoon|evening)|namaste|hello there)[!. ]*$/.test(text))
   return {answer:"Hello! Welcome to Pradyumna’s portfolio. Would you like to know about his automation skills, professional experience or release leadership?"};
 if(/^(thanks|thank you|thank you so much|great|awesome|cool)[!. ]*$/.test(text))
   return {answer:"You’re welcome! Is there anything else you’d like to know about Pradyumna’s work?"};
 if(/^(bye|goodbye|see you)[!. ]*$/.test(text))
   return {answer:"Thanks for visiting! If you'd like to discuss an opportunity, please email Pradyumna at pradyumnavissapragada@gmail.com.",contact:true};
 if(/\b(email|contact|reach|interview|opportunity|connect|message)\b/.test(text)&&!/\b(why|should|strengths|choose|value)\b/.test(text))
   return {answer:"You can reach Pradyumna at pradyumnavissapragada@gmail.com. Feel free to email him about roles, interviews or collaborations.",contact:true};
 let query=q;
 if(/^(tell me more|more details|can you elaborate|explain more|what about that|and that)[?.! ]*$/.test(text)&&previousTopic)
   query=previousTopic;
 const employer=jobs.find(j=>query.toLowerCase().includes(j.company.split(' ')[0].toLowerCase()));
 if(employer)return {answer:employer.company+' | '+employer.role+' | '+employer.dates+'\n'+employer.points.join('\n')};
 if(/\b(why (should (we|i|a company|an employer) hire|hire|choose)|what (makes|sets) pradyumna (stand out|apart)|why is pradyumna (a good|the right) (fit|candidate))\b/i.test(query))return {answer:'Pradyumna combines hands-on UI, API and mobile test automation with QA and release leadership. His portfolio documents Selenium, Java, Appium, REST API testing, GitLab CI/CD and BrowserStack experience, as well as mentoring and risk-based release decisions. That combination can help a team improve automation reliability while keeping release quality and business risk visible. Specific suitability should be evaluated against the role requirements.'};
 if(/mentor|coach|operational efficiency|workshop/i.test(query))
   return {answer:"Pradyumna has mentored engineers, led technical workshops and promoted shared quality ownership across teams. He brings hands-on automation experience together with QA and release leadership."};
 const advanced=advancedAnswer(query);if(advanced)return advanced;
 const faq=commonFAQs.find(k=>k.keys.test(query));if(faq)return faq;
 const matched=knowledge.find(k=>k.keys.test(query.toLowerCase()));
 return matched||{answer:"I don't have a reliable answer to that question. Please email Pradyumna at pradyumnavissapragada@gmail.com and he'll be able to help directly.",contact:true};
}
let readAnswers=false,recognizer,listening=false,lastTrigger;
function message(text,role,contact=false){const b=el('div',undefined,'bubble '+role);b.append(el('small',role==='user'?'YOU':'PORTFOLIO GUIDE'),el('p',text));if(contact){const links=el('div',undefined,'chat-links');[['Email Pradyumna ↗','mailto:pradyumnavissapragada@gmail.com'],['Call Pradyumna ↗','tel:+4915238763124']].forEach(([t,url])=>{const a=el('a',t);a.href=url;links.append(a)});b.append(links)}$('#chat-log').append(b);$('#chat-log').scrollTop=$('#chat-log').scrollHeight}
function openChat(trigger){lastTrigger=trigger;$('#chat-panel').hidden=false;$('#chat-launch').setAttribute('aria-expanded','true');$('#question').focus()}function closeChat(){$('#chat-panel').hidden=true;$('#chat-launch').setAttribute('aria-expanded','false');recognizer?.abort();window.speechSynthesis?.cancel();lastTrigger?.focus()}
$$('[data-chat]').forEach(b=>b.onclick=()=>openChat(b));$('#chat-launch').onclick=()=>$('#chat-panel').hidden?openChat($('#chat-launch')):closeChat();$('#close-chat').onclick=closeChat;$('#chat-panel').onkeydown=e=>{if(e.key==='Escape')closeChat()};
message('Hi, I’m Pradyumna’s portfolio guide. Ask about his career, technical skills or impact. I can also help you contact him directly.','assistant');
let chatBusy=false;const history=[];let lastKnownTopic="";
const recruiterFacts={
 career:"Pradyumna is a QA/SDET and release-leadership professional with over 11 years of experience. His portfolio lists LivePerson, Synechron, Nisum and Accenture. His work spans UI, API and mobile automation, CI/CD, quality strategy and release coordination.",
 hire:"Pradyumna combines hands-on automation engineering with QA and release leadership. His documented skills include Selenium, Java, Appium, API testing, GitLab CI/CD and BrowserStack, alongside mentoring, release planning and risk-based quality decisions. This makes him worth considering for senior automation and QA leadership roles; final fit depends on your team's requirements.",
 automation:"Pradyumna's portfolio documents web automation with Selenium and Java, mobile testing with Appium and BrowserStack, and API testing with Postman and REST Assured. The Playwright/TypeScript hybrid framework shown here is an illustrative design, not verified production experience.",
 release:"Pradyumna's portfolio describes release coordination, QA strategy, quality governance and risk-based testing. Release readiness should be assessed against agreed objectives, critical-path coverage, executed and remaining tests, defect severity, non-functional criteria and formally accepted residual risks. ISTQB does not mandate a universal pass percentage.",
 achievements:"The portfolio reports 90% of manual test suites transitioned to automation and $200K in annual savings, 70% shorter test execution, and 120 hours of manual effort saved monthly in an Accenture initiative. These are resume-reported outcomes, not independently audited results.",
 employers:"Pradyumna's portfolio lists LivePerson GmbH, Synechron Technologies, Nisum Technologies and Accenture.",
 skills:"His documented toolkit includes Java, JavaScript/Node.js, Selenium WebDriver, Appium, Cucumber, JUnit, TestNG, Postman, REST Assured, GitLab CI/CD, Jenkins and BrowserStack. Playwright/TypeScript is featured as an illustrative portfolio framework.",
 contact:"You can contact Pradyumna at pradyumnavissapragada@gmail.com or +49 152 38763124 to discuss interviews and opportunities.",
 interview:"To schedule an interview, please email Pradyumna at pradyumnavissapragada@gmail.com. P-Bot cannot book a meeting or send an invitation.",
 unknown:"That information is not verified in the published portfolio. Please ask Pradyumna directly at pradyumnavissapragada@gmail.com.",
 news:"P-Bot does not have access to a verified live news feed, so it cannot provide current world headlines. For up-to-date news, please use a reputable news service.",
 job:"Paste the job description, and I can compare its requirements against Pradyumna's documented skills and identify unverified qualifications. A detailed AI-powered comparison requires the AI service to be available.",
 framework:"The portfolio illustrates a hybrid Playwright/TypeScript framework with UI page objects, API clients, reusable fixtures, test data, assertions, reporting and CI/CD quality gates. It is an architectural demonstration, not evidence of professional Playwright delivery."
};
function localRecruiterAnswer(q){
 const t=q.toLowerCase().trim().replace(/[?.!]+$/,'');
 const answer=(key,contact=false)=>({answer:recruiterFacts[key],contact});
 if(/^(hi|hello|hey|namaste|good morning|good afternoon|good evening)$/.test(t))return {answer:"Hello! I'm P-Bot, Pradyumna's portfolio assistant. Ask me about his experience, skills, achievements, employers or release leadership."};
 if(/^(thanks|thank you|bye|goodbye)$/.test(t))return {answer:"Thanks for visiting! You can contact Pradyumna through the email link on this portfolio."};
 if(/^(give me a career summary|tell me about pradyumna|who is pradyumna|who is pradyumna vissapragada)$/.test(t))return answer("career");
 if(/^(explain the hybrid automation framework)$/.test(t))return answer("framework");
 if(/^(how do you assess release readiness)$/.test(t))return answer("release");
 if(/^(match this job description)$/.test(t))return answer("job");
 if(/^(how can i schedule an interview)$/.test(t))return answer("interview",true);
 if(/^(what is happening around the world|world news|latest news|what's happening in the world)$/.test(t))return answer("news");
 if(/\b(why (should|would) (we|i|an employer|a company) hire|why hire|why choose|what makes .* (stand out|a good candidate|a strong candidate|a suitable candidate)|what are (his|pradyumna's) strengths)\b/.test(t))return answer("hire");
 if(/\b(expected salary|salary expectation|notice period|earliest joining|joining date|availability|work authorization|visa status|citizenship|personal address)\b/.test(t))return answer("unknown",true);
 if(/\b(cypress|python|robot framework|five years of playwright|professional playwright|playwright in production|aws certification|istqb certified)\b/.test(t)&&/\b(has|does|did|experience|worked|certified|used|how long)\b/.test(t))return answer("unknown",true);
 if(/\b(world news|latest news|current headlines|happening around the world)\b/.test(t))return answer("news");
 if(/\b(how (can|do) (i|we) (contact|reach)|email|phone number|contact details|linkedin|schedule an interview|book an interview)\b/.test(t))return answer("contact",true);
 if(/\b(achievements|accomplishments|impact|cost savings|results|metrics|success stories)\b/.test(t))return answer("achievements");
 if(/\b(companies|employers|worked for|work history|where (has|did) .* work)\b/.test(t))return answer("employers");
 if(/\b(how many years|years of experience|career summary|professional background|career history|tell me about his career)\b/.test(t))return answer("career");
 if(/\b(release readiness|release leadership|release lead|release management|go.no.go|quality governance)\b/.test(t)&&!/\b(design|propose|recommend|scenario|hypothetical|imagine|suppose|what if|should we release|given a release)\b/.test(t))return answer("release");
 if(/\b(automation framework|hybrid framework|playwright framework)\b/.test(t)&&/\b(explain|showcase|portfolio|featured|example)\b/.test(t))return answer("framework");
 if(/\b(job description|job posting|role requirements|job requirements|compare.*(job|role)|match.*(job|role)|fit for (this|the) role|candidate for (this|the) role)\b/.test(t))return null;
 if(/\b(automation experience|selenium|appium|browserstack|api testing|mobile testing|test automation)\b/.test(t)&&!/\b(design|create|propose|recommend|architect|roadmap|how would|scenario|strategy for)\b/.test(t))return answer("automation");
 if(/\b(technical skills|tech stack|technologies|tools|programming languages|what skills|his skills|pradyumna's skills)\b/.test(t))return answer("skills");
 if(/\b(what can you do|who are you|are you a bot)\b/.test(t))return {answer:"I'm P-Bot, an automated portfolio guide. I can explain verified career information and help with recruiter questions. Technical scenario analysis uses an AI service when available."};
 if(/^(tell me more|more details|can you elaborate|explain more|what about that|and that)$/.test(t)&&lastKnownTopic)return localRecruiterAnswer(lastKnownTopic);
 return null;
}
async function ask(q){
 q=q.trim().slice(0,500);if(!q||chatBusy)return;
 message(q,'user');$('#question').value='';$('#send-question').disabled=true;
 let a;
 try{
  a=localRecruiterAnswer(q);
  if(!a){
   if(!config.apiBase)throw Error('AI endpoint not configured');
   chatBusy=true;
   const data=await api('/chat',{messages:[...history,{role:'user',content:q}].slice(-8)},'chat');
   if(typeof data.answer!=='string'||!data.answer.trim())throw Error('Empty AI response');
   a={answer:data.answer,contact:!!data.handoff};
   history.push({role:'user',content:q},{role:'assistant',content:a.answer});
  }
 }catch(err){
  console.warn('P-Bot AI request failed:',err);
  a={answer:'AI is currently unavailable. Please try again after some time.'};
 }finally{
  chatBusy=false;
  $('#send-question').disabled=!$('#question').value.trim();
 }
 if(!/^(tell me more|more details|can you elaborate|explain more|what about that|and that)[?.! ]*$/i.test(q))lastKnownTopic=q;
 message(a.answer,'assistant',a.contact);
 if(readAnswers&&'speechSynthesis'in window){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(a.answer))}
}
$('#question').oninput=()=>$('#send-question').disabled=!$('#question').value.trim();$('#chat-form').onsubmit=e=>{e.preventDefault();ask($('#question').value)};$$('[data-question]').forEach(b=>b.onclick=()=>ask(b.dataset.question));
$('#speak').onclick=()=>{if(!('speechSynthesis'in window)){$('#voice-status').textContent='Audio playback isn’t supported here. Please read the text answers.';return}readAnswers=!readAnswers;$('#speak').textContent='Read answers: '+(readAnswers?'on':'off');$('#speak').setAttribute('aria-pressed',String(readAnswers));if(!readAnswers)speechSynthesis.cancel()};
$('#mic').onclick=()=>{const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Speech){$('#voice-status').textContent='Voice input isn’t supported in this browser. Please type your question.';return}if(listening){recognizer?.stop();return}recognizer=new Speech();recognizer.lang='en-US';recognizer.interimResults=false;recognizer.onresult=e=>{$('#question').value=e.results[0][0].transcript.slice(0,500);$('#send-question').disabled=false;$('#voice-status').textContent='Review your question, then send.'};recognizer.onerror=()=>{$('#voice-status').textContent='Microphone unavailable or speech not recognized. You can still type.'};recognizer.onend=()=>{listening=false;$('#mic').textContent='Use microphone'};try{recognizer.start();listening=true;$('#mic').textContent='Stop microphone';$('#voice-status').textContent='Listening…'}catch{$('#voice-status').textContent='Voice input could not start. Please type instead.'}};
addEventListener('pagehide',()=>{clearInterval(timer);recognizer?.abort();window.speechSynthesis?.cancel()});

$('#chat-message-link').onclick=closeChat;

const config=window.PORTFOLIO_CONFIG||{apiBase:'',turnstileSiteKey:''};const challenges={};
async function api(path,payload,kind){if(!config.apiBase)throw Error('Not configured');const token=challenges[kind]&&window.turnstile?.getResponse(challenges[kind]);try{const r=await fetch(config.apiBase+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,token}),signal:AbortSignal.timeout(25000)});const data=await r.json();if(!r.ok)throw Error(data.error||'Service unavailable');return data}finally{if(challenges[kind])window.turnstile?.reset(challenges[kind])}}
if(config.apiBase){$('.delivery-note').textContent='Your name, email and message will be sent to Pradyumna through our email delivery provider. Please avoid sensitive information.';$('.disclosure').textContent='AI portfolio assistant. Messages are processed by an AI service; answers may be imperfect. Contact Pradyumna for confirmation.';$('.privacy').textContent='Chat is processed by our AI provider. Optional microphone input may use your browser’s speech service. Spoken answers use a synthetic voice.';if(config.turnstileSiteKey){window.portfolioChallengeReady=()=>{for(const kind of ['chat','contact'])challenges[kind]=window.turnstile.render('#'+kind+'-challenge',{sitekey:config.turnstileSiteKey,action:kind,theme:'auto'})};const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?onload=portfolioChallengeReady&render=explicit';script.async=true;document.head.append(script)}}
$('#message-form').onsubmit=async e=>{e.preventDefault();const status=$('#message-status'),button=$('#send-message');if(button.disabled)return;const fields={name:$('#sender-name').value.trim(),email:$('#sender-email').value.trim(),subject:$('#message-subject').value.trim(),message:$('#message-body').value.trim()};if(Object.values(fields).some(x=>!x)){status.textContent='Please complete every field.';return}if($('#message-form [name=website]').value){status.textContent='Unable to submit. Please email Pradyumna directly.';return}button.disabled=true;button.textContent='Sending…';status.textContent='Submitting your message…';try{const r=await fetch('https://formsubmit.co/ajax/pradyumnavissapragada@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({...fields,_subject:'Portfolio: '+fields.subject,_url:'https://pradyumnavissapragada.github.io/pradyumna.github.io/',_template:'table',_honey:''}),signal:AbortSignal.timeout(20000)});const data=await r.json();if(!r.ok||!(data.success===true||data.success==='true'))throw Error('Delivery service did not accept the message');if(/activat|confirm.*email/i.test(data.message||'')){status.textContent='The form owner must activate email delivery before your message can be delivered. Please contact Pradyumna by email or phone.'}else{status.textContent='Your message was accepted by the email service. Thank you!';$('#message-form').reset()}}catch{status.textContent='We could not confirm submission. Your message is preserved. Please email pradyumnavissapragada@gmail.com or call +49 152 38763124.'}finally{button.disabled=false;button.textContent='Send'}};
$('#nav-toggle').onclick=()=>{const expanded=$('#nav-toggle').getAttribute('aria-expanded')==='true';$('#nav-toggle').setAttribute('aria-expanded',String(!expanded));$('header').classList.toggle('nav-open',!expanded)};$$('nav a').forEach(a=>a.addEventListener('click',()=>{$('header').classList.remove('nav-open');$('#nav-toggle').setAttribute('aria-expanded','false')}));


/* Portfolio showcase: architecture examples, not executed tests. */
const frameworkExamples={
ui:{title:'UI / E2E testing',description:'User journeys with stable locators, isolated contexts and actionable failure traces.',code:`import { test, expect } from '@playwright/test';

test('dashboard loads', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.getByRole('heading',
    { name: 'Dashboard' })).toBeVisible();
});`},
api:{title:'API testing',description:'Fast service checks with shared request contexts, response validation and explicit assertions.',code:`import { test, expect } from '@playwright/test';

test('health API responds', async ({ request }) => {
  const response = await request.get('/api/health');
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toMatchObject({
    status: 'ok'
  });
});`},
fixtures:{title:'Reusable fixtures',description:'Typed test setup centralizes data, authentication and lifecycle cleanup.',code:`import { test as base } from '@playwright/test';

type Fixtures = { accountId: string };
export const test = base.extend<Fixtures>({
  accountId: async ({}, use) => {
    const id = 'demo-account';
    await use(id);
  }
});`},
ci:{title:'CI / Quality gates',description:'Run smoke checks first, publish reports and use failed critical paths as release signals.',code:`# Example GitHub Actions step
- name: Install dependencies
  run: npm ci
- name: Install Playwright
  run: npx playwright install --with-deps
- name: Run smoke tests
  run: npx playwright test --grep @smoke
- name: Upload report
  uses: actions/upload-artifact@v4
  with:
    name: playwright-report
    path: playwright-report/`}
};
document.querySelectorAll('[data-layer]').forEach(button=>button.addEventListener('click',()=>{
  const item=frameworkExamples[button.dataset.layer];if(!item)return;
  document.querySelectorAll('[data-layer]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.getElementById('framework-title').textContent=item.title;
  document.getElementById('framework-description').textContent=item.description;
  document.getElementById('framework-code').textContent=item.code;
}));
const labToggle=document.getElementById('lab-toggle');
if(labToggle)labToggle.addEventListener('click',()=>{
  const details=document.getElementById('lab-details');
  const opening=details.hidden;
  details.hidden=!opening;
  labToggle.setAttribute('aria-expanded',String(opening));
  labToggle.textContent=opening?'Hide Quality Lab':'Explore Quality Lab';
});
