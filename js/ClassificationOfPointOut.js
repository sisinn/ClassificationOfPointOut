(function() {

  var atwhoOptions;
  atwhoOptions = {
    at: "=",
    limit: 80,
    display_timeout: 1000,
    searchKey: "index",
    data: ret_json,
    highlightFirst: false,
    displayTpl: '<li><small>${view}</small></li>',
    insertTpl: "${content}",
    callbacks: {
        matcher: function(flag, subtext) {
            var match, matched, regexp;
            //console.log(flag);
            //console.log(subtext);
            regexp = new XRegExp("(\\s+|^)" + flag + "([\\p{L}_-]+)$", "gi");
            match = regexp.exec(subtext);
            if (!(match && match.length >= 2)) {
                //console.log('111');
                return null;
            }
            //console.log(match);
            matched = null;
            for (var i in ret_json) {
                if(match[2] === ret_json[i].target) {
                    matched = ret_json[i].index;
                }
            }
            return matched;
        }
    }
  };

  $(document).on('focusin', function(ev) {
    var $this;
    $this = $(ev.target);
    if (!$this.is('textarea')) {
      return;
    }
    //console.log('000');
    return $this.atwho(atwhoOptions);
  });

}).call(this);
