import React, { useState, useEffect } from 'react';

// ═══════════════════════════════════════════════════════
// BANQUE DE 150 QCM — ICT104 | Prof. KUTCHE
// ═══════════════════════════════════════════════════════
const QUESTIONS = [
  // ---- PARTIE A : GÉNÉRATIONS (1-30) ----
  { id:1, part:"A", q:"Les tubes à vide (vacuum tubes) caractérisent :", o:["1ʳᵉ génération","2ᵉ génération","3ᵉ génération","4ᵉ génération"], a:0 },
  { id:2, part:"A", q:"Le transistor a été inventé en :", o:["1947","1958","1971","1936"], a:0 },
  { id:3, part:"A", q:"L'ENIAC appartient à :", o:["1ʳᵉ gén","2ᵉ gén","3ᵉ gén","4ᵉ gén"], a:0 },
  { id:4, part:"A", q:"Le circuit intégré (IC) marque :", o:["1ʳᵉ gén","2ᵉ gén","3ᵉ gén","5ᵉ gén"], a:2 },
  { id:5, part:"A", q:"Le microprocesseur apparaît en :", o:["1965","1971","1947","1981"], a:1 },
  { id:6, part:"A", q:"L'intelligence artificielle est l'objectif de :", o:["3ᵉ gén","4ᵉ gén","5ᵉ gén","2ᵉ gén"], a:2 },
  { id:7, part:"A", q:"Quel ordre chronologique est CORRECT ?", o:["Tubes → Transistors → IC → Microprocesseur","Transistors → Tubes → IC → Microprocesseur","IC → Tubes → Transistors → Microprocesseur","Tubes → IC → Transistors → Microprocesseur"], a:0 },
  { id:8, part:"A", q:"Le langage machine apparaît dès :", o:["1ʳᵉ gén","2ᵉ gén","3ᵉ gén","4ᵉ gén"], a:0 },
  { id:9, part:"A", q:"Quelle techno a REMPLACÉ les tubes à vide ?", o:["Les IC","Les transistors","Les microprocesseurs","Le SSD"], a:1 },
  { id:10, part:"A", q:"Un microprocesseur regroupe :", o:["Plusieurs transistors sur une puce","Une RAM","Un disque dur","Un écran"], a:0 },
  { id:11, part:"A", q:"Les langages évolués (high-level) se généralisent surtout à partir de :", o:["1ʳᵉ gén","2ᵉ gén","3ᵉ gén","5ᵉ gén"], a:2 },
  { id:12, part:"A", q:"Le traitement parallèle massif est associé à :", o:["2ᵉ gén","3ᵉ gén","5ᵉ gén","1ʳᵉ gén"], a:2 },
  { id:13, part:"A", q:"Quelle affirmation est FAUSSE ?", o:["La 1ʳᵉ gén consommait beaucoup d'énergie","Les transistors sont plus petits que les tubes","La 4ᵉ gén utilise des tubes à vide","Le microprocesseur est de 4ᵉ gén"], a:2 },
  { id:14, part:"A", q:"Les cartes perforées étaient surtout utilisées en :", o:["1ʳᵉ gén","4ᵉ gén","5ᵉ gén","3ᵉ gén"], a:0 },
  { id:15, part:"A", q:"Le transistor utilise un matériau :", o:["Conducteur pur","Semi-conducteur","Isolant","Liquide"], a:1 },
  { id:16, part:"A", q:"Les ordinateurs deviennent plus petits à partir de :", o:["1ʳᵉ gén","2ᵉ gén","dès la 2ᵉ gén progressivement","jamais"], a:2 },
  { id:17, part:"A", q:"Le silicium est le matériau de base des :", o:["Tubes","Transistors et IC","Relais","Cartes perforées"], a:1 },
  { id:18, part:"A", q:"Quelle génération introduit les OS modernes multitâches ?", o:["1ʳᵉ","2ᵉ","3ᵉ et 4ᵉ","aucune"], a:2 },
  { id:19, part:"A", q:"Le terme « VLSI » est lié à :", o:["1ʳᵉ gén","2ᵉ gén","4ᵉ gén","tubes"], a:2 },
  { id:20, part:"A", q:"Avant le langage machine, on programmait :", o:["En Python","Par câblage physique/cartes","En C","En assembleur"], a:1 },
  { id:21, part:"A", q:"Le principal inconvénient des tubes à vide :", o:["Trop rapides","Chaleur et fragilité","Trop petits","Trop chers en silicium"], a:1 },
  { id:22, part:"A", q:"Combien de générations sont généralement reconnues ?", o:["3","4","5","7"], a:2 },
  { id:23, part:"A", q:"L'assembleur comme langage apparaît surtout dès :", o:["2ᵉ gén","5ᵉ gén","jamais","4ᵉ gén uniquement"], a:0 },
  { id:24, part:"A", q:"Quelle paire est correctement associée ?", o:["Tube → 4ᵉ gén","Transistor → 2ᵉ gén","IC → 1ʳᵉ gén","Microprocesseur → 2ᵉ gén"], a:1 },
  { id:25, part:"A", q:"La miniaturisation extrême repose sur :", o:["Plus de tubes","L'intégration de transistors","Plus de relais","Des cartes perforées"], a:1 },
  { id:26, part:"A", q:"Le robot et la reconnaissance vocale relèvent surtout de :", o:["1ʳᵉ gén","2ᵉ gén","5ᵉ gén","3ᵉ gén"], a:2 },
  { id:27, part:"A", q:"Quelle est la génération la PLUS ancienne ?", o:["Celle des IC","Celle des transistors","Celle des tubes à vide","Celle des microprocesseurs"], a:2 },
  { id:28, part:"A", q:"Le passage tube→transistor a permis principalement :", o:["Plus de chaleur","Moins de fiabilité","Réduction taille + consommation","Plus grand encombrement"], a:2 },
  { id:29, part:"A", q:"Quelle est FAUSSE à propos des microprocesseurs ?", o:["Ils intègrent l'UAL","Ils sont de 4ᵉ gén","Ils contiennent des millions de transistors","Ils datent de la 1ʳᵉ gén"], a:3 },
  { id:30, part:"A", q:"« Intel 4004 » est un exemple de :", o:["Tube","Premier microprocesseur commercial","Relais","SSD"], a:1 },
  { id:31, part:"B", q:"RAM signifie :", o:["Read Access Memory","Random Access Memory","Run Access Memory","Rapid Access Memory"], a:1 },
  { id:32, part:"B", q:"La RAM est une mémoire :", o:["Permanente","Volatile","Optique","Magnétique"], a:1 },
  { id:33, part:"B", q:"ROM signifie :", o:["Read Only Memory","Random Only Memory","Run Only Memory","Rapid Only Memory"], a:0 },
  { id:34, part:"B", q:"La ROM est :", o:["Modifiable à volonté","Volatile","Non volatile","Cache"], a:2 },
  { id:35, part:"B", q:"La mémoire la PLUS rapide est :", o:["Disque dur","RAM","Cache","SSD"], a:2 },
  { id:36, part:"B", q:"Le registre est :", o:["Plus lent que la RAM","Plus rapide que la cache","Aussi lent que le disque","Une mémoire de masse"], a:1 },
  { id:37, part:"B", q:"Le BIOS est généralement stocké dans :", o:["RAM","ROM","Cache","Registre"], a:1 },
  { id:38, part:"B", q:"Le disque dur est une mémoire :", o:["Primaire","Secondaire","Cache","Registre"], a:1 },
  { id:39, part:"B", q:"Les registres sont situés :", o:["Dans le disque dur","Dans le processeur","Dans la RAM","Dans la ROM"], a:1 },
  { id:40, part:"B", q:"Une mémoire volatile perd son contenu :", o:["Quand elle est pleine","Quand on coupe l'alimentation","Au redémarrage Windows","Jamais"], a:1 },
  { id:41, part:"C", q:"L'architecture de Von Neumann comporte :", o:["Deux mémoires séparées","Une seule mémoire pour données ET programmes","Aucun processeur","Plusieurs processeurs obligatoires"], a:1 },
  { id:42, part:"C", q:"UAL signifie :", o:["Unité d'Accès Logique","Unité Arithmétique et Logique","Unité d'Administration Logique","Unité d'Adresse Logique"], a:1 },
  { id:43, part:"C", q:"L'unité de contrôle a pour rôle :", o:["Stocker les données","Contrôler l'exécution des instructions","Afficher les résultats","Sauvegarder les fichiers"], a:1 },
  { id:44, part:"C", q:"Le bus de données transporte :", o:["Les instructions uniquement","Les données","Les adresses uniquement","Le courant électrique"], a:1 },
  { id:45, part:"C", q:"Le bus d'adresses sert à :", o:["Transporter les données","Identifier les cases mémoire","Afficher les résultats","Stocker les programmes"], a:1 },
  { id:46, part:"C", q:"Le cycle d'exécution comprend :", o:["Lire – Écrire","Fetch – Decode – Execute","Compiler – Exécuter","Charger – Sauvegarder"], a:1 },
  { id:47, part:"C", q:"Le registre PC contient :", o:["Les données","L'adresse de la PROCHAINE instruction","Le résultat des calculs","Le code machine"], a:1 },
  { id:48, part:"C", q:"Le registre IR contient :", o:["L'instruction EN COURS","Une adresse mémoire","Une donnée utilisateur","Le système d'exploitation"], a:0 },
  { id:49, part:"D", q:"L'assembleur est :", o:["Un OS","Un langage de bas niveau","Une mémoire","Un processeur"], a:1 },
  { id:50, part:"D", q:"Une instruction assembleur est :", o:["Traduite directement en langage machine","Exécutée par Windows","Une page web","Une base de données"], a:0 },
];

