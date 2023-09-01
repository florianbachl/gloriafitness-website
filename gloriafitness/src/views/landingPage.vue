<template>
  <div id="home">
    <header>
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
          <div class="col-12 col-md-6 pt-5 p-md-1 p-lg-3">
            <img
              :src="require('@/assets/Bunt_dicker.png')"
              alt="logo"
              id="logo-head-section"
              class="img-fluid" />
            <div class="my-4">
              <h1>Personal Coaching mit Herz</h1>
              <p class="lead mt-4">
                Stärker werden, präventiv trainieren, Schmerzen reduzieren, fit
                bis ins hohe Alter, … . Zusammen erreichen wir deine Ziele.
              </p>
            </div>
            <a href="#contact">
              <button type="button" class="btn btn-primary btn-lg mt-4">
                Gemeinsam durchstarten
              </button></a
            >
          </div>
          <div class="col-12 col-md-6 p-lg-3">
            <img
              :src="require('@/assets/banner.jpg')"
              alt="headerpic "
              class="img-fluid border-radius" />
          </div>
        </div>
      </div>
    </header>
    <section class="mb-5">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-center align-items-center"
          id="quote">
          <div class="col-12 px-md-0 col-md-2">
            <img
              :src="require('@/assets/closeup.jpg')"
              alt="headerpic"
              class="img-fluid quote-img" />
          </div>
          <h4 class="col-12 col-md-10 mt-4 mt-md-0">
            "Ich möchte meinen Kunden zeigen, das Gesundheit nicht Verzicht
            heißt. Du kannst sportlich sein, und trotzdem, oder vielleicht
            gerade deshalb, das Leben in vollen Zügen genießen."
          </h4>
        </div>
      </div>
    </section>
    <section
      class="App__example o-vertical-spacing o-vertical-spacing--l"
      id="personal-coaching">
      <div class="container">
        <ParallaxContainer
          class="d-flex flex-column flex-md-row justify-content-start align-items-start">
          <div class="col-12 col-md-5 px-lg-5">
            <img
              :src="require('@/assets/model.jpg')"
              alt="headerpic"
              class="img-fluid border-radius" />
          </div>
          <ParallaxElement
            :factor="0.3"
            class="steps-for-desktop col-12 col-md-7 py-4 px-md-5">
            <div class="mb-4">
              <h2>Personal Coaching</h2>
              <p class="lead-2 mt-5 mb-5">
                Ein gutes Personal Training ist für mich mehr als nur Kunden
                durch ihr Training zu führen. Mein Ziel ist es, zusammen mit dir
                deine Ziele und Wünsche auszuarbeiten und dich bei deiner Reise
                langfristig zu unterstützen. Für unterschiedliche Problematiken
                und Zielsetzungen gibt es unterschiedliche Ansatzpunkte, auf
                welche ich beim Training achte. Zusammen erarbeiten wir diese,
                und betten neue Routinen in deinen individuellen Alltag ein.
              </p>
            </div>
            <a class="link-primary" href="#contact"
              >Jetzt richtig trainineren lernen</a
            >
          </ParallaxElement>
          <div class="col-12 col-md-7 py-4 px-md-5 steps-for-mobile">
            <div class="mb-4">
              <h2>Personal Coaching</h2>
              <p class="lead-2 mt-5 mb-5">
                Ein gutes Personal Training ist für mich mehr als nur Kunden
                durch ihr Training zu führen. Mein Ziel ist es, zusammen mit dir
                deine Ziele und Wünsche auszuarbeiten und dich bei deiner Reise
                langfristig zu unterstützen. Für unterschiedliche Problematiken
                und Zielsetzungen gibt es unterschiedliche Ansatzpunkte, auf
                welche ich beim Training achte. Zusammen erarbeiten wir diese,
                und betten neue Routinen in deinen individuellen Alltag ein.
              </p>
            </div>
            <a class="link-primary" href="#contact"
              >Jetzt richtig trainineren lernen</a
            >
          </div>
        </ParallaxContainer>
      </div>
    </section>

    <section
      id="workout-plan"
      class="App__example o-vertical-spacing o-vertical-spacing--l">
      <div class="container">
        <ParallaxContainer
          class="d-flex flex-column-reverse flex-md-row justify-content-start align-items-start">
          <ParallaxElement
            :factor="0.4"
            class="steps-for-desktop col-12 col-md-7 py-4 px-md-5">
            <div class="mb-4">
              <h2>Trainingsplan</h2>
              <p class="lead-2 mt-5 mb-5">
                Man muss nicht alles auf eigene Faust machen. Mit einem
                Trainingsplan statte ich dich aus, um Trainingseinheiten auch
                alleine durchführen zu können und weiterhin die Ziele im Auge zu
                behalten. Einzelne Trainingseinheiten werden dokumentiert, um
                Trainingsfortschritte zu erkennen und den Plan in weiteren
                Schritten zu adaptieren.
              </p>
            </div>
            <a class="link-primary" href="#contact">Jetzt Ziele erreichen</a>
          </ParallaxElement>
          <div class="steps-for-mobile col-12 col-md-7 py-4 px-md-5">
            <div class="mb-4">
              <h2>Trainingsplan</h2>
              <p class="lead-2 mt-5 mb-5">
                Man muss nicht alles auf eigene Faust machen. Mit einem
                Trainingsplan statte ich dich aus, um Trainingseinheiten auch
                alleine durchführen zu können und weiterhin die Ziele im Auge zu
                behalten. Einzelne Trainingseinheiten werden dokumentiert, um
                Trainingsfortschritte zu erkennen und den Plan in weiteren
                Schritten zu adaptieren.
              </p>
            </div>
            <a class="link-primary" href="#contact">Jetzt Ziele erreichen</a>
          </div>
          <div class="col-12 col-md-5 px-lg-5">
            <img
              :src="require('@/assets/chest.jpg')"
              alt="headerpic"
              class="img-fluid border-radius" />
          </div>
        </ParallaxContainer>
      </div>
    </section>

    <section class="bglightblue2">
      <section>
        <div class="container col col-8-lg">
          <div class="row py-5 text-center">
            <h2>So läuft das Training ab</h2>
          </div>
          <div class="row mt-5 steps-for-desktop">
            <div class="col-1">
              <div class="row">
                <div class="col my-1"><hr /></div>
              </div>
            </div>
            <div class="col row">
              <div class="col">
                <div
                  class="d-flex flex-row justify-content-center align-items-center">
                  <div class="col-auto">
                    <div
                      class="icon-wrapping icon-wrapping-chat d-flex flex-row justify-content-center align-items-center">
                      <span class="material-icons material-icons-step-1"
                        >question_answer</span
                      >
                    </div>
                  </div>
                  <div class="col"><hr /></div>
                </div>

                <h3 class="h5 my-3">Kostenloses Erstgespräch</h3>
              </div>
              <div class="col">
                <div
                  class="d-flex flex-row justify-content-center align-items-center">
                  <div class="col-auto">
                    <div
                      class="icon-wrapping icon-wrapping-wave d-flex flex-row justify-content-center align-items-center">
                      <span class="material-icons material-icons-step-1"
                        >fitness_center</span
                      >
                    </div>
                  </div>
                  <div class="col"><hr /></div>
                </div>
                <h3 class="h5 my-3">Personalisiertes Paket erhalten</h3>
              </div>
              <div class="col">
                <div
                  class="d-flex flex-row justify-content-center align-items-center">
                  <div class="col-auto">
                    <div
                      class="icon-wrapping icon-wrapping-smile d-flex flex-row justify-content-center align-items-center">
                      <span class="material-icons material-icons-step-1"
                        >mood</span
                      >
                    </div>
                  </div>
                  <div class="col"><hr /></div>
                </div>

                <h3 class="h5 my-3">Ziele erreichen</h3>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column align-items-start justify-content-start steps-for-mobile">
            <div class="col row">
              <div
                class="col-auto d-flex flex-column justify-content-center align-items-center">
                <div
                  class="icon-wrapping icon-wrapping-chat d-flex flex-row justify-content-center align-items-center">
                  <span class="material-icons material-icons-step-1"
                    >question_answer</span
                  >
                </div>

                <div class="vl my-4"></div>
              </div>
              <span class="col">
                <h3 class="h5 my-3">Kostenloses Erstgespräch</h3>
              </span>
            </div>
            <div class="col row">
              <div
                class="col-auto d-flex flex-column justify-content-center align-items-center">
                <div
                  class="icon-wrapping icon-wrapping-wave d-flex flex-row justify-content-center align-items-center">
                  <span class="material-icons material-icons-step-1"
                    >fitness_center</span
                  >
                </div>

                <div class="vl my-4"></div>
              </div>
              <span class="col">
                <h3 class="h5 my-3">Personalisiertes Paket erhalten</h3>
              </span>
            </div>
            <div class="col row">
              <div
                class="col-auto d-flex flex-column justify-content-center align-items-center">
                <div
                  class="icon-wrapping icon-wrapping-smile d-flex flex-row justify-content-center align-items-center">
                  <span class="material-icons material-icons-step-1">mood</span>
                </div>

                <div class="vl my-4"></div>
              </div>
              <span class="col">
                <h3 class="h5 my-3">Ziele erreichen</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section id="pricing">
      <div class="container col col-8-lg">
        <div class="row py-5 text-center">
          <h2>Meine Pakete, auf dich zugeschnitten</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="py-3 pt-5 px-4 mx-2 my-4 my-md-5 package-item">
              <div class="package-header">
                <div class="package-name mt-5">
                  <h2 class="fw-700">TRAININGSPLAN</h2>
                </div>
                <h4 class="mb-5 fw-700 pc-t">210€</h4>
              </div>
              <div class="package-points">
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">Trainingsplan für 8-12 Wochen</p>
                </div>
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">3 Trainingseinheiten mit mir</p>
                </div>
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">Online Trainingsplan und Trainingstagebuch</p>
                </div>
              </div>
              <div class="text-center m-4">
                <a href="#contact"
                  ><button type="button" class="btn btn-outline-dark">
                    Anfragen
                  </button></a
                >
              </div>

              <div class="inner"></div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div
              class="py-3 pt-5 px-4 mx-2 my-4 my-md-5 package-item package-item-recommend">
              <div class="recommended">Empfehlung</div>
              <div class="package-header">
                <div class="package-name mt-5">
                  <h2 class="fw-700">PERSONAL COACHING</h2>
                </div>
                <h4 class="mb-5 fw-700 pc-t">ab 60€/Stunde</h4>
              </div>
              <div class="package-points">
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">1:1 Betreuung</p>
                </div>
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">
                    Bei dir zuhause (Wien und Stadtgrenze südlich von Wien),
                    online oder im FitInn SCS
                  </p>
                </div>
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">Auch 3er, 5er oder 10er Block</p>
                </div>
              </div>
              <div class="text-center m-4">
                <a href="#contact"
                  ><button type="button" class="btn btn-dark">
                    Anfragen
                  </button></a
                >
              </div>

              <div class="inner"></div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="py-3 pt-5 px-4 mx-2 my-4 my-md-5 package-item">
              <div class="package-header">
                <div class="package-name mt-5">
                  <h2 class="fw-700">LANGFRISTIGE BETREUUNG</h2>
                </div>

                <h4 class="mb-5 fw-700 pc-t">ab 80€/Monat</h4>
              </div>

              <div class="package-points">
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">1-2 Trainings pro Monat</p>
                </div>
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">
                    Laufende Betreuung via Telefon und WhatsApp
                  </p>
                </div>
                <div
                  class="d-flex column justify-content-start align-items-start">
                  <span class="material-icons">check_circle</span>
                  <p class="px-1">Wöchentliche online Check-ups</p>
                </div>
              </div>

              <div class="text-center m-4">
                <a href="#contact"
                  ><button type="button" class="btn btn-outline-dark">
                    Anfragen
                  </button></a
                >
              </div>

              <div class="inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="container">
        <ParallaxContainer
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-start">
          <div class="col-12 col-md-7 py-4 p-md-5">
            <div class="mb-4">
              <h2>Hallo!</h2>
              <p class="lead-2 mt-4 mb-5">
                Die Verbindung zwischen einem Trainer und seinen Klienten ist
                von unschätzbarem Wert, wenn es darum geht, eine langfristige
                und erfolgreiche Zusammenarbeit aufzubauen. Natürlich spielen
                Aus- und Weiterbildungen eine bedeutende Rolle, aber ebenso
                wichtig ist das zwischenmenschliche Element. Daher nutze ich
                gerne diese Gelegenheit, um mich kurz vorzustellen.<br /><br />
                Mein Name ist Gloria und ich bin Sportwissenschaftlerin und
                Dipl. Personal Trainerin. Bewegung nimmt seit Kindesalter bei
                mir einen sehr hohen Stellenwert ein. Immer in Bewegung, alles
                ausprobieren und lernen wollen. Von Einradfahren, Turnen,
                Leichtathletik über Volleyball bis hin zu Klettern war alles
                dabei.<br /><br />
                Während meiner Schulzeit, ein Jahr vor meiner Matura, habe ich
                mich entschieden, die Ausbildung zur Dipl. Fitness und
                Personaltrainerin zu starten, welche ich 2017 abgeschlossen
                habe. Nach Abschluss der Schule habe ich den Schritt gewagt und
                bin seither neben meinem Studium als selbständige Personal
                Trainerin tätig. Der Drang nach mehr Wissen in den Bereichen
                Sport und Gesundheit hat dazu geführt das Studium
                Sportwissenschaft zu beginnen. Im Frühjahr 2023 habe ich das
                Bachelorstudium Sportwissenschaft mit der Spezialisierung
                Gesundheitsförderung, Prävention, Rehabilitation und Fitness mit
                Erfolg abgeschlossen. Aktuell befinde ich mich im Masterstudium
                Trainingstherapie. <br /><br />Es ist mir wichtig, stets am
                neuesten Stand der Wissenschaft zu sein, um meinen Kunden hohe
                Qualität bieten zu können. Um das optimale Rundum-Paket bieten
                zu können, bilde ich mich ständig fort, aktuell befinde ich mich
                in der Ausbildung zur Ernährungstrainerin.<br /><br />
                Mein Ziel ist es, meine Kunden nicht nur zu trainieren, sondern
                ihnen ein Verständnis dafür zu vermitteln, wie wichtig Bewegung
                für Körper und Geist ist. Ich stehe an deiner Seite, um deine
                individuellen Ziele zu erreichen und deine Gesundheit und dein
                Wohlbefinden an oberste Stelle zu setzen.
              </p>
            </div>
          </div>
          <ParallaxElement
            :factor="0.2"
            class="steps-for-desktop col-12 col-md-5 p-lg-5">
            <img
              :src="require('@/assets/me.jpg')"
              alt="aboutme"
              class="img-fluid border-radius" />
          </ParallaxElement>
          <div class="steps-for-mobile col-12 col-md-5 p-lg-5">
            <img
              :src="require('@/assets/me.jpg')"
              alt="aboutme"
              class="img-fluid border-radius" />
          </div>
        </ParallaxContainer>
      </div>
    </section>
    <section class="bglightblue2">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-center align-items-center mb-md-5">
          <div class="col-12 col-md-5 px-lg-5">
            <img
              :src="require('@/assets/jump.jpg')"
              alt="headerpic"
              class="img-fluid border-radius" />
          </div>
          <div class="col-12 col-md-7 py-4 px-md-5">
            <div class="mb-4">
              <h2>Ausbildungen</h2>
              <h4 class="mt-5 mb-3">Bildungsweg</h4>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">Matura HLP Mödling</p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">
                  Ausbildung zur Dipl. Fitness- und Personaltrainerin bei der
                  PFA
                </p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">
                  Ausbildung Kinderskilehrerin Ausbildung Ernährungsberater
                </p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">Abschluss Bachelorstudium Sportwissenschaft</p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">
                  Start Masterstudium Sportwissenschaft (Trainingstherapie)
                </p>
              </div>

              <h4 class="mt-4 mb-3">Karriere</h4>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">
                  Seit 2019 Selbständige Fitness- und Personaltrainerin
                </p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">2020 Kinderskilehrerin</p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">2021 Praktikum bei Dr. Kienbacher Training</p>
              </div>
              <div class="col-sm d-flex flex-row align-items-start">
                <span class="material-icons bullet-point-small">school</span>
                <p class="">Seit 2022 Trainerin in der Therme Wien Fitness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bgdark text-white">
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
          <div class="col-12 pt-4">
            <div class="mb-4">
              <h2 class="mb-5">
                Wann ist es Sinnvoll, Personal Training zu nehmen?
              </h2>
              <!-- <p class="lead-2 mt-4 mb-5">
                Personal Training bietet in vielen Situationen seine Vorteile.
                Vielleicht findest du dich in einem oder mehreren der folgenden
                Punkte wieder:
              </p> -->
              <div class="row">
                <div class="col-sm d-flex flex-row align-items-start">
                  <span class="material-icons bullet-point">check_circle</span>
                  <p class="">
                    Bist du neu im Fitnessstudio und hast noch kaum Erfahrung?
                  </p>
                </div>
                <div class="col-sm d-flex flex-row align-items-start">
                  <span class="material-icons bullet-point">check_circle</span>
                  <p class="">
                    Trainierst du schon eine Zeit selbständig, erzielst aber
                    keine Fortschritte?
                  </p>
                </div>
                <div class="col-sm d-flex flex-row align-items-start">
                  <span class="material-icons bullet-point">check_circle</span>
                  <p class="">
                    Findest du keine Motivation, regelmäßig dein Training zu
                    absolvieren?
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm d-flex flex-row align-items-start">
                  <span class="material-icons bullet-point">check_circle</span>
                  <p class="">
                    Weißt du nicht, wie du deine Ziele in die Realität umsetzen
                    kannst?
                  </p>
                </div>
                <div class="col-sm d-flex flex-row align-items-start">
                  <span class="material-icons bullet-point">check_circle</span>
                  <p class="">
                    Gibt es muskuläre Defizite, Verkürzungen oder
                    Einschränkungen, welche du in Angriff nehmen möchtest?
                  </p>
                </div>
                <div class="col-sm d-flex flex-row align-items-start">
                  <span class="material-icons bullet-point">check_circle</span>
                  <p class="">
                    Möchtest du deine Lebensqualität nachhaltig verbessern?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bgdark2 text-white">
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
          <div class="col-12">
            <div>
              <p class="lead">
                Keine Sorge! Genau für diese Fälle und noch viele andere habe
                ich meine Ausbildungen absolviert. Ich möchte dich unterstützen,
                damit wir zusammen deine Ziele erreichen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center m-md-5">
          <div class="col-12 col-md-6 py-4 px-md-5">
            <div class="mb-4">
              <h2>Es ist nie zu spät, mit Sport zu beginnen</h2>
              <p class="lead-2 mt-4 mb-5">
                Zusammen legen wir deine individuellen Ziele fest und ich
                erstelle im Anschluss einen für dich optimalen Trainingsplan.
                Geht nicht - gibts bei mir nicht, wir erarbeiten zusammen eine
                Lösung, welche für dich optimal ist. Jeder Mensch hat
                unterschiedliche Voraussetzungen, Zielsetzungen und
                Möglichkeiten - diese gehören berücksichtigt. Meine
                Spezialgebiete sind Krafttraining, Gesundheitssport,
                Gesundheitsförderung und Prävention vermeidbarer Krankheiten
                durch Bewegung und Tipps zum Thema Ernährung. Warte nicht bis
                morgen - starte jetzt.
              </p>
            </div>

            <a href="#contact"
              ><button type="button" class="btn btn-primary">
                Termin Anfragen
              </button></a
            >
          </div>
          <div class="col-12 col-md-6 px-lg-5">
            <img
              :src="require('@/assets/chest_comp.png')"
              alt="headerpic"
              class="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <section class="bglightblue2">
      <div class="container col col-8-lg mb-md-5">
        <div class="row py-5 text-center">
          <h2>FAQ</h2>
        </div>
        <div class="question py-3" v-for="q in questions" :key="q.question">
          <div
            class="d-flex column justify-content-between align-items-center clickable"
            @click="q.showdesc = !q.showdesc">
            <h4>{{ q.title }}</h4>
            <span
              class="material-icons faq-icon"
              :class="{ rotate: q.showdesc }"
              >add</span
            >
          </div>
          <div class="py-4 lead-4" v-if="q.showdesc">
            <p>
              {{ q.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="" id="contact">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div class="col-12 col-md-5 px-lg-5 imagediv">
            <img
              :src="require('@/assets/chilling.jpg')"
              alt="headerpic"
              class="img-fluid border-radius" />
          </div>
          <div class="col-12 col-md-7 py-4 px-md-5 textdiv">
            <div class="mb-4">
              <h2>Gemeinsam erreichen wir deine Ziele</h2>
              <p class="lead-2 mt-5 mb-5">
                Für Terminanfragen melde dich gerne telfonisch, per Whatsapp,
                Email oder dem Social Media Kanal deiner Wahl.
              </p>

              <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>

              <p class="">
                <i class="fas fa-envelope"></i>
                <a href="mailto:getfit@gloriafitness.at">
                  getfit@gloriafitness.at</a
                >
              </p>
              <p class="">
                <i class="fas fa-phone"></i>
                <a href="tel:+436802188909">+43680 2188909</a>
              </p>

              <h6 class="text-uppercase fw-bold mb-4">Social</h6>

              <span class="d-flex flex-row justify-content-start">
                <a
                  href="https://www.instagram.com/_gloriafitness_/"
                  target="_blank"
                  rel="noopener"
                  ><div
                    class="social-icon bggrey clickable"
                    id="instagram"
                    role="img"
                    aria-label="social-instagram"></div
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ParallaxContainer from "../components/parallax/parallaxContainer.vue";
  import ParallaxElement from "../components/parallax/parallaxItem.vue";
  export default {
    name: "landingPage",
    components: { ParallaxContainer, ParallaxElement },
    data() {
      return {
        questions: [
          {
            title: "Wo kann das Personal Training durchgeführt werden?",
            desc: "Das Training kann im FitInn SCS, online oder bei dir zuhause durchgeführt werden. Beachte jedoch, dass ich Trainings in Person aktuell nur in Wien und an der südlichen Stadtgrenze anbieten kann. Für genauere Informationen kontaktiere mich bitte, damit ich dir ein individuelles Angebot erstellen kann.",
            showdesc: false,
          },
          {
            title: "Wie lange kann ich mit einem Trainingsplan trainieren?",
            desc: "Die Dauer, für die du einen Trainingsplan nutzen kannst, variiert. Idealerweise solltest du ihn alle 8-12 Wochen überarbeiten lassen, um kontinuierliche Fortschritte zu fördern und Plateaus zu vermeiden. Dein Fortschritt, Ziele, Fitnessniveau und Veränderungen in deinem Leben beeinflussen die Plananpassung. Der Körper gewöhnt sich nach einer Zeit an bestimmte Reize, durch neue Übungen kann er kontinuierlich stärker werden und neues lernen. Auch für die Motivation ist es gut, regelmäßig etwas Abwechslung in das Training zu bringen, um Langeweile zu vermeiden sowie engagiert und fokussiert zu bleiben. Außerdem sollten deine Ziele regelmäßig erreicht und anschließend neue gesetzt werden. Bei neuen Zielen bedarf es oft an anderen Trainingsmethoden.",
            showdesc: false,
          },
          {
            title: "Für wen ist das Training geeignet? ",
            desc: "Training ist für Menschen jeden Alters, Geschlechts und Fitnessniveaus wichtig. Es fördert Gesundheit, verbessert Fitness, stärkt Muskeln und Knochen, reduziert das Krankheitsrisiko, steigert Energie und mentales Wohlbefinden, fördert Gewichtsmanagement und beugt Verletzungen vor. Von Anfängern bis hin zu Athleten profitieren alle von maßgeschneiderten Programmen. Ältere Menschen erhalten Mobilität und Gleichgewicht, Kinder entwickeln sich gesund, und berufstätige Erwachsene verhindern sitzbedingte Probleme. Unabhängig von Zielen und Lebensphasen trägt regelmäßiges Training zu einer besseren Lebensqualität bei.",
            showdesc: false,
          },
        ],
      };
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style scoped>
  #logo-head-section {
    width: 150px;
  }

  .package-item {
    border: 2px solid #353535;
    position: relative;
    height: auto;
    border-radius: 5px;
  }

  .package-item-recommend {
    border: 2px solid #353535;
    background-color: white;
  }

  .bgdark {
    background-color: #222222;
  }
  .bgdark2 {
    background-color: #141414;
  }
  .inner {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    position: absolute;

    border-radius: 5px;
    bottom: -25px;
    right: -20px;
    z-index: -1;
  }
  .package-item-recommend .inner {
    background-color: #d3dce4;
  }
  .lightblue {
    background-color: #cae4fa38;
  }

  .pc-t {
    color: #0f70b7;
  }
  .recommended {
    position: absolute;
    background-color: #0f70b7;
    width: 100%;
    padding: 1em;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: white;
    top: 0;
    left: 0;
    border-radius: 2px;
  }

  .faq-icon {
    transition: all 0.2s;
  }

  .rotate {
    transform: rotate(45deg);
  }

  .icon-wrapping {
    padding: 15px;
    border-radius: 5px;
    border: 2px solid;
    margin-right: 24px;
  }

  .icon-wrapping-chat {
  }

  .h6 {
    margin-bottom: 0px;
  }

  .icon-wrapping-achievement {
    background: white;
  }

  .icon-wrapping-wave {
  }

  .icon-wrapping-smile {
  }

  .icon-wrapping .material-icons {
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 27px;
  }
  .material-icons-step-1 {
    background: -moz-linear-gradient(
      top,
      #0f70b7 0%,
      #0f70b7 50%,
      #0b4772 100%
    );
    background: -webkit-linear-gradient(
      top,
      #0f70b7 0%,
      #0f70b7 50%,
      #0b4772 100%
    );
    background: linear-gradient(
      to bottom,
      #0f70b7 0%,
      #0f70b7 50%,
      #0b4772 100%
    );
  }

  .achievement {
    font-size: 20px;
  }

  #about {
  }

  #about-img {
    position: sticky;
    top: 5em;
  }

  .steps-for-mobile {
    display: none !important;
  }

  .steps-for-desktop {
  }

  .vl {
    border-left: 1px solid lightgray;
    min-height: 100px;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    #about-img {
      position: relative;
      top: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .steps-for-mobile {
      display: block !important;
    }

    #about-img img {
      max-width: 400px;
    }

    .steps-for-desktop {
      display: none;
    }

    .icon-wrapping:not(.icon-wrapping-achievement) {
      margin: 0px;
      margin-top: 17px;
    }
  }

  .bullet-point {
    margin-right: 15px;
    margin-top: 3px;
    font-size: 25px;
    color: #0f70b7;
  }
  .bullet-point-small {
    margin-right: 15px;
    font-size: 20px;
    color: #0f70b7;
  }

  .border-wrapper {
    box-shadow: 25px 25px 0px 0px #f8f8f8;
    border: 2px solid #0f70b7;
    position: relative; /* Set the positioning to relative */
    border-radius: 5px;
  }
  .image-wrapper {
    box-shadow: 25px 25px 0px 0px #f8f8f8;
    border: 2px solid #0f70b7;
    position: relative; /* Set the positioning to relative */
    border-radius: 5px;
  }
  .image-wrapper::before {
    border: 2px solid #0f70b7;
    content: "";
    position: absolute;
    top: 23px; /* 40px from the top */
    left: 23px; /* 40px from the left */
    right: 0;
    border-radius: 5px;
    bottom: 0;
  }

  #quote {
    border: 2px solid #353535;
    box-shadow: 25px 25px 0px 0px #f6fbff;
    position: relative; /* Set the positioning to relative */
    border-radius: 5px;
    padding: 30px 40px;
  }

  #quote::before {
    content: "";
    background-color: #f6fbff; /* Your desired background color */
    position: absolute;
    top: 23px; /* 40px from the top */
    left: 23px; /* 40px from the left */
    right: 0;
    border-radius: 5px;
    bottom: 0;
    z-index: -1; /* Ensure the background is behind the content */
  }

  .quote-img {
    padding: 0px 40px;
    border-radius: 50%;
  }

  .border-radius {
    border-radius: 5px;
  }

  .package-header {
    height: 170px;
  }

  .package-name {
    height: 95px;
  }

  .package-points {
    height: 180px;
  }

  .bglightblue {
    background-color: #f6fbff;
  }

  .bglightblue2 {
    background-color: #edf0f55b;
  }
</style>
