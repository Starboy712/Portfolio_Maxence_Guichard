<template>
  <div>
    <div class="description">
      <h1>Baguettes en attente</h1>
      <p>
        Ce projet est un projet de groupe réalisé dans le cadre de
        mes étude au DUT MMI de Montbéliard. Il a pour but d’aider
        une initiative caritative de Belfort en réalisant un site web
        et une campagne de communication. Sur ce projet, j’ai été responsable
        de la communication et chef de projet.
      </p>
      <a href="https://baguetteenattente.milanmorisot.fr/#/">Pour visiter le site</a>

    </div>


    <div class="image_article">
      <img src="@/assets/Baguette_landing.png" alt="" height="auto" width="70%">
    </div>

    <div class="description" id="top">
      <h2>Les demandes spécifiques</h2>
      <ul>
        <li>Réaliser un site web qui informe sur l’initiative</li>
        <li>Inclure une carte des boulangeries partenaires</li>
        <li>Créer un plan de communication complet</li>
      </ul>
    </div>

    <div class="description">
      <h2>Réflexion</h2>
      <h3>Faire un état des lieux de la communication</h3>
      <p>
        Avant de savoir quoi faire, il fallait savoir ce qui était déjà
        fait pour communiquer sur l’initiative. J’ai donc rassemblé tout
        l’existant disponible.
        Il était constitué uniquement d’article dans la presse en ligne.
      </p>


      <h3>La concurrence et le marché</h3>
      <p>
        J’ai ensuite fait une étude de la concurrence pour dégager des problématiques chez eux. <br>
        Cela nous a permis de trouver un angle d’attaque pour notre communication. J’ai aussi dégagé des problématiques
        à éviter pour notre projet. J’ai en parallèle réalisé une étude du marché pour avoir des chiffres clés et une
        vue d’ensemble du terrain sur lequel nous devions nous faire une place.
        Ces recherches m’ont permis de déduire que la concurrence fait payer plus cher les dons de nourriture par
        rapport à la nature des produits. Les autres initiatives n’avaient aussi pas du tout de communication. Ces deux
        éléments m’ont permis de trouver deux axes sur les quels communiquer, nos prix bas et une communication en ligne
        et hors média complète.
      </p>

      <h3>Dégager des objectifs et de cibles</h3>
      <p>
        J’ai ensuite dégagé des objectifs clair et atteignables ainsi que des cibles en fonctions des objectifs. Les
        cibles étaient les boulangers, les donateurs et les bénéficiaires. Les objectifs étaient de pousser les
        boulanger à rejoindre notre mouvement, de faire sauter le pas aux donateurs et de faire venir les bénéficiaires
        ainsi que de faire rentrer dans les mœurs la solidarité.
      </p>


      <h3>Trouver des moyens de communication</h3>
      <p>
        J’ai ensuite établi les moyens de communication en ligne et hors ligne en fonction de nos objectifs et notre
        cibles. <br>
        Les réseaux sociaux et le site sont une pierre angulaire de notre stratégie de communication. Ils permettent de
        communiquer efficacement à toutes les cibles car les réseaux sociaux choisis, Instagram et Facebook, couvrent
        l’intégralité des cibles.
        De plus, le site permet d’apporter des informations complémentaire comme les boulangeries participantes ou
        comment faire un don.
      </p>

      <div class="image_article">
        <img src="@/assets/Baguette_how_to.png" alt="" height="auto" width="100%">
      </div>

      <div class="image_article">
        <img src="@/assets/Baguette_map.png" alt="" height="auto" width="100%">
      </div>
      <p>
        Les médias en ligne font aussi partie de cette communication et l’objectif est d’apparaitre dans des articles de
        médias régionaux.
        En ce qui concerne la communication hors média, les vitrines des boulangeries partenaires serviront de
        panneaux publicitaires avec des affiches qui indiquent qu’ils participent à l’initiative.
      </p>

      <h3>Trouver des moyens de communication</h3>
      <p>
        J’ai ensuite établi les moyens de communication en ligne et hors ligne en fonction de nos objectifs et notre
        cibles.
        Les réseaux sociaux et le site sont une pierre angulaire de notre stratégie de communication. Ils permettent de
        communiquer efficacement à toutes les cibles car les réseaux sociaux choisis, Instagram et Facebook, couvrent
        l’intégralité des cibles. De plus, le site permet d’apporter des informations complémentaire. Les médias en
        ligne font aussi partie de cette communication et l’objectif est d’apparaitre dans des articles de médias
        régionaux.
        En ce qui concerne la communication hors média, les vitrines des boulangeries partenaires serviront de panneaux
        publicitaires avec des affiches qui indiquent qu’ils participent à l’initiative.

      </p>

      <h3>Controller la réussite du projet </h3>
      <p>
        Pour contrôler la réussite du projet, j’utilise des KPI. Ces KPI mesurent le nombre de vente de baguettes et le
        nombre de baguettes récupérées sur une durée déterminée. Ces données sont ensuite agrégée pour mettre en
        évidence des périodes et des boulangeries qui font les meilleurs chiffres. Avec ces éléments, il est possible
        d’affiner la stratégie et de l’adapter en fonction des événements (fêtes de fin d’années,..) pour avoir des
        résultats constants. Il est aussi possible de faire des budgets prévisionnel pour avoir un control total du
        projet.
      </p>

    </div>

    <div class="conclusion">
      <h2>Conclusion</h2>
      <p>
        C’est un projet qui a été très instructif pour moi au niveau de la communication et de la gestion de projet.
        J’ai pu en apprendre beaucoup par la mise en situation réel et j’ai affiné mes compétences de communicant tout
        en apprenant à travailler en équipe. </p>

    </div>
  </div>

</template>

<script>
export default {
  name: "Baguette"
}
</script>

<style scoped>

#top {
  padding-top: 2em;
}

.description, .conclusion {
  width: 70%;
  display: block;
  margin: auto;
  padding-top: 5em;
}

.conclusion {
  padding-top: 2em;
}

.conclusion h2 {
  color: #F9F871;
}

.image_article {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
}

.description > ul > li {
  color: white;
  font-family: "Noto Sans";
}

li {
  color: white;
}
</style>
