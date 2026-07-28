const nodeContent = {
  intent: {
    index: "01",
    classification: "Strategic layer",
    title: "Intent",
    summary:
      "Clarify what the organization is trying to change, protect, or make possible before selecting a technical response.",
    function: "Resolve ambiguous goals into testable system objectives.",
    output: "A decision frame with explicit human ownership.",
  },
  context: {
    index: "02",
    classification: "Interpretive layer",
    title: "Context",
    summary:
      "Establish the conditions, constraints, language, and operating reality surrounding the system.",
    function: "Make organizational conditions legible.",
    output: "A shared frame for design and judgment.",
  },
  memory: {
    index: "03",
    classification: "Continuity layer",
    title: "Memory",
    summary:
      "Give intelligent systems durable access to the knowledge, history, and state required for coherent work.",
    function: "Preserve context across tasks and decisions.",
    output: "Structured organizational memory with traceable sources.",
  },
  policy: {
    index: "04",
    classification: "Governance layer",
    title: "Policy",
    summary:
      "Define the permissions, escalation paths, and non-negotiable boundaries that shape intelligent action.",
    function: "Keep authority and accountability explicit.",
    output: "Legible rules for autonomy, review, and intervention.",
  },
  structure: {
    index: "05",
    classification: "Architecture layer",
    title: "Structure",
    summary:
      "Translate intent, context, memory, and policy into an operating architecture whose parts have meaningful responsibilities.",
    function: "Coordinate agents, data, tools, and people.",
    output: "A system that can be operated, observed, and changed.",
  },
  action: {
    index: "06",
    classification: "Execution layer",
    title: "Action",
    summary:
      "Convert intelligence into deliberate work while preserving review points and a defensible record of what occurred.",
    function: "Operationalize reasoning without surrendering judgment.",
    output: "Accountable execution with observable consequences.",
  },
};

const connectionPairs = [
  ["intent", "context"],
  ["context", "memory"],
  ["intent", "policy"],
  ["intent", "structure"],
  ["context", "structure"],
  ["memory", "action"],
  ["policy", "structure"],
  ["structure", "action"],
];

const plot = document.querySelector("#field-plot");
const canvas = document.querySelector("#relation-field");
const context = canvas.getContext("2d");
const nodes = [...document.querySelectorAll(".semantic-node")];
const fieldState = document.querySelector("#field-state");
const detailIndex = document.querySelector("#detail-index");
const detailClassification = document.querySelector("#detail-classification");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const detailFunction = document.querySelector("#detail-function");
const detailOutput = document.querySelector("#detail-output");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeKey = "context";
let animationFrame = 0;
let animationStart = performance.now();
let pointerX = 0.5;
let pointerY = 0.5;
let pointerTargetX = 0.5;
let pointerTargetY = 0.5;
let isVisible = !document.hidden;

const nodeState = new Map(
  nodes.map((node, index) => [
    node.dataset.node,
    {
      element: node,
      x: Number(node.dataset.x),
      y: Number(node.dataset.y),
      phase: index * 0.9,
      offsetX: 0,
      offsetY: 0,
    },
  ]),
);

function activateNode(key, { announce = true } = {}) {
  const content = nodeContent[key];

  if (!content) {
    return;
  }

  activeKey = key;

  nodes.forEach((node) => {
    node.setAttribute("aria-pressed", String(node.dataset.node === key));
  });

  detailIndex.textContent = content.index;
  detailClassification.textContent = content.classification;
  detailTitle.textContent = content.title;
  detailSummary.textContent = content.summary;
  detailFunction.textContent = content.function;
  detailOutput.textContent = content.output;

  if (announce) {
    fieldState.textContent = `${content.title} selected`;
  }

  drawField(performance.now());
}

function resizeCanvas() {
  const width = plot.clientWidth;
  const height = plot.clientHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
}

