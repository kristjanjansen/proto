function urlParameter(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

var page = urlParameter('page') !== null ? urlParameter('page') : 'components'
var css = urlParameter('css') !== null ? urlParameter('css') : 'default'
var content = urlParameter('content') !== null ? urlParameter('content') : 'index'

$('.site-css').attr('href', 'css/' + css + '.css')

var body = twig({
  href: 'html/pages/' + page + '/index.html',
  async: false
})

var data = {}

$.get('html/pages/' + page + '/' + content + '.yml', function(data) {
    
  data = jsyaml.load(data)

  if (data && data.components) {

    $.ajaxSetup({async: false, cache: false})
    data.guides = []
    data.components.forEach(function(key) {
      var guide = twig({
        href: 'html/pages/' + page + '/' + key + '.html',
        async: false
      })
      var html = guide.render({}).split('-->\n\n')
      var header = jsyaml.load(html[0].replace('<!--\n', ''))
      var raw = guide.render(header.data ? header.data : {})

      data.guides.push({
        title: header.title,
        desc: header.desc,
        hide_data: header.hide_data,
        data: header.data ? jsyaml.dump({zzz: [{component: header.component, data: header.data}]}).replace('zzz:\n','') : null,
        raw: raw,
      })
    })
  }

  if (data && data.docs) {

    $.ajaxSetup({async: false, cache: false})
    data.docs_rendered = []

    data.docs.forEach(function(doc) {

      $.get('html/pages/' + page + '/' + doc + '.md', function(md) {
        var parts = md.split('\n--\n')
        data.docs_rendered.push({
          header: parts[1] ? yaml.load(parts[0]): null,
          content: marked(parts[1] ? parts[1] : parts[0])
        })
      })

    })
  
  }


  $('body').html(body.render(data).replace(/<!--[\s\S]*?-->/g, '')).trigger('loaded')

})