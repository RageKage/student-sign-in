<template>
  <tr v-bind:class="{ present: student.present, absent: !student.present }">
    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>
    <td>
      <input
        type="checkbox"
        v-bind:checked="student.present"
        v-on:change="arrivedOrLeft(student, $event.target.checked)"
      />
    </td>
  </tr>
</template>

<script>
export default {
  name: "StudentRow",
  emits: ["student-arrived-or-left"],
  props: {
    student: Object,
  },
  methods: {
    arrivedOrLeft(student, present) {
      this.$emit("student-arrived-or-left", student, present);
    },
  },
};
</script>

<style scoped>
.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: rgb(0, 0, 0);
  font-weight: bold;
  background: coral;
}
</style>
