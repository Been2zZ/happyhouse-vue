<template>
    <section>
        <b-table>
    <!-- <b-table table is-fullwidth> -->
     <col width="10%"><col width="20%"><col width="20%">
     <b-thead>
      <b-tr>
        <b-th>아이디</b-th>
        <b-th>이름</b-th>
        <b-th>전화번호</b-th>
        <b-th>이메일</b-th>
        <b-th>주소</b-th>
        <b-th>상세주소</b-th>
        <b-th>비밀번호</b-th>
        <b-th>탈퇴 처리</b-th>
      </b-tr>
     </b-thead>
     <b-tbody>
       <b-tr v-for="member in members" :key="member.id">
        <b-td v-html="member.id"></b-td>
        <b-td v-html="member.name" ></b-td>
        <b-td v-html="member.phoneNum" ></b-td>
        <b-td v-html="member.email" ></b-td>
        <b-td v-html="member.address" ></b-td>
        <b-td v-html="member.addressDetail"></b-td>
        <b-td v-html="member.pw"></b-td>
        <b-td>
            <b-button @click="deleteMember(member.id)">탈퇴</b-button>
        </b-td>
       </b-tr>
     </b-tbody>
   </b-table>
    </section>
</template>

<script>
import http from '@/http-common';

export default {
  name: 'BoardList',
 data() {
    return {
      submitted: false,
      loading: true,
      errored: false,
      members : [],
    };
  },
  methods:{
    deleteMember(id){
       alert(id + "님을 탈퇴시킵니다.");
        http.get('admin/del/' + id)
        .then((response) => {
        if (response.data.state == 'succ') {
          alert('회원 탈퇴가 완료 되었습니다.');
        // 현재 페이지 갱신
        // this.$router.push('/memberlist');
        this.$router.go(this.$router.currentRoute);
        } else {
          alert('회원 탈퇴가 실패하였습니다.');
        }
      });
      this.submitted = true;
    },
    retrieveBoards() {
      http
        .get("/admin/member")
        .then(response => (this.members = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.retrieveBoards();
  }
}
</script>