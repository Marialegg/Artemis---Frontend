<script>
import {
  ArrowUpIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;
/**
 * Index-developer component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
    Carousel,
    Slide,
  },
  data() {
    return {
      dataUpcoming: [],
      dataNew: [
        {
          img: 'images/new/nc1.png',
          name: 'PixTapes',
          description: '9994 Items',
        },
        {
          img: 'images/new/nc2.png',
          name: 'SolSand',
          description: '2500 Items',
        },
        {
          img: 'images/new/nc3.png',
          name: 'Alien Universe',
          description: '5555 Items',
        },
        {
          img: 'images/new/nc4.png',
          name: 'Monke-Bandist',
          description: '333 Items',
        },
      ],
    };
  },
  mounted() {
    this.rankingContract();
    this.newCollectionContract();
  },
  methods: {
    async rankingContract() {
      const CONTRACT_NAME = "venix.hrpalencia.testnet";
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ["get_Best_sellers"],
        sender: wallet.account(),
      });
      if (wallet.isSignedIn()) {
        await contract
          .get_Best_sellers({
            token_series_id: this.serieId,
          })
          .then((response) => {
            console.log(response);
          });
      }
    },
    newCollectionContract() {
      fetch("http://157.230.2.213:85/venix/apis/v1/coleccion/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.dataUpcoming = data;
        });
    },
  },
};
</script>

<template>
  <div>
    <Navbar :isIcons="true" />

    <!-- Hero Start -->
    <section class="fondovenix bg-fa d-table w-100">
      <div class="container mtc-sm-25 mtc-7 mtc-md-12">
        <div class="row mtc-12">
          <div class="col-md-8 col-12">
            <div class="title-heading">
              <p class="font-weight-bold header-discover">
                Discover, collect, and sell
              </p>
              <p class="font-weight-bold header-discover">
                NFTs on NEAR protocol
              </p>
              <br />
              <button
                type="button"
                class="btn btn-dark btn-lg"
                style="font-size: 12px"
              >
                Explore Collections
              </button>
              <p
                class="para-desc mt-4 align-items-bottom darkvenix d-none d-lg-block"
                style="font-size: 16px; font-weight: 500; color: #3f4446"
              >
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Vivamus ac leo pretium faucibus. Aenean placerat. Nullam lectus
                justo, vulputate eget mollis.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 d-none d-md-block">
            <img
              src="images/digital/NFT-group.png"
              class="img-fluid mx-auto float-right"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Upcoming Collections start -->
    <section>
      <div class="container mt-4">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center mb-0 pb-2">
              <p class="font-weight-bold pt-5" style="font-size: 20px">
                Upcoming Collections
              </p>
            </div>
          </div>
          <!--end col-->
        </div>

        <div class="row">
          <!--<carousel
            class="owl-carousel owl-theme"
            dir="ltr"
            :per-page="4"
          >-->
            <div
              class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4"
              v-for="item, index in dataUpcoming"
              :key="index"
            >
              <!--<slide
                :data-index="index"
                :data-name="item.titulo"
              >-->
                <div
                  class="card shop-list rounded border-0 shadow position-relative overflow-hidden"
                  style="height: 18rem"
                >
                  <div class="position-relative">
                    <img
                      :src="item.banner"
                      class="card-img-top rounded-top"
                      alt="..."
                    />
                    <div class="overlay rounded-top bg-dark"></div>
                  </div>
                  <div class="card-body content">
                    <p
                      class="mb-0 darkvenix"
                      style="font-size: 16px; font-weight: 700; color: #161616"
                    >
                      {{ item.titulo }}
                    </p>
                    <p>
                      <a
                        class="mb-0 darkvenix"
                        style="font-size: 16px; font-weight: 500; color: #3f4446"
                      >
                        {{ item.texto_descriptivo }}
                      </a>
                    </p>
                  </div>
                  <div class="card-actions p-3">
                    <div class="justify-content-between mt-0">
                      <ul class="list-unstyled mb-0 mt-0">
                        <li class="list-inline-item">
                          <a :href="item.url_twitter" class="font-weight text-dark">
                            <svg
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="iconovenix2"
                            >
                              <path
                                d="M7.2564 19.1995C15.7661 19.1995 20.4206 12.1489 20.4206 6.03527C20.4206 5.83456 20.4206 5.63499 20.4071 5.43766C21.3127 4.78202 22.0943 3.97028 22.7152 3.04048C21.8707 3.41483 20.9749 3.66037 20.0576 3.76888C21.0235 3.19051 21.7464 2.2809 22.0917 1.20932C21.1837 1.74817 20.1903 2.12798 19.1544 2.33237C18.4569 1.59017 17.5341 1.09864 16.529 0.933868C15.5239 0.769099 14.4925 0.940289 13.5945 1.42093C12.6966 1.90158 11.9821 2.66486 11.5617 3.5926C11.1414 4.52034 11.0386 5.56078 11.2694 6.55282C9.42986 6.46063 7.6303 5.98264 5.9875 5.14988C4.34469 4.31711 2.89538 3.14819 1.73362 1.71898C1.14201 2.73739 0.960782 3.943 1.22683 5.09034C1.49287 6.23768 2.18619 7.24049 3.16562 7.89461C2.42962 7.87326 1.70955 7.67526 1.06611 7.3173V7.37594C1.06655 8.44407 1.43639 9.47917 2.11293 10.3057C2.78947 11.1323 3.73105 11.6994 4.77803 11.911C4.09677 12.0967 3.38199 12.1237 2.68866 11.9899C2.98427 12.9094 3.5599 13.7135 4.33504 14.2897C5.11018 14.8659 6.04605 15.1854 7.01172 15.2034C6.0523 15.9573 4.95368 16.5146 3.7787 16.8435C2.60372 17.1724 1.37542 17.2665 0.164062 17.1203C2.28004 18.4782 4.74216 19.1985 7.2564 19.195"
                                fill="#3F4446"
                              />
                            </svg>
                          </a>
                        </li>
                        <li
                          class="list-inline-item"
                          style="margin: 0px 0px 0px 16px"
                        >
                          <a :href="item.url_discord" class="rounded">
                            <svg
                              width="23"
                              height="20"
                              viewBox="0 0 18 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="iconovenix2"
                            >
                              <path
                                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                                fill="#3F4446"
                              />
                            </svg>
                          </a>
                        </li>
                        <li
                          class="list-inline-item"
                          style="margin: 0px 0px 0px 16px"
                        >
                          <a :href="item.url_pagina_web" class="rounded">
                            <svg
                              width="23"
                              height="24"
                              viewBox="0 0 23 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="iconovenix2"
                            >
                              <g clip-path="url(#clip0_3_175)">
                                <path
                                  d="M11.6234 21.4325C16.8128 21.4325 21.0197 17.2256 21.0197 12.0362C21.0197 6.84676 16.8128 2.63989 11.6234 2.63989C6.43392 2.63989 2.22705 6.84676 2.22705 12.0362C2.22705 17.2256 6.43392 21.4325 11.6234 21.4325Z"
                                  stroke="#3F4446"
                                  stroke-width="2.25511"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.22705 12.0362H21.0197"
                                  stroke="#3F4446"
                                  stroke-width="2.25511"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.6238 2.63989C13.974 5.21293 15.3097 8.55208 15.3823 12.0362C15.3097 15.5203 13.974 18.8595 11.6238 21.4325C9.27348 18.8595 7.93782 15.5203 7.86523 12.0362C7.93782 8.55208 9.27348 5.21293 11.6238 2.63989V2.63989Z"
                                  stroke="#3F4446"
                                  stroke-width="2.25511"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3_175">
                                  <rect
                                    width="22.5511"
                                    height="22.5511"
                                    fill="white"
                                    transform="translate(0.348145 0.76062)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              <!--</slide>-->
            </div>
          <!--</carousel>-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Upcoming Collections End -->

    <!-- Hero End -->

    <!-- Start -->
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center mb-0 pb-2">
              <p class="font-weight-bold mb-0" style="font-size: 20px">
                Ranking
              </p>
            </div>
          </div>
          <!--end col-->
        </div>

        <div class="row align-items-center mt-4">
          <div class="col-lg-4 col-md-7"></div>
          <!--end col-->

          <div class="col-lg-2 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="form custom-form">
              <div class="form-group mb-0">
                <select
                  class="form-control custom-select"
                  id="Sortbylist-job"
                >
                  <option>Sort by Volume</option>
                  <option>Sort by popularity</option>
                  <option>Sort by rating</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="form custom-form">
              <div class="form-group mb-0">
                <select
                  class="form-control custom-select"
                  id="Sortbylist-job"
                >
                  <option>last 24 hours</option>
                  <option>last 7 days</option>
                  <option>last 30 days</option>
                </select>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-6 col-lg-4 mt-3">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2 p-0">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    1
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    2
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    3
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    4
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    5
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3 d-none d-md-block">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    6
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3 d-none d-md-block">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2 p-0">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    7
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3 d-none d-md-block">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2 p-0">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    8
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-3 d-none d-md-block">
            <router-link to="/venix-grids" class="text-dark">
              <div class="row justify-content-center align-items-center">
                <div class="col-1 col-md-2 p-0">
                  <p
                    class="text-black"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16.7992px;
                      line-height: 25px;
                      text-align: center;
                    "
                  >
                    9
                  </p>
                </div>
                <div class="col-10 p-0">
                  <div class="card blog border-0 shadow overflow-hidden p-2">
                    <div class="row align-items-center no-gutters">
                      <div class="col-2">
                        <img
                          src="images/nft/CryptoSkulls.png"
                          class="img-fluid border-0"
                        />
                      </div>
                      <!--end col-->
                      <div class="col-6 pl-3">
                        <router-link
                          to="/venix-grids"
                          class="text-dark"
                          style="
                            color: #000000;
                            font-family: Inter;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14.6993px;
                            line-height: 22px;
                          "
                          >CryptoSkulls
                        </router-link>
                        <div class="mt-1">
                          <p
                            class="mb-1 text-left"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 12px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            Floor Price: 25
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-1">
                          <p
                            class="mb-0 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 600;
                              font-size: 14.6993px;
                              line-height: 25px;
                              text-align: right;
                              color: #34c77b;
                            "
                          >
                            +273k%
                          </p>
                        </div>
                        <div class="mt-0">
                          <p
                            class="mb-1 text-right mr-1"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 14.6993px;
                              line-height: 22px;
                              color: #747a80;
                            "
                          >
                            13,958.83
                          </p>
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end blog post-->
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <section>
      <div class="container mt-5">
        <div class="row mt-5">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <p class="font-weight-bold mb-0" style="font-size: 20px">
                New Collections
              </p>
            </div>
          </div>
          <!--end col-->
        </div>

        <div class="row">
          <!--<carousel
            class="owl-carousel owl-theme"
            dir="ltr"
            :per-page="4"
          >-->
            <div
              class="col-12 col-sm-6 col-md-4 col-lg-3 mt-2"
              v-for="item, index in dataNew"
              :key="index"
            >
            <!--<Slide
              v-for="item in dataUpcoming"
              :key="item.id"
              :v-show="item.upcoming == false"
            >-->
              <div class="card border-0 rounded bg-fa">
                <div class="position-relative">
                  <router-link to="/venix-grids"
                    ><img
                      :src="item.img"
                      class="card-img-top blog rounded-top"
                      alt="..."
                  /></router-link>

                  <div class="overlay rounded-top bg-dark"></div>
                </div>
                <div class="card-body content">
                  <p
                    class="font-weight-bold mb-0 text-center"
                    style="font-size: 15.53px"
                  >
                    {{ item.name }}
                  </p>
                  <p class="text-center">
                    <a
                      href="javascript:void(0)"
                      class="font-weight-bold text-muted"
                      style="font-size: 14px"
                      >
                        {{ item.description }}
                      </a
                    >
                  </p>
                </div>
              </div>
            <!--</Slide>-->
            </div>
          <!--</carousel>-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
      <!--end container-->
    <!-- End -->
    <!-- Section End -->
    <Footer />
    <!-- Footer End -->
    <!--<Switcher />-->
    <!-- Back to top -->

    <!-- Back to top -->
  </div>
</template>
