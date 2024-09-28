const stylesheet = document.getElementById("stylesheet");
const selectCss = document.getElementById("select-css");
const selectCssResets = document.getElementById("select-css-resets");
const selectCssFrameworks = document.getElementById("select-css-frameworks");
const elementTable = document.getElementById("elements-table");
const totalCoverage = document.getElementById("total-coverage");
const codeSnippetStyle = document.getElementById("code-snippet-style");

const elements = [
    // Sections
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "address",
    // Grouping content
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "menu",
    "ol",
    "p",
    "pre",
    "search",
    "ul",
    // Text-level semantics
    "a",
    "abbr",
    "b",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    // Edits
    "del",
    "ins",
    // Embedded content
    "area",
    "audio",
    "embed",
    "iframe",
    "img",
    "object",
    "picture",
    "track",
    "video",
    // Tabular data
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    // Forms
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "textarea",
    // Interactive elements
    "details",
    "dialog",
    "summary",
    // Scripting
    "canvas",
    "template"
];

const cssFrameworks = [
  {
    "name": "a11yana",
    "link": "/assets/css-reworked/a11yana.css"
},
{
    "name": "almond",
    "link": "/assets/css-reworked/almond.css"
},
{
    "name": "awsm",
    "link": "/assets/css-reworked/awsm.css"
},
{
    "name": "axist",
    "link": "/assets/css-reworked/axist.css"
},
{
    "name": "bahunya",
    "link": "/assets/css-reworked/bahunya.css"
},
{
    "name": "bamboo",
    "link": "/assets/css-reworked/bamboo.css"
},
{
    "name": "bare",
    "link": "/assets/css-reworked/bare.css"
},
{
    "name": "basic",
    "link": "/assets/css-reworked/basic.css"
},
{
    "name": "caramel",
    "link": "/assets/css-reworked/caramel.css"
},
{
    "name": "classless",
    "link": "/assets/css-reworked/classless.css"
},
{
    "name": "clmaterial",
    "link": "/assets/css-reworked/clmaterial.css"
},
{
    "name": "concrete",
    "link": "/assets/css-reworked/concrete.css"
},
{
    "name": "gd",
    "link": "/assets/css-reworked/gd.css"
},
{
    "name": "generic",
    "link": "/assets/css-reworked/generic.css"
},
{
    "name": "github-markdown",
    "link": "/assets/css-reworked/github-markdown.css"
},
{
    "name": "holiday",
    "link": "/assets/css-reworked/holiday.css"
},
{
    "name": "kacit",
    "link": "/assets/css-reworked/kacit.css"
},
{
    "name": "latex",
    "link": "/assets/css-reworked/latex.css"
},
{
    "name": "lissom",
    "link": "/assets/css-reworked/lissom.css"
},
{
    "name": "magick",
    "link": "/assets/css-reworked/magick.css"
},
{
    "name": "marx",
    "link": "/assets/css-reworked/marx.css"
},
{
    "name": "md-air",
    "link": "/assets/css-reworked/md-air.css"
},
{
    "name": "mercury",
    "link": "/assets/css-reworked/mercury.css"
},
{
    "name": "minimal-stylesheet",
    "link": "/assets/css-reworked/minimal-stylesheet.css"
},
{
    "name": "missing",
    "link": "/assets/css-reworked/missing.css"
},
{
    "name": "mu",
    "link": "/assets/css-reworked/mu.css"
},
{
    "name": "mustard",
    "link": "/assets/css-reworked/mustard.css"
},
{
    "name": "mvp",
    "link": "/assets/css-reworked/mvp.css"
},
{
    "name": "neat",
    "link": "/assets/css-reworked/neat.css"
},
{
    "name": "new",
    "link": "/assets/css-reworked/new.css"
},
{
    "name": "no-class",
    "link": "/assets/css-reworked/no-class.css"
},
{
    "name": "ok",
    "link": "/assets/css-reworked/ok.css"
},
{
    "name": "pico",
    "link": "/assets/css-reworked/pico.css"
},
{
    "name": "sakura",
    "link": "/assets/css-reworked/sakura.css"
},
{
    "name": "silicon",
    "link": "/assets/css-reworked/silicon.css"
},
{
    "name": "simple",
    "link": "/assets/css-reworked/simple.css"
},
{
    "name": "spcss",
    "link": "/assets/css-reworked/spcss.css"
},
{
    "name": "superstylin",
    "link": "/assets/css-reworked/superstylin.css"
},
{
    "name": "tacit",
    "link": "/assets/css-reworked/tacit.css"
},
{
    "name": "tufte",
    "link": "/assets/css-reworked/tufte.css"
},
{
    "name": "vanilla",
    "link": "/assets/css-reworked/vanilla.css"
},
{
    "name": "w3c-traditional",
    "link": "/assets/css-reworked/w3c-traditional.css"
},
{
    "name": "water",
    "link": "/assets/css-reworked/water.css"
},
{
    "name": "writ",
    "link": "/assets/css-reworked/writ.css"
}
];

const populateSelect = (list, target) => {
    list.forEach((item) => {
        const option = document.createElement("option");
        option.textContent = item.name;
        option.value = item.link;
        target.appendChild(option);
    });
};

const codeAdd = (url) => {
    codeSnippetStyle.innerHTML = `&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;${url}&#x22; type=&#x22;text/css&#x22;&#x3E;`;
};

populateSelect(cssFrameworks, selectCssFrameworks);

const changeCss = (link) => {
    stylesheet.setAttribute("href", link);
};

const createRow = (text) => {
    const td = document.createElement("td");
    const input = document.createTextNode(text);
    td.appendChild(input);
    return td;
};

const changeTable = (link) => {
    elementTable.innerHTML = "";
    let total = 0;
    let coverage = 0;
    fetch(link).then(function (response) {
        response.text().then(function (text) {
            // console.log(text);
            for (const element in elements) {
                total++;
                const tr = document.createElement("tr");
                //create first row
                elementName = createRow(elements[element]);
                tr.appendChild(elementName);

                /// test if text contains regex
                const regex = new RegExp(elements[element] + "[{,:\\s]");
                let status = "";
                if (text.search(regex) > 0) {
                    status = "✅";
                    coverage++;
                }
                elementStatus = createRow(status);
                tr.appendChild(elementStatus);
                elementTable.appendChild(tr);
            }
            const coveragePercent = Math.round((coverage / total) * 100);
            totalCoverage.innerHTML = coveragePercent + "%";
        });
    });
};

selectCss.addEventListener("change", (e) => {
    changeCss(e.target.value);
    changeTable(e.target.value);
    codeAdd(e.target.value);
});
