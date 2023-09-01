<template>
  <div id="dataprotection" class="margin-0">
    <h1>Erklärung zur Informationspflicht (Datenschutzerklärung)</h1>
    <p>
      Um Ihre persönlichen Daten zu schützen, werden Informationen
      ausschließlich aufgrund der gesetzlichen Bestimmungen (DSGVO, TKG 2003)
      verarbeitet. Lesen Sie hier die wichtigsten Aspekte der Datenverarbeitung
      auf dieser Website.
    </p>
    <h2>Kontakt mit uns</h2>
    <p>
      Eine über das Formular auf der Website oder per Email eingereichte Anfrage
      wird samt ihren eingegebenen Daten für Anschlussfragen sechs Monate
      gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
    </p>
    <h2>Server-Log-Files</h2>
    <p>
      Der Provider der Seiten erhebt und speichert automatisch Informationen in
      so genannten Server-Log Files, die Ihr Browser automatisch an uns
      übermittelt. Diese sind:
    </p>
    <ul>
      <li>Hostname des zugreifenden Rechners</li>
      <li>Uhrzeit der Serveranfrage</li>
      <li>Browsertyp und Browserversion</li>
      <li>verwendetes Betriebssystem</li>
      <li>Referrer URL</li>
    </ul>

    <p>
      Diese Daten sind anonymisiert und werden nicht mit anderen Datenquellen
      zusammengeführt. Wenn wir konkrete Anhaltspunkte für eine rechtswiedrige
      Nutzung haben, behalten wir uns vor, diese Daten nachträglich zu
      überprüfen.
    </p>
    <h2>Services</h2>
    <p>
      Für die einwandfreie Funktion dieser Website verwenden wir in folgenden
      Bereichen Services von Drittanbietern:
    </p>

    <ul>
      <li>
        Webhosting (Google Firebase) zur Speicherung von Daten, zur Ausführung
        der Website
      </li>
    </ul>
    <h2>Skripte</h2>
    <p>
      Ein Skript ist eine Datei mit Befehlen, welche Funktionen zur Verfügung
      stellt, Daten verarbeitet und unsere Website an die Services von
      Drittanbietern wie z.B. die Webanalyse-Produkte Google Analytics anbindet.
    </p>

    <p>
      Da diese Website auch ohne diese Skripte einwandfrei funktioniert, werden
      diese erst nach Einwilligung gestartet.
    </p>

    <h2>Cookies</h2>
    <p>
      Wir verwenden Cookies. EIn Cookie ist eine kleine Textdatei, die im
      Browser ihres Endgerätes gespeichert werden. Sie sind nicht schadhaft und
      haben lediglich die Aufgabe, die Nutzererfahrung reibungsloser zu
      gestalten. Manche Cookies haben Ablaufdaten, und andere bleiben auf dem
      Gerät gespeichert, bis sie gelöscht werden. Eine Funktion, die Cookies
      erfüllen ist es, das Gerät beim nächsten Besuch wieder zu erkennen. Wenn
      Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass
      er Sie über das Setzen von Cookies informiert und Sie dies nur im
      Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die
      Funktionalität unserer Website eingeschränkt sein.
    </p>

    <p>
      Da diese Website auch ohne diese Skripte einwandfrei funktioniert, werden
      diese erst nach Einwilligung gestartet.
    </p>

    <h2>Ihre Rechte</h2>
    <p>
      Bezüglich der Datenspeicherung haben Sie die Rechte auf Auskunft,
      Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
      Widerspruch. Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten
      gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
      Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei
      uns oder der Datenschutzbehörde Beschwerde einreichen.
    </p>
    <p class="clickable primary" @click="removeCookies"></p>
      Widerruf der Einwilligung
    </p>
    <p>
      Kontaktieren Sie uns:<br />
      Gloria Jeschko <br />

      gloria.victoria.jeschko@gmail.com<br />

      +43680 2188909<br />
    </p>
  </div>
</template>

<script>
  export default {
    name: "dataProtection",
    data() {
      return {};
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    components: {},
    computed: {},
    watch: {},
    methods: {
      removeCookies() {
        this.$store.dispatch("setCookieConsent", false);
      },
    },
  };
</script>
<style scoped>
  #dataprotection {
    padding: 1em;
    padding-top: 10em;
  }

  p,
  ul,
  h1 {
    padding-bottom: 2em;
  }

  li {
    margin-left: 2em;
  }
  @media screen and (max-width: 1100px) {
    .margin-0 {
      margin: 0px;
      padding: 1em;
      max-width: calc(100% - 2em);
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 1.5em;
    }
  }
  .primary {
    color: #0f70b7;
  }
</style>
