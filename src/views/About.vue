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
              <time datetime="2016-1-1">24 July 1993</time>
            </div>
          </div>
        </div>
      </article>
      <div><span> </span></div>
      <!--  -->
      <article class="tile is-child notification is-info">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://avatars3.githubusercontent.com/u/40540693?s=460&u=f5b5729616d9d94edb0c7133490f06cf1985fc24&v=4"
                alt="수빈 image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">정수빈</p>
                <p class="subtitle is-6">SSAFY 대전 4기</p>
              </div>
            </div>

            <div class="content">
              귀염둥이 개발자입니당<br />
              <a target="_blank" href="https://github.com/Been2zZ">#github</a>
              <br />
              <time datetime="2016-1-1">3 Jan 1998</time>
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
  /* background-color: #8a3cf0; */
  background-color: white;
  color: #fff;
}
</style>
