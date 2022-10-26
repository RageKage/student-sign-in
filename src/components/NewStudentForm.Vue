<template>
    <div>
        <div class="alert alert-danger" v-if = 'errors.length > 0'>
            <!-- <ul>
                <li v-for = "error in errors">{{error}}</li>
            </ul> -->
        </div>

        <div class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student</h4>

            <div class="form-group">
                <label for="name">Name</label>
                <!-- TODO v-model newStudentName -->
                <input  id="name" class="form-control" v-model.trim = "newStudentName">
            </div>
            <div class="form-group">
                <label for="starID">Star ID</label>
                <!-- TODO v-model newStarID -->
                <input  id="starID" class="form-control" v-model.trim = "newStarID">
            </div>
            <!-- TODO v-on:click event handler -->
            <button class="btn btn-primary" v-on:click = "addStudent">Add</button>
        </div>
    </div>
</template>


<script>
export default {
    // create component
    name: 'NewStudentForm',
    data() {
        return {
            newStudentName:'',
            newStarID: '',
            errors: []
        }
    }, 
    methods: {
        addStudent() {

                // clear errors array
                this.errors = []

                if (!this.newStudentName) {
                this.errors.push('A name must be entered')
                }

                if (!this.newStarID) {
                this.errors.push('A star ID must be entered')
                }

                if (this.errors.length == 0) {
                let student = {
                    name: this.newStudentName,
                    starID: this.newStarID,
                    present: false
                }
                //  TODO emit message to parent with new student
                this.newStudentName = ''
                this.newStarID = ''

                this.students.sort(function (s1, s2) {
                    if (s1.name.toUpperCase() > s2.name.toUpperCase()) {
                    return 1
                    }

                    if (s1.name.toUpperCase() < s2.name.toUpperCase()) {
                    return -1
                    }

                    return 0
                })
            }

        }
    }
}



    
</script>


<style>
</style>
