<template>
  <div class="users">
    <div class="container mt-5">
      <div class="row">
        <div class="col d-flex align-items-center flex-column">
          <h1>
            Personal informations
          </h1>
          <div class="persInfo">
            <p>First Name : {{this.$store.state.persInfo.fname}} </p>
            <p>Last Name : {{this.$store.state.persInfo.lname}}</p>
            <p>Phone : {{this.$store.state.persInfo.phone}}</p>
            <p>CIN : {{this.$store.state.persInfo.cin}}</p>
            <p>Passport N : {{this.$store.state.persInfo.passport}}</p>
            <p>Address : {{this.$store.state.persInfo.address}}</p>
            <p>City : {{this.$store.state.persInfo.city}}</p>
            <p>Country : {{this.$store.state.persInfo.country}}</p>
          </div>
        </div>
        <div class="col d-flex align-items-center flex-column">
          <h1>
            Professionnal informations
          </h1>
          <div class="proInfo">
            <p>CNSS N : {{this.$store.state.ProInfo.cnss}}</p>
            <p>Office phone : {{this.$store.state.ProInfo.officePhone}}</p>
            <p>Email : {{this.$store.state.ProInfo.email}}</p>
            <p>Employer : {{this.$store.state.ProInfo.emp}}</p>
            <p>Job Address : {{this.$store.state.ProInfo.jobAdr}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
