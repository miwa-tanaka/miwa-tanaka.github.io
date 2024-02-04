<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <section class="worksWrapper">
        <Works />
      </section>
      <section class="contactWrapper">
        <Contact />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Poppins:wght@400;500;700&display=swap');
</style>

<script>
import Header from '~/components/header'
import Works from '~/components/works'
import Contact from '~/components/contact'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Works,
    Contact,
    Footer
  },
}
</script>
