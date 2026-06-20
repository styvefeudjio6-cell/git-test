import React, { useState, useEffect } from 'react';

const QUESTIONS = [
  { id:1, ch:"Ch.1", q:"Table HA : S et Cout simultanément à 1 ?", opts:["Oui si A=B=1","Non (contradiction XOR/AND)","Oui pour FA seul","Dépend de Cin"], cor:[1], exp:"S=1 exige A≠B, Cout=1 exige A=B=1. Conditions contradictoires.", multi:false },
  { id:2, ch:"Ch.1", q:"FA : A=1, B=1, Cin=1 → S et Cout ?", opts:["S=0, Cout=1","S=1, Cout=1","S=1, Cout=0","S=0, Cout=0"], cor:[1], exp:"1+1+1=3 (11₂). XOR(1,1,1)=1, Cout=(1·1)+(0·1)=1.", multi:false },
  { id:3, ch:"Ch.1", q:"Ripple-carry 1011 + 0110 : Carry final ?", opts:["0","1","2","Définitif"], cor:[1], exp:"11 + 6 = 17 (10001₂). Carry sortant de FA₃ = 1.", multi:false },
  { id:4, ch:"Ch.1", q:"Construire FA avec 2 HA + OR : Cout = ?", opts:["C1 XOR C2","C1 AND C2","C1 OR C2","C1 NAND C2"], cor:[2], exp:"C1=A·B, C2=(A⊕B)·Cin. Cout = C1 + C2 (OR logique).", multi:false },
  { id:5, ch:"Ch.1", q:"Retard critique Ripple-Carry n bits ?", opts:["2 portes","n × propagation FA","log₂(n) portes","1 cycle CPU"], cor:[1], exp:"Chaque FA attend la retenue du précédent → linéaire en n.", multi:false },
  { id:6, ch:"Ch.1", q:"Look-Ahead Carry (CLA) avantage principal ?", opts:["Moins de portes","Calcul parallèle des Cout","Faible consommation","Plus simple que RCA"], cor:[1], exp:"CLA génère propagations/générations → évite propagation séquentielle.", multi:false },
  { id:7, ch:"Ch.2", q:"Complément à 2 de -5 sur 4 bits ?", opts:["0101","1010","1011","1101"], cor:[2], exp:"5=0101 → inv=1010 → +1=1011 (-5).", multi:false },
  { id:8, ch:"Ch.2", q:"Overflow signé addition ?", opts:["Carry sortant XOR Carry entrant MSB","Bits de signe égaux","Retenue=1","Aucun flag"], cor:[0], exp:"Overflow = Cout(MSB) ⊕ Cin(MSB). Détecte débordement capacité.", multi:false },
  { id:9, ch:"Ch.2", q:"Porte NOR universelle : implique ?", opts:["Peut recréer AND/OR/NOT","Seule pour mémoire","Plus rapide que NAND","Limite à 2 entrées"], cor:[0], exp:"NOR est logiquement complète : NOT=NOR(A,A), OR=NOT(NOR), etc.", multi:false },
  { id:10, ch:"Ch.2", q:"Multiplexeur 4→1 : nombre de select lines ?", opts:["1","2","4","8"], cor:[1], exp:"2ⁿ entrées → n lignes. 4 entrées → 2 sélecteurs (S1,S0).", multi:false },
  { id:11, ch:"Ch.2", q:"Bascule D vs Bascule SR ?", opts:["D = SR avec S=D, R=!D","D plus lente","SR plus simple","Identiques"], cor:[0], exp:"D évite états interdits (S=R=1) en couplant R = NOT D.", multi:false },
  { id:12, ch:"Ch.2", q:"Compteur synchrone vs asynchrone ?", opts:["Async : clk en cascade, Sync : clk commun","Sync plus lent","Async plus fiable","Même délai propagation"], cor:[0], exp:"Async : chaque bascule déclenchée par précédente. Sync : front identique.", multi:false },
  { id:13, ch:"Ch.2", q:"Registre à décalage (shift register) usage ?", opts:["Stockage permanent","Série↔Parallèle & multiplication/div","Seul pour cache","Gestion interruptions"], cor:[1], exp:"Shift left = ×2, right = ÷2. Conversion série/parallèle.", multi:false },
  { id:14, ch:"Ch.2", q:"C PLA vs PAL ?", opts:["PLA = et/ou programmables, PAL = et prog/or fixe","PAL plus flexible","PLA plus rapide","Identiques"], cor:[0], exp:"PLA : réseau ET/OR configurables. PAL : ET configurable, OR fixe.", multi:false },
  { id:15, ch:"Ch.2", q:"Glitch circuit combinatoire ?", opts:["Erreur logique permanente","Pulse transitoire avant stabilisation","Dépassement voltage","Reset aléatoire"], cor:[1], exp:"Chemin de propagation différent → sortie instable brièvement.", multi:false },
  { id:16, ch:"Ch.2", q:"Aléa (hazard) statique 1 ?", opts:["Sortie passe 0→1→0","0→0 stable","Mémorisation","Décalage phase"], cor:[0], exp:"Changement d'une entrée ne devrait pas changer sortie, mais pulse parasite apparaît.", multi:false },
  { id:17, ch:"Ch.3", q:"RAM vs ROM différence principale ?", opts:["Vitesse","Volatilité","Densité transistors","Prix"], cor:[1], exp:"RAM volatile (perte sans alim), ROM persistante.", multi:false },
  { id:18, ch:"Ch.3", q:"SRAM vs DRAM technologie ?", opts:["SRAM = bascules, DRAM = condensateurs + refresh","SRAM plus dense","DRAM sans refresh","SRAM moins chère"], cor:[0], exp:"SRAM : 6T par bit (stable). DRAM : 1T+1C, fuite → refresh périodique.", multi:false },
  { id:19, ch:"Ch.3", q:"Hiérarchie mémoire ordre vitesse >", opts:["RAM > Cache > HDD > Registres","Registres > L1 > L2 > RAM > Disque","L3 > L2 > L1 > Registres","Disque > RAM > Cache > CPU"], cor:[1], exp:"Plus proche CPU = plus rapide = plus cher/moindre capacité.", multi:false },
  { id:20, ch:"Ch.3", q:"Cache mapping : Fully Associative ?", opts:["Adresse fixe","Ligne libre partout","Index direct","Set associatif"], cor:[1], exp:"Bloc peut aller dans n'importe quelle ligne cache. Flexible mais coûteux.", multi:false },
  { id:21, ch:"Ch.3", q:"Hit ratio 0.9, Tc=5ns, Tm=100ns → EAT ?", opts:["15ns","14.5ns","20ns","9.5ns"], cor:[1], exp:"EAT = Hit×Tc + Miss×Tm = 0.9×5 + 0.1×100 = 4.5 + 10 = 14.5ns.", multi:false },
  { id:22, ch:"Ch.3", q:"Bits adresse pour mémoire 2K words×8 ?", opts:["10","11","12","16"], cor:[1], exp:"2K = 2¹¹ → 11 bits d'adresse. 8 bits par word (bus données).", multi:false },
  { id:23, ch:"Ch.3", q:"Virtual Memory : TLB rôle ?", opts:["Traduire adresse physique→virtuelle","Cache traductions page→frame","Gérer interruptions","Compresser données"], cor:[1], exp:"TLB accélère page table lookup. Hit → accès direct frame.", multi:false },
  { id:24, ch:"Ch.3", q:"Page fault → action CPU ?", opts:["Reboot","Trap OS, load depuis disque, update page table, retry","Ignore","Efface RAM"], cor:[1], exp:"Interruption matérielle → OS charge page depuis swap/disk → relance.", multi:false },
  { id:25, ch:"Ch.3", q:"Localité temporelle vs spatiale ?", opts:["Temps: données proches, Espace: données réutilisées","Temps: réutilisation fréquente, Espace: adressage voisin","Inversées","Identiques"], cor:[1], exp:"Temporelle: variable accédée souvent. Spatiale: accès à adresses adjacentes.", multi:false },
  { id:26, ch:"Ch.3", q:"DRAM refresh périodique : pourquoi ?", opts:["Fuite condensateurs","Éviter corruption bits","Réduire consommation","Synchroniser clock"], cor:[0], exp:"Condensateurs fuient charge → refresh ~64ms pour retenir données.", multi:false },
  { id:27, ch:"Ch.3", q:"Matrice mémoire 2D (Ligne/Colonne) avantage ?", opts:["Moins de décodeurs, gain transistors","Plus rapide","Plus simple","Compatible SSD"], cor:[0], exp:"Décodeur racine carré vs linéaire → gain câblage/puissance.", multi:false },
  { id:28, ch:"Ch.3", q:"ROM types programmation ?", opts:["PROM: fusible, EPROM: UV, EEPROM: électrique","Tous électriques","Seulement EPROM","Aucune reprogrammable"], cor:[0], exp:"PROM 1x, EPROM UV effaçable, EEPROM électricité (ex: BIOS), Flash dérivée.", multi:false },
  { id:29, ch:"Ch.3", q:"Bande passante DDR4 vs SDR ?", opts:["Identique","DDR ×2 (double data rate)","DDR ×4","DDR /2"], cor:[1], exp:"Transfère sur front montant + descendant → débit doublé.", multi:false },
  { id:30, ch:"Ch.3", q:"Virtual page offset taille ?", opts:["Dépend de taille page","Toujours 32 bits","0","Aléatoire"], cor:[0], exp:"Offset = bits de poids faible. Page 4KB → 12 bits offset.", multi:false },
  { id:31, ch:"Ch.4", q:"Registre PC rôle ?", opts:["Stocke résultat ALU","Adresse prochaine instruction","Compte cycles","Flags"], cor:[1], exp:"Program Counter pointe sur instruction à fetcher.", multi:false },
  { id:32, ch:"Ch.4", q:"Cycle Fetch-Decode-Execute :", opts:["Fetch: IR, Decode: CU, Execute: ALU/RAM","Fetch: RAM, Decode: ALU, Execute: CU","Inverse","Parallèle"], cor:[0], exp:"Fetch → IR, Decode → CU interprète opcode, Execute → actions.", multi:false },
  { id:33, ch:"Ch.4", q:"Pipeline 5 étages débit idéal ?", opts:["1 instruction/cycle","5 instructions/cycle","Dépend horloge","0.2 inst/cycle"], cor:[0], exp:"Une fois rempli, 1 résultat par cycle (throughput constant).", multi:false },
  { id:34, ch:"Ch.4", q:"Data hazard résolution immédiate ?", opts:["Forwarding/Bypassing","Stall (nop) toujours","Relogiciel","Suppression pipeline"], cor:[0], exp:"Forwarding court-circuite résultat vers entrée ALU avant écriture registre.", multi:false },
  { id:35, ch:"Ch.4", q:"Structure hazard ?", opts:["Conflit ressource matérielle","Dépendance données","Branchement faux","Timing"], cor:[0], exp:"Ex: Harvard vs Von Neumann, accès mémoire/code+dans même cycle.", multi:false },
  { id:36, ch:"Ch.4", q:"Branch misprediction penalty typique ?", opts:["0 cycle","Flush pipeline + refill (15+ cycles)","Reset CPU","Ignore"], cor:[1], exp:"Instructions wrong-path invalidées → pipeline vidé → nouveau fetch.", multi:false },
  { id:37, ch:"Ch.4", q:"Setup/Hold time ?", opts:["Délai avant/après front horloge","Temps compilation","Latence ALU","Cache hit time"], cor:[0], exp:"Setup: data stable avant front. Hold: stable après front. Critique timing.", multi:false },
  { id:38, ch:"Ch.4", q:"Mode Kernel vs User ?", opts:["Kernel: instructions privilégiées, User: restreint","Identiques","User plus rapide","Kernel seul pour cache"], cor:[0], exp:"Kernel: accès hardware, IO, mémoire totale. User: sandbox.", multi:false },
  { id:39, ch:"Ch.4", q:"Interruption vs Trap ?", opts:["Interruption: externe asynchrone, Trap: interne synchrone (syscall/exception)","Inversées","Mêmes","Trap plus lente"], cor:[0], exp:"Interruption: matériel (clavier, timer). Trap: logiciel (syscall, div/0).", multi:false },
  { id:40, ch:"Ch.4", q:"Context switch overhead ?", opts:["Nul","Sauvegarde/restore registres, PC, MMU, cache flush","Seulement RAM","Compile temps"], cor:[1], exp:"Switch tâche → état enregistré → nouveau contexte chargé → coût cycle.", multi:false },
  { id:41, ch:"Ch.4", q:"Superscalar architecture ?", opts:["Exécution multiple instructions/cycle","Plus de registres","Cache plus gros","Un seul cœur rapide"], cor:[0], exp:"Multiple unités fonctionnelles, dispatch parallèle (ILP exploité).", multi:false },
  { id:42, ch:"Ch.4", q:"Puissance CPU dynamique P ≈ ?", opts:["C × V² × f","C + V + f","V × f²","C / V"], cor:[0], exp:"Switching power dominante. Réduire V impacte V², f linéaire.", multi:false },
  { id:43, ch:"Ch.4", q:"Clock skew problème ?", opts:["Signal arrive à différents temps sur chip","Fréquence instable","Overclocking","Consommation"], cor:[0], exp:"Différence délai horloge bascules → violation setup/hold → erreur.", multi:false },
  { id:44, ch:"Ch.4", q:"Speculative execution ?", opts:["Exécuter avant résultat branche","Devine instructions","Compile temps","Ignore branch"], cor:[0], exp:"Lance instructions probables → valide si branche OK → commit sinon flush.", multi:false },
  { id:45, ch:"Ch.4", q:"Out-of-Order (OoO) exécution ?", opts:["Réordonne instructions dynamiquement par disponibilité opérandes","Exécute aléatoirement","Ignore dépendances","Plus lent"], cor:[0], exp:"Reorder Buffer + Tomasulo → exploite ILP masquant latences.", multi:false },
  { id:46, ch:"Ch.4", q:"Interrupt Vector Table ?", opts:["Adresses handlers par priorité/IRQ","Cache","Registres","Mémoire virtuelle"], cor:[0], exp:"Index par IRQ → saute code traitement spécifique.", multi:false },
  { id:47, ch:"Ch.5", q:"Format instruction `add $t0,$t1,$t2` ?", opts:["I","R","J","Pseudo"], cor:[1], exp:"R-type: opcode=0, funct=32, 3 registres, shamt=0.", multi:false },
  { id:48, ch:"Ch.5", q:"Registre `$sp` ?", opts:["Stack Pointer (sommet pile)","Special Purpose","Source Pointer","Signal Processor"], cor:[0], exp:"Pointe dernier élément empilé. Croissance vers bas ($sp-4 push).", multi:false },
  { id:49, ch:"Ch.5", q:"`lw $t0, 12($sp)` adresse effective si $sp=0x1000 ?", opts:["0x1012","0x100C","0x1000","Endianness"], cor:[1], exp:"Offset 12 décimal = 0xC hex. Adresse = 0x1000 + 0xC = 0x100C.", multi:false },
  { id:50, ch:"Ch.5", q:"`li $t0, 0x12345678` expansion ?", opts:["1 instruction","2 (lui + ori)","3","Dépend CPU"], cor:[1], exp:"Immédiat 16 bits max. lui charge hauts, ori masque bas.", multi:false },
  { id:51, ch:"Ch.5", q:"Offset branche `beq` encodé en ?", opts:["Bytes","Instructions (×4 à l'exécution)","Mots","Hexadécimal"], cor:[1], exp:"MIPS encode offset en mots (4B). CPU multiplie par 4 à runtime.", multi:false },
  { id:52, ch:"Ch.5", q:"Convention appel `$ra` ?", opts:["jal écrase $ra → sauver avant jal","$ra auto-sauvé","$ra constant","Aucun lien"], cor:[0], exp:"jal stocke PC+4 dans $ra. Si appel imbriqué → sauver sur pile.", multi:false },
  { id:53, ch:"Ch.5", q:"Caller vs Callee saved ?", opts:["$t caller-saving, $s callee-saving","$s caller, $t callee","Tous sauvegardés automatiquement","Aucun"], cor:[0], exp:"$t = temporaire (caller sauve si besoin). $s = persistant (callee sauve).", multi:false },
  { id:54, ch:"Ch.5", q:"Syscall exit MIPS setup ?", opts:["$v0=10, $a0=code_ret, syscall","$v0=print, $a0=0","$a0=10, $v0=0","syscall seul"], cor:[0], exp:"$v0 = code service (10=exit), $a0 = argument (code retour).", multi:false },
  { id:55, ch:"Ch.5", q:"Little-endian `lw` charge word 0xFF,0x11,0x22,0x33 ?", opts:["0xFF112233","0x332211FF","0x112233FF","0x3311FF22"], cor:[1], exp:"LSB à adresse basse. Lecture inverse: 33(M)2211FF(mSB).", multi:false },
  { id:56, ch:"Ch.5", q:"`andi $t0, $t1, 0x0F` avec $t1=0xF5 ?", opts:["0x05","0xFA","0xFF","0xF5"], cor:[0], exp:"0xF5 & 0x0F = 00F5 & 0x0F = 0x05 (masque bas 4 bits).", multi:false },
  { id:57, ch:"Ch.5", q:"`sra $t0, $t1, 2` si $t1=0xFFFFFFFF ?", opts:["0x3FFFFFFF","0xFFFFFFFF","0xBFFFFFFF","0x80000000"], cor:[1], exp:"Arithmetic right shift propage bit signe (1). Résultat inchangé (-1>>2 = -1).", multi:false },
  { id:58, ch:"Ch.5", q:"Boucle `addi $t0,1` puis `bne $t0,10,loop` → exécutions addi ?", opts:["9","10","11","∞"], cor:[1], exp:"$t0=0→1(1),1→2(2)...,9→10(10). bne(10≠10)=false → exit. 10 exécutions.", multi:false },
  { id:59, ch:"Ch.5", q:"Stack frame récursion fib(n) :", opts:["12B (ra,a0,res)","4B suffit","8B","Dépend RAM"], cor:[0], exp:"3 mots : return address, argument n, résultat intermédiaire.", multi:false },
  { id:60, ch:"Ch.5", q:"Interruption MIPS : adresse retour ?", opts:["$ra","EPC (CP0)","$sp","IR"], cor:[1], exp:"Exception Program Counter sauve PC instruction interrompue.", multi:false },
  { id:61, ch:"Ch.5", q:"Directive `.data` vs `.text` vs `.bss` ?", opts:[".data: init, .text: code, .bss: non-init","Identiques",".bss: code, .data: ROM",".text: données"], cor:[0], exp:"Sections standards assembleur.", multi:false },
  { id:62, ch:"Ch.5", q:"Compilation `int x=5; int y=10; int z=x+y;` optimisée ?", opts:["3 instr(load+add)","1 instruction `li $z,15`","5 instr","Erreur"], cor:[1], exp:"Constant folding compilateur → calcule à la compilation.", multi:false },
  { id:63, ch:"Ch.5", q:"Branch delay slot MIPS :", opts:["Instr post-branche toujours exécutée","Bug","Ignoré CPU","Cache"], cor:[0], exp:"Architecture pipeline classique : slot utilisé pour masquer latence décision.", multi:false },
  { id:64, ch:"Ch.5", q:"`addu` vs `add` ?", opts:["`addu` ignore overflow exception, `add` trap","Identiques","`addu` plus rapide","`addu` flottant"], cor:[0], exp:"`u` = unsigned/non-signaling. `add` déclenche interrupt sur overflow.", multi:false },
  { id:65, ch:"Ch.5", q:"Registre `$zero` ?", opts:["Valeur constante 0, lecture seule","Pointeur nul","Stack base","Non existant"], cor:[0], exp:"Hardwired à 0. Utiliser comme sink ou source zéro.", multi:false },
  { id:66, ch:"Ch.5", q:"`jal` vs `j` ?", opts:["`jal` sauve PC+4 dans $ra, `j` non","`j` conditionnel","`jal` plus lent","Aucune différence"], cor:[0], exp:"`Jump and Link` pour procédures. `j` saut inconditionnel pur.", multi:false },
  { id:67, ch:"Ch.5", q:`Pseudo-instruction move $t0,$t1 traduit ?`, opts:["or $t0,$t1,$zero","add $t0,$t1,0","A et B","cop $t0,$t1"], cor:[2], exp:"ou `add $t0,$t1,$zero`. Les deux valent.", multi:false },
  { id:68, ch:"Ch.5", q:"Alignement mémoire `lw` ?", opts:["Adresse multiple de 4","N'importe où","Multiple de 8","Byte seule"], cor:[0], exp:"MIPS exige alignement word 4B. Sinon Alignment exception.", multi:false },
  { id:69, ch:"Ch.5", q:`Macro vs Instruction native ?`, opts:["Macro : expansion assembleur (ex: `li`), Native : CPU direct","Macro plus rapide","Native pseudo","Identiques"], cor:[0], exp:"Assembleur expande macro avant encoding machine.", multi:false }
];

