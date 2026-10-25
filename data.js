// INPHA Stage 2 wireframes — content data + renderer.
// Status key: B = text taken from the brief, P = placeholder awaiting client data.
// Items starting with "[" are rendered as dashed placeholders.

const SERVICES_SCHOOL = ['School Policy Development','Teacher Training','School Campus & Environment Setup','Summer Camp','Winter Camp','Specialized Workshops & Awareness Sessions'];
const SERVICES_TECH = ['App Development','Web Development','Video Editing','Graphic Design','Logo Design','Social Media Template Design & Campaign Management [wording to confirm]'];
const WORKSHOPS = ['Work Methodology','AI Awareness','POCSO Awareness','Financial Literacy','Art of Speech','Mobile De-addiction','Good Touch Bad Touch','Victory Over Exam Fear','Victory Over Stage Fear (Advanced Public Speaking)'];
const FACILITIES = [['End-to-end consultation','Planning before any work starts'],['On-ground and online delivery','Camps, training and campus setup; remote where applicable'],['Dedicated follow-up','Support after delivery'],['One team','School services and tech/branding services, so no multiple vendors']];
const STATS = ['[Confirmed number of schools served]','[Confirmed number of students served]','[Confirmed number of projects delivered]'];
const TESTI = ['[Verified school principal testimonial — photo, name, school]','[Verified parent testimonial — photo, name]','[Verified business client testimonial — photo, name, company]'];
const PROJ = ['[Portfolio project — client need / work / result]','[Portfolio project — client need / work / result]','[Portfolio project — client need / work / result]'];
const BLOG3 = ['[Latest article — category, title, date]','[Latest article — category, title, date]','[Latest article — category, title, date]'];
const PROCESS_SCHOOL = ['First conversation','Consultation & planning','On-ground / online delivery','Ongoing support & follow-up'];
const PROCESS_TECH = ['Discovery','Planning & design','Build / production','Launch','Support'];

const ENQ_FIELDS = ['Name *','Phone *','Email *','I am a… * (School / Parent / Business)','Service of interest * (list of confirmed services)','Message'];

