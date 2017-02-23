function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    let num = parseInt(list[i].innerHTML);
    num += n;
    list[i].innerHTML = num;
  }
}

function deepestChild() {
  let list = document.getElementById('grand-node').querySelectorAll('div');
  return list[list.length -1];
}
