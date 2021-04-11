<template>
     <form class="mt-5" @submit="addPersInfo">
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" class="form-control" v-model="fname" />
                  <label class="form-label">First name</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" class="form-control"  v-model="lname"/>
                  <label class="form-label">Last name</label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="phone" />
              <label class="form-label">Phone</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="cin"/>
              <label class="form-label">CIN</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="passport"/>
              <label class="form-label">Passeport N</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="address" />
              <label class="form-label">Address</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="city" />
              <label class="form-label">City</label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" class="form-control" v-model="country" />
              <label class="form-label">Country</label>
            </div>


            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Add</button>
          </form>
</template>

<script>
export default {
    name : "PersInfo",
    data() {
        return {
            fname: '',
            lname: '',
            phone: '',
            cin: '',
            passport: '',
            address: '',
            city: '',
            country: ''
        }
    },
    methods : {
        addPersInfo(e){
            e.preventDefault();
            this.$store.state.persInfo = {
                fname: this.fname,
                lname: this.lname,
                phone: this.phone,
                cin: this.cin,
                passport: this.passport,
                address: this.address,
                city: this.city,
                country: this.country
            }
            alert("Professional Info added !")
        }
    }
}
</script>
<style scoped>

</style>