const PTS_CORRECT = 0.5;
const PTS_WRONG = -1.0;
const PTS_BLANK = -0.5;
const DUREE_MIN = 120;
const DUREE_SEC = DUREE_MIN * 60;

export default function ICT104Exam() {
  const [answers, setAnswers] = useState({});
  const [curr, setCurr] = useState(0);
  const [time, setTime] = useState(DUREE_SEC);
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (submitted) return;
    if (time === 0) return handleSubmit();
    const t = setInterval(() => {
      setTime(p => {
        if (p <= 300) setWarning(true);
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submitted, time]);

  const toggle = (qid, idx) => {
    setAnswers(p => {
      const cur = p[qid] || [];
      return cur.includes(idx) ? { ...p, [qid]: cur.filter(i => i !== idx) } : { ...p, [qid]: [...cur, idx] };
    });
  };

  const handleSubmit = () => {
    if (!submitted && time > 0) {
      if (!confirm("Soumettre l'examen ? (Action irréversible)")) return;
    }
    const res = QUESTIONS.map((q, i) => {
      const u = answers[i] || [];
      const c = q.cor;
      const match = u.length === c.length && u.every(v => c.includes(v)) && c.every(v => u.includes(v));
      const blank = u.length === 0;
      return { score: blank ? PTS_BLANK : match ? PTS_CORRECT : PTS_WRONG, blank, correct: match, u, c };
    });
    const total = res.reduce((a, b) => a + b.score, 0).toFixed(2);
    const stats = {
      correct: res.filter(r => r.correct).length,
      wrong: res.filter(r => !r.correct && !r.blank).length,
      blank: res.filter(r => r.blank).length,
      total
    };
    setSubmitted({ res, stats });
  };

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div style={S.container}>
      <header style={S.header}>
        <h1 style={S.title}>🎓 ICT104 — Examen Blanc</h1>
        <div style={S.badge}>⏱ {fmt(time)} {time < 300 && <span style={S.blink}>🔴</span>}</div>
        <div style={S.badge}>📊 {submitted ? submitted.stats.total : '?'} / 34.5</div>
      </header>

      {!submitted ? (
        <main style={S.main}>
          <QCard q={QUESTIONS[curr]} idx={curr} ans={answers[curr] || []} onToggle={toggle} />
          <nav style={S.nav}>
            <button disabled={curr===0} onClick={() => setCurr(p => p - 1)} style={S.btn}>⬅ Précédent</button>
            <span style={S.pages}>{curr+1} / {QUESTIONS.length}</span>
            <button disabled={curr===QUESTIONS.length-1} onClick={() => setCurr(p => p + 1)} style={S.btn}>Suivant ➡</button>
            <button onClick={() => document.getElementById('grid').scrollIntoView({ behavior: 'smooth' })} style={S.btnOutline}>📋 Plan</button>
          </nav>
          <div id="grid" style={S.gridWrap}>
            {QUESTIONS.map((_, i) => (
              <span key={i} onClick={() => setCurr(i)} style={{ ...S.dot, backgroundColor: answers[i]?.length ? '#10b981' : '#9ca3af' }}>{i+1}</span>
            ))}
          </div>
          <button onClick={handleSubmit} style={S.submitBtn}>🚀 SOUMETTRE</button>
        </main>
      ) : (
        <Results data={submitted} onRetry={() => window.location.reload()} />
      )}
      <footer style={S.footer}>© Prof. KUTCHE — Yaoundé I</footer>
    </div>
  );
}

const QCard = ({ q, idx, ans, onToggle }) => (
  <div style={S.qBox}>
    <span style={S.tag}>{q.ch} | Q{idx+1}</span>
    <p style={S.qText}>{q.q}</p>
    <div style={S.opts}>
      {q.opts.map((o, i) => {
        const sel = ans.includes(i);
        return (
          <label key={i} style={{ ...S.opt, backgroundColor: sel ? '#dbeafe' : '#f9fafb', borderColor: sel ? '#3b82f6' : '#e5e7eb' }}>
            <input type="checkbox" checked={sel} onChange={() => onToggle(idx, i)} style={S.hidden} />
            <span style={{ fontWeight: sel ? 700 : 400 }}>{String.fromCharCode(65 + i)}. {o}</span>
          </label>
        );
      })}
    </div>
  </div>
);

const Results = ({ data, onRetry }) => (
  <div style={S.resBox}>
    <h2>📊 Résultats</h2>
    <p style={S.score}>{data.stats.total} / {(QUESTIONS.length * PTS_CORRECT).toFixed(1)}</p>
    <div style={S.statsRow}>
      <div style={S.stat}><span style={{ color: '#16a34a' }}>✅ {data.stats.correct}</span> Correct (+0.5)</div>
      <div style={S.stat}><span style={{ color: '#dc2626' }}>❌ {data.stats.wrong}</span> Erreur (-1)</div>
      <div style={S.stat}><span style={{ color: '#6b7280' }}>⬜ {data.stats.blank}</span> Vide (-0.5)</div>
    </div>
    <details style={S.details}>
      <summary style={S.summary}>🔍 Voir la correction détaillée</summary>
      <div style={S.corList}>
        {QUESTIONS.map((q, i) => {
          const r = data.res[i];
          return (
            <div key={i} style={{ ...S.corItem, borderLeft: r.correct ? '#16a34a' : r.blank ? '#6b7280' : '#dc2626' }}>
              <div><b>Q{i+1}</b> ({q.ch}) | Score: <b>{r.score > 0 ? '+' : ''}{r.score}</b></div>
              <div style={S.ansRow}>
                <span>Votre rép: {r.u.length ? r.u.map(k => String.fromCharCode(65 + k)).join(',') : 'Aucun'}</span>
                <span>✅ Cor: {q.cor.map(k => String.fromCharCode(65 + k)).join(',')}</span>
              </div>
              <p style={S.exp}>{q.exp}</p>
            </div>
          );
        })}
      </div>
    </details>
    <button onClick={onRetry} style={S.retryBtn}>🔄 Recommencer</button>
  </div>
);

const S = {
  container: { fontFamily: 'system-ui, -apple-system, sans-serif', maxWidth: 900, margin: '0 auto', padding: 16, background: '#f8fafc', minHeight: '100vh' },
  header: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '12px 20px', borderRadius: 12, background: '#fff', border: '1px solid #e2e8f0', marginBottom: 16 },
  title: { margin: 0, fontSize: 24, fontWeight: 800, color: '#1e293b' },
  badge: { fontSize: 14, fontWeight: 600, padding: '6px 12px', borderRadius: 20, background: '#e0f2fe', color: '#0369a1' },
  blink: { animation: 'blink 1s infinite' },
  main: { display: 'flex', flexDirection: 'column', gap: 16 },
  qBox: { background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)' },
  tag: { fontSize: 12, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 10, display: 'block' },
  qText: { fontSize: 18, fontWeight: 700, margin: '0 0 18px', lineHeight: 1.5, color: '#0f172a' },
  opts: { display: 'grid', gap: 12 },
  opt: { display: 'flex', alignItems: 'center', padding: 14, borderRadius: 14, cursor: 'pointer', borderWidth: 1, borderStyle: 'solid', transition: 'transform 0.15s ease' },
  hidden: { display: 'none' },
  nav: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  btn: { padding: '12px 18px', borderRadius: 10, border: 'none', background: '#1e293b', color: '#fff', cursor: 'pointer', fontWeight: 700 },
  pages: { fontSize: 14, color: '#475569', fontWeight: 700 },
  btnOutline: { padding: '12px 18px', borderRadius: 10, border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer', color: '#334155', fontWeight: 700 },
  gridWrap: { display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 12, padding: '12px 0' },
  dot: { width: 38, height: 38, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: '#fff' },
  submitBtn: { padding: '16px 20px', borderRadius: 14, background: 'linear-gradient(135deg, #0ea5e9, #2563eb)', color: '#fff', border: 'none', fontSize: 16, fontWeight: 800, cursor: 'pointer', marginTop: 4 },
  footer: { textAlign: 'center', marginTop: 40, fontSize: 13, color: '#94a3b8' },
  resBox: { background: '#fff', padding: 28, borderRadius: 18, boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)', textAlign: 'center' },
  score: { fontSize: 36, fontWeight: 800, color: '#0f172a', margin: '14px 0' },
  statsRow: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, margin: '18px 0' },
  stat: { fontSize: 14, background: '#f1f5f9', padding: '10px 14px', borderRadius: 12, fontWeight: 700 },
  details: { marginTop: 20, textAlign: 'left' },
  summary: { cursor: 'pointer', fontWeight: 700, fontSize: 16, padding: 12, background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' },
  corList: { display: 'grid', gap: 14, marginTop: 16 },
  corItem: { padding: 18, background: '#f9fafb', borderRadius: 14, borderLeftWidth: 5, borderLeftStyle: 'solid' },
  ansRow: { display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 10, fontSize: 13, fontWeight: 700 },
  exp: { margin: '10px 0 0', fontSize: 14, color: '#475569', lineHeight: 1.6 },
  retryBtn: { marginTop: 20, padding: '14px 22px', borderRadius: 14, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700 }
};