const PARTS = {
  A: { name:"Générations", color:"#6366f1", icon:"🕰️" },
  B: { name:"Mémoires", color:"#10b981", icon:"💾" },
  C: { name:"Architecture", color:"#f59e0b", icon:"🏗️" },
  D: { name:"Assembleur", color:"#ef4444", icon:"⚙️" },
};

const PT_GOOD = 0.5, PT_BAD = -0.5, PT_NONE = -0.5;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [mode, setMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [filterPart, setFilterPart] = useState("all");

  useEffect(() => {
    if (screen !== "quiz" || !mode?.timed) return;
    if (timeLeft <= 0) { finish(); return; }
    const t = setInterval(() => setTimeLeft(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [screen, timeLeft, mode]);

  function startQuiz(config) {
    let qs = QUESTIONS;
    if (config.part !== "all") qs = qs.filter(q => q.part === config.part);
    if (config.shuffle) qs = shuffle(qs);
    if (config.count) qs = qs.slice(0, config.count);
    setQuestions(qs);
    setAnswers({});
    setCurrent(0);
    setMode(config);
    setTimeLeft(config.timed ? config.duration : 0);
    setShowReview(false);
    setScreen("quiz");
  }

  function selectAnswer(qid, idx) {
    setAnswers(a => ({ ...a, [qid]: idx }));
  }

  function finish() { setScreen("result"); }

  function computeScore() {
    let good = 0, bad = 0, none = 0, pts = 0;
    questions.forEach(q => {
      const ans = answers[q.id];
      if (ans === undefined) none++;
      else if (ans === q.a) { good++; pts += PT_GOOD; }
      else { bad++; pts += PT_BAD; }
    });
    return { good, bad, none, pts, max: questions.length * PT_GOOD };
  }

  const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;

  const S = {
    app: { minHeight:'100vh', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color:'#1f2937', fontFamily:'Segoe UI, sans-serif', margin:0, padding:0 },
    header: { background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color:'#fff', padding:'40px 20px', textAlign:'center' },
    headerInner: { maxWidth:'900px', margin:'0 auto' },
    h1: { fontSize:32, margin:0, fontWeight:800, letterSpacing:-0.5 },
    container: { maxWidth:'900px', margin:'0 auto', padding:'30px 20px' },
    infoCard: { background:'#fff', borderRadius:16, padding:20, marginBottom:30, boxShadow:'0 4px 6px rgba(0,0,0,0.07)' },
    stat: { textAlign:'center' },
    statNum: { fontSize:28, fontWeight:800, color:'#667eea' },
    statLbl: { fontSize:12, color:'#6b7280', marginTop:4 },
    sectionTitle: { fontSize:18, fontWeight:700, margin:'25px 0 15px', color:'#fff', display:'flex', alignItems:'center', gap:8 },
    modeCard: { background:'#fff', padding:18, borderRadius:14, marginBottom:12, cursor:'pointer', display:'flex', alignItems:'center', gap:16, transition:'all 0.2s', boxShadow:'0 2px 4px rgba(0,0,0,0.05)', ':hover':{transform:'translateY(-2px)', boxShadow:'0 8px 16px rgba(0,0,0,0.15)'} },
    modeTitle: { fontSize:16, fontWeight:700, color:'#1f2937' },
    modeDesc: { fontSize:13, color:'#6b7280', marginTop:4 },
    arrow: { fontSize:20, marginLeft:'auto', color:'#667eea' },
    footer: { textAlign:'center', marginTop:40, fontSize:13, color:'rgba(255,255,255,0.9)', lineHeight:1.6 },
    profBadge: { fontSize:12, background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 12px', borderRadius:20, marginTop:8 },
    quiz: { minHeight:'100vh', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding:'20px' },
    quizContainer: { maxWidth:'900px', margin:'0 auto', background:'#fff', borderRadius:16, padding:30, boxShadow:'0 20px 60px rgba(0,0,0,0.2)' },
    timer: { display:'flex', gap:8, justifyContent:'center', marginTop:20 },
    timerBox: { background:'#fee2e2', color:'#991b1b', padding:'8px 14px', borderRadius:8, fontWeight:700, fontSize:14 },
    progressBar: { height:6, background:'#e5e7eb', borderRadius:3, marginBottom:20, overflow:'hidden' },
    progressFill: { height:'100%', background:'linear-gradient(90deg, #667eea, #764ba2)', transition:'width 0.3s' },
    qNum: { fontSize:13, color:'#6b7280', fontWeight:700 },
    qText: { fontSize:18, fontWeight:700, margin:'15px 0 20px', color:'#1f2937', lineHeight:1.5 },
    opts: { display:'grid', gap:12 },
    opt: { padding:14, borderRadius:12, border:'2px solid #e5e7eb', cursor:'pointer', fontSize:15, transition:'all 0.15s', ':hover':{borderColor:'#667eea'} },
    optSelected: { borderColor:'#667eea', background:'#f0f4ff' },
    optCorrect: { borderColor:'#10b981', background:'#ecfdf5' },
    optWrong: { borderColor:'#ef4444', background:'#fef2f2' },
    btnGroup: { display:'flex', gap:12, marginTop:25, justifyContent:'center' },
    btn: { padding:'12px 24px', borderRadius:10, border:'none', background:'#667eea', color:'#fff', cursor:'pointer', fontWeight:700, fontSize:14, transition:'all 0.2s' },
    result: { minHeight:'100vh', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding:'20px' },
    scoreCircle: { background:'#fff', borderRadius:16, padding:25, textAlign:'center', marginBottom:25, boxShadow:'0 4px 6px rgba(0,0,0,0.1)' },
  };

  if (screen === "home") {
    return (
      <div style={S.app}>
        <div style={S.header}>
          <div style={S.headerInner}>
            <div style={{fontSize:13, opacity:.85, letterSpacing:2}}>UNIVERSITÉ DE YAOUNDÉ I</div>
            <h1 style={S.h1}>📘 QCM ICT104</h1>
            <div style={{fontSize:15, opacity:.9}}>Architecture des Ordinateurs & Assembleur</div>
            <div style={S.profBadge}>Prof. KUTCHE · Contrôle Continu</div>
          </div>
        </div>
        <div style={S.container}>
          <div style={S.infoCard}>
            <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:16}}>
              <div style={S.stat}><div style={S.statNum}>150</div><div style={S.statLbl}>Questions</div></div>
              <div style={S.stat}><div style={S.statNum}>4</div><div style={S.statLbl}>Parties</div></div>
              <div style={S.stat}><div style={S.statNum}>+0,5</div><div style={S.statLbl}>Bonne rép.</div></div>
              <div style={{...S.stat}}><div style={{...S.statNum, color:'#ef4444'}}>−0,5</div><div style={S.statLbl}>Erreur/vide</div></div>
            </div>
          </div>
          <h2 style={S.sectionTitle}>🎯 Mode Examen Blanc</h2>
          <div style={S.modeCard} onClick={() => startQuiz({ name:"Examen", part:"all", shuffle:true, count:50, timed:true, duration:90*60 })}>
            <div style={{fontSize:32}}>⏱️</div>
            <div style={{flex:1}}>
              <div style={S.modeTitle}>Examen Blanc Chronométré</div>
              <div style={S.modeDesc}>50 questions aléatoires · 1h30 · Conditions réelles</div>
            </div>
            <div style={S.arrow}>→</div>
          </div>
          <h2 style={S.sectionTitle}>📚 Réviser par Partie</h2>
          {Object.entries(PARTS).map(([key, p]) => (
            <div key={key} style={S.modeCard} onClick={() => startQuiz({ name:p.name, part:key, shuffle:true, timed:false })}>
              <div style={{fontSize:32}}>{p.icon}</div>
              <div style={{flex:1}}>
                <div style={S.modeTitle}>{p.name}</div>
                <div style={S.modeDesc}>Réviser cette partie sans limite de temps</div>
              </div>
              <div style={S.arrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "quiz") {
    const q = questions[current];
    const p = PARTS[q.part];
    const progress = ((current + 1) / questions.length) * 100;
    const answered = Object.keys(answers).length;
    const userAns = answers[q.id];

    return (
      <div style={S.quiz}>
        <div style={S.quizContainer}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:15}}>
            <span style={S.qNum}>{current + 1} / {questions.length} — {p.icon} {p.name}</span>
            {mode?.timed && <div style={S.timerBox}>{fmtTime(timeLeft)}</div>}
          </div>
          <div style={S.progressBar}><div style={{...S.progressFill, width:progress+'%'}} /></div>
          <div style={S.qText}>{q.q}</div>
          <div style={S.opts}>
            {q.o.map((opt, i) => (
              <div key={i} style={{...S.opt, ...((userAns !== undefined && showReview) ? (i === q.a ? S.optCorrect : i === userAns ? S.optWrong : {}) : userAns === i ? S.optSelected : {})}} onClick={() => selectAnswer(q.id, i)}>
                <input type="radio" checked={userAns === i} onChange={() => selectAnswer(q.id, i)} style={{marginRight:8}} />
                {opt}
              </div>
            ))}
          </div>
          <div style={S.btnGroup}>
            {current > 0 && <button style={S.btn} onClick={() => setCurrent(current - 1)}>← Précédent</button>}
            {current < questions.length - 1 && <button style={S.btn} onClick={() => setCurrent(current + 1)}>Suivant →</button>}
            {current === questions.length - 1 && <button style={{...S.btn, background:'#10b981'}} onClick={finish}>Terminer 🏁</button>}
          </div>
          {mode?.timed && <div style={{textAlign:'center', marginTop:15, fontSize:13, color:'#6b7280'}}>Répondu: {answered}/{questions.length}</div>}
        </div>
      </div>
    );
  }

  if (screen === "result") {
    const sc = computeScore();
    const pct = Math.max(0, (sc.pts / sc.max) * 100);
    const note20 = Math.max(0, (sc.pts / sc.max) * 20);
    let verdict = note20 >= 14 ? "Excellent !" : note20 >= 10 ? "Très bien" : note20 >= 8 ? "Bien" : note20 >= 6 ? "Passable" : "À revoir";
    let vColor = note20 >= 14 ? "#10b981" : note20 >= 10 ? "#3b82f6" : "#f59e0b";

    return (
      <div style={S.result}>
        <div style={{maxWidth:'900px', margin:'0 auto'}}>
          <div style={{...S.scoreCircle, background:`linear-gradient(135deg, ${vColor}, ${vColor}cc)`}}>
            <div style={{fontSize:40, fontWeight:800, color:'#fff'}}>{note20.toFixed(2)}/20</div>
            <div style={{fontSize:18, fontWeight:700, color:'#fff', marginTop:8}}>{verdict}</div>
            <div style={{fontSize:13, opacity:0.95, color:'#fff', marginTop:8}}>{pct.toFixed(1)}% — {sc.good} bonnes, {sc.bad} mauvaises, {sc.none} vides</div>
          </div>
          <div style={{background:'#fff', borderRadius:16, padding:25, marginBottom:20, boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
            <button style={{...S.btn, width:'100%'}} onClick={() => setScreen("home")}>← Retour au menu</button>
          </div>
        </div>
      </div>
    );
  }
}
