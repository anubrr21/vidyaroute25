 const allColleges = Object.values(collegesData).flat();

function renderColleges(searchTerm = "") {
  const container = document.getElementById("collegesContainer");
  container.innerHTML = "";

  // filter colleges by search term (case insensitive)
  const filtered = allColleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // render filtered colleges
  filtered.forEach(college => {
    const card = document.createElement("div");
    card.className = "bg-card p-6 rounded-lg shadow-md college-item";
    card.innerHTML = `
      <h3 class="text-xl font-semibold mb-2 text-primary">${college.name}</h3>
      <p class="text-sm"><strong>State:</strong> ${college.state}</p>
      <p class="text-sm"><strong>Courses:</strong> ${college.courses}</p>
      <p class="text-sm"><strong>Fees:</strong> ${college.fees}</p>
      <p class="text-sm"><strong>Placement:</strong> ${college.placement}</p>
      <p class="text-sm"><strong>Rating:</strong> ⭐ ${college.rating}</p>
      <p class="text-sm"><strong>Established:</strong> ${college.established}</p>
      <p class="text-sm"><strong>Exams:</strong> ${college.exams}</p>
      <a href="https://${college.website}" target="_blank" class="text-primary underline">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

// initial load (show all colleges)
renderColleges();

// search event
document.getElementById("collegeSearch").addEventListener("input", (e) => {
  renderColleges(e.target.value);
});

 
// Commerce growth chart
new Chart(document.getElementById("commerceGrowthChart"), {
  type: "line",
  data: {
    labels: ["Fresher", "2-5 yrs", "5-10 yrs", "10+ yrs"],
    datasets: [{
      label: "Salary (LPA)",
      data: [4, 7, 12, 20],  // Example numbers
      fill: true,
      backgroundColor: "rgba(46,204,113,0.2)", // green shade
      borderColor: "rgba(46,204,113,1)",
      tension: 0.4,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Arts & Humanities growth chart
new Chart(document.getElementById("artsGrowthChart"), {
  type: "line",
  data: {
    labels: ["Fresher", "2-5 yrs", "5-10 yrs", "10+ yrs"],
    datasets: [{
      label: "Salary (LPA)",
      data: [3, 5, 8, 12],  // Example numbers
      fill: true,
      backgroundColor: "rgba(155,89,182,0.2)", // purple shade
      borderColor: "rgba(155,89,182,1)",
      tension: 0.4,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

        document.addEventListener("DOMContentLoaded", function () {
  // Engineering growth chart
  new Chart(document.getElementById("engGrowthChart"), {
    type: "line",
    data: {
      labels: ["Fresher", "2-5 yrs", "5-10 yrs", "10+ yrs"],
      datasets: [{
        label: "Salary (LPA)",
        data: [6, 10, 18, 30],  // example data
        fill: true,
        backgroundColor: "rgba(52,152,219,0.2)",
        borderColor: "rgba(52,152,219,1)",
        tension: 0.4,
        pointRadius: 4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Medical growth chart
  new Chart(document.getElementById("medGrowthChart"), {
    type: "line",
    data: {
      labels: ["Intern", "Resident", "Specialist", "Senior Doctor"],
      datasets: [{
        label: "Salary (LPA)",
        data: [8, 12, 20, 35],  // example data
        fill: true,
        backgroundColor: "rgba(231,76,60,0.2)",
        borderColor: "rgba(231,76,60,1)",
        tension: 0.4,
        pointRadius: 4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});

    
// Replace old careerPathChart init with this improved block
document.addEventListener('DOMContentLoaded', function() {
  // Try to load real data file /api/career-stats or /data/career_stats.json
  fetch('/data/career_stats.json').then(r => {
    if(!r.ok) throw new Error('no data');
    return r.json();
  }).catch(()=> {
    // fallback realistic sample data
    return {
      labels: ['Engineering','Medical','Commerce','Arts','Vocational'],
      avgSalary: [8.0,10.0,5.0,4.0,4.5],
      growthRate: [6,7,4,3,3],
      demandIndex: [9,8,6,5,5]
    };
  }).then(data => {
    // Bar chart: avg salary
    const ctx = document.getElementById('careerPathChart').getContext('2d');
    if(window._careerChart) window._careerChart.destroy();
    window._careerChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Average Starting Salary (LPA)',
          data: data.avgSalary,
          backgroundColor: 'rgba(52,152,219,0.8)',
          borderColor: 'rgba(52,152,219,1)',
          borderWidth:1
        }]
      },
      options: {
        responsive:true,
        plugins: {
          legend:{display:false},
          tooltip:{mode:'index',intersect:false}
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display:true, text: 'Salary (LPA)' }
          }
        }
      }
    });

    // OPTIONAL: add a small sparkline / mini-chart below using growthRate or demandIndex
    // Example: create a second canvas dynamically if you want to show demand index.
  });
});


        
// ====== Assessment: 15 questions, one-by-one ======
(function(){
  // QUESTIONS: each option carries score vector for streams: [science, medical, commerce, arts, vocational]
  const questions = [
    { q: "Which subjects do you enjoy the most?", options: [
        {t: "Mathematics & Physics", s:[3,0,0,0,0]},
        {t: "Biology & Chemistry", s:[0,3,0,0,0]},
        {t: "Accounts & Business Studies", s:[0,0,3,0,0]},
        {t: "History & Literature", s:[0,0,0,3,0]},
      ] },
    { q: "Which activity excites you?", options: [
        {t:"Solving complex problems", s:[3,0,0,0,0]},
        {t:"Caring for people & life sciences", s:[0,3,0,0,0]},
        {t:"Running projects or businesses", s:[0,0,3,0,0]},
        {t:"Creating art, writing, media", s:[0,0,0,3,0]},
      ] },
    { q: "Preferred work environment?", options:[
        {t:"Labs / R&amp;D", s:[3,1,0,0,0]},
        {t:"Hospitals / Clinics", s:[0,3,0,0,0]},
        {t:"Corporate / Offices", s:[0,0,3,1,0]},
        {t:"Studios / Field work", s:[0,0,0,3,2]},
      ] },
    { q: "How do you prefer to spend weekends?", options:[
        {t:"Learning coding or electronics", s:[3,0,0,0,0]},
        {t:"Volunteering / mentoring", s:[0,3,0,0,0]},
        {t:"Business competitions / stock games", s:[0,0,3,0,0]},
        {t:"Reading novels / visiting museums", s:[0,0,0,3,0]},
      ] },
    { q: "What skill are you most proud of?", options:[
        {t:"Analytical thinking", s:[3,1,0,0,0]},
        {t:"Empathy & communication", s:[0,3,0,0,0]},
        {t:"Numeracy & negotiation", s:[0,0,3,0,0]},
        {t:"Creative expression", s:[0,0,0,3,0]},
      ] },
    { q: "Do you prefer hands-on practical work?", options:[
        {t:"Yes, technical labs", s:[2,1,0,0,2]},
        {t:"Yes, patient care", s:[0,3,0,0,1]},
        {t:"No, prefer office-based", s:[0,0,3,0,0]},
        {t:"Depends — creativity involved", s:[0,0,0,3,2]},
      ] },
    { q: "Which problem would you rather solve?", options:[
        {t:"Optimization / algorithms", s:[3,0,0,0,0]},
        {t:"Diagnose a health issue", s:[0,3,0,0,0]},
        {t:"Improve business profits", s:[0,0,3,0,0]},
        {t:"Design an engaging campaign", s:[0,0,0,3,0]},
      ] },
    { q: "How important is job stability to you?", options:[
        {t:"Important", s:[1,1,1,2,3]},
        {t:"Very important", s:[1,2,1,2,3]},
        {t:"I prefer high growth risk", s:[3,1,3,2,1]},
        {t:"Creativity and freedom matter", s:[0,0,1,3,1]},
      ] },
    { q: "Do you enjoy math-heavy topics?", options:[
        {t:"Love it", s:[3,0,0,0,0]},
        {t:"Somewhat", s:[1,0,1,0,0]},
        {t:"Not really", s:[0,0,0,3,2]},
        {t:"Only applied math", s:[2,0,1,1,1]},
      ] },
    { q: "Which describes your communication style?", options:[
        {t:"Technical & precise", s:[3,0,0,0,0]},
        {t:"Compassionate & clear", s:[0,3,0,0,0]},
        {t:"Persuasive & concise", s:[0,0,3,0,0]},
        {t:"Storyteller/visual", s:[0,0,0,3,0]},
      ] },
    { q: "Would you relocate for job/education?", options:[
        {t:"Yes, anywhere for the right role", s:[2,2,2,1,2]},
        {t:"Prefer in-city / nearby", s:[1,1,1,2,1]},
        {t:"Only if field demands it", s:[2,3,1,1,1]},
        {t:"Prefer local / community roles", s:[0,0,1,3,3]},
      ] },
    { q: "How do you approach learning?", options:[
        {t:"Structured courses & labs", s:[3,1,0,0,0]},
        {t:"Mentored/apprenticeship", s:[0,3,0,0,2]},
        {t:"Self-study & case studies", s:[1,0,3,1,1]},
        {t:"Workshops & portfolio", s:[0,0,0,3,3]},
      ] },
    { q: "Which tool would you rather use daily?", options:[
        {t:"IDE / simulation tools", s:[3,0,0,0,1]},
        {t:"Medical instruments / reports", s:[0,3,0,0,1]},
        {t:"Excel / analytics platforms", s:[0,0,3,0,0]},
        {t:"Design suites / cameras", s:[0,0,0,3,2]},
      ] },
    { q: "What's your long-term priority?", options:[
        {t:"Technical leadership / R&D", s:[3,0,0,0,0]},
        {t:"Clinical expertise / service", s:[0,3,0,0,0]},
        {t:"Business owner / finance head", s:[0,0,3,0,0]},
        {t:"Creative director / educator", s:[0,0,0,3,0]},
      ] },
    { q: "Would you like work with tangible results?", options:[
        {t:"Yes, build products/systems", s:[3,0,0,0,2]},
        {t:"Yes — patient outcomes", s:[0,3,0,0,1]},
        {t:"Yes — business impact", s:[0,0,3,0,1]},
        {t:"Yes — creative outputs", s:[0,0,0,3,2]},
      ] }
  ];

  const streams = ['Engineering/Tech','Medical/Health','Commerce/Business','Arts & Humanities','Vocational/Skill'];

  // state
  let answers = new Array(questions.length).fill(null);
  let current = 0;

  // elements
  const overlay = document.getElementById('assessmentOverlay');
  const assessmentContent = document.getElementById('assessmentContent');
  const qProgressText = document.getElementById('qProgressText');
  const nextBtn = document.getElementById('nextQ');
  const prevBtn = document.getElementById('prevQ');
  const closeBtn = document.getElementById('closeAssessment');

  function renderQuestion(idx){
    const item = questions[idx];
    qProgressText.textContent = `Question ${idx+1} / ${questions.length}`;
    // build HTML
    let html = `<div style="display:flex;flex-direction:column;gap:14px;">`;
    html += `<h4 style="font-size:1.15rem;margin-bottom:6px;color:var(--text-primary)">${item.q}</h4>`;
    html += `<div id="optionsWrap" style="display:flex;flex-direction:column;gap:10px;">`;
    item.options.forEach( (opt, i) => {
      const checked = (answers[idx] && answers[idx] === i) ? 'checked' : '';
      html += `
        <label style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:10px;border:1px solid var(--border-color);cursor:pointer;background:transparent;">
          <input type="radio" name="qopt" value="${i}" ${checked}>
          <div style="font-weight:600;">${opt.t}</div>
        </label>
      `;
    });
    html += `</div></div>`;
    assessmentContent.innerHTML = html;
    // attach change handlers
    assessmentContent.querySelectorAll('input[name="qopt"]').forEach(inp=>{
      inp.addEventListener('change', (e)=>{
        answers[idx] = parseInt(e.target.value);
      });
    });
    // disable prev on first
    prevBtn.style.visibility = idx===0 ? 'hidden' : 'visible';
    // change next label on last
    nextBtn.innerHTML = (idx === questions.length-1) ? 'View Result <i class="fas fa-chart-pie ml-2"></i>' : 'Next <i class="fas fa-arrow-right ml-2"></i>';
  }

  function calculateResults(){
    // score vector
    const totals = [0,0,0,0,0];
    answers.forEach((ans, i) => {
      if(ans === null) return;
      const vec = questions[i].options[ans].s;
      for(let j=0;j<5;j++) totals[j]+= (vec[j]||0);
    });
    return totals;
  }

  function showResults(totals){
    // find top stream
    const maxVal = Math.max(...totals);
    const topIndexes = totals.map((v,i)=> v===maxVal ? i : -1).filter(i=>i>=0);
    const topStream = streams[topIndexes[0]];

    // build descriptive text for each stream (customize)
    const streamDescriptions = {
      'Engineering/Tech': {
        desc: 'Engineering & Technology: B.Tech / B.E. pathways leading to roles in software, hardware, systems and R&D. Typical starting packages in metro areas vary but engineering graduates often start between ₹4-12 LPA depending on specialization and institute.',
        what: ['B.Tech/B.E. — Specializations: CSE, ECE, Mechanical, Civil','Skills: Programming, problem solving, math','Careers: Software Developer, Systems Engineer, Product Manager']
      },
      'Medical/Health': {
        desc: 'Medical & Health: MBBS / BDS / Allied Health courses. Requires NEET for MBBS; highly respected with long-term clinical or research careers.',
        what: ['MBBS / BDS / BSc Nursing / Allied Health','Skills: science knowledge, empathy, manual dexterity','Careers: Doctor, Researcher, Lab Technologist']
      },
      'Commerce/Business': {
        desc: 'Commerce & Business: B.Com, BBA, CA pathway. Good for those who like numbers, finance and management.',
        what: ['B.Com / BBA / CA / MBA','Skills: accounting, analytics, economics','Careers: Accountant, Financial Analyst, Business Manager']
      },
      'Arts & Humanities': {
        desc: 'Arts & Humanities: B.A., Mass Communication, Design and Teaching pathways. Great for communication, writing, research and creative careers.',
        what: ['B.A. / Mass Comm / Humanities / Design','Skills: writing, analysis, creativity','Careers: Journalist, Teacher, Content Creator, Curator']
      },
      'Vocational/Skill': {
        desc: 'Vocational & Skill-based courses: short-term industry-focused programs for quick entry into jobs (IT, Hospitality, Automotive, Healthcare assistance).',
        what: ['Short-term diplomas / certificates','Skills: hands-on, practical training','Careers: Technician, Shop-floor supervisor, Hospitality roles']
      }
    };

    // create result HTML with chart canvas
    const resultHTML = `
      <div style="display:flex;gap:18px;flex-wrap:wrap;">
        <div style="flex:1;min-width:300px;">
          <h3 style="margin-top:0">${topStream}</h3>
          <p style="color:var(--text-secondary)">${streamDescriptions[topStream].desc}</p>
          <div style="margin-top:10px;padding:12px;border-radius:10px;background:var(--bg-secondary);">
            <h4 style="margin:0 0 6px 0;font-weight:700">Recommended Courses</h4>
            <ul style="margin:0;padding-left:18px;color:var(--text-primary)">
              ${streamDescriptions[topStream].what.map(it=>`<li>${it}</li>`).join('')}
            </ul>
          </div>
          <div style="margin-top:12px;">
            <h4 style="margin-bottom:6px;">Professional Analysis</h4>
            <p style="color:var(--text-secondary)">Based on your answers, this stream matches your strengths. We recommend exploring institute rankings, internships and short-term projects relevant to this field. Consider focused coaching (e.g., JEE/NEET/CA prep) and practical portfolio work.</p>
          </div>
          <div style="margin-top:12px;">
            <button id="exportPDF" class="btn-primary">Download Report (PDF)</button>
            <button id="redoAssessment" class="btn-outline" style="margin-left:8px;">Retake Assessment</button>
          </div>
        </div>
        <div style="width:360px;min-width:280px;">
          <canvas id="resultRadar" height="360"></canvas>
        </div>
      </div>
    `;
    assessmentContent.innerHTML = resultHTML;

    // create Chart: radar showing relative strengths
    const ctx = document.getElementById('resultRadar').getContext('2d');
    if(window._resultChart) window._resultChart.destroy();
    window._resultChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: streams,
        datasets: [{
          label: 'Your Match Score',
          data: totals,
          fill: true,
          backgroundColor: 'rgba(52,152,219,0.15)',
          borderColor: 'rgba(52,152,219,0.9)',
          pointBackgroundColor: 'rgba(52,152,219,1)',
          pointRadius:5
        }]
      },
      options: {
        elements: { line: { tension:0.3 } },
        scales: {
          r: {
            beginAtZero: true,
            ticks: { stepSize: 2 }
          }
        },
        plugins: {
          legend: { display: false }
        },
        responsive:true,
        maintainAspectRatio:false
      }
    });

    // attach handlers
    document.getElementById('redoAssessment').addEventListener('click', ()=>{
      answers = new Array(questions.length).fill(null);
      current = 0;
      renderQuestion(current);
    });

    document.getElementById('exportPDF').addEventListener('click', ()=>{
      // small client-side export: window.print or html2pdf (if added)
      window.print();
    });
  }

  // navigation handlers
  nextBtn.addEventListener('click', ()=>{
    // ensure an option chosen
    if(answers[current] === null){
      // highlight to user
      const firstOpt = assessmentContent.querySelector('input[name="qopt"]');
      if(firstOpt) firstOpt.focus();
      // show a small toast
      alert('Please select an option to continue.');
      return;
    }
    if(current < questions.length - 1){
      current++;
      renderQuestion(current);
    } else {
      // show results
      const totals = calculateResults();
      showResults(totals);
    }
  });

  prevBtn.addEventListener('click', ()=>{
    if(current > 0){
      current--;
      renderQuestion(current);
    }
  });

  closeBtn.addEventListener('click', ()=>{
    overlay.style.display = 'none';
  });

  // open overlay helper: attach to your existing buttons
  function openAssessment(){
    overlay.style.display = 'flex';
    // small entrance animation
    document.getElementById('assessmentCard').classList.add('animate-zoom-in');
    renderQuestion(current);
  }

  // Hook existing Start buttons (they exist in your page)
  ['startAssessmentBtn','heroAssessmentBtn','sectionAssessmentBtn','startBtn'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', (e)=>{
      e.preventDefault();
      openAssessment();
      // scroll into view if overlay covers
      return false;
    });
  });

  // also open if user clicks the CTA "Start Assessment" inside hero card etc.
})();


           
  

  
        // College data (expanded with more colleges)
        const collegesData = {
            "all": [
                {
                    name: "Indian Institute of Technology Bombay",
                    state: "Maharashtra",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.5 Lakhs/year",
                    placement: "₹18 LPA average",
                    rating: "4.8",
                    established: "1958",
                    exams: "JEE Advanced",
                    website: "www.iitb.ac.in"
                },
                {
                    name: "National Institute of Technology Trichy",
                    state: "Tamil Nadu",
                    courses: "B.Tech, M.Tech, MBA",
                    fees: "₹1.5 Lakhs/year",
                    placement: "₹12 LPA average",
                    rating: "4.5",
                    established: "1964",
                    exams: "JEE Main",
                    website: "www.nitt.edu"
                },
                {
                    name: "Jadavpur University",
                    state: "West Bengal",
                    courses: "Engineering, Science, Arts",
                    fees: "₹10,000/year",
                    placement: "₹9 LPA average",
                    rating: "4.3",
                    established: "1955",
                    exams: "WBJEE",
                    website: "www.jaduniv.edu.in"
                },
                {
                    name: "Delhi Technological University",
                    state: "Delhi",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2 Lakhs/year",
                    placement: "₹10 LPA average",
                    rating: "4.2",
                    established: "1941",
                    exams: "JEE Main",
                    website: "www.dtu.ac.in"
                },
                {
                    name: "Indian Institute of Science Bangalore",
                    state: "Karnataka",
                    courses: "B.S, M.Tech, PhD",
                    fees: "₹1 Lakh/year",
                    placement: "₹15 LPA average",
                    rating: "4.7",
                    established: "1909",
                    exams: "IISc Entrance",
                    website: "www.iisc.ac.in"
                },
                {
                    name: "University of Delhi",
                    state: "Delhi",
                    courses: "B.A, B.Com, B.Sc, Engineering",
                    fees: "₹15,000/year",
                    placement: "₹8 LPA average",
                    rating: "4.4",
                    established: "1922",
                    exams: "DUET",
                    website: "www.du.ac.in"
                }
            ],
            "maharashtra": [
                {
                    name: "Indian Institute of Technology Bombay",
                    state: "Maharashtra",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.5 Lakhs/year",
                    placement: "₹18 LPA average",
                    rating: "4.8",
                    established: "1958",
                    exams: "JEE Advanced",
                    website: "www.iitb.ac.in"
                },
                {
                    name: "Veermata Jijabai Technological Institute",
                    state: "Maharashtra",
                    courses: "B.Tech, M.Tech",
                    fees: "₹1.2 Lakhs/year",
                    placement: "₹8 LPA average",
                    rating: "4.1",
                    established: "1887",
                    exams: "MHT CET",
                    website: "www.vjti.ac.in"
                },
                {
                    name: "College of Engineering, Pune",
                    state: "Maharashtra",
                    courses: "B.Tech, M.Tech",
                    fees: "₹1 Lakh/year",
                    placement: "₹7.5 LPA average",
                    rating: "4.2",
                    established: "1854",
                    exams: "MHT CET",
                    website: "www.coep.org.in"
                }
            ],
            "gujarat": [
                {
                    name: "Indian Institute of Technology Gandhinagar",
                    state: "Gujarat",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.2 Lakhs/year",
                    placement: "₹15 LPA average",
                    rating: "4.6",
                    established: "2008",
                    exams: "JEE Advanced",
                    website: "www.iitgn.ac.in"
                },
                {
                    name: "Nirma University",
                    state: "Gujarat",
                    courses: "Engineering, Management, Law",
                    fees: "₹2 Lakhs/year",
                    placement: "₹9 LPA average",
                    rating: "4.3",
                    established: "2003",
                    exams: "NUET",
                    website: "www.nirmauni.ac.in"
                },
                {
                    name: "Dharmsinh Desai University",
                    state: "Gujarat",
                    courses: "Engineering, Pharmacy, Management",
                    fees: "₹1.5 Lakhs/year",
                    placement: "₹6 LPA average",
                    rating: "4.0",
                    established: "1968",
                    exams: "GUJCET",
                    website: "www.ddu.ac.in"
                }
            ],
            "west-bengal": [
                {
                    name: "Indian Institute of Technology Kharagpur",
                    state: "West Bengal",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.3 Lakhs/year",
                    placement: "₹16 LPA average",
                    rating: "4.7",
                    established: "1951",
                    exams: "JEE Advanced",
                    website: "www.iitkgp.ac.in"
                },
                {
                    name: "Jadavpur University",
                    state: "West Bengal",
                    courses: "Engineering, Science, Arts",
                    fees: "₹10,000/year",
                    placement: "₹9 LPA average",
                    rating: "4.3",
                    established: "1955",
                    exams: "WBJEE",
                    website: "www.jaduniv.edu.in"
                },
                {
                    name: "Indian Institute of Engineering Science and Technology, Shibpur",
                    state: "West Bengal",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹1.2 Lakhs/year",
                    placement: "₹8 LPA average",
                    rating: "4.2",
                    established: "1856",
                    exams: "WBJEE",
                    website: "www.iiests.ac.in"
                }
            ],
            "karnataka": [
                {
                    name: "Indian Institute of Science Bangalore",
                    state: "Karnataka",
                    courses: "B.S, M.Tech, PhD",
                    fees: "₹1 Lakh/year",
                    placement: "₹15 LPA average",
                    rating: "4.7",
                    established: "1909",
                    exams: "IISc Entrance",
                    website: "www.iisc.ac.in"
                },
                {
                    name: "National Institute of Technology Karnataka",
                    state: "Karnataka",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹1.5 Lakhs/year",
                    placement: "₹11 LPA average",
                    rating: "4.4",
                    established: "1960",
                    exams: "JEE Main",
                    website: "www.nitk.ac.in"
                },
                {
                    name: "R.V. College of Engineering",
                    state: "Karnataka",
                    courses: "B.Tech, M.Tech",
                    fees: "₹1.8 Lakhs/year",
                    placement: "₹9 LPA average",
                    rating: "4.3",
                    established: "1963",
                    exams: "COMEDK",
                    website: "www.rvce.edu.in"
                }
            ],
            "telangana": [
                {
                    name: "Indian Institute of Technology Hyderabad",
                    state: "Telangana",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.2 Lakhs/year",
                    placement: "₹14 LPA average",
                    rating: "4.5",
                    established: "2008",
                    exams: "JEE Advanced",
                    website: "www.iith.ac.in"
                },
                {
                    name: "International Institute of Information Technology, Hyderabad",
                    state: "Telangana",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.5 Lakhs/year",
                    placement: "₹16 LPA average",
                    rating: "4.6",
                    established: "1998",
                    exams: "JEE Main",
                    website: "www.iiit.ac.in"
                },
                {
                    name: "Osmania University",
                    state: "Telangana",
                    courses: "Engineering, Arts, Science, Commerce",
                    fees: "₹20,000/year",
                    placement: "₹7 LPA average",
                    rating: "4.1",
                    established: "1918",
                    exams: "TS EAMCET",
                    website: "www.osmania.ac.in"
                }
            ],
            "delhi": [
                {
                    name: "Indian Institute of Technology Delhi",
                    state: "Delhi",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2.3 Lakhs/year",
                    placement: "₹17 LPA average",
                    rating: "4.8",
                    established: "1961",
                    exams: "JEE Advanced",
                    website: "www.iitd.ac.in"
                },
                {
                    name: "Delhi Technological University",
                    state: "Delhi",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹2 Lakhs/year",
                    placement: "₹10 LPA average",
                    rating: "4.2",
                    established: "1941",
                    exams: "JEE Main",
                    website: "www.dtu.ac.in"
                },
                {
                    name: "Netaji Subhas University of Technology",
                    state: "Delhi",
                    courses: "B.Tech, M.Tech, PhD",
                    fees: "₹1.8 Lakhs/year",
                    placement: "₹9 LPA average",
                    rating: "4.3",
                    established: "1983",
                    exams: "JEE Main",
                    website: "www.nsut.ac.in"
                }
            ]
        }; 

        
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'light') {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'block';
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });

        // Chatbot Toggle
        const chatbotButton = document.getElementById('chatbotButton');
        const closeChat = document.getElementById('closeChat');
        const chatWindow = document.getElementById('chatWindow');
        
        chatbotButton.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
        });
        
        closeChat.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });

        // Send Message
        const chatInput = document.getElementById('chatInput');
        const sendMessage = document.getElementById('sendMessage');
        const chatMessages = document.getElementById('chatMessages');
        
        sendMessage.addEventListener('click', () => {
            if (chatInput.value.trim() !== '') {
                addMessage(chatInput.value, 'user');
                chatInput.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    addMessage('I can help you with career guidance, college information, and more. How can I assist you?', 'bot');
                }, 1000);
            }
        });
        
        // Prompt buttons
        document.querySelectorAll('.prompt-button').forEach(button => {
            button.addEventListener('click', () => {
                const prompt = button.getAttribute('data-prompt');
                addMessage(prompt, 'user');
                
                // Simulate bot response
                setTimeout(() => {
                    let response = '';
                    if (prompt.includes('Science courses')) {
                        response = 'After 12th Science, you can pursue: Engineering (B.Tech/B.E.), Medical (MBBS), Pure Sciences (B.Sc.), Commerce (B.Com), or even Arts streams. Each path has different career opportunities. Would you like more details about any specific field?';
                    } else if (prompt.includes('Engineering colleges')) {
                        response = 'Top engineering colleges in India include IITs, NITs, BITS Pilani, DTU, and IIITs. Admission is typically through JEE Main and JEE Advanced exams. The cutoff varies by institute and category.';
                    } else if (prompt.includes('JEE Preparation')) {
                        response = 'JEE preparation requires strong fundamentals in Physics, Chemistry, and Mathematics. Recommended strategy: 1) Complete NCERT books thoroughly, 2) Practice previous years\' papers, 3) Take mock tests regularly, 4) Focus on time management.';
                    } else if (prompt.includes('Commerce careers')) {
                        response = 'Commerce offers diverse career paths: Chartered Accountancy (CA), Company Secretary (CS), Business Management (BBA/MBA), Banking, Financial Analysis, and Entrepreneurship. Each has different eligibility requirements and growth prospects.';
                    } else if (prompt.includes('Medical eligibility')) {
                        response = 'For medical courses like MBBS, you need to complete 10+2 with Physics, Chemistry, Biology/Biotechnology, and English with at least 50% marks. You also need to qualify NEET-UG exam. The age limit is 17-25 years.';
                    } else if (prompt.includes('Career assessment')) {
                        response = 'Our career assessment evaluates your interests, skills, personality, and values through a series of questions. It takes about 10-15 minutes to complete. Based on your responses, we provide personalized career recommendations matching your profile with suitable career paths.';
                    } else if (prompt.includes('Arts colleges')) {
                        response = 'Top arts colleges in India include Lady Shri Ram College, St. Stephen\'s College, Loyola College, Presidency College, and Miranda House. These colleges offer various programs in Humanities, Social Sciences, and Fine Arts.';
                    } else if (prompt.includes('Data science skills')) {
                        response = 'For data science, you need strong skills in Mathematics, Statistics, Programming (Python/R), Data Visualization, Machine Learning, and problem-solving. A background in Computer Science, Mathematics, or Statistics is beneficial.';
                    } else if (prompt.includes('Vocational courses')) {
                        response = 'Vocational courses provide practical skills for specific jobs. Popular options include: IT courses (Web Development, Digital Marketing), Healthcare (Medical Lab Technology, Pharmacy Assistant), Hospitality, Automotive repair, Beauty & Wellness, and Retail management. These courses typically range from 6 months to 2 years.';
                    } else if (prompt.includes('Maharashtra colleges')) {
                        response = 'Top colleges in Maharashtra include IIT Bombay, VJTI Mumbai, COEP Pune, ICT Mumbai, and SPPU Pune. Admission to engineering colleges is through MHT-CET or JEE Main, while other courses have their respective entrance exams.';
                    } else if (prompt.includes('NEET Preparation')) {
                        response = 'NEET preparation requires thorough knowledge of Biology, along with Physics and Chemistry. Recommended approach: 1) Complete NCERT syllabus completely, 2) Practice diagram-based questions, 3) Take regular mock tests, 4) Focus on time management during exam.';
                    } else if (prompt.includes('B.Com careers')) {
                        response = 'After B.Com, you can pursue: Chartered Accountancy (CA), Company Secretary (CS), MBA, M.Com, Banking exams, or professional courses in Digital Marketing, Financial Analysis, or Entrepreneurship. Each path offers different opportunities and growth prospects.';
                    } else {
                        response = 'I can help you with career guidance, college information, and more. How can I assist you?';
                    }
                    addMessage(response, 'bot');
                }, 1000);
            });
        });
        
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender);
            messageDiv.textContent = text;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Scroll to Colleges
        document.querySelectorAll('.scroll-to-colleges').forEach(button => {
            button.addEventListener('click', () => {
                document.getElementById('colleges').scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Load colleges based on state filter
        function loadColleges(state = 'all') {
    const collegesContainer = document.getElementById('collegesContainer');
    collegesContainer.innerHTML = '';

    let collegesToShow = [];

    if (state === 'all') {
        // Merge all states except "all"
        Object.keys(collegesData).forEach(st => {
            if (st !== 'all') {
                collegesToShow = collegesToShow.concat(collegesData[st]);
            }
        });
    } else {
        collegesToShow = collegesData[state] || [];
    }

    collegesToShow.forEach(college => {
        const collegeCard = document.createElement('div');
        collegeCard.classList.add('college-card', 'bg-card', 'p-6', 'rounded-xl', 'fade-in');
        collegeCard.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-primary">${college.name}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${college.state}</p>
            <p class="mb-2"><strong>Courses:</strong> ${college.courses}</p>
            <p class="mb-2"><strong>Fees:</strong> ${college.fees}</p>
            <p class="mb-2"><strong>Placement:</strong> ${college.placement}</p>
            <div class="flex items-center mb-4">
                <div class="flex text-yellow-400 mr-2">
                    ${getStarRating(college.rating)}
                </div>
                <span>${college.rating}/5</span>
            </div>
            <button class="view-details bg-primary text-white px-4 py-2 rounded-lg w-full hover:bg-secondary transition" data-college='${JSON.stringify(college)}'>
                View Details
            </button>
        `;
        collegesContainer.appendChild(collegeCard);
    });

    // Add event listeners for view details
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const collegeData = JSON.parse(e.target.getAttribute('data-college'));
            showCollegeDetails(collegeData);
        });
    });
}

