<template>
  <div>
    <button class="btn btn-dark" v-b-modal.modal>New Collection</button>

    <b-modal id="modal" centered title="New Collection" size="lg">
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

        <aside class="col-12 col-sm-6 col-md-6 col-lg-6">
          <!-- Styled -->
          <div style="cursor: default" class="mb-2 h6">
            Choose a logo image:
          </div>
          <b-form-file
            id="input-fileA"
            v-model="fileA"
            :state="Boolean(fileA)"
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
          <div style="visibility: hidden; cursor: default" class="mt-3">
            Selected file: {{ fileA ? fileA.name : "" }}
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

        <aside class="col-12 col-sm-6 col-md-6 col-lg-6">
          <!-- Styled -->
          <div style="cursor: default" class="mb-2 h6">
            Choose a banner image:
          </div>
          <b-form-file
            id="input-fileB"
            v-model="fileB"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            required
          ></b-form-file>
          <div style="visibility: hidden; cursor: default" class="mt-3">
            Selected file: {{ fileB ? fileB.name : "" }}
          </div>
        </aside>

        <aside class="col-12 col-sm-12 col-md-12 col-lg-12 mt-5 pt-5">
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
export default {
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      fileA: null,
      fileB: null,
      name: "",
      text: "",
    };
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
