<template>
  <div>
    <div class="description">
      <h2>Communication</h2>
      <p>La communication est mon domaine de prédilection !
        <br> <br>
        Dans cette section vous trouverez plusieurs projets de
        communication, qu’ils soient scolaires ou non.
        Sur chaques pages, vous pourrez en savoir plus
        sur le contexte de ce dernier, ainsi que ma
        réflexion et ma façon de résoudre les problématiques.
        <br> <br>
        N’hésitez donc
        pas à regarder les différents projets
        dans leur intégralité et à me contacter
        pour plus d’informations. Les dossiers de
        communication réalisé sont aussi disponibles
        sur certains projets !</p>

    </div>
    <div class="icone_svg">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="23.5" stroke="#1181B2" stroke-width="3"/>
        <path d="M23.9393 41.0607C24.5251 41.6464 25.4749 41.6464 26.0607 41.0607L35.6066 31.5147C36.1924 30.9289 36.1924 29.9792 35.6066 29.3934C35.0208 28.8076 34.0711 28.8076 33.4853 29.3934L25 37.8787L16.5147 29.3934C15.9289 28.8076 14.9792 28.8076 14.3934 29.3934C13.8076 29.9792 13.8076 30.9289 14.3934 31.5147L23.9393 41.0607ZM23.5 10L23.5 40L26.5 40L26.5 10L23.5 10Z" fill="#1181B2"/>
      </svg>
    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/preview_comm.jpg" alt="">
      </div>

      <div class="text">
        <h2>Communication du département </h2>
        <p>
          Ce projet est un projet de groupe réalisé dans
          le cadre de mes étude au DUT MMI de Montbéliard.
          Il a pour but de définir la ligne directrice
          de la communication du département MMI sur les réseaux sociaux.
        </p>
        <router-link class="bouton" to="/Dept">En savoir plus</router-link>
      </div>

    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/preview_baguette.png" alt="" >
      </div>

      <div class="text">
        <h2>Baguettes en attente</h2>
        <p>
          Baguette en attente est projet de solidarité sur Belfort. L’objectif était de
          créer un site internet pour le projet et de créer
          une communication online et offline pour la mettre en avant.
        </p>
        <router-link class="bouton" to="/Baguette">En savoir plus</router-link>
      </div>

    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/twitch_preview.png" alt="">
      </div>

      <div class="text">
        <h2>Twitch </h2>
        <p>
          Ce projet a été réalisé à la demande du streamer “Ton_Marraine”.
          Le but était de rassembler sa communauté de Twitch pour la faire
          grandir et augmenter les relations entre le streamer et la communauté,
          mais aussi au sein de la communauté.

        </p>
      <router-link class="bouton" to="/Twitch_com">En savoir plus</router-link>
      </div>

    </div>



  </div>
</template>

<script>
export default {
  name: 'Communication',
  data () {
    {
    }
  }
}
</script>

<style scoped>
.description {
  width: 60%;
  display: block;
  margin: auto;
  padding-top: 5em;
}

.icone_svg {
  margin-left: 48%;
  margin-top: 5em;
}
.image {
  padding-left: 0;
  margin-right: 10em;
}

@media (max-width: 600px) {
  .image {
    width: 100%;
  }



  .contenu {
    width: 60%;
    display: block;
    margin: auto;
    padding-top: 5em;
  }
}
</style>
