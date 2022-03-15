<template>
  <div>

    <div class="description">
      <h1>Twitch - Design</h1>
      <p>
        “Ton_Marraine” est un streamer ayant un contenu orienté principalement gaming. Il a fait appel à mes services
        pour réaliser un overlay pour ses streams sur la plateforme Twitch. Vous allez donc voir ici mon processus de
        création sur cette page.
       .
      </p>
      <router-link to="/Twitch_com"> Ce projet contient aussi une partie communication</router-link>
    </div>

    <div class="description">

      <h2>Les demandes spécifiques</h2>

      <h3>Les demandes spécifiques</h3>
      <ul>
        <li>Utiliser le violet en couleur dominante</li>
        <li>Adopter un style classique d’overlay Twitch</li>
        <li>Afficher ses subs, l’heure, son Instagram et sa nationalité</li>
        <li>Avoir un overlay discret</li>
        <li>Avoir des cartes qui reprennent le style de l’overlay</li>
      </ul>


      <h3>Logiciels utilisés</h3>
      <ul>
        <li>Adobe Illustrator</li>
      </ul>

      <h2>Réflexion</h2>
      <h3>Couleurs et visuel</h3>
      <p>
        Pour respecter la demande du client sans pour autant utiliser le code couleur exact de Twitch, j’ai décidé de
        partir sur un dégradé mêlant le violet choisis avec un orange. J’ai ensuite complété avec du blanc pour les
        textes et du gris. Pour ce qui est du texte, j’ai choisi la typographie ZING RUST DEMO pour donner un aspect
        fort aux différents textes présents.
      </p>

      <div class="image_article">
        <img src="@/assets/Twitch_palette.png" alt="" height="auto" width="80%">
      </div>

      <p>
        J’ai utilisé des formes simples pour créer différentes sections dans l’overlay. Cela permet d’avoir une
        compartimentation des informations et une meilleure visibilité pour les viewers, tout en gardant un style
        similaire à ce qui se fait habituellement sur la plateforme.
      </p>


      <p>
        Les cartes servent à marquer différentes sections dans descriptions de chaine sur Twitch. On peut même les
        rendre cliquables pour rediriger l’utilisateur sur un serveur discord par exemples. Pour les cartes, j’ai gardé
        la typographie et le dégradé pour faire un rappel de l’overlay. J’ai créé un espace pour le logo correspondant à
        la partie de la description en utilisant une forme qui rappel un éclair. Ce design permet de garder l’identité
        visuelle que donne l’overlay en dehors des streams, tout étant lisible et utile à l’utilisateur qui à besoin de
        l’information rapidement.
      </p>

      <div class="image_article">
        <img src="@/assets/Twitch_cartes.png" alt="" height="auto" width="100%">
      </div>


    </div>

    <div class="conclusion">
      <h3>Conclusion</h3>
      <p>
        Le résultat final donne un overlay discret et qui correspond aux attentes du client. Les cartes permettent une
        bonne visibilité des catégories et le tout forme une identité visuelle qui lui est propre et qui a permis à sa
        chaine de se professionnaliser un peu plus.
      </p>

      <div class="image_article">
        <img src="@/assets/Twitch_preview.png" alt="" height="auto" width="100%">
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Twitch_design"
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

