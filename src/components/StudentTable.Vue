<template>
  <div>
    <div class="card student-list m-2 p-2">
      <h4 class="card-title">Student List</h4>
      <div id="student-table">
        <table class="table">
          <tr>
            <th>Name</th>
            <th>StarID</th>
            <th>Present?</th>
          </tr>
          <br>
          <student-row
            v-for="student in students"
            v-bind:student="student"
            v-bind:key="student.starID"
            v-on:student-arrived-or-left="arrivedOrLeft"
          >
          </student-row>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import StudentRow from "@/components/StudentRow.vue";

export default {
  name: "StudentTable",
  emits: ["student-arrived-or-left"],
  components: {
    StudentRow,
  },
  props: {
    students: Array,
  },
  methods: {
    arrivedOrLeft(student, present) {
      // todo emit message to parent.
      this.$emit("student-arrived-or-left", student, present);
    },
  },
};
</script>

<style scoped>
#student-table {
  max-height: 400px;
  overflow: scroll;
}

th,
tr {
  width: 33%;
}
</style>
