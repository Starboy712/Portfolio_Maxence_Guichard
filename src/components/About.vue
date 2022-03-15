<template>
  <div>
    <div class="contenu">
      <div class="image">
        <img class="me" src="@/assets/me.jpg" alt="">
      </div>

      <div class="text">
        <h2>A propos de moi.</h2>
        <p>
          Moi c’est Maxence Guichard !

          J’ai 19 ans et je suis actuellement en
          deuxième année de DUT MMI à Montbéliard,
          où je suis en spécialité communication.
        </p>
      </div>

    </div>

    <div class="description">
      <h2>Mon parcour scolaire</h2>
      <p>
        Avant d’arriver en DUT Métier du multimédia,
        j’ai décroché un Bac STI2D. Durant mon parcours scolaire
        j’ai eu l’immense honneur d’être un conseiller départemental
        jeune à l’île de la Réunion.
        En DUT MMI, j’ai acquis des compétences en communication,
        design web, intégration web et en gestion de projet.
        Ce sont ces compétences que je mets à l’emploi dans tous
        mes travaux, comme ceux que vous allez voir dans ce portfolio.
      </p>

    </div>

    <div class="description">
      <h2>Mes activités</h2>
      <p>
        Je suis actuellement modérateur et community manager pour une chaine
        Twitch et un serveur Discord. En dehors de cette
        activité, je m’entraine au design avec des projets
        personnel qui impliquent du resdesign de sites et
        d’interfaces graphiques. La veille constante sur le
        milieu du multimédia et de l’internet vient compléter mes activités.
      </p>

    </div>

    <div class="description">
      <h2>Mes compétences</h2>
      <p>
        Ici vous trouverez la liste de mes compétences. Je les ai acquises tout au long de mon cursus scolaire, ainsi
        qu’au cours de travaux personnels.
      </p>
      <h3>Communication</h3>
      <ul>
        <li>Création de stratégie de communication</li>
        <li>Community management</li>
        <li>Optimisation de contenu pour le référencement (Réseaux sociaux et Web)</li>
        <li>Rédaction web</li>
        <li>Mise en place d'une veille efficace</li>
      </ul>
      <h3>Design</h3>
      <ul>
        <li>Création d'identité visuelle</li>
        <li>Création de maquette interactive</li>
        <li>Création de design et de logo</li>
      </ul>
      <h3>Development Web</h3>
      <ul>
        <li>Intégration de maquette en HTML/CSS/JS</li>
        <li>Intégration en VUEJS</li>
        <li>Utilisation de CMS / CMS Headless</li>
      </ul>
    </div>

    <div class="description">
      <h2>Mes logiciels</h2>
      <p>
        Ici vous trouverez la liste de mes logiciels de prédilection. Il faut quand même noter que je suis capable
        d'utiliser n'importe quelle alternative à ces logiciels.
      </p>
      <h3>Design</h3>
      <ul>
        <li>Figma</li>
        <li>Suite Adobe</li>
      </ul>
      <h3>Development Web</h3>
      <ul>
        <li>PHP Storm</li>
        <li>Virtual Studio Code</li>
      </ul>
      <h3>Autre</h3>
      <ul>
        <li>Suite Office</li>
        <li>Davinci Resolve</li>
      </ul>
    </div>


    <div class="description">
      <h2>Mes diplomes et mes certifications</h2>
      <ul>
        <li>Brevet des collèges (2017)</li>
        <li>Baccalauréat STI2D (2020)</li>
        <li>Toeic - Niveau C1(2022)</li>
      </ul>
    </div>

    <div class="description" v-for="Reseau in json.Reseau" :key="Reseau.nom">
        <h3>{{ Reseau.nom }}</h3>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      json: []
    }
  },
  created() {
    //liste des leaks (titre + Description)
    axios.get("Reseau.json")
      .then(function (response) {
        console.log("Response", response.data);
        this.json = response.data
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  },

}
</script>

<style scoped>
.description {
  width: 60%;
  display: block;
  margin: auto;
  padding-top: 5em;
}

@media (max-width: 600px) {
  .me {
    width: 100%;
  }



  .contenu {
    width: 60%;
    display: block;
    margin: auto;
    padding-top: 5em;
  }
}


.me {
  margin-top: 0;
}

.image {
  padding-left: 0;
}

li {
  color: white;
}
</style>
