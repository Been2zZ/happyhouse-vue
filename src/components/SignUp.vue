    <template>
    <section>
        <b-field label="아이디">
            <b-input placeholder="아이디를 입력하세요."></b-input>
        </b-field>

         <b-field label="비밀번호">
            <b-input type="password"
                value=""
                 placeholder="비밀번호를 입력하세요."
                password-reveal>
            </b-input>
        </b-field>

        <b-field label="이름">
            <b-input v-model="name" placeholder="이름을 입력하세요."></b-input>
        </b-field>

        <b-field label="전화번호">
            <b-input type="tel" value="" placeholder="전화번호를 입력하세요.">
            </b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email" value="" placeholder="이메일을 입력하세요.">
            </b-input>
        </b-field>

        <b-field label="주소">
            <b-input maxlength="100" type="text" placeholder="ex. 대전광역시"></b-input>
        </b-field>

        <b-field label="상세 주소">
            <b-input maxlength="100"  type="textarea"  placeholder="ex. 유성구 봉명동"></b-input>
        </b-field>


        <b-button type="is-primary">회원 가입</b-button>
  </section>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        }
    }
</script>

<style scoped>
section {
  width: 50%;
  padding-top: 5%;
  margin:0 auto; 
}
</style>