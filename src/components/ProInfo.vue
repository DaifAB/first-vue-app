<template>
     <form class="mt-5" @submit="addProInfo" >
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" class="form-control" v-model="cnss" />
                  <label class="form-label">CNSS N</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" class="form-control" v-model="officePhone" />
                  <label class="form-label">Phone N (Office)</label>
                </div>
              </div>
            </div>
            <div class="form-outline mb-4">
              <input type="email" class="form-control" v-model="email"/>
              <label class="form-label">Email pro</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="emp"/>
              <label class="form-label">Employer</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="jobAdr"/>
              <label class="form-label">Job address</label>
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Add</button>
          </form>
</template>

<script>
export default {
    name : "ProInfo",
    data() {
        return {
            cnss: '',
            officePhone: '',
            email: '',
            emp: '',
            jobAdr: ''
        }
    },
    methods : {
        addProInfo(e){
            e.preventDefault();
            this.$store.state.ProInfo = {
                cnss: this.cnss,
                officePhone: this.officePhone,
                email: this.email,
                emp: this.emp,
                jobAdr: this.jobAdr
                }
            alert("Personal Info added !")
        }
    }
}
</script>