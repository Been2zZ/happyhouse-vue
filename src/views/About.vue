<template>
  <section class="container">
    <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://avatars2.githubusercontent.com/u/34261827?s=460&u=2e7b8174e98988a498b12fc19136d58f402e26dd&v=4"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">최 환</p>
                <p class="subtitle is-6">SSAFY 대전 4기</p>
              </div>
            </div>

            <div class="content">
              즐거운 개발을 위해 언제나 노력합니다.<br />
              <a target="_blank" href="https://github.com/choihwan2">#github</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 24 Dec 2020</time>
            </div>
          </div>
        </div>
      </article>
      <div></div>
      <!--  -->
      <article class="tile is-child notification is-info">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.notification.is-info {
  background-color: #8a3cf0;
  color: #fff;
}
</style>
