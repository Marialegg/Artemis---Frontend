<script>
import {
  ArrowUpIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
} from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;

/**
 * Shop-products component
 */
export default {
  data() {
    return {
      dataNftTokens: [],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    HeartIcon,
    EyeIcon,
    ShoppingCartIcon,
  },
  mounted() {
    this.nftTokensContract();
    localStorage.serieId = newName
  },
  methods: {
    async nftTokensContract() {
      const CONTRACT_NAME = "venix.hrpalencia.testnet";
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ["get_nft_series"],
        sender: wallet.account(),
      });
      await contract.get_nft_series({
        from_index: "0",
        limit: 10,
      }).then((response) => {
        console.log(response);
        this.dataNftTokens = response;
      });
    },
    viewSerie (idserie) {
      localStorage.serieId = idserie
      this.$router.push('/venix-nft-detail')
    },
  },
};
</script>

<template>
  <div>
    <Navbar :isIcons="true" />

    <!-- Hero Start -->
    <section
      class="mtc-sm-25 mtc-7 mtc-md-12 d-table w-100"
    >
      <img
        src="images/nft/MunkyMonkey.png"
        class="w-100 d-none d-md-block"
        style="position:relative"
        alt="..."
      />
    
      <div class="container-fluid pt-xlg-10 mt-img-market">
        <div class="row justify-content-center d-none d-md-block">
          <div class="col-lg-12 text-center">
            <img
              src="images/nft/rabbit.jpg"
              class="imgRedonda blog"
              alt="..."
            />
            <p
              class="font-weight-bold mt-2 mb-2 title-collection"
              style=""
            >
              The Dons
            </p>
            <p
              class="mx-auto mb-0 text-collection">
              collection by
              <span class="text-collection-by">
                The.Don
              </span>
            </p>
          </div>
          <!--end col-->
        </div>

        <div class="row justify-content-center">
          <div
            class="col-lg-1 col-md-2 col-4 mt-4 pt-2 roundedvenix border-0 bg-white p-2"
          >
            <p
              class="mb-0 rectangle-collection"
              >
              0.75<br />
              <span class="rectangle-collect-text"
                >floor price</span
              >
            </p>
          </div>
          <div
            class="
              col-lg-1 col-md-2 col-4
              mt-4
              pt-2
              ml-3
              roundedvenix
              border-0
              bg-white
            "
          >
            <p
              class="mb-0 rectangle-collection">
              0.6 <br /><span class="rectangle-collect-text">average price</span
              >
            </p>
          </div>
          <div
            class="
              col-lg-1 col-md-2 col-4
              mt-4
              pt-2
              ml-3
              roundedvenix
              border-0
              bg-white
            "
          >
            <p
              class="mb-0 rectangle-collection">
              10.8K <br /><span class="rectangle-collect-text">volume</span
              >
            </p>
          </div>
          <div
            class="
              col-lg-1 col-md-2 col-4
              mt-4
              pt-2
              ml-3
              roundedvenix
              border-0
              bg-white
            "
          >
            <p
              class="mb-0 rectangle-collection">
              3666<br /><span class="rectangle-collect-text">listed count</span
              >
            </p>
          </div>
        </div>
        <p
          class="mt-3 mb-0 text-description-collect">
          Blood makes you related. Loyalty makes you family.
        </p>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Hero End -->

    <!-- Start Products -->
    <section class="mt-5">
      <div class="container-fluid">
        <div class="row">
          <!--start filters-->
          <div class="col-lg-3 col-md-3 d-none d-md-block">
            <div class="card border-0 sidebar sticky-bar bg-fa">
              <!-- CATAGORIES -->

              <div class="widget mt-4 pt-2">
                <p
                  class="widget-title"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: 0.3px;
                    text-transform: uppercase;
                    color: #747a80;
                  "
                >
                  FILTERS
                </p>
                <div>
                  <span class="badge badge-light">Buy Now</span>
                  <span class="badge badge-light">Filter 1</span>
                </div>
                <ul class="list-unstyled mt-4 mb-0 blog-categories">
                  <li>
                    <b-button
                      v-b-toggle.my-collapse1
                      block
                      variant="light"
                      class="bg-white"
                      style="
                        border-radius: 8px;
                        padding: 10px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: start;
                      "
                      ><a href="javascript:void(0)">Status </a
                      ><span class="menu-arrow"></span>
                    </b-button>

                    <b-collapse id="my-collapse1">
                      <b-card class="border-0">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                          <label class="form-check-label" for="defaultCheck1">
                            Buy Now
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                          <label class="form-check-label" for="defaultCheck2">
                            Has Offers
                          </label>
                        </div>
                      </b-card>
                    </b-collapse>
                  </li>

                  <li>
                    <b-button
                      v-b-toggle.my-collapse2
                      block
                      class="bg-white"
                      variant="light"
                      style="
                        border-radius: 8px;
                        padding: 10px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: start;
                      "
                      ><a href="javascript:void(0)">Blanket</a>
                    </b-button>

                    <b-collapse id="my-collapse2">
                      <b-card class="border-0">
                        <ul class="list-unstyled ml-1 mb-0 blog-categories">
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check21" />
                              <label for="check21">
                                Filter 1
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check22" />
                              <label for="check22">
                                Filter 2
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>

                  <li>
                    <b-button
                      v-b-toggle.my-collapse3
                      class="bg-white"
                      block
                      variant="light"
                      style="
                        border-radius: 8px;
                        padding: 10px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: start;
                      "
                      ><a href="javascript:void(0)">Blanket</a>
                    </b-button>
                    <b-collapse id="my-collapse3">
                      <b-card class="border-0">
                        <ul class="list-unstyled ml-1 mb-0 blog-categories">
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check31" />
                              <label for="check31">
                                Filter 1
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check32" />
                              <label for="check32">
                                Filter 2
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>

                  <li>
                    <b-button
                      v-b-toggle.my-collapse4
                      block
                      class="bg-white"
                      variant="light"
                      style="
                        border-radius: 8px;
                        padding: 10px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: start;
                      "
                      ><a href="javascript:void(0)">Blanket</a>
                    </b-button>
                    <b-collapse id="my-collapse4">
                      <b-card class="border-0">
                        <ul class="list-unstyled ml-1 mb-0 blog-categories">
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check41" />
                              <label for="check41">
                                Filter 1
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check42" />
                              <label for="check42">
                                Filter 2
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>

                  <li>
                    <b-button
                      v-b-toggle.my-collapse5
                      block
                      class="bg-white"
                      variant="light"
                      style="
                        border-radius: 8px;
                        padding: 10px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: start;
                      "
                      ><a href="javascript:void(0)">Blanket</a>
                    </b-button>
                    <b-collapse id="my-collapse5">
                      <b-card class="border-0">
                        <ul class="list-unstyled ml-1 mb-0 blog-categories">
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check51" />
                              <label for="check51">
                                Filter 1
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check52" />
                              <label for="check52">
                                Filter 2
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>

                  <li>
                    <b-button
                      v-b-toggle.my-collapse6
                      block
                      class="bg-white"
                      variant="light"
                      style="
                        border-radius: 8px;
                        padding: 10px;
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: start;
                      "
                      ><a href="javascript:void(0)">Blanket</a>
                    </b-button>
                    <b-collapse id="my-collapse6">
                      <b-card class="border-0">
                        <ul class="list-unstyled ml-1 mb-0 blog-categories">
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check61" />
                              <label for="check61">
                                Filter 1
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                          <li style="padding-bottom: 5px">
                            <div class="form-check">
                              <input type="checkbox" id="check62" />
                              <label for="check62">
                                Filter 2
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>
                </ul>
              </div>
              <!-- CATAGORIES -->
            </div>
          </div>
          <!--end col-->


          <!--End Filters-->

          <div class="col-lg-9 col-md-8 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
            <div
              class="row align-items-center bg-search-venix"
              style="border-radius: 16px"
            >
              <div class="col-lg-2 col-md-7 mt-1">
                <div class="section-title">
                  <p
                    class="mb-0"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 16px;
                      letter-spacing: 0.3px;
                      color: #3f4446;
                    "
                  >
                    <a href="javascript:void(0)" class="font-weight text-dark">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="iconovenix2"
                      >
                        >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 2.44531C4.26522 2.44531 4.51957 2.55067 4.70711 2.73821C4.89464 2.92574 5 3.1801 5 3.44531V5.54631C5.83204 4.69758 6.86643 4.07462 8.00574 3.7361C9.14506 3.39757 10.3518 3.35463 11.5123 3.61132C12.6728 3.868 13.7488 4.41587 14.6391 5.20331C15.5294 5.99075 16.2045 6.99185 16.601 8.11231C16.6491 8.23707 16.6717 8.37021 16.6674 8.50385C16.6632 8.63749 16.6322 8.76892 16.5763 8.89037C16.5203 9.01182 16.4406 9.12082 16.3418 9.21092C16.243 9.30102 16.1272 9.3704 16.0011 9.41494C15.875 9.45948 15.7413 9.47829 15.6078 9.47025C15.4744 9.46221 15.3439 9.42749 15.224 9.36813C15.1042 9.30878 14.9975 9.226 14.9103 9.12469C14.823 9.02338 14.7569 8.9056 14.716 8.77831C14.4141 7.92513 13.8865 7.16983 13.1892 6.59289C12.4919 6.01595 11.6512 5.639 10.7566 5.50219C9.86195 5.36539 8.94698 5.47386 8.10916 5.81605C7.27133 6.15824 6.54204 6.72133 5.999 7.44531H9C9.26522 7.44531 9.51957 7.55067 9.70711 7.73821C9.89464 7.92574 10 8.1801 10 8.44531C10 8.71053 9.89464 8.96488 9.70711 9.15242C9.51957 9.33996 9.26522 9.44531 9 9.44531H4C3.73478 9.44531 3.48043 9.33996 3.29289 9.15242C3.10536 8.96488 3 8.71053 3 8.44531V3.44531C3 3.1801 3.10536 2.92574 3.29289 2.73821C3.48043 2.55067 3.73478 2.44531 4 2.44531ZM4.008 11.5023C4.13184 11.4586 4.26308 11.4397 4.39422 11.4466C4.52537 11.4536 4.65386 11.4864 4.77235 11.543C4.89084 11.5997 4.99701 11.6791 5.0848 11.7768C5.17259 11.8745 5.24028 11.9885 5.284 12.1123C5.58586 12.9655 6.11355 13.7208 6.81082 14.2977C7.50809 14.8747 8.34883 15.2516 9.24344 15.3884C10.138 15.5252 11.053 15.4168 11.8908 15.0746C12.7287 14.7324 13.458 14.1693 14.001 13.4453H11C10.7348 13.4453 10.4804 13.34 10.2929 13.1524C10.1054 12.9649 10 12.7105 10 12.4453C10 12.1801 10.1054 11.9257 10.2929 11.7382C10.4804 11.5507 10.7348 11.4453 11 11.4453H16C16.2652 11.4453 16.5196 11.5507 16.7071 11.7382C16.8946 11.9257 17 12.1801 17 12.4453V17.4453C17 17.7105 16.8946 17.9649 16.7071 18.1524C16.5196 18.34 16.2652 18.4453 16 18.4453C15.7348 18.4453 15.4804 18.34 15.2929 18.1524C15.1054 17.9649 15 17.7105 15 17.4453V15.3443C14.168 16.193 13.1336 16.816 11.9943 17.1545C10.8549 17.4931 9.64821 17.536 8.48772 17.2793C7.32723 17.0226 6.25117 16.4748 5.36091 15.6873C4.47065 14.8999 3.79548 13.8988 3.399 12.7783C3.35526 12.6545 3.33634 12.5232 3.34333 12.3921C3.35031 12.2609 3.38306 12.1325 3.43971 12.014C3.49635 11.8955 3.57578 11.7893 3.67346 11.7015C3.77114 11.6137 3.88516 11.546 4.009 11.5023H4.008Z"
                          fill="#3F4446"
                        />
                      </svg>
                      41 Items
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-lg-7 col-md-7 mt-2 mb-2">
                <div class="card border-0 sidebar sticky-bar">
                  <!-- SEARCH -->
                  <div class="widget">
                    <div id="search2" class="widget-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchform"
                        class="searchform"
                      >
                        <div>
                          <input
                            type="text"
                            class=""
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: normal;
                              font-size: 12px;
                              line-height: 22px;
                              color: #b9bdbe;
                            "
                            placeholder="Search Keywords..."
                          />
                          <input
                            type="submit"
                            id="searchsubmit"
                            value="Search"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-lg-3 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="form">
                  <div class="form-group mb-0">
                    <select
                      class="form-control custom-select"
                      id="Sortbylist-job"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                      "
                    >
                      <option>Sort by latest</option>
                      <option>Sort by popularity</option>
                      <option>Sort by rating</option>
                      <option>Sort by price: low to high</option>
                      <option>Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->

            <!--Linda Modificado-->
            <div class="row">
              <div
                class="col-xlg-2 col-lg-3 col-md-3 col-sm-4 col-6 mt-4 pt-2"
                v-for="(data, i) in dataNftTokens"
                :key="i"
              >
                <a @click="viewSerie(data.token_series_id)">
                  <div
                    class="
                      card
                      shop-list
                      rounded
                      border-0
                      shadow
                      position-relative
                      overflow-hidden
                      blog
                    "
                  >
                    <div class="shop-image position-relative rounded shadow">
                      <img
                        :src="data.metadata.media"
                        class="card-img-top rounded-top"
                        alt=""
                      />
                    </div>
                    <div class="card-body content pt-2 p-1">
                      <div class="text-dark product-name title-nft-grid ">
                        {{ data.metadata.title }}
                      </div>
                      <div class="d-flex justify-content-between">
                        <p
                          class="text-warning small mb-0 mt-1 text-nft-description"
                        >
                          {{ data.metadata.description }}
                        </p>
                      </div>
                      <div class="row">
                        <div class="col col-lg-7 mt-0 pt-0">
                          <div class="d-flex justify-content-between">
                            <p
                              class="font-weight-bold text-dark small mb-0 mt-1 price-nft-grid"
                            >
                              0.75<a
                                class="font-weight-normal text-dark ml-1 coin-nft-grid"
                                >NEAR</a
                              >
                            </p>
                          </div>
                        </div>
                        <div class="col col-lg-5 mt-0 pt-1">
                          <div class="d-flex justify-content-between">
                            <p
                              class="
                                font-weight-normal
                                text-dark
                                small
                                mb-0
                                mt-1
                                last-nft-grid
                              "
                            >
                              Last
                              <a
                                class="font-weight-normal text-dark ml-2"
                              >
                                0.55
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End Products -->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <!--<Switcher />-->
    <!-- Back to top -->
    <!-- Back to top -->
  </div>
</template>
