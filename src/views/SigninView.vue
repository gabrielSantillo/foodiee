<template>
  <v-app id="inspire">
    <v-main>
      <div class="alert">
        <v-alert
          v-if="alert"
          outlined
          type="warning"
          prominent
          border="left"
          dismissible
          transition="fade-transition"
        >
          {{ message }}
        </v-alert>
      </div>

      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2">Foodiee Sign In</h1>

                        <v-form>
                          <v-text-field
                            v-model="sign_in_email"
                            label="Email"
                            :rules="emailRules"
                            type="text"
                            color="green darken-3"
                          />

                          <v-text-field
                            v-model="sign_in_password"
                            :rules="passwordRules"
                            label="Password"
                            name="password"
                            type="password"
                            color="green darken-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <button class="button" @click="sign_in">Sign In</button>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="green darken-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Don't have an account yet?
                        </h1>
                        <h5 class="text-center">Register now!</h5>
                      </v-card-text>
                      <div class="text-center">
                        <button class="button_border" @click="step++">
                          Sign Up
                        </button>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="green darken-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Already have an account?
                        </h1>
                        <h5 class="text-center">Sign in now!</h5>
                      </v-card-text>
                      <div class="text-center">
                        <button class="button_border" @click="step--">
                          Sign In
                        </button>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2">Create Account</h1>
                        <v-form>
                          <v-text-field
                            v-model="first_name"
                            label="First Name"
                            :rules="fisrtNameRules"
                            type="text"
                            color="green darken-3"
                          />

                          <v-text-field
                            v-model="last_name"
                            label="Last Name"
                            type="text"
                            :rules="lastNameRules"
                            color="green darken-3"
                          />
                          <v-text-field
                            v-model="sign_up_email"
                            label="Email"
                            :rules="emailRules"
                            type="text"
                            color="green darken-3"
                          />

                          <v-text-field
                            v-model="sign_up_password"
                            :rules="passwordRules"
                            label="Password"
                            type="password"
                            color="green darken-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <button class="button" @click="sign_up">Sign Up</button>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data: () => ({
    alert: false,
    step: 1,
    passwordRules: [(v) => !!v || "Password is required"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,

    fisrtNameRules: [(v) => !!v || "First Name is required"],

    lastNameRules: [(v) => !!v || "Last Name is required"],

    sign_in_email: "",
    sign_in_password: "",
    first_name: "",
    last_name: "",
    sign_up_email: "",
    sign_up_password: "",
    message: "",
  }),

  methods: {
    // function to sign in an user that already exists in the database
    sign_in() {
      // if statement that checks if all inputas were filled in
      if (this.sign_in_email === "" || this.sign_in_password === "") {
        this.message = "All inputs must be filled in.";
        return (this.alert = true);
      }
      // axios request that send a POST request with the email and password sent by the user
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-login`,
          method: `POST`,
          data: {
            email: this.sign_in_email,
            password: this.sign_in_password,
          },
        })
        // in case of success set the user id and token as cookies and push them to the home page
        .then((response) => {
          cookies.set(`client_id`, response[`data`][`client_id`]);
          cookies.set(`client_token`, response[`data`][`token`]);

          this.$router.push("/home");
        })
        // in case of error, check to see what kind error was and show a message to the user
        .catch((error) => {
          if (error["message"] === "Request failed with status code 400") {
            this.message = "Wrong email and/or password.";
            this.alert = true;
          } else {
            this.message = "Sorry, an error has occurred. Please, try again.";
            this.alert = true;
          }
        });
    },
    // function to sign up an user that doesn't exists in the database
    sign_up() {
      // if statement that checks if all inputas were filled in
      if (
        this.sign_up_email === "" ||
        this.sign_up_password === "" ||
        this.first_name === "" ||
        this.last_name === ""
      ) {
        this.message = "All inputs must be filled in.";
        this.alert = true;
        return;
      }
      // axios request to post the user data
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,
          method: `POST`,
          data: {
            email: this.sign_up_email,
            first_name: this.first_name,
            last_name: this.last_name,
            password: this.sign_up_password,
          },
        })
        // in case of success set the user id and token as cookies and push them to the home page
        .then((response) => {
          cookies.set(`client_id`, response[`data`][`client_id`]);
          cookies.set(`client_token`, response[`data`][`token`]);

          this.$router.push("/home");
        })
        // in case of error, check to see what kind error was and show a message to the user
        .catch((error) => {
          if (error["message"] === "Network Error") {
            this.message = "Sorry, an error has occurred. Please, try again.";
            this.alert = true;
          } else {
            let error_message = error["response"]["data"];
            if (error_message.startsWith("Duplicate entry")) {
              this.message = "This email is already being used.";
              this.alert = true;
            }
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.button_border {
  display: inline-block;
  background-color: $--first-color;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  margin-bottom: 10px;
  border: 1px #fff solid;
}

.button {
  display: inline-block;
  background-color: $--first-color;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  margin-bottom: 10px;
}
.button:hover {
  background-color: $--first-color-alt;
}

.alert {
  display: grid;
  place-items: center;

  > v-alert {
    max-width: 50%;
  }
}
</style>
