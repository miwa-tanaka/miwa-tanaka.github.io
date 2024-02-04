<template>
  <ul class="worksContents">
    <li v-for="work in works" :key="work.id" class="worksItem">
      <ul>
        <li>
          <p class="name">{{ work.name }}</p>
        </li>
        <li class="image">
          <a :href="work.link" target="_blank" rel="noopener noreferrer">
            <img :src="work.image" loading="lazy" width="600" height="300" />
          </a>
        </li>
        <li class="details">
          <span class="title">Overview:</span>
          <p>
            {{ work.overview }}
          </p>
        </li>
        <li class="details">
          <ul class="techDetails">
            <span class="title">
              Technologies Used:
            </span>
            <li>
              <span class="techDetailsTitle">Frontend:</span>
              {{ work.front }}
            </li>
            <li>
              <span class="techDetailsTitle">Hosting:</span>
              {{ work.hosting }}
            </li>
            <li class="alignCenter">
              <span class="techDetailsTitle">Design:</span>
              <span v-if="work.designLink" class="alignCenter">
                <a :href="work.designLink" target="_blank" rel="noopener noreferrer">
                  {{ work.design }}
                </a>
                <tabIcon />
              </span>
              <span v-if="!work.designLink">{{ work.design }}</span>
            </li>
          </ul>
        </li>
        <li class="details">
          <span class="title">Challenges and Problem Solving:</span>
          <p>
            {{ work.challenges }}
          </p>
        </li>
        <li v-if="work.repository" class="details alignCenter">
          <span class="title">Repositories:</span>
          <a :href="work.repository" target="_blank" rel="noopener noreferrer">
            {{ work.repository }}
          </a>
          <tabIcon />
        </li>
        <li class="details alignCenter">
          <span class="title">Link:</span>
          <a :href="work.link" target="_blank" rel="noopener noreferrer">
            {{ work.link }}
          </a>
          <tabIcon />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import worksData from '~/static/works.json';
import tabIcon from './openNewTabIcon.vue'

export default {
  components: {
    tabIcon
  },
  data() {
    return {
      works: worksData.works.map(work => ({
        ...work,
        image: work.image ? require(`~/assets${work.image}`) : ''
      }))
    };
  }
};
</script>

<style lang="scss">
  @import '~/assets/scss/works.scss';
</style>
