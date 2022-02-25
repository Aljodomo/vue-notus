<template>
  <div>
    <navbar />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{
            'background-image': `url(${girls})`,
            'background-position': '50% 65%'
          }"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                    Nichts für dich!
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                    Auf dieser Webseite gibt es nichts sinnvolles zu sehen aber einen Blick ist sie trotzdem Wert.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                    <h6 class="text-xl font-semibold">Vodka</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                      Ein erfrischendes Getränk für jeden Anlass. Am liebsten Sky, den blauen aus der Flasche.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                    <h6 class="text-xl font-semibold">Bier</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                      Wenn dann aber Störtebeker Atlantik-Ale. Berliner Kindl geht zur not auch noch.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                    <h6 class="text-xl font-semibold">Landjäger</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                      Etwas salziges darf bei keinem Club Besuch fehlen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                  Diese Seite befindet sich im Aufbau
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
              >
                  Das was du hier siehst ist erst der Anfang.
                  In Zukunft wird es hier alles mögliche geben ob zum anschauen oder ausprobieren.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
              >
                  Bis dahin bleiben sie gespannt und schauen sie bald nochmal vorbei.
              </p>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                    alt="..."
                    :src="imgOfMe"
                    class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                      Aljoscha Domonell
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                      Ich betreibe diese Webseite als Spielplatz für verschiedenste Projekte
                      und als Modell für alle die es interessiert.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <footer-component class="bg-blueGray-200"/>
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/FooterSmall.vue";
import imgOfMe from "@/assets/img/ezgif-2-744c1acd63.webp";
import girls from "@/assets/img/ezgif-2-4fc36ed3ab.webp";

</script>
