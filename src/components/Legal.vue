<template>
  <div>

    <div class="description">
      <h1>Mentions légales</h1>
      <p>
        Ce site ne récolte aucune informations sur vous, vous pouvez donc naviguer l'esprit tranquille. Si tout de fois
        vous avez un doute ou une réclamation, contactez le créateur du site via cette adresse mail
      </p>
      <h2>Contact</h2>
      <h3>
        Maxence Guichard - maxenceguichard974@gmail.com
      </h3>


    </div>


  </div>
</template>

<script>
export default {
  name: "legal"
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

