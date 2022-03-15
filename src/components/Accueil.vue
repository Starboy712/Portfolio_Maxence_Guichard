<template>
  <div>

    <div class="contenu premier">
      <div class="text">
        <h2>Bienvenue sur mon Portfolio !</h2>
        <p>
          Ici vous trouverez mes travaux de
          <router-link to="/Communication">communication</router-link>
          et de
          <router-link to="/Design">design</router-link>
          ainsi qu’un aperçu de
          <router-link to="/About">mon parcours</router-link>.
        </p>
        <p>
          N'hésitez pas à
          <router-link to="/Contact">me contacter</router-link>
          pour toute demande de collaboration dans le domaine de la communication digital ou du design web
        </p>
      </div>

      <div class="image_me">
        <img class="me" src="@/assets/me.jpg" alt="">
      </div>
    </div>

    <div class="icone_svg">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="23.5" stroke="#1181B2" stroke-width="3"/>
        <path
          d="M23.9393 41.0607C24.5251 41.6464 25.4749 41.6464 26.0607 41.0607L35.6066 31.5147C36.1924 30.9289 36.1924 29.9792 35.6066 29.3934C35.0208 28.8076 34.0711 28.8076 33.4853 29.3934L25 37.8787L16.5147 29.3934C15.9289 28.8076 14.9792 28.8076 14.3934 29.3934C13.8076 29.9792 13.8076 30.9289 14.3934 31.5147L23.9393 41.0607ZM23.5 10L23.5 40L26.5 40L26.5 10L23.5 10Z"
          fill="#1181B2"/>
      </svg>
    </div>

    <div class="contenu">

      <div class="image">
        <img src="@/assets/preview_baguette.png" alt="">
      </div>

      <div class="text">
        <h2>Communication</h2>
        <p>
          Durant mon parcours scolaire, j’ai pu réaliser de nombreux projets en communication digitale. Ces projets sont
          tous différents, je vous invite donc à tous les consulter !
        </p>

        <router-link class="bouton" to="/Communication">Voir tous les projets</router-link>
      </div>


    </div>

    <div class="contenu">
      <div class="image">
        <img src="@/assets/sweat_mmi_white.png" alt="">
      </div>

      <div class="text">
        <h2>Design</h2>
        <p>
          Voici mes projets de design !
          Ils ont été réalisé autant en cours qu’en dehors et sont tous différents.

          Regardez les tous !
        </p>
        <router-link class="bouton" to="/Design">En savoir plus</router-link>
      </div>


    </div>

    <div class="call_to_action">
      <div class="text">
        <h2>Me contacter</h2>
        <p>
          Si mon profil vous plait,
          vous pouvez mon contacter et m’envoyer
          vos propositions pour tous travaux de
          communication ou de design web !
        </p>

      </div>

      <div class="bouton_cta">
        <router-link class="bouton" to="/Contact">Me contacter</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data() {
    {
    }
  }
}
</script>

<style scoped>
.text {
  width: 50%;

}

.image {
  width: 50%;
 padding-right: 10em;


}

.image_me > .me {
  width: 100%;
  height: auto;
  clip-path: circle(40% at 50% 50%);
}

.image_me {
  width: 50%;
  padding-left: 10em;
}

.premier {
  padding-top: 2em;
}

.contenu, .call_to_action {

  width: 60%;
  padding-top: 8em;
  margin: auto;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
}

.bouton_cta {
  width: 50%;
  padding-left: 15em;
  padding-top: 10em;
}

.bouton_cta > .bouton {
  padding: 1em;
  font-size: 1.300em;
  font-weight: bold;
}

@media (max-width: 600px) {
  .me {
    display: none;
  }

  .contenu, .call_to_action {
    display: block;
    width: 80%;
    max-width: 500px;

  }
  .text, .contenu {
    width: 100%;
  }
}




</style>
