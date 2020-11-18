<template>
  <!-- <b-row>
    <b-col align="left">
      <input type="text" v-model="text" @keypress.enter="searchText" />
      <b-button >검색</b-button>
    </b-col>
  </b-row> -->

  <section>
     <!-- <b-field expanded grouped position="is-right">
            <b-field>
              <b-field>
                <b-dropdown aria-role="list">
                  <button class="button" slot="trigger">
                    <span>Click me!</span>
                    <b-icon icon="menu-down"></b-icon>
                    </button>
                    <b-dropdown-item aria-role="listitem">제목</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">글쓴이</b-dropdown-item>
                </b-dropdown>
                <b-input placeholder="Search..." expanded></b-input>
                <p class="control">
                <b-button type="is-primary" outlined>Search</b-button>
                </p>
                </b-field>
                
            </b-field>
        </b-field> -->
        <b-field expanded grouped position="is-right">
        <b-dropdown v-model="isPublic" aria-role="list">
        <button class="button is-primary" type="button" slot="trigger">
            <template v-if="isPublic">
                <span>제목</span>
            </template>
            <template v-else>
                <span>작성자</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item :value="true" aria-role="listitem">
            <div class="media">
                <label>제목</label>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false" aria-role="listitem">
            <div class="media">
                <label>작성자</label>
            </div>
        </b-dropdown-item>
    </b-dropdown>
    </b-field>
    </section>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      isPublic: true,
    }
  }
};
</script>

<style>
#i {
  width: 100%;
  float: none;
}
</style>
