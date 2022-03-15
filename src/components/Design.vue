<template>
  <div>
    <div class="description">
      <h2>Design</h2>
      <p>Le design est un de mes domaines préféré !
        <br> <br>
        Dans cette section vous trouverez plusieurs projets de
        desing, qu’ils soient scolaires ou non.
        Sur chaque pages, vous pourrez en savoir plus
        sur le contexte de ce dernier, ainsi que ma
        réflexion et ma façon de résoudre les problématiques.

        <br> <br>
        Dans cette section vous trouverez plusieurs projets de
        communication, qu’ils soient scolaires ou non.
        Sur chaque pages, vous pourrez en savoir plus
        sur le contexte de ce dernier, ainsi que ma
        réflexion et ma façon de résoudre les problématiques.
      </p>

    </div>
    <div class="icone_svg">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="23.5" stroke="#1181B2" stroke-width="3"/>
        <path d="M23.9393 41.0607C24.5251 41.6464 25.4749 41.6464 26.0607 41.0607L35.6066 31.5147C36.1924 30.9289 36.1924 29.9792 35.6066 29.3934C35.0208 28.8076 34.0711 28.8076 33.4853 29.3934L25 37.8787L16.5147 29.3934C15.9289 28.8076 14.9792 28.8076 14.3934 29.3934C13.8076 29.9792 13.8076 30.9289 14.3934 31.5147L23.9393 41.0607ZM23.5 10L23.5 40L26.5 40L26.5 10L23.5 10Z" fill="#1181B2"/>
      </svg>
    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/Twitch_preview.png" alt="">
      </div>

      <div class="text">
        <h2>Twitch </h2>
        <p>
          Ce projet a été réalisé à la demande du streamer “Ton_Marraine”.
          Le but était de créer un overlay et des cartes pour sa chaine
          Twitch afin de créer un affichage agréable pour les viewver.
        </p>
        <router-link class="bouton" to="/Twitch_design">En savoir plus</router-link>
      </div>

    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/preview_siaf.png" alt="">
      </div>

      <div class="text">
        <h2>Logo pour le SIAF0 </h2>
        <p>
          Ce projet à été réalisé
          pour le Groupement Interdisciplinaire
          Scientifique Innovation Interdisciplinarité
          et Formation.
        </p>
        <router-link class="bouton" to="/SIAFO">En savoir plus</router-link>
      </div>

    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/sweat_mmi_white.png" alt="">
      </div>

      <div class="text">
        <h2>Concours annuel des pulls MMI</h2>
        <p>
          L’objectif de ce projet est de réaliser un design pour les concours des pulls de l'année au département MMI de Montbéliard.
        </p>
        <router-link class="bouton" to="/Pull">En savoir plus</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Design',
  data () {
    {
    }
  }
}
</script>

<style scoped>
.contenu, .description {

  width: 60%;
  padding-top: 5em;
  margin: auto;
  padding-left: 2em;
  padding-right: 2em;
}

.contenu {
  display: flex;
}

.call_to_action > .text > h2 {
  color: #F9F871;
}

.text {
  width: 50%;

}

.text > p > a {
  color: #F9F871;
  font-family: "Noto Sans";
}

.text > p {
  margin-bottom: 2em;
}
.text > .bouton {
  background: #1181B2;
  padding: 1em;
}

.image {
  width: 50%;
  padding-left: 10em;


}
.icone_svg {
  margin-left: 48%;
  margin-top: 5em;
}
.image {
  padding-left: 0;
  margin-right: 10em;
}

.image > img {
  width: 100%;
  height: auto;
  margin-top: 2em;
  border-radius: 2em;
  filter: drop-shadow(0.5em 0.5em 1em black);
}

@media (max-width: 600px) {
  .image {
    width: 100%;
  }



  .contenu {
    width: 80%;
    display: block;
    margin: auto;
    padding-top: 5em;
  }

  .contenu > .text {
    width: 100%;
  }
}


</style>
