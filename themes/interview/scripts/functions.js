hexo.extend.helper.register('tree_cate', (data) => {
  let str = '';
  // (function fn(cate, parent = undefined) {
  //   str += "<ul>"
  //   cate.sort('name', 1).find({ parent }).forEach(el => {
  //     str += `<li><a href="${url_for(el.path)}">${el.name}</a>`;
  //     fn(cate, el._id)
  //     str += '</li>';
  //   });
  //   str += "</ul>"
  // })(data);
  return str;
})