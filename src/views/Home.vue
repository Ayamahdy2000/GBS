<template>
  <div class="">
    <b-container fluid class="p-0" style="overflow: hidden">
      <section class="home p-0" id="home">
        <b-navbar toggleable="sm" type="light" variant="light" class="">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-navbar-brand>GPS</b-navbar-brand>

          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#home">Home</b-nav-item>
              <b-nav-item href="#about">About Us</b-nav-item>
              <b-nav-item href="#services">Services</b-nav-item>
              <b-nav-item href="#contact">Contact Us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <h3 class="" data-aos="fade-up" data-aos-duration="1000">Welcome</h3>

        <p class="text" data-aos="fade-up" data-aos-duration="1000">
          Get real-time traffic information
        </p>
      </section>
      <section class="mt-5 about px-5" id="about">
        <b-row>
          <b-col
            lg="6"
            md="12"
            class="img p-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <b-img :src="require('../images/about.jpg')" fluid></b-img>
          </b-col>
          <b-col
            lg="6"
            md="12"
            class="bg-dark p-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            ><h4>About Us</h4>
            <p>
              We help you to get your directions you need only to put your
              current location and destination and you will get the destination
              and the time
            </p>
            <b-button class="mb-5">Services</b-button>
          </b-col>
        </b-row>
      </section>
      <section class="mt-5 mb-5 px-5" id="services">
        <h4 class="text-left" data-aos="fade-down" data-aos-duration="1000">
          Services
        </h4>
        <b-form
          class="mt-5"
          data-aos="fade-right"
          data-aos-duration="1000"
          @submit.prevent="onSubmit()"
        >
          <b-row>
            <b-col md="5">
              <b-form-input
                v-model="form.currentlocation"
                type="text"
                placeholder="Current location"
                required
              >
              </b-form-input
            ></b-col>
            <b-col md="5">
              <b-form-input
                v-model="form.destination"
                type="text"
                placeholder="Destination"
                required
              >
              </b-form-input
            ></b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col md="5">
              <b-form-select
                v-model="form.Mode"
                type="text"
                :options="ways"
                required
              >
              </b-form-select
            ></b-col>
            <b-col md="5">
              <b-form-input
                v-model="form.Departure_time"
                type="text"
                placeholder=" Departure_time
"
                required
              >
              </b-form-input
            ></b-col>
          </b-row>
          <b-row class="justify-content-end mt-5">
            <b-button class="mr-3 mb-5" type="submit">Get direction</b-button>
          </b-row>
        </b-form>
        <vs-dialog width="550px" not-center v-model="active">
          <template #header>
            <h4 class="not-margin">Your Directions</h4>
          </template>

          <div class="con-content">
            <p><span>Current Address: </span>{{ result.currentAddress }}</p>
            <p><span>Lat: </span>{{ currentlocationObject.lat }}</p>
            <p><span>Lng: </span>{{ currentlocationObject.lng }}</p>
            <p>
              <span>Destination Address: </span>{{ result.destinationAddress }}
            </p>
            <p><span>Lat: </span>{{ destinationObject.lat }}</p>
            <p><span>Lng: </span>{{ destinationObject.lng }}</p>
            <p><span>Distance: </span>{{ result.distance }}</p>
            <p><span>Duration: </span>{{ result.duration }}</p>
          </div>

          <template #footer>
            <div class="con-footer">
              <vs-button @click="active = false"> Ok </vs-button>
            </div>
          </template>
        </vs-dialog>
      </section>
      <footer class="mt-5 px-4 footer" id="contact">
        <h3>GPS</h3>
        <p>+012 345 67890 | info@domain.com</p>
        <ul class="d-flex">
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-twitter"></i></li>
          <li><i class="fab fa-instagram"></i></li>
        </ul>
      </footer>
    </b-container>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  data() {
    return {
      form: {
        currentlocation: null,
        destination: null,
        Mode: "driving",
        Departure_time: null,
      },
      result: "",
      currentlocationObject: "",
      destinationObject: "",
      active: false,
      ways: [
        { text: "Bicycling ", value: "bicycling" },
        { text: "Walking", value: "walking" },
        { text: "Transit ", value: "transit" },
        { text: "Driving ", value: "driving" },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("hello");

      axios
        .post("directions", {
          origin: this.form.currentlocation,

          destination: this.form.destination,

          mode: this.form.Mode,

          departure_time: this.form.Departure_time,
        })
        .then((res) => {
          this.result = res.data;
          console.log(this.result);
          this.active = !this.active;
          this.currentlocationObject = this.result.currentLocation;
          this.destinationObject = this.result.destination;
        })
        .catch(() => {
          console.log("Error");
        });
    },
  },
};
</script>
<style lang="sass" >
@import "../styles/home.scss"
</style>
