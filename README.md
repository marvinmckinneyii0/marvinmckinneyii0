<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1180 610" width="1180" height="610" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" role="img" aria-label="Marvin McKinney — Savvy Analytics profile banner">

  <defs>
    <!-- ===== GRADIENTS ===== -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#000000"/>
      <stop offset="0.55" stop-color="#07071a"/>
      <stop offset="1" stop-color="#16163F"/>
    </linearGradient>

    <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0c0c24" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.72"/>
    </linearGradient>

    <!-- animated gold→navy→muted-gold sweep for ASCII -->
    <linearGradient id="asciiGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E7AC18">
        <animate attributeName="stop-color" values="#E7AC18;#8F6B0F;#8B8B8B;#E7AC18" dur="7s" repeatCount="indefinite"/>
      </stop>
      <stop offset="0.5" stop-color="#8B8B8B">
        <animate attributeName="stop-color" values="#8B8B8B;#E7AC18;#16163F;#8B8B8B" dur="7s" repeatCount="indefinite"/>
      </stop>
      <stop offset="1" stop-color="#16163F">
        <animate attributeName="stop-color" values="#16163F;#8B8B8B;#E7AC18;#16163F" dur="7s" repeatCount="indefinite"/>
      </stop>
      <animateTransform attributeName="gradientTransform" type="translate" values="-0.2 0;0.2 0;-0.2 0" dur="9s" repeatCount="indefinite"/>
    </linearGradient>

    <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#E7AC18" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#E7AC18" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#E7AC18" stop-opacity="0"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="-1 0;1 0;-1 0" dur="6s" repeatCount="indefinite"/>
    </linearGradient>

    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#F8FAFC"/>
      <stop offset="1" stop-color="#E7AC18"/>
    </linearGradient>

    <radialGradient id="glowGold" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#E7AC18" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#E7AC18" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowNavy" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#16163F" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#16163F" stop-opacity="0"/>
    </radialGradient>

    <!-- ===== FILTERS ===== -->
    <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="pillGlow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="2.2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>
      <feColorMatrix in="n" type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.045"/></feComponentTransfer>
    </filter>

    <clipPath id="cardClip"><rect x="0" y="0" width="1180" height="610" rx="26"/></clipPath>
    <clipPath id="leftClip"><rect x="24" y="24" width="420" height="562" rx="20"/></clipPath>
  </defs>

  <!-- ===== BACKGROUND ===== -->
  <g clip-path="url(#cardClip)">
    <rect width="1180" height="610" fill="url(#bgGrad)"/>

    <!-- floating radial glows -->
    <g>
      <ellipse cx="240" cy="150" rx="360" ry="300" fill="url(#glowGold)" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0 0;30 40;0 0" dur="14s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="950" cy="520" rx="420" ry="340" fill="url(#glowNavy)">
        <animateTransform attributeName="transform" type="translate" values="0 0;-40 -30;0 0" dur="16s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="720" cy="90" rx="260" ry="220" fill="url(#glowGold)" opacity="0.25">
        <animateTransform attributeName="transform" type="translate" values="0 0;20 -30;0 0" dur="18s" repeatCount="indefinite"/>
      </ellipse>
    </g>

    <!-- scanline sweep -->
    <rect x="0" y="0" width="1180" height="3" fill="#E7AC18" opacity="0.08">
      <animate attributeName="y" values="-10;610;-10" dur="8s" repeatCount="indefinite"/>
    </rect>

    <!-- tiny particles -->
    <g fill="#E7AC18">
      <circle cx="150" cy="80" r="1.4" opacity="0.6"><animate attributeName="cy" values="80;60;80" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0.1;0.6" dur="6s" repeatCount="indefinite"/></circle>
      <circle cx="380" cy="480" r="1.1" opacity="0.5"><animate attributeName="cy" values="480;450;480" dur="7s" repeatCount="indefinite"/></circle>
      <circle cx="820" cy="180" r="1.2" opacity="0.4"><animate attributeName="cy" values="180;150;180" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0.1;0.4" dur="9s" repeatCount="indefinite"/></circle>
      <circle cx="1080" cy="360" r="1.3" opacity="0.5"><animate attributeName="cy" values="360;330;360" dur="8s" repeatCount="indefinite"/></circle>
      <circle cx="600" cy="540" r="1" opacity="0.4"><animate attributeName="cy" values="540;515;540" dur="10s" repeatCount="indefinite"/></circle>
    </g>

    <!-- noise overlay -->
    <rect width="1180" height="610" filter="url(#noise)" opacity="0.6"/>

    <!-- outer border shimmer -->
    <rect x="1" y="1" width="1178" height="608" rx="26" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
    <rect x="1" y="1" width="1178" height="608" rx="26" fill="none" stroke="url(#goldStroke)" stroke-width="1.5"/>

    <!-- ===== LEFT PANEL: ASCII PORTRAIT ===== -->
    <g>
      <rect x="24" y="24" width="420" height="562" rx="20" fill="url(#panelGrad)" stroke="rgba(255,255,255,0.08)"/>
      <g clip-path="url(#leftClip)">
        <!-- glass reflection -->
        <rect x="24" y="24" width="420" height="150" fill="#ffffff" opacity="0.03"/>
        <!-- ascii scanline -->
        <rect x="24" y="24" width="420" height="2" fill="#E7AC18" opacity="0.12">
          <animate attributeName="y" values="24;586;24" dur="5s" repeatCount="indefinite"/>
        </rect>

        <!-- floating ascii group -->
        <g filter="url(#softGlow)">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="6s" repeatCount="indefinite"/>
          <text x="234" y="150" text-anchor="middle" font-family="'Courier New',monospace" font-size="10.5" fill="url(#asciiGrad)" letter-spacing="0.5" xml:space="preserve" font-weight="bold">
            <tspan x="234" dy="0" opacity="0" xml:space="preserve">       ..  ....:::-=====-..---:::-+++**+=-::--<animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.20s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">.  ... ...::::-+*%%%%%%%*-:==:...::-+++-:::--=<animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.28s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve"> .::::.......+%@@@@@@@@@@%#+-::..  .==-.:::---<animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.35s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve"> .....:. ..:#@@@@@@@@@@@@@@%*--:.      .   .::<animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.42s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">    .::.  .#@%%@@@@@@@@@@@@@%-:...           .<animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.50s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">  ...:... :%##***#%#*#%@@@@%%=...           .:<animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.57s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">:  .::... -*====+%%====+#%%%#-..  ..          <animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.65s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">.::....   =%%##%%@@%#*###%##*=                <animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.73s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">==-:..    =***#*+***%**%%####-                <animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.80s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">+=--.  ...:--=+*++*##+:-++*%#.        ...     <animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.88s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">=+-. .:.  .-=*+#%@%%*+==++*#.        .....    <animate attributeName="opacity" values="0;1" dur="0.22s" begin="0.95s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">.--. :.    .:*#+++*%@#=:-=*#            .---. <animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.02s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">:=-. ..      :+***##*-  .+%#:=            :-::<animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.10s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve"> -=:.:.      .....     -+#*==++.           ...<animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.18s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve"> ::-:-....    :... ..:=*+:.::-++=-:.        ::<animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.25s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">. .....::::.  ::-----=-. .:---:.=+++=:...     <animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.32s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">. ...:--=-.   .---=+=:   .::-:  .:-=+*=:. .:..<animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.40s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">..::---::      -+=-.     ..::   ..::-=+**=:   <animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.47s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">---:.           .           .  ...::---=+++=: <animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.55s" fill="freeze"/></tspan>
            <tspan x="234" dy="11" opacity="0" xml:space="preserve">**:    ..                        ...::------=-<animate attributeName="opacity" values="0;1" dur="0.22s" begin="1.62s" fill="freeze"/></tspan>
          </text>
          <!-- blinking cursor after reveal -->
          <rect x="360" y="376" width="8" height="13" fill="#E7AC18" opacity="0">
            <animate attributeName="opacity" values="0;0" dur="1.75s" begin="0s" fill="freeze"/>
            <animate attributeName="opacity" values="1;0;1" dur="1s" begin="1.75s" repeatCount="indefinite"/>
          </rect>
        </g>

        <!-- data glyphs under portrait -->
        <text x="234" y="410" text-anchor="middle" font-family="'Courier New',monospace" font-size="10" fill="#8B8B8B" letter-spacing="3" opacity="0">
          01000100 01010001 01000001
          <animate attributeName="opacity" values="0;0.7" dur="0.6s" begin="2.2s" fill="freeze"/>
        </text>
        <text x="234" y="428" text-anchor="middle" font-family="'Courier New',monospace" font-size="10" fill="#8B8B8B" letter-spacing="3" opacity="0">
          AI · STRATEGY · SYSTEMS
          <animate attributeName="opacity" values="0;0.9" dur="0.6s" begin="2.4s" fill="freeze"/>
        </text>

        <!-- terminal status line -->
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.6s" begin="2.6s" fill="freeze"/>
          <circle cx="60" cy="552" r="4" fill="#E7AC18"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
          <text x="76" y="556" font-family="'Courier New',monospace" font-size="11" fill="#94A3B8" letter-spacing="1">pipeline: online</text>
        </g>
      </g>
    </g>

    <!-- ===== RIGHT PANEL: TERMINAL ===== -->
    <g>
      <rect x="468" y="24" width="688" height="562" rx="20" fill="url(#panelGrad)" stroke="rgba(255,255,255,0.08)"/>
      <!-- glass reflection top -->
      <rect x="468" y="24" width="688" height="120" rx="20" fill="#ffffff" opacity="0.025"/>

      <!-- terminal chrome -->
      <g>
        <circle cx="500" cy="58" r="6" fill="#8B8B8B" opacity="0.6"/>
        <circle cx="522" cy="58" r="6" fill="#8B8B8B" opacity="0.45"/>
        <circle cx="544" cy="58" r="6" fill="#E7AC18"/>
        <text x="812" y="62" text-anchor="middle" font-family="'Courier New',monospace" font-size="12" fill="#94A3B8" letter-spacing="1">savvy@analytics ~ zsh</text>
        <line x1="468" y1="82" x2="1156" y2="82" stroke="rgba(255,255,255,0.08)"/>
      </g>

      <!-- greeting -->
      <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.3s" fill="freeze"/>
        <text x="504" y="132" font-family="'Courier New',monospace" font-size="16" fill="#E7AC18" letter-spacing="1">&gt; hello_world()</text>
      </g>
      <text x="504" y="176" font-size="20" fill="#94A3B8" letter-spacing="3" font-weight="bold" opacity="0">
        HI, I'M
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze"/>
      </text>
      <text x="504" y="220" font-size="42" fill="url(#nameGrad)" letter-spacing="2" font-weight="bold" opacity="0">
        MARVIN McKINNEY
        <animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.8s" fill="freeze"/>
      </text>

      <!-- animated typing role line -->
      <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.1s" fill="freeze"/>
        <text x="504" y="258" font-family="'Courier New',monospace" font-size="18" fill="#E7AC18" letter-spacing="1">
          <tspan>▍ </tspan><tspan id="role" fill="#F8FAFC">
            <animate attributeName="opacity" values="1;1" dur="1s"/>
          </tspan>
        </text>
        <!-- cycling roles via sequential opacity -->
        <text x="524" y="258" font-family="'Courier New',monospace" font-size="18" fill="#F8FAFC" letter-spacing="1">
          <tspan opacity="0">AI Strategist<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.28;0.34" dur="12s" begin="1.2s" repeatCount="indefinite"/></tspan>
        </text>
        <text x="524" y="258" font-family="'Courier New',monospace" font-size="18" fill="#F8FAFC" letter-spacing="1">
          <tspan opacity="0">Principal Consultant, Savvy Analytics<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.34;0.40;0.61;0.67" dur="12s" begin="1.2s" repeatCount="indefinite"/></tspan>
        </text>
        <text x="524" y="258" font-family="'Courier New',monospace" font-size="18" fill="#F8FAFC" letter-spacing="1">
          <tspan opacity="0">SaaS &amp; Agentic AI Systems<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.67;0.73;0.94;1" dur="12s" begin="1.2s" repeatCount="indefinite"/></tspan>
        </text>
        <!-- blink cursor -->
        <rect x="505" y="245" width="9" height="16" fill="#E7AC18">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </rect>
      </g>

      <!-- divider -->
      <line x1="504" y1="280" x2="1120" y2="280" stroke="rgba(255,255,255,0.08)" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.4s" fill="freeze"/>
      </line>

      <!-- info rows -->
      <g font-family="'Courier New',monospace" font-size="14" letter-spacing="0.5">
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.5s" fill="freeze"/>
          <text x="504" y="312" fill="#8B8B8B">location  </text><text x="620" y="312" fill="#F8FAFC">Lisbon, Portugal</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.65s" fill="freeze"/>
          <text x="504" y="336" fill="#8B8B8B">focus     </text><text x="620" y="336" fill="#F8FAFC">SAINT · SavvyCortex · SavvyFlowIQ</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.8s" fill="freeze"/>
          <text x="504" y="360" fill="#8B8B8B">work      </text><text x="620" y="360" fill="#F8FAFC">AI transformation · responsible AI for SMEs</text>
        </g>
        <g opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.95s" fill="freeze"/>
          <text x="504" y="384" fill="#8B8B8B">portfolio </text><text x="620" y="384" fill="#E7AC18">savvyanalytics.info</text>
        </g>
      </g>

      <!-- skills header -->
      <text x="504" y="424" font-size="12" fill="#8B8B8B" letter-spacing="3" font-weight="bold" opacity="0">
        STACK
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="2.1s" fill="freeze"/>
      </text>

      <!-- skill pills -->
      <g font-family="'Courier New',monospace" font-size="12.5" letter-spacing="0.5">
        <!-- row 1 -->
        <g opacity="0" transform="translate(504,438)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.2s" fill="freeze"/>
          <rect width="72" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="0.0s" repeatCount="indefinite"/></rect>
          <text x="36" y="19" text-anchor="middle" fill="#F8FAFC">Python</text>
        </g>
        <g opacity="0" transform="translate(584,438)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.3s" fill="freeze"/>
          <rect width="56" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="0.3s" repeatCount="indefinite"/></rect>
          <text x="28" y="19" text-anchor="middle" fill="#F8FAFC">SQL</text>
        </g>
        <g opacity="0" transform="translate(648,438)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.4s" fill="freeze"/>
          <rect width="100" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="0.6s" repeatCount="indefinite"/></rect>
          <text x="50" y="19" text-anchor="middle" fill="#F8FAFC">Databricks</text>
        </g>
        <g opacity="0" transform="translate(756,438)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.5s" fill="freeze"/>
          <rect width="68" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="0.9s" repeatCount="indefinite"/></rect>
          <text x="34" y="19" text-anchor="middle" fill="#F8FAFC">Azure</text>
        </g>
        <g opacity="0" transform="translate(832,438)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.6s" fill="freeze"/>
          <rect width="76" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="1.2s" repeatCount="indefinite"/></rect>
          <text x="38" y="19" text-anchor="middle" fill="#F8FAFC">Docker</text>
        </g>
        <!-- row 2 -->
        <g opacity="0" transform="translate(504,476)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.7s" fill="freeze"/>
          <rect width="82" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="1.5s" repeatCount="indefinite"/></rect>
          <text x="41" y="19" text-anchor="middle" fill="#F8FAFC">FastAPI</text>
        </g>
        <g opacity="0" transform="translate(594,476)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.8s" fill="freeze"/>
          <rect width="68" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="1.8s" repeatCount="indefinite"/></rect>
          <text x="34" y="19" text-anchor="middle" fill="#F8FAFC">React</text>
        </g>
        <g opacity="0" transform="translate(670,476)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.9s" fill="freeze"/>
          <rect width="100" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="2.1s" repeatCount="indefinite"/></rect>
          <text x="50" y="19" text-anchor="middle" fill="#F8FAFC">TypeScript</text>
        </g>
        <g opacity="0" transform="translate(778,476)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="3.0s" fill="freeze"/>
          <rect width="80" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="2.4s" repeatCount="indefinite"/></rect>
          <text x="40" y="19" text-anchor="middle" fill="#F8FAFC">Node.js</text>
        </g>
        <g opacity="0" transform="translate(866,476)"><animate attributeName="opacity" values="0;1" dur="0.3s" begin="3.1s" fill="freeze"/>
          <rect width="56" height="28" rx="14" fill="rgba(231,172,24,0.10)" stroke="#E7AC18" stroke-opacity="0.55" filter="url(#pillGlow)"><animate attributeName="stroke-opacity" values="0.55;0.9;0.55" dur="4s" begin="2.7s" repeatCount="indefinite"/></rect>
          <text x="28" y="19" text-anchor="middle" fill="#F8FAFC">Vite</text>
        </g>
      </g>

      <!-- divider -->
      <line x1="504" y1="528" x2="1120" y2="528" stroke="rgba(255,255,255,0.08)" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="3.2s" fill="freeze"/>
      </line>

      <!-- social icons row -->
      <g opacity="0" transform="translate(504,548)"><animate attributeName="opacity" values="0;1" dur="0.5s" begin="3.3s" fill="freeze"/>
        <!-- GitHub -->
        <g transform="translate(0,0)">
          <circle cx="16" cy="16" r="15" fill="rgba(231,172,24,0.08)" stroke="#E7AC18" stroke-opacity="0.5"/>
          <path d="M16 8.3a7.7 7.7 0 0 0-2.43 15c.38.07.52-.16.52-.36v-1.4c-2.14.46-2.6-1.03-2.6-1.03-.35-.9-.86-1.13-.86-1.13-.7-.48.05-.47.05-.47.78.06 1.19.8 1.19.8.69 1.18 1.8.84 2.24.64.07-.5.27-.84.49-1.03-1.71-.2-3.5-.85-3.5-3.8 0-.84.3-1.53.79-2.07-.08-.2-.34-.98.08-2.05 0 0 .65-.2 2.12.79a7.4 7.4 0 0 1 3.86 0c1.47-1 2.12-.79 2.12-.79.42 1.07.16 1.85.08 2.05.5.54.79 1.23.79 2.07 0 2.96-1.8 3.6-3.51 3.79.27.24.52.71.52 1.44v2.14c0 .2.14.44.53.36A7.7 7.7 0 0 0 16 8.3z" fill="#E7AC18"/>
        </g>
        <!-- LinkedIn -->
        <g transform="translate(44,0)">
          <circle cx="16" cy="16" r="15" fill="rgba(231,172,24,0.08)" stroke="#E7AC18" stroke-opacity="0.5"/>
          <path d="M11.4 12.3a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zm-1.2 1.4h2.4v8.6h-2.4v-8.6zm4 0h2.3v1.18h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68v4.98h-2.4v-4.42c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.69 1.15-1.69 2.33v4.49h-2.4v-8.6z" fill="#E7AC18"/>
        </g>
        <!-- X / Twitter -->
        <g transform="translate(88,0)">
          <circle cx="16" cy="16" r="15" fill="rgba(231,172,24,0.08)" stroke="#E7AC18" stroke-opacity="0.5"/>
          <path d="M19.6 9.5h1.9l-4.2 4.8 4.9 6.5h-3.8l-3-3.9-3.4 3.9H8.1l4.5-5.1L7.9 9.5h3.9l2.7 3.6 3.1-3.6zm-.7 10.1h1.06L12 10.6h-1.1l8 9z" fill="#E7AC18"/>
        </g>
        <!-- Portfolio / globe -->
        <g transform="translate(132,0)">
          <circle cx="16" cy="16" r="15" fill="rgba(231,172,24,0.08)" stroke="#E7AC18" stroke-opacity="0.5"/>
          <circle cx="16" cy="16" r="6.5" fill="none" stroke="#E7AC18" stroke-width="1.3"/>
          <path d="M9.5 16h13M16 9.5c2.2 2 2.2 11 0 13M16 9.5c-2.2 2-2.2 11 0 13" fill="none" stroke="#E7AC18" stroke-width="1.3"/>
        </g>
        <text x="188" y="21" font-family="'Courier New',monospace" font-size="12" fill="#8B8B8B" letter-spacing="1">// AI transformation, thoughtfully implemented for SMEs</text>
      </g>
    </g>
  </g>
</svg>

---

## 📊 Live GitHub Metrics
<p align="left">
  <img src="./metrics.svg" alt="GitHub Metrics" width="100%">
</p>

<p align="left">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=marvinmckinneyii0&theme=github-dark&radius=8&area=true" alt="Activity Graph" width="100%">
</p>

<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=marvinmckinneyii0&show_icons=true&theme=radical&include_all_commits=true&count_private=true" alt="GitHub stats" height="165">
  <img src="https://streak-stats.demolab.com?user=marvinmckinneyii0&theme=radical&hide_border=false" alt="GitHub Streak" height="165">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=marvinmckinneyii0&layout=compact&theme=radical&langs_count=8" alt="Top Langs" height="165">
</p>

---

## 🔴 Recent Activity
<!--START_SECTION:activity-->
<!-- The latest pull requests, issues, reviews, and comments will be inserted here by a GitHub Action -->
<!--END_SECTION:activity-->

---


