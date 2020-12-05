
document.getElementById('calc').addEventListener("click", () => {
  const malt_sugar = parseFloat(document.getElementById('malt_sugar').value);
  const added_sugar = parseFloat(document.getElementById('added_sugar').value);
  const water = parseFloat(document.getElementById('water').value);

  const calc = parseFloat((malt_sugar + added_sugar) / (water + malt_sugar + added_sugar) * (160 / 3)).toFixed(2); 

  if (calc !== 'NaN') {
    document.getElementById('estimate').innerText = calc + '%';
  } else {
    document.getElementById('estimate').innerText = "(Error - Check fields)";
  }
});
