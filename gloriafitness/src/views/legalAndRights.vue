<template>
  <div id="legal" class="margin-0">
    <h1>Impressum</h1>
    <h2>Verantwortlich für den Inhalt dieser Website</h2>
    <br />
    <p>
      Florian Bachl Social Media Marketing & Webdesign
      <br />
      Besitzer: B.Sc. Florian Bachl
      <br />
      Bäuerlegasse 18/33
      <br />
      1200 Wien
      <br />
      Österreich
      <br />
      Telefon: +43650 6779393
      <br />
      hello@florianbachl.at
      <br />
      www.florianbachl.at
    </p>

    <p>
      Anwendbares Recht: Gewo
      <br /><br />
      Aufsichtsbehörde: Magistratisches Bezirksamt des 20. Bezirkes
      <br /><br />
      Wirtschaftskammer: WKO Wien / Fachgruppe Werbung & Marktkommunikation
      <br /><br />
      Info lt. EKG
      <br /><br />
      Bildverweis:
      <br />
      Florian Bachl
      <br /><br />
      Texte, Bilder und Grafiken auf dieser Website dürfen nur mit
      ausdrücklicher Genehmigung des Eigentümers verwendet werden.
      <br />
      Alle Informationen und Erklärungen auf unserer Website sind unverbindlich.
      Wir übernehmen keine Garantie für die Richtigkeit und Vollständigkeit des
      Inhalts. Aus dem Inhalt dieser Website können keine Rechtsansprüche
      entstehen. Wenn Sie Fehler im Inhalt bemerken, kontaktieren Sie uns bitte,
      damit wir diese korrigieren können. Wir identifizieren uns nicht mit dem
      Inhalt der Seiten oder Unterseiten, auf die verwiesen wird, und übernehmen
      keine Haftung dafür. Wenn eine der Seiten, auf die wir verlinken,
      fragwürdigen Inhalt hat oder vom jeweiligen Seiteninhaber nicht gewünscht
      wird, wird der jeweilige Link sofort gelöscht.
    </p>
  </div>
</template>

<script>
  export default {
    name: "legalAndRights",
    data() {
      return {};
    },
    components: {},
    computed: {},
    watch: {},
    methods: {},
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
<style scoped>
  #legal {
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
</style>
