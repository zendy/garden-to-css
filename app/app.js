const elButton = document.querySelectorAll('button')[0];

const grabInput = () => {
  const elTextArea = document.querySelectorAll('textarea')[0];
  return elTextArea.value;
};

const transpileCss = (content) => {
  const result = content
              .replace(/:&:/g, '& ')
              .replace(/(:)/g, '')
              .replace(/(\s)+"/g, ': ')
              .replace(/"/g, '')
              .replace(/(\[)/g, '')
              .replace(/(\])/g, '')
              .replace(/(\s)+{/g, '\n{\n')
              .replace(/}/g, '\n}')
              .replace('constants/success-green', '#8ed45a')
              .replace('constants/default-font-family', 'Gotham, sans-serif')
              .replace('constants/button-red', '#e75847')
              .replace('constants/button-red-selected', '#bb382a')
              .replace('constants/salon-info-background-grey', '#F2F2F4')
              .replace('constants/light-grey-for-text', '#73767f')
              .replace('constants/basic-border', '1px solid #d9dad8')
              .replace('constants/error-red', '#e75847');
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