const PAGES = [
{ id:'home', n:1, title:'Home', aud:'Everyone', cta:'Three entry paths + Enquire', sections:[
 {t:'hero',name:'Hero',h:'Helping children grow. Helping businesses grow.',sub:'One-paragraph intro to INPHA and the holistic-development idea, for children and for businesses.',ctas:['I run a school','Programs for my child','Grow my business'],img:'[Authentic photo: real camp / school activity]',s:'B',m:'Image first on mobile, three CTAs stack full width, School first'},
 {t:'doors',name:'Two entry doors',items:[['School & Student Services','Main service line. Larger block.',['School Care','Student Programs']],['Tech & Creative Services','Apps, web, creative, social media.',['Tech Solutions','App & Web','Creative Studio','Social Media']]],s:'B',m:'Doors stack; School door shown first and taller'},
 {t:'list',name:'Services at a glance',h:'All services',items:[...SERVICES_SCHOOL.slice(0,3),...SERVICES_SCHOOL.slice(3,5),'Specialized Workshops & Awareness',...SERVICES_TECH.slice(0,5),'Social Media Template Design & Campaign Management'],cols:2,s:'B',m:'Single column list, grouped by line'},
 {t:'split',name:'School Care feature',h:'School Care',sub:'Policy development, teacher training, campus & environment setup.',items:['School Policy Development','Teacher Training','Campus & Environment Setup (online + offline)'],img:'[Photo: school campus / training session]',cta:'Explore School Care',s:'B'},
 {t:'grid',name:'Why INPHA',h:'Why choose INPHA',items:FACILITIES,cols:4,s:'B',m:'2×2 grid on mobile'},
 {t:'stats',name:'Numbers',items:STATS,s:'P'},
 {t:'grid',name:'Featured portfolio',h:'Featured work',items:PROJ,cols:3,cta:'See all work',s:'P',m:'Horizontal swipe row'},
 {t:'grid',name:'Testimonials',h:'What schools, parents and clients say',items:TESTI,cols:3,s:'P',m:'Swipe carousel with dots'},
 {t:'grid',name:'Latest blog',h:'From the blog',items:BLOG3,cols:3,cta:'All articles',s:'P'},
 {t:'cta3',name:'Enquiry options',h:'Get in touch',items:['School enquiry','Parent / program enquiry','Project enquiry','WhatsApp'],s:'B'}
]},
{ id:'about', n:2, title:'About Us', aud:'Everyone', cta:'Get in touch', sections:[
 {t:'hero',name:'Page intro',h:'About INPHA',sub:'Short framing line about INPHA (inpha.in).',img:'[Photo: INPHA team / on-ground work]',s:'B',compact:true},
 {t:'text',name:'Our story',h:'How INPHA started',lines:['[Founding story — to be supplied by client]','[Supporting paragraph]'],pull:'[Pull quote — client to supply]',s:'P'},
 {t:'two',name:'Mission & Vision',items:[['Mission','[Mission statement — client to supply]'],['Vision','[Vision statement — client to supply]']],s:'P'},
 {t:'split',name:'Holistic approach',h:'How child development and business development connect',sub:'Explains one brand, two connected service lines.',items:['School & student services','Tech & creative services','One team, one process'],img:'[Diagram: two lines → one approach]',s:'B'},
 {t:'list',name:'Our values',h:'Our values',items:['[Value 1 — client to supply]','[Value 2]','[Value 3]','[Value 4]'],cols:1,s:'P'},
 {t:'grid',name:'Team teaser',h:'Meet the team',items:['[Team member photo, name, role]','[Team member photo, name, role]','[Team member photo, name, role]'],cols:3,cta:'Our Team page',s:'P'},
 {t:'cta',name:'Contact CTA',h:'Talk to us',cta:'Contact & Enquiry',s:'B'}
]},
{ id:'services', n:3, title:'Services (Overview)', aud:'Everyone', cta:'Send an enquiry', sections:[
 {t:'hero',name:'Intro',h:'Everything INPHA does, in one place',sub:'Introduction to all services, grouped by line.',s:'B',compact:true},
 {t:'twocol',name:'School & Student Services',h:'School & Student Services',items:['School Care → page','Student Programs → page'],sub:'Links to School Care and Student Programs',s:'B'},
 {t:'grid',name:'Tech & Creative (6 services)',h:'Tech & Creative Services',items:SERVICES_TECH,cols:3,sub:'Each links to its page (7, 8, 9)',s:'B',m:'Two columns on mobile'},
 {t:'steps',name:'How we work',h:'How we work',items:['First conversation','Consultation & planning','Delivery','Support'],s:'B'},
 {t:'cta',name:'Enquiry CTA',h:'Send an enquiry',cta:'Enquire',s:'B'}
]},
{ id:'school', n:4, title:'School Care', aud:'School management', cta:'School enquiry form', index:['Policy','Training','Campus','How we work','Tech support','Results','FAQ','Enquire'], sections:[
 {t:'hero',name:'Hero',h:'School Care',sub:'A reliable partner for policy, teacher training and campus setup.',ctas:['Enquire for your school','Download overview [if supplied]'],img:'[Photo: school / teacher training]',s:'B'},
 {t:'strip',name:'Trust strip',items:['On-ground + online','Consultation first','Follow-up support'],s:'B'},
 {t:'split',name:'School Policy Development',h:'School Policy Development',sub:'Helping schools set up and improve their operating policies.',items:['[Scope detail — to confirm with client]'],img:'[Image]',s:'B'},
 {t:'split',name:'Teacher Training',h:'Teacher Training',sub:'[Programme detail — to confirm]',items:['[Topics / format — to confirm]'],img:'[Image]',rev:true,s:'B'},
 {t:'split',name:'Campus & Environment Setup',h:'School Campus & Environment Setup',sub:'Setting up the learning environment, online and offline.',items:['Online','Offline'],img:'[Image]',s:'B'},
 {t:'steps',name:'How we work with a school',h:'How we work with a school',items:PROCESS_SCHOOL,s:'B'},
 {t:'grid',name:'Related tech & branding support',h:'Also for schools',items:['School website','School app','Social media for admissions & events'],cols:3,s:'B'},
 {t:'grid',name:'Past work & results',h:'Past work with schools',items:['[Verified school project — need / work / result]','[Verified school project]'],cols:2,s:'P'},
 {t:'faq',name:'FAQ',h:'Questions from school management',items:['[Question — to be supplied]','[Question]','[Question]','[Question]'],s:'P'},
 {t:'form',name:'School enquiry form',h:'School enquiry',items:['School name *','City *','Number of students *','Contact person *','Phone *','Email *','Message'],s:'B'}
]},
{ id:'student', n:5, title:'Student Programs', aud:'Parents, students', cta:'WhatsApp / program enquiry', sections:[
 {t:'hero',name:'Hero',h:'Programs that help children grow',sub:'Introduction for parents and students.',ctas:['Enquire on WhatsApp','See programs'],img:'[Real photo: camp activity]',s:'B'},
 {t:'strip',name:'Safety summary',items:['[Supervision ratio — to confirm]','[Safety protocol — to confirm]','[Staff verification — to confirm]'],s:'P',m:'Placed high because parents ask this first'},
 {t:'tabs',name:'Programs tabs',h:'Programs',tabs:['Summer Camp','Winter Camp','Workshops & Awareness'],panel:['Activity-based camp','Climbing','Jumping / obstacle activities','Exercise','Other physical & outdoor activities'],s:'B',m:'Tabs become a scrollable chip row'},
 {t:'list',name:'Workshop topics',h:'Specialized Workshops & Awareness Sessions',items:WORKSHOPS,cols:3,sub:'Short, focused sessions for students',s:'B',m:'Single column'},
 {t:'split',name:'Holistic development',h:'What a child gains',sub:'The holistic-development idea behind the programs.',items:['[Outcome — to confirm]','[Outcome]','[Outcome]'],img:'[Image]',s:'B'},
 {t:'grid',name:'Age groups & structure',h:'Age groups & how programs work',items:['[Age group — to confirm]','[Age group]','[Schedule / duration — to confirm]'],cols:3,s:'P'},
 {t:'grid',name:'Safety & supervision detail',h:'Safety, supervision and trust',items:['[Detail — to confirm]','[Detail]','[Detail]'],cols:3,s:'P'},
 {t:'gallery',name:'Photos & videos',h:'From past camps',items:['[Photo]','[Photo]','[Video]','[Photo]','[Photo]','[Photo]'],s:'P'},
 {t:'two',name:'Contact split',items:[['For schools','Request these programs for your school'],['For parents','Get in touch or WhatsApp']],s:'B'}
]},
{ id:'tech', n:6, title:'Tech Solutions', aud:'Businesses, schools', cta:'Project enquiry', sections:[
 {t:'hero',name:'Hero',h:'Tech and creative services from one team',sub:'Introduction linking to each service.',ctas:['Start a project'],img:'[Authentic work imagery]',s:'B'},
 {t:'grid',name:'Service map',h:'Services',items:['App & Web Development','Creative Studio (video, graphic, logo)','Social Media Marketing'],cols:3,s:'B'},
 {t:'split',name:'Full package benefit',h:'Why take the full package',sub:'Benefit of one team across web, app, creative and social.',items:['One team','Consistent brand','Single point of contact'],img:'[Diagram]',s:'B'},
 {t:'steps',name:'How we work',h:'How we work',items:PROCESS_TECH,s:'B'},
 {t:'grid',name:'Featured projects',h:'Featured projects',items:PROJ,cols:3,s:'P'},
 {t:'cta',name:'Enquiry CTA',h:'Send an enquiry',cta:'Enquire',s:'B'}
]},
{ id:'appweb', n:7, title:'App & Web Development', aud:'Businesses, schools', cta:'Discuss a project', sections:[
 {t:'hero',name:'Intro',h:'Websites and apps, built to be used',sub:'App and website development.',ctas:['Discuss a project'],s:'B',compact:true},
 {t:'twocol',name:'Web | App tracks',h:'Two tracks',items:[['Web development',['Websites','E-commerce','School websites']],['App development',['Android','iOS','School / business apps']]],s:'B'},
 {t:'steps',name:'Process',h:'Our process',items:['Discovery','Design','Development','Launch','Support'],s:'B'},
 {t:'grid',name:'Related projects',h:'Related projects',items:PROJ.slice(0,2),cols:2,s:'P'},
 {t:'cta',name:'Discuss CTA',h:'Discuss your project',cta:'Enquire',s:'B'}
]},
{ id:'creative', n:8, title:'Creative Studio', aud:'Businesses, schools', cta:'Start a project', sections:[
 {t:'hero',name:'Intro',h:'Video, graphics and logos',sub:'Creative Studio overview.',ctas:['Start a project'],s:'B',compact:true},
 {t:'video',name:'Video editing',h:'Video Editing',items:['Event videos','Promotional videos','Reels'],img:'[Embedded sample video]',s:'B'},
 {t:'gallery',name:'Graphic design gallery',h:'Graphic Design',sub:'Posters · social posts · brochures',items:['[Poster]','[Social post]','[Brochure]','[Poster]','[Social post]','[Brochure]'],s:'P'},
 {t:'compare',name:'Logo design',h:'Logo Design',sub:'Our process and before/after examples',items:['Before [client logo — verified]','After [INPHA redesign — verified]'],s:'P'},
 {t:'cta',name:'Start CTA',h:'Start a creative project',cta:'Enquire',s:'B'}
]},
{ id:'social', n:9, title:'Social Media Marketing', aud:'Businesses, schools', cta:'Grow your brand', sections:[
 {t:'hero',name:'Intro',h:'Social media that grows your brand',sub:'Wording to confirm with client before final.',ctas:['Grow your brand'],s:'B',compact:true},
 {t:'strip',name:'Platforms',items:['Instagram','Facebook','YouTube','LinkedIn','Others'],s:'B'},
 {t:'grid',name:'What we do',h:'What we do',items:['Content planning','Post design','Reels','Page management','Template design','Ad campaigns'],cols:3,s:'B'},
 {t:'split',name:'Schools',h:'Dedicated support for schools',items:['Admissions promotion','Event promotion'],img:'[Image]',s:'B'},
 {t:'stats',name:'Growth results',items:['[Verified growth number]','[Verified growth number]','[Case study link]'],s:'P'},
 {t:'cta',name:'Grow CTA',h:'Grow your brand with us',cta:'Enquire',s:'B'}
]},
{ id:'portfolio', n:10, title:'Portfolio / Our Work', aud:'Businesses, schools', cta:'Start a new project', sections:[
 {t:'hero',name:'Intro',h:'Our work',sub:'Projects across all services.',s:'B',compact:true},
 {t:'filters',name:'Category filters',items:['All','School work','Website','App','Video','Graphic design','Logo','Social media'],s:'B',m:'Horizontal scroll chips'},
 {t:'grid',name:'Case cards',h:'Projects',items:['[Project: Client need / Our work / Result]','[Project]','[Project]','[Project]','[Project]','[Project]'],cols:3,s:'P'},
 {t:'cta',name:'New project CTA',h:'Start a new project',cta:'Enquire',s:'B'}
]},
{ id:'team', n:11, title:'Our Team', aud:'Everyone', cta:'Join interest form', sections:[
 {t:'hero',name:'Intro',h:'The people behind INPHA',sub:'A line on the thinking behind the team.',s:'P',compact:true},
 {t:'grid',name:'Leadership',h:'Leadership',items:['[Photo, name, role, one line]','[Photo, name, role, one line]'],cols:4,s:'P'},
 {t:'grid',name:'Education',h:'Education',items:['[Member]','[Member]','[Member]','[Member]'],cols:4,s:'P'},
 {t:'grid',name:'Tech',h:'Tech',items:['[Member]','[Member]','[Member]','[Member]'],cols:4,s:'P'},
 {t:'grid',name:'Creative / Marketing',h:'Creative & Marketing',items:['[Member]','[Member]','[Member]','[Member]'],cols:4,s:'P',m:'2 columns'},
 {t:'form',name:'Join interest',h:'Interested in joining?',items:['Name *','Email *','Role of interest','Message'],s:'B'}
]},
{ id:'blog', n:12, title:'Blog', aud:'Everyone, SEO', cta:'Newsletter subscribe', sections:[
 {t:'hero',name:'Intro + search',h:'Blog',sub:'Parenting, education, branding and tech.',ctas:['Search articles'],s:'B',compact:true},
 {t:'filters',name:'Category filter',items:['All','Parenting','Education','Branding','Tech'],s:'B'},
 {t:'split',name:'Featured article',h:'[Featured article title]',sub:'[Category · author · date]',img:'[Main image]',s:'P'},
 {t:'grid',name:'Article list',h:'All articles',items:['[Article card: image, category, title, date]','[Article]','[Article]','[Article]','[Article]','[Article]'],cols:3,s:'P'},
 {t:'text',name:'Pagination',lines:['← Previous   1  2  3   Next →'],s:'B'},
 {t:'form',name:'Newsletter',h:'Subscribe to the newsletter',items:['Email *'],s:'B'}
]},
{ id:'article', n:'12a', title:'Blog Article (template)', aud:'Everyone, SEO', cta:'Share / related reading', sections:[
 {t:'hero',name:'Title block',h:'[Article title]',sub:'[Category · Author · Date · read time]',img:'[Main image]',s:'P'},
 {t:'text',name:'Article body',lines:['[Intro paragraph]','[H2 heading]','[Body paragraphs, lists, pull quote, inline images]','[Author bio]'],s:'P'},
 {t:'strip',name:'Share',items:['Share on WhatsApp','Facebook','LinkedIn','Copy link'],s:'B'},
 {t:'grid',name:'Related articles',h:'Related articles',items:BLOG3,cols:3,s:'P'},
 {t:'form',name:'Newsletter',h:'Subscribe',items:['Email *'],s:'B'}
]},
{ id:'why', n:13, title:'Testimonials / Why Choose Us', aud:'Everyone', cta:'Get in touch', sections:[
 {t:'hero',name:'Intro',h:'Why choose INPHA',sub:'Short framing line.',s:'B',compact:true},
 {t:'grid',name:'Reasons',h:'Reasons to choose us',items:FACILITIES,cols:4,s:'B'},
 {t:'stats',name:'Numbers',items:STATS,s:'P'},
 {t:'grid',name:'Testimonials',h:'In their words',items:TESTI,cols:3,s:'P'},
 {t:'logos',name:'Client & partner logos',items:['[Logo]','[Logo]','[Logo]','[Logo]','[Logo]','[Logo]'],s:'P'},
 {t:'video',name:'Video reviews',h:'Video reviews',img:'[Video review — if available]',s:'P'},
 {t:'cta',name:'Contact CTA',h:'Speak to us',cta:'Contact',s:'B'}
]},
{ id:'contact', n:14, title:'Contact & Enquiry', aud:'Everyone', cta:'Submit enquiry', sections:[
 {t:'hero',name:'Intro',h:'Get in touch',sub:'Choose how you would like to reach us.',ctas:['WhatsApp','Call','Email'],s:'B',compact:true},
 {t:'form',name:'Enquiry form',h:'Enquiry',items:ENQ_FIELDS,note:'States: default, focus, filled, inline error (text + icon, linked to field via aria-describedby), submitting, success (see Thank-you)',s:'B'},
 {t:'grid',name:'Contact details',h:'Contact details',items:['[Address]','[Phone]','[Email]','[Working hours]'],cols:4,s:'P'},
 {t:'video',name:'Map',h:'Map',img:'[Embedded map]',s:'P'},
 {t:'strip',name:'Social',items:['WhatsApp','Instagram','Facebook','YouTube','LinkedIn'],s:'B'},
 {t:'faq',name:'FAQ',h:'FAQ',items:['[Question]','[Question]','[Question]'],s:'P'}
]},
{ id:'thanks', n:'14a', title:'Enquiry Thank-you (state)', aud:'Everyone', cta:'Back to Home', hideNav:false, sections:[
 {t:'text',name:'Confirmation',h:'Thank you. We have your enquiry.',lines:['[What happens next and expected response time — to confirm]','Summary of what was submitted'],s:'P'},
 {t:'cta3',name:'Next actions',h:'While you wait',items:['Back to Home','Explore services','Chat on WhatsApp'],s:'B'}
]},
{ id:'privacy', n:'F1', title:'Privacy Policy', aud:'Everyone', cta:'—', sections:[
 {t:'hero',name:'Title',h:'Privacy Policy',sub:'Last updated: [date]',s:'P',compact:true},
 {t:'text',name:'Legal body',lines:['[Legal text — to be supplied or reviewed by client]','Sticky table of contents on desktop; collapsible on mobile'],s:'P'}
]},
{ id:'terms', n:'F2', title:'Terms & Conditions', aud:'Everyone', cta:'—', sections:[
 {t:'hero',name:'Title',h:'Terms & Conditions',sub:'Last updated: [date]',s:'P',compact:true},
 {t:'text',name:'Legal body',lines:['[Legal text — to be supplied or reviewed by client]'],s:'P'}
]},
{ id:'e404', n:'F3', title:'404', aud:'Everyone', cta:'Back to Home', sections:[
 {t:'text',name:'Friendly message',h:'This page took a wrong turn.',lines:['[Friendly line — copy to approve]'],s:'P'},
 {t:'cta3',name:'Ways back',h:'Try one of these',items:['Back to Home','School Care','Student Programs','Tech Solutions'],s:'B'}
]},
{ id:'pdetail', n:'10a', title:'Portfolio Detail (template)', aud:'Businesses, schools', cta:'Start a similar project', sections:[
 {t:'hero',name:'Title block',h:'[Project name]',sub:'[Category · Client · Year]',img:'[Hero image]',s:'P'},
 {t:'three',name:'Case structure',items:[['Client need','[Verified text]'],['Work delivered','[Verified text]'],['Result','[Verified result — never invented]']],s:'P'},
 {t:'gallery',name:'Project media',items:['[Image]','[Image]','[Image]','[Video]'],s:'P'},
 {t:'grid',name:'Related projects',h:'More work',items:PROJ,cols:3,s:'P'},
 {t:'cta',name:'Start CTA',h:'Start a similar project',cta:'Enquire',s:'B'}
]}
];

// ---------- renderer ----------
