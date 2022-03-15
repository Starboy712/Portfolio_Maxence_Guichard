<template>
  <div>

    <div class="description">
      <h1>Concours annuel des pulls MMI</h1>
      <p>
        Tous les ans au département MMI de Montbéliard (Métiers du Multimédia et de l’Internet), nous
        réalisons un concours pour sélectionner le pull de l’année. Tous les élèves peuvent y participer et les pulls
        sont mis en concurrence au travers d’un vote pour décider du pull de l’année. J’ai donc pris part à cette
        compétition cette année.
      </p>
    </div>

    <div class="description">

      <h2>Les demandes spécifiques</h2>

      <h3>Les demandes spécifiques</h3>
      <ul>
        <li>Réaliser un design en tenant compte des restriction du fournisseur</li>
        <li>Créer un mockup pour les pulls</li>
      </ul>


      <h3>Logiciels utilisés</h3>
      <ul>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
      </ul>

      <h2>Réflexion</h2>

      <h3>Couleurs et visuel</h3>
      <p>
        Pour mon design, j’ai choisi des couleurs typées 70 pour avoir un effet retro.
      </p>

      <div class="image_article">
        <img src="@/assets/Pull_palette.png" alt="" height="auto" width="80%">
      </div>

      <p>
        J’ai ensuite utilisé cet idée de départ pour créer plusieurs logos avec des concepts différents. Ci-dessous vous
        pourrez le design qui est ressortit. Il montre une version de les mots «MMI Montbéliard». Pour styliser ce
        logo j’ai choisis une police qui rappelle les années 70 et le style « Peace & Love », que j’ai mise sous forme
        d’un dégradé de formes colorées. J’ai aussi adapté le logo du MMI de Montbéliard avec un style similaire aux deux logos.
      </p>

      <div class="image_article">
        <img src="@/assets/Pull_logo_back.png" alt="" height="auto" width="40%">
      </div>

      <div class="image_article">
        <img src="@/assets/Pull_mmi_logo.png" alt="" height="auto" width="20%">
      </div>


      <h3>Choix du positionnement</h3>
      <p>
        Une fois fait, il ne me restait plus que l’emplacement sur les pulls avant la phase finale de création des
        mockups. J’ai fait le choix de placer le logo principal au centre de l’arrière du pull. Pour logo MMI
        Montbéliard stylisé, je l’ai placé sur le cœur.
      </p>

      <h3>Rendu Final et mockup</h3>
      <p>
        J’ai pour finir réalisé un mockup simple qui montre l’avant et l’arrière du pull pour que les élèves puissent
        voir clairement le design choisis, décliné en blanc et en noir.
      </p>

      <div class="image_article">
        <img src="@/assets/Pull_mockup.png" alt="" height="auto" width="80%">
      </div>


    </div>

    <div class="conclusion">
      <h3>Conclusion</h3>
      <p>
        Même si mon design n’a pas gardé, je reste fort de cette expérience qui à changé ma perspective en terme de
        design. En effet, designer un logo pour des vêtements est différent que d’en créer un pour un site web. De plus,
        ce projet m’a permis de travailler ma façon d’utiliser les mockups.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pull"
}
</script>

<style scoped>
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
  padding: 1em;
}

.description > ul > li {
  color: white;
  font-family: "Noto Sans";
}

li {
  color: white;
}
</style>