function updateNodePositions(time) {
  const motionScale = reducedMotion.matches ? 0 : 1;
  const pointerOffsetX = (pointerX - 0.5) * 8 * motionScale;
  const pointerOffsetY = (pointerY - 0.5) * 6 * motionScale;

  nodeState.forEach((state, key) => {
    const driftX = Math.sin(time / 5200 + state.phase) * 2.2 * motionScale;
    const driftY = Math.cos(time / 6100 + state.phase) * 1.8 * motionScale;
    const depth = 0.55 + state.phase * 0.08;

    state.offsetX = driftX + pointerOffsetX * depth;
    state.offsetY = driftY + pointerOffsetY * depth;
    state.element.style.transform = `translate(calc(-50% + ${state.offsetX}px), calc(-50% + ${state.offsetY}px))`;

    if (key === activeKey && reducedMotion.matches) {
      state.element.style.transform = "translate(-50%, -50%)";
    }
  });
}

function pointFor(key) {
  const state = nodeState.get(key);

  return {
    x: state.x * plot.clientWidth + state.offsetX,
    y: state.y * plot.clientHeight + state.offsetY,
  };
}

function drawConnection(fromKey, toKey) {
  const from = pointFor(fromKey);
  const to = pointFor(toKey);
  const isActive = fromKey === activeKey || toKey === activeKey;
  const controlX = (from.x + to.x) / 2;
  const controlY = Math.min(from.y, to.y) - Math.abs(to.x - from.x) * 0.12;

  context.beginPath();
  context.moveTo(from.x, from.y);
  context.quadraticCurveTo(controlX, controlY, to.x, to.y);
  context.strokeStyle = isActive ? "rgba(198, 164, 106, 0.68)" : "rgba(121, 147, 163, 0.30)";
  context.lineWidth = isActive ? 1.25 : 0.8;
  context.stroke();
}

function drawField(time) {
  resizeCanvas();
  updateNodePositions(time);
  context.clearRect(0, 0, plot.clientWidth, plot.clientHeight);
  connectionPairs.forEach(([from, to]) => drawConnection(from, to));
}

function animationLoop(time) {
  pointerX += (pointerTargetX - pointerX) * 0.04;
  pointerY += (pointerTargetY - pointerY) * 0.04;
  drawField(time - animationStart);

  if (isVisible && !reducedMotion.matches) {
    animationFrame = requestAnimationFrame(animationLoop);
  }
}

function startAnimation() {
  cancelAnimationFrame(animationFrame);
  animationStart = performance.now();
  drawField(0);

  if (isVisible && !reducedMotion.matches) {
    animationFrame = requestAnimationFrame(animationLoop);
  }
}

plot.addEventListener("pointermove", (event) => {
  const bounds = plot.getBoundingClientRect();
  pointerTargetX = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
  pointerTargetY = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
});

plot.addEventListener("pointerleave", () => {
  pointerTargetX = 0.5;
  pointerTargetY = 0.5;
});

nodes.forEach((node, index) => {
  const key = node.dataset.node;

  node.addEventListener("click", () => activateNode(key));
  node.addEventListener("focus", () => activateNode(key));
  node.addEventListener("pointerenter", () => activateNode(key, { announce: false }));

  node.addEventListener("keydown", (event) => {
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const backward = event.key === "ArrowLeft" || event.key === "ArrowUp";

    if (!forward && !backward && event.key !== "Home" && event.key !== "End") {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (forward) {
      nextIndex = (index + 1) % nodes.length;
    } else if (backward) {
      nextIndex = (index - 1 + nodes.length) % nodes.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else {
      nextIndex = nodes.length - 1;
    }

    nodes[nextIndex].focus();
  });
});

document.addEventListener("visibilitychange", () => {
  isVisible = !document.hidden;
  startAnimation();
});

window.addEventListener("resize", () => drawField(performance.now() - animationStart));

if (typeof reducedMotion.addEventListener === "function") {
  reducedMotion.addEventListener("change", startAnimation);
} else {
  reducedMotion.addListener(startAnimation);
}

activateNode(activeKey, { announce: false });
startAnimation();
