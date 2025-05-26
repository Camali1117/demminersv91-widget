import {registerElement} from 'wix-window';

registerElement('spielplanWidget', 'html', {});
registerElement('tabelleWidget', 'html', {});

$w.onReady(function () {
  const spielplanHTML = `
    <html>
      <head>
        <script type="text/javascript" src="https://www.fussball.de/widgets.js"></script>
      </head>
      <body>
        <div class="fussballde_widget"
             data-id="5a8175b6-d528-4f03-a5a4-acc5f25c07ef"
             data-type="team-matches">
        </div>
      </body>
    </html>
  `;

  const tabelleHTML = `
    <html>
      <head>
        <script type="text/javascript" src="https://www.fussball.de/widgets.js"></script>
      </head>
      <body>
        <div class="fussballde_widget"
             data-id="d942d5c3-2caf-4c54-9550-e42ac745f6ee"
             data-type="table">
        </div>
      </body>
    </html>
  `;

  $w("#spielplanWidget").postMessage(spielplanHTML);
  $w("#tabelleWidget").postMessage(tabelleHTML);
});
