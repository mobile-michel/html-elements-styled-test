var frameworks = "DROPDOWNS,bahunya,classless,holiday,mvp,ASIDE,awsm,simple,tacit, CENTER CONTENT,almond,bare,concrete,gdcss,missing,neat,new,pico.classless,psone,sakura,silicon,water,OTHERS,beer,bolt,bonsai,bootstrap,chota,cirrus,kraken,materialize,milligram,mustard,paper,picnic,pico,skelet,vanilla,wing,RESET OR DO NOTHING,bulma,fomantic,foundation,fylgja,material-components-web,mui,nes,open-prop,primer,printed,pure,semantic,spectre,spruce,system,terminal,uikit,uswds,xp";

add_switcher();

function switch_css(css) {
  css_link.href = "/assets/css-reworked/" + css + ".css";
}

function capitalize(s) {
  u = s.replace(/^(.)/, function(_, l){
    return l.toUpperCase();
  });
  return u;
}

function on_css_load() {
  var bgColor = getComputedStyle(document.body).backgroundColor;
  if (bgColor.match(/^rgba\(.*\)/) ) bgColor = 'white';
  switcher.style.backgroundColor = bgColor;
}

function inline_switcher() {
  switcher = document.getElementById("switcher");
  frameworks_array = frameworks.split(",");
  select_open = '\n        <select name="switcher_dropdown" id="switcher_dropdown" accesskey="s" onchange="switch_css(this.value)">\n';
  dropdown = select_open;
  for (i = 0; i < frameworks_array.length; i++) {
    f = frameworks_array[i];
    framework_name = capitalize(f);
    option = '          <option value="' + f + '">' + framework_name + ' CSS</option>\n';
    dropdown = dropdown + option;
  }
  select_close = '        </select>\n      '
  dropdown = dropdown + select_close;
  switcher.innerHTML = dropdown;
}

function add_switcher() {
  css_link = document.getElementsByTagName("link")[0];
  if (css_link == undefined) {
    head = document.getElementsByTagName('head')[0];
    css_link = document.createElement('link');
    css_link.rel="stylesheet";
    css_link.type="text/css";
    css_link.href="https://dohliam.github.io/dropin-minimal-css/min/" + frameworks.split(",")[0] + ".min.css";
    head.appendChild(css_link);
  }

  var new_div = document.createElement('div');
  new_div.id = 'switcher';
  new_div.innerHTML = '      <div>&nbsp;</div>\n      <script type="text/javascript">inline_switcher();</script>';
  document.body.prepend(new_div);
  document.body.style.paddingLeft = "24px";

  inline_switcher();

  css_link.onload = on_css_load;
}
