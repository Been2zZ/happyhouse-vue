<template>
  <section>
    <b-table
      :data="members"
      ref="table"
      paginated
      per-page="5"
      detail-key="id"
      :key="index"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <b-table-column field="index" label="번호" v-slot="props">
        {{ props.index + 1 }}
      </b-table-column>

      <b-table-column field="id" label="아이디" v-slot="props">
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="name" label="이름" v-slot="props">
        {{ props.row.name }}
      </b-table-column>

      <b-table-column field="phoneNum" label="전화번호" v-slot="props">
        {{ props.row.phoneNum }}
      </b-table-column>

      <b-table-column field="email" label="이메일" v-slot="props">
        {{ props.row.email }}
      </b-table-column>

      <b-table-column field="address" label="주소" v-slot="props">
        {{ props.row.address }}
      </b-table-column>

      <b-table-column field="addressDetail" label="상세주소" v-slot="props">
        {{ props.row.addressDetail }}
      </b-table-column>

      <b-table-column field="del" label="탈퇴" v-slot="props">
        <b-button type="is-danger" outlined @click="deleteMember(props.row.id)"
          >탈퇴</b-button
        >
      </b-table-column>
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
      members: [],
    };
  },
  methods: {
    deleteMember(id) {
      alert(id + '님을 탈퇴시킵니다.');
      http.get('admin/del/' + id).then((response) => {
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
        .get('/admin/member')
        .then((response) => (this.members = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.retrieveBoards();
  },
};
</script>
