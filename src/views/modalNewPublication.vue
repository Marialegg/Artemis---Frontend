<template>
  <div>
    <button v-b-modal.modal-lg class="btn btn-dark" @click="uploadPinata()">New Publication</button>
 
    <b-modal id="modal-lg" centered title="New Publication" size="lg">
      <section
        class="col-12 p-2 m-0"
        style="
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: end;
        "
      >
        <aside id="versionMobile" class="col-12 col-sm-6 col-md-6 col-lg-6">
          <div role="group">
            <div style="cursor: default" class="mb-2 h6">
              Title of the collection:
            </div>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter the title"
            ></b-form-input>
            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback
              style="cursor: default"
              id="input-live-feedback"
            >
              Enter at least 3 letters
            </b-form-invalid-feedback>
          </div>
        </aside>

        <aside id="versionMobile" class="col-12 col-sm-6 col-md-6 col-lg-6">
          <div role="group">
            <div style="cursor: default" class="mb-2 h6">Select a choice</div>
            <b-form-select
              v-model="selected"
              :options="options"
              required
              class="mb-3"
            >
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Please select an option --</b-form-select-option
                >
              </template>
              <!-- These options will appear after the ones from 'options' prop -->
              <b-form-select-option value="C">Option C</b-form-select-option>
              <b-form-select-option value="D">Option D</b-form-select-option>
            </b-form-select>
          </div>
        </aside>

        <aside class="col-12 col-sm-6 col-md-6 col-lg-6">
          <!-- Styled -->
          <div style="cursor: default" class="mb-2 h6">
            Choose a logo image:
          </div>
          <b-form-file
            id="input-file"
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            required
          >
            <template slot="file-name" slot-scope="{ names }">
              <!-- <img src="" alt=""> -->
              <b-badge variant="secondary">{{ names[0] }}</b-badge>
              <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                + {{ names.length - 1 }} More files
              </b-badge>
            </template>
          </b-form-file>
          <div style="cursor: default" class="mt-3">
            Selected file: {{ file ? file.name : "" }}
          </div>
        </aside>

        <aside id="versionDesktop" class="col-12 col-sm-6 col-md-6 col-lg-6">
          <div role="group">
            <div style="cursor: default" class="mb-2 h6">
              Title of the collection:
            </div>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter the title"
            ></b-form-input>
            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback
              style="cursor: default"
              id="input-live-feedback"
            >
              Enter at least 3 letters
            </b-form-invalid-feedback>
          </div>
        </aside>

        <aside id="versionDesktop" class="col-12 col-sm-6 col-md-6 col-lg-6">
          <div role="group">
            <div style="cursor: default" class="mb-2 h6">Select a choice</div>
            <b-form-select
              v-model="selected"
              :options="options"
              required
              class="mb-3"
            >
              <!-- This slot appears above the options from 'options' prop -->
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Please select an option --</b-form-select-option
                >
              </template>
              <!-- These options will appear after the ones from 'options' prop -->
              <b-form-select-option value="C">Option C</b-form-select-option>
              <b-form-select-option value="D">Option D</b-form-select-option>
            </b-form-select>
          </div>
        </aside>

        <aside id="spacing" class="col-12 col-sm-6 col-md-6 col-lg-6">
          <div role="group">
            <div style="cursor: default" class="mb-2 h6">
              Title of the collection:
            </div>
            <b-form-input></b-form-input>
            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback
              style="cursor: default"
              id="input-live-feedback"
            >
              Enter at least 3 letters
            </b-form-invalid-feedback>
          </div>
        </aside>

        <aside class="col-12 col-sm-12 col-md-12 col-lg-12 mt-5">
          <div>
            <b-form-textarea
              id="textarea"
              class="validationMessages"
              v-model="text"
              placeholder="Type a short descrption..."
              rows="4"
            ></b-form-textarea>
          </div>
        </aside>
      </section>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('4bf2e7b6385c5285d87b', '8a3283d015683b1a40e6c020437592b3bd845093c54402daa51808f455a64284');
const FormData = require('form-data');
import fs from 'fs'
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;
export default {
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      file: null,
      name: "",
      selected: null,
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
      text: "",
    };
  },
  mounted() {
  },
  methods: {
    async uploadPinata() {
      const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS'
      let data = new FormData();
      data.append('file', fs.writeFile('http://localhost:8080/images/nft/nft-detail.jpg'))
      axios.post(url, {
        headers: {
          'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
          'pinata_api_key': "4bf2e7b6385c5285d87b",
          'pinata_secret_api_key': "8a3283d015683b1a40e6c020437592b3bd845093c54402daa51808f455a64284"
        }
      }).then(function (response) {
        //handle your response here
        console.log(response)
      }).catch(function (error) {
        //handle error here
        console.log(error)
      });
    },
    async uploadNftSerie () {
      const CONTRACT_NAME = 'venix.hrpalencia.testnet'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        changeMethods: ["nft_series "],
        sender: wallet.account(),
      })
      if (wallet.isSignedIn()) {
        await contract.nft_series ({
          token_metadata: {
            title: "Naruto Shippuden ch.2: Menolong sasuke",
            description: "naruto sasuke",
            media: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Olympus_Mons_alt.jpg/1024px-Olympus_Mons_alt.jpg",
            reference: "bafybeicg4ss7qh5odijfn2eogizuxkrdh3zlv4eftcmgnljwu7dm64uwji", 
            copies: 100
          }, 
          collection: 1, 
          price: "1000000000000000000000000"
        }, "300000000000000", // attached GAS (optional)
          "1011280000000000000000000" )
        .then((response) => {
          console.log(response);
        });
      }
    },
  },
};
</script>

<style scoped>
#versionMobile {
  display: none;
}
#versionDesktop {
  display: block;
}
#spacing {
  display: none;
}
@media (max-width: 575px) {
  #versionMobile {
    display: block !important;
  }
  #versionDesktop {
    display: none !important;
  }
  #spacing {
    display: block !important;
    visibility: hidden;
  }
  .h6 {
    margin-top: 10px !important;
  }
}
</style>
