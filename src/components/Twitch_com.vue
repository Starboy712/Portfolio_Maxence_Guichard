<template>
  <div>
    <div class="description">
      <h1>Twitch - communication</h1>
      <p>
        “Ton_Marraine” est un streamer ayant un contenu orienté principalement gaming. Il a fait appel à mes services
        réaliser sa communication sur les réseaux sociaux. Son but était de rassembler sa communauté de Twitch pour la
        faire grandir et augmenter les relations entre le streamer et la communauté, mais aussi au sein de la
        communauté. Il avait aussi besoin d’un canal où tous ses followers pourraient suivre son activité Twitch et
        partager ses clips.
        Ce projet contient aussi une partie design où j’ai réalisé un overlay pour Ton_Marraine”.
      </p>
      <router-link to="/Twitch_design">Ce projet contient aussi une partie design</router-link>
    </div>

    <div class="description">
      <h2>Les demandes spécifiques</h2>
      <ul>
        <li>Rassembler la communauté</li>
        <li>La faire grandir la communauté</li>
        <li>Donner un espace d’échange et de partage à la communauté</li>
        <li>Pouvoir donner des informations sur les streams et la chaîne au plus grand monde</li>
        <li>Permettre une modération par plusieurs personnes</li>
        <li>Permettre une évolution en fonction de la chaine Twitch</li>
      </ul>
    </div>

    <div class="description">
      <h2>Réflexion</h2>
      <h3>Trouver un réseau social</h3>
      <p>
        Plusieurs réseaux sociaux s’offraient à nous au début. Nous aurions pu utiliser
        Instagram avec son système de story ou encore Messenger avec sa fonction de
        groupe. Mais nous avons opté pour Discord.
      </p>
      <h3>Pourquoi Discord</h3>
      <p>
        Discord nous permet de répondre à plusieurs de nos problématiques.
        Il contient un système de serveur qui sont parfait pour rassembler la communauté.
        Il intègre des liens personnalisables pour permettre à n’importe qui de rejoindre
        le serveur depuis d’autres plateforme facilement (l’intégration des liens avec un
        bot et sur les cartes de Twitch rend leur utilisation encore plus facile).
        La segmentation du serveur en salon de discussion
        permet de rassembler des utilisateurs pour parler d’un thème en particulier,
        et donc augmenter les échanges.
      </p>
      <div class="image_article">
        <img src="@/assets/Twitch_discord.png" alt="" height="auto" width=100%>
      </div>
      <p>
        Les bots sur discord nous permettent de poster en temps réels des annonces
        sur les streams et les notifications relative aux rôles nous permettent de
        notifier tous les utilisateurs de l’arrivé d’un stream ou d’un changement de plan.
        Toujours grâce à son système de rôle, Discord nous permet de gérer les
        permissions des utilisateurs à la volée ou plus précisément.
        Nous pouvons donc aisément ajouter un modérateur ou restreindre
        un salon à tous les utilisateurs.
      </p>
      <div class="image_article">
        <img src="@/assets/Twitch_discord_annonce.png" alt="" height="auto" width=100%>
      </div>
      <p>
        Discord nous permet aussi de partager tous types de médias, vidéos comme photos, sur les serveurs. Dans notre
        cas, nous avons dédié un channel pour y poster des médias.
      </p>
      <div class="image_article">
        <img src="@/assets/Twitch_discord_clip.png" alt="" height="auto" width=100%>
      </div>
      <p>
        Discord possède aussi des fonctions comme le boost de serveur,
        qui grâce à un abonnement, permet au serveur d’avoir des avantages
        comme une icône de serveur animée et un badge de booster pour ceux
        qui le font. Cela permet de maximiser l’engagement des utilisateurs et accroit la rétention. Nous avons aussi
        fait le choix d'ajouter des rôles spécifiques aux boosters du serveur pour augmenter ces effets.
      </p>

      <div class="image_article">
        <img src="@/assets/Twitch_discord_boost.png" alt="" height="auto" width=100%>
      </div>

    </div>

    <div class="conclusion">
      <h2>Conclusion</h2>
      <p>
        C’est un projet concret qui m’a permis de mettre en application les compétences acquises au cours de ma
        formation. Grâce à cela, j’ai pu construire un terrain propice au développement de sa communauté ainsi qu’à son
        propre développement. Il peut maintenant dialoguer facilement et créer des liens pour accroitre son influence en
        tant que streamer sur Twitch.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Twitch_com"
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
}

.description > ul > li {
  color: white;
  font-family: "Noto Sans";
}

li {
  color: white;
}
</style>
