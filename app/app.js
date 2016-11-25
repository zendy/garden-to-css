const elButton = document.querySelectorAll('button')[0];

const grabInput = () => {
  const elTextArea = document.querySelectorAll('textarea')[0];
  return elTextArea.value;
};

const transpileCss = (content) => {
  let result = content.replace(/\[/g, '');
  return result;
};

const showExport = (result) => {
  const elTextArea = document.querySelectorAll('textarea')[1];
  elTextArea.value = result;
  return true;
};

elButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  showExport(transpileCss(grabInput()));
});