function loadColleges(state = 'all') {
    const collegesContainer = document.getElementById('collegesContainer');
    collegesContainer.innerHTML = '';

    let collegesToShow = [];

    if (state === 'all') {
        // Combine all state arrays (skip "all" itself)
        Object.keys(collegesData).forEach(st => {
            if (st !== 'all') {
                collegesToShow = collegesToShow.concat(collegesData[st]);
            }
        });
    } else {
        // Defensive: if state key doesn’t exist, show nothing instead of crashing
        collegesToShow = collegesData[state] || [];
    }

    if (collegesToShow.length === 0) {
        collegesContainer.innerHTML = `<p class="text-center text-gray-500">No colleges found for this state.</p>`;
        return;
    }

    collegesToShow.forEach(college => {
        const collegeCard = document.createElement('div');
        collegeCard.classList.add('college-card', 'bg-card', 'p-6', 'rounded-xl', 'fade-in');
        collegeCard.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-primary">${college.name}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${college.state}</p>
            <p class="mb-2"><strong>Courses:</strong> ${college.courses}</p>
            <p class="mb-2"><strong>Fees:</strong> ${college.fees}</p>
            <p class="mb-2"><strong>Placement:</strong> ${college.placement}</p>
            <div class="flex items-center mb-4">
                <div class="flex text-yellow-400 mr-2">
                    ${getStarRating(college.rating)}
                </div>
                <span>${college.rating}/5</span>
            </div>
            <button class="view-details bg-primary text-white px-4 py-2 rounded-lg w-full hover:bg-secondary transition" data-college='${JSON.stringify(college)}'>
                View Details
            </button>
        `;
        collegesContainer.appendChild(collegeCard);
    });

    // Attach modal openers
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const collegeData = JSON.parse(e.target.getAttribute('data-college'));
            showCollegeDetails(collegeData);
        });
    });
}





        /*function loadColleges(state = 'all') {
            const collegesContainer = document.getElementById('collegesContainer');
            collegesContainer.innerHTML = '';
            
            collegesData[state].forEach(college => {
                const collegeCard = document.createElement('div');
                collegeCard.classList.add('college-card', 'bg-card', 'p-6', 'rounded-xl', 'fade-in');
                collegeCard.innerHTML = `
                    <h3 class="text-xl font-semibold mb-2 text-primary">${college.name}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${college.state}</p>
                    <p class="mb-2"><strong>Courses:</strong> ${college.courses}</p>
                    <p class="mb-2"><strong>Fees:</strong> ${college.fees}</p>
                    <p class="mb-2"><strong>Placement:</strong> ${college.placement}</p>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400 mr-2">
                            ${getStarRating(college.rating)}
                        </div>
                        <span>${college.rating}/5</span>
                    </div>
                    <button class="view-details bg-primary text-white px-4 py-2 rounded-lg w-full hover:bg-secondary transition" data-college='${JSON.stringify(college)}'>
                        View Details
                    </button>
                `;
                collegesContainer.appendChild(collegeCard);
            });
            
            // Add event listeners to view details buttons
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    const collegeData = JSON.parse(e.target.getAttribute('data-college'));
                    showCollegeDetails(collegeData);
                });
            });
        }*/
        
        function getStarRating(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }
        
        function showCollegeDetails(college) {
            const modal = document.getElementById('collegeModal');
            const collegeName = document.getElementById('modalCollegeName');
            const collegeDetails = document.getElementById('collegeDetails');
            
            collegeName.textContent = college.name;
            collegeDetails.innerHTML = `
                <p class="mb-2"><strong>State:</strong> ${college.state}</p>
                <p class="mb-2"><strong>Established:</strong> ${college.established}</p>
                <p class="mb-2"><strong>Courses Offered:</strong> ${college.courses}</p>
                <p class="mb-2"><strong>Annual Fees:</strong> ${college.fees}</p>
                <p class="mb-2"><strong>Average Placement:</strong> ${college.placement}</p>
                <p class="mb-2"><strong>Entrance Exams:</strong> ${college.exams}</p>
                <p class="mb-4"><strong>Website:</strong> <a href="https://${college.website}" target="_blank" class="text-primary hover:underline">${college.website}</a></p>
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 mr-2">
                        ${getStarRating(college.rating)}
                    </div>
                    <span>${college.rating}/5</span>
                </div>
                <button class="btn-primary w-full">Apply Now</button>
            `;
            
            modal.classList.add('open');
            
            // Add event listener to close modal
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.classList.remove('open');
            });
        }
        
        // State filter functionality
        document.querySelectorAll('.state-filter').forEach(button => {
            button.addEventListener('click', () => {
                // Update active state button
                document.querySelectorAll('.state-filter').forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-white', 'text-primary', 'border', 'border-primary', 'dark:bg-gray-700', 'dark:text-white', 'dark:border-gray-600');
                });
                
                button.classList.remove('bg-white', 'text-primary', 'border', 'border-primary', 'dark:bg-gray-700', 'dark:text-white', 'dark:border-gray-600');
                button.classList.add('bg-primary', 'text-white');
                
                // Load colleges for selected state
                const state = button.getAttribute('data-state');
                loadColleges(state);
            });
        });
        
        // Modal functionality
        document.getElementById('privacyLink').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('privacyModal').classList.add('open');
        });
        
        document.getElementById('termsLink').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('termsModal').classList.add('open');
        });
        
        document.querySelectorAll('.close-modal').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('open');
                });
            });
        });
        
        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Load initial colleges
            loadColleges();
            
            // Add fade-in animation to sections when they come into view
            const fadeElements = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(el => observer.observe(el));
            
            // Initialize career path chart
            const ctx = document.getElementById('careerPathChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Engineering', 'Medical', 'Commerce', 'Arts', 'Vocational'],
                    datasets: [{
                        label: 'Average Starting Salary (LPA)',
                        data: [8, 10, 5, 4, 4.5],
                        backgroundColor: [
                            'rgba(52, 152, 219, 0.7)',
                            'rgba(231, 76, 60, 0.7)',
                            'rgba(46, 204, 113, 0.7)',
                            'rgba(155, 89, 182, 0.7)',
                            'rgba(241, 196, 15, 0.7)'
                        ],
                        borderColor: [
                            'rgba(52, 152, 219, 1)',
                            'rgba(231, 76, 60, 1)',
                            'rgba(46, 204, 113, 1)',
                            'rgba(155, 89, 182, 1)',
                            'rgba(241, 196, 15, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Salary (Lakhs per annum)'
                            }
                        }
                    }
                }
            });
        });