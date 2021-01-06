<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="12" class="articles-control">
        <el-input :placeholder="$t('search')" v-model="searchValue"></el-input>
        <el-tooltip
          effect="dark"
          :content="$t('tooltip')"
          placement="top-start"
        >
          <el-button
            type="primary"
            :icon="viewMode ? 'el-icon-s-grid' : 'el-icon-menu'"
            circle
            class="viewModeBtn"
            @click="changeView"
          ></el-button>
        </el-tooltip>
      </el-col>
    </el-row>
    <div v-if="articles" :class="viewMode ? '' : 'block-view'">
      <ArticleView
        v-for="item in articles"
        :key="item.id"
        :item="item"
        :search="searchValue"
        :viewMode="viewMode"
      ></ArticleView>
    </div>
    <div v-else>
      {{ $t("empty-page") }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticleView from "../../components/ArticleView.vue";

@Component({
  components: {
    ArticleView
  }
})
export default class Home extends Vue {
  searchValue: string = "";
  viewMode: boolean = true;
  articles = [
    {
      id: 1,
      title: "Test",
      destination: "Destination Europe",
      author: "Added by John Williams Doe",
      postTime: "January 01, 2018",
      image:
          "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
    },
    {
      id: 2,
      title: "Test2",
      destination: "Destination Europe",
      author: "Added by John Williams Doe2",
      postTime: "January 01, 2018",
      image:
          "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
    },
    {
      id: 3,
      title: "Test3",
      destination: "Destination Europe",
      author: "Added by John Williams Doe 3",
      postTime: "January 01, 2018",
      image:
          "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
    }
  ];
  changeView() {
    this.viewMode = !this.viewMode;
  }
}
</script>

<style lang="scss">
.viewModeBtn {
  margin-top: 10px;
}
.articles-control {
  .el-input {
    display: inline-block;
    width: 250px;
    margin: 0 5px 0 0;
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
}
.block-view {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
