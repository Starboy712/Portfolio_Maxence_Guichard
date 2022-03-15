<template>
  <div>

    <div class="description">
      <h1>Logo pour le Séminaire Intelligence Artificielle pour la Formation </h1>
      <p>
        Le Groupement Interdisciplinaire Scientifique Innovation Interdisciplinarité et Formation a organisé un concours
        de logo pour le Séminaire Intelligence Artificielle pour la Formation. Voici le fruit de mon travail
      </p>
    </div>

    <div class="description">

      <h2>Les demandes spécifiques</h2>

      <h3>Les demandes spécifiques</h3>
      <ul>
        <li>Créer un logo et une identité visuelle qui correspondent au séminaire</li>
        <li>Faire la différence entre le coté IA et le coté Formation</li>
      </ul>

      <h3>Logiciels utilisés</h3>
      <ul>
        <li>Adobe Illustrator</li>
      </ul>

      <h2>Réflexion</h2>
      <h3>Couleurs et visuel</h3>
      <p>
        Pour ce logo, j’ai choisi d’utiliser le bleu et l’aigue marine., des couleurs qui inspirent la sécurité et la
        confiance. Cela m’a permis de montrer les deux aspects. Pour faire le lien entre les deux, j’ai utilisé ces
        couleurs dans un dégradé qui m’a servi de base.
      </p>

      <div class="image_article">
        <img src="@/assets/SIAFO_palette.png" alt="" height="auto" width="80%">
      </div>

      <p>
        Pour ce qui est de la police, j’ai choisi JetBrain Mono pour son coté qui rappelle l’informatique et le fait
        qu’elle soit entièrement libre pour les utilisations commerciales. La police Noto SANS est présente pour le nom
        du séminaire sur le logo.
      </p>

      <div class="image_article">
        <img src="@/assets/SIAFO_logo_text.png" alt="" height="auto" width="80%">
      </div>


      <p>
        Pour le logo, j’ai montré les deux aspects en les représentant comme une moitié de visage. Le coté de gauche
        montre une représentation d’un réseau de neurones, qui est une des méthodes d’apprentissage pour les
        intelligences artificielles. L’autre face montre un cerveau humain. Cela rappel le coté de l’apprentissage au
        travers de la formation.
      </p>

      <div class="image_article">
        <img src="@/assets/SIAFO_logo_head.png" alt="" height="auto" width="80%">
      </div>


      <p>
        Le logo est décliné dans plusieurs versions pour correspondre à des utilisations différentes.
      </p>

      <div class="image_article">
        <img src="@/assets/SIAFO_logo_comp.png" alt="" height="auto" width="80%">
      </div>
      <div class="image_article">
        <img src="@/assets/SIAFO_logo.png" alt="" height="auto" width="80%">
      </div>

    </div>

    <div class="conclusion">
      <h3>Conclusion</h3>
      <p>
        C’est un projet qui à été très intéressant pour moi car le projet nous donnait beaucoup de liberté créative.
        J’ai donc pu exprimer ma vision du sujet au travers de mes choix graphiques tout en mettant en application mes
        compétences. C’est aussi un de mes premiers projets en dehors de mes projets scolaires, il a donc une place
        importante pour moi.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "SIAFO"
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
