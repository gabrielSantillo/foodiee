<template>
  <v-app id="inspire">
    <v-main>
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
                            label="Email"
                            name="Email"
                            :rules="emailRules"
                            type="text"
                            color="green darken-3"
                          />

                          <v-text-field
                            id="password"
                            :rules="[rules.required, rules.min]"
                            label="Password"
                            name="password"
                            type="password"
                            color="green darken-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <button class="button">Sign In</button>
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
                        <h1 class="text-center display-1">Already have an account?</h1>
                        <h5 class="text-center">
                          Sign in now!
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                          <button class="button_border" @click="step--">
                          Sign In
                        </button>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2"
                        >
                          Create Account
                        </h1>
                        <v-form>
                          <v-text-field
                            label="First Name"
                            name="FirstName"
                            type="text"
                            color="green darken-3"
                          />

                          <v-text-field
                            label="Last Name"
                            name="Last Name"
                            type="text"
                            color="green darken-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            :rules="emailRules"
                            type="text"
                            color="green darken-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="green darken-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <button class="button">Sign Up</button>
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
export default {
  data: () => ({
    step: 1,
    passwordRules: [(v) => !!v || "Password is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Password Required.",
    },
  }),
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
</style>
