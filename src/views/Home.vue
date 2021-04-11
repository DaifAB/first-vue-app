<template>
  <div class="home">
    <div class="container mt-5">
      <div class="row">
        <div class="col d-flex align-items-center flex-column">
          <h1>
            Personal Informations
          </h1>
         <PersInfo />

        </div>
        <div class="col d-flex align-items-center flex-column">
          <h1>
            Professional Informations
          </h1>
          <ProInfo />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersInfo from "../components/PersInfo"
import ProInfo from "../components/ProInfo"

export default {
  name: 'Home',
  components: {
    PersInfo,
    ProInfo
  }
}
</script>
