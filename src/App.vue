<template>
    <div id="app">
      <new-student-form></new-student-form>
      <student-table></student-table>
      <student-message></student-message>
    </div>
</template>

<script>

import NewStudentFormVue from './components/NewStudentForm.Vue';
import StudentMessageVue from './components/StudentMessage.Vue';
import StudentTableVue from './components/StudentTable.Vue';



export default {
  name: 'App',
  components: {
    NewStudentFormVue,
    StudentMessageVue,
    StudentTableVue
  }
}
</script>

<style>

</style>
