const btn = document.querySelector('.button');

const r = new rive.Rive({
  src: 'SmartAll.riv',
  canvas: document.getElementById('canvas'),
  autoplay: true,
  stateMachines: 'Anime',
  fit: rive.Fit.cover,
  onLoad: (_) => {
    const inputs = r.stateMachineInputs('Anime');
    const startTrigger = inputs.find((i) => i.name === 'Start');
    btn.onclick = (e) => {
      e.preventDefault();
      startTrigger.fire();
    };
  },
});
