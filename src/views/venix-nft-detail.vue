<script>
import {
  ArrowUpIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
  MessageCircleIcon,
  MailIcon,
  UserIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
import { WalletAccount } from 'near-api-js';
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;

/**
 * Shop-product-detail component
 */
export default {
  data() {
    return {
      countval: 1,
      //serieId: this.$route.params.token_series_id,
      serieId: localStorage.serieId,
      dataNftToken: [],
      dataNftTokens: [],
      sesion: localStorage.sesion,
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    VueSlickCarousel,
    HeartIcon,
    EyeIcon,
    ShoppingCartIcon,
    MessageCircleIcon,
    MailIcon,
    UserIcon,
  },
  mounted() {
    console.log(this.sesion)
    this.nft_serie_id();
    this.nftTokensContract()
  },
  methods: {
    increment() {
      this.countval++;
    },
    decrement() {
      if (this.countval > 0) this.countval--;
    },
    async nft_serie_id() {
      const CONTRACT_NAME = "venix.hrpalencia.testnet";
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ["get_nft_series_single"],
        sender: wallet.account(),
      });
      await contract.get_nft_series_single({
        token_series_id: this.serieId,
      })
      .then((response) => {
        //console.log(response);
        this.dataNftToken = response;
      });
    },
    async buy_nft() {
      const CONTRACT_NAME = 'venix.hrpalencia.testnet'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        changeMethods: ["nft_buy"],
        sender: wallet.account(),
      })
      await contract.nft_buy({
        token_series_id: this.serieId,
        receiver_id: wallet.getAccountId(),
      }, "300000000000000", // attached GAS (optional)
        "1011280000000000000000000" )
      .then((response) => {
        console.log(response);
      });
    },
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
      this.$router.go(0)
    },
  }
};
</script>

<template>
  <div>
    <Navbar :isIcons="true" />

    <!-- Hero Start -->

    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <section class="section">
      <div class="container mt-nft-detail">
        <div class="row">
          <div class="col-md-4">
            <div>
              <img
                :src="dataNftToken.metadata.media"
                class="card-img-top rounded"
                alt=""
              />
            </div>

            <div
              class="
                card
                shop-list
                border-0
                shadow
                position-relative
                overflow-hidden
                mt-3
              "
            >
              <div class="row mt-0">
                <div class="col-md-12">
                  <div
                    class="card-header text-bold small font-weight-bold"
                    style="font-size: 14px"
                  >
                    Details
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        Mint address
                      </p>
                    </div>
                    <div class="col-md-5 m">
                      <p
                        class="font-weight-normal mb-0 text-right"
                        style="font-size: 14px"
                      >
                        WnDMV ... eMH
                      </p>
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        Token address
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p
                        class="font-weight-normal mb-0 text-right"
                        style="font-size: 14px"
                      >
                        BhvCb ... Um8
                      </p>
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        Owner
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p
                        class="font-weight-normal mb-0 text-right"
                        style="font-size: 14px"
                      >
                        9UgtP ... q37
                      </p>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        Artist Royalties
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p
                        class="font-weight-normal mb-0 text-right"
                        style="font-size: 14px"
                      >
                        5%
                      </p>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        Transaction Fee
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p
                        class="font-weight-normal mb-0 text-right"
                        style="font-size: 14px"
                      >
                        2%
                      </p>
                    </div>
                  </div>
                  <div class="row mt-2 mb-3">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        Listing/Bidding/Cancel
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p
                        class="font-weight-normal mb-0 text-right"
                        style="font-size: 14px"
                      >
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="
                card
                shop-list
                border-0
                shadow
                position-relative
                overflow-hidden
                mt-3
              "
            >
              <div class="row mt-0">
                <div class="col-md-12">
                  <div
                    class="card-header text-bold small font-weight-bold"
                    style="font-size: 14px"
                  >
                    Description
                  </div>
                  <div class="row mt-3 mb-3">
                    <div class="col-md-1"></div>
                    <div class="col-md-11">
                      <p class="font-weight-bold mb-0" style="font-size: 14px">
                        {{ dataNftToken.metadata.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-8 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-md-0">
              <p
                class="mt-0 mb-2"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 19px;
                  display: flex;
                  align-items: center;
                  letter-spacing: -0.04em;
                  color: #ff6b3b;
                "
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="iconovenix2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.83003 12.8283L5.92093 13.2354C5.52548 13.4126 5.06013 13.2878 4.80628 12.9369L4.22253 12.1296C4.14619 12.0241 4.02851 11.9561 3.89887 11.9428L2.90796 11.8409C2.47699 11.7965 2.13635 11.4559 2.09199 11.0249L1.99011 10.034C1.97681 9.90437 1.90877 9.7867 1.80324 9.71036L0.996011 9.12661C0.645039 8.87278 0.520307 8.40741 0.697359 8.01196L1.10458 7.10286C1.1578 6.98402 1.1578 6.84805 1.10458 6.72919L0.697359 5.82009C0.520305 5.42464 0.645036 4.95929 0.996011 4.70544L1.80324 4.12169C1.90877 4.04535 1.97681 3.92767 1.99011 3.79803L2.09199 2.80713C2.13636 2.37616 2.47699 2.03552 2.90796 1.99115L3.89887 1.88928C4.02851 1.87598 4.14618 1.80794 4.22253 1.7024L4.80628 0.89518C5.06011 0.544208 5.52548 0.419477 5.92093 0.596528L6.83003 1.00375C6.94887 1.05697 7.08484 1.05697 7.2037 1.00375L8.1128 0.596528C8.50825 0.419475 8.9736 0.544206 9.22745 0.89518L9.8112 1.7024C9.88754 1.80794 10.0052 1.87598 10.1349 1.88928L11.1258 1.99115C11.5567 2.03553 11.8974 2.37616 11.9417 2.80713L12.0436 3.79803C12.0569 3.92768 12.125 4.04535 12.2305 4.12169L13.0377 4.70544C13.3887 4.95927 13.5134 5.42464 13.3363 5.82009L12.9291 6.72919C12.8759 6.84803 12.8759 6.984 12.9291 7.10286L13.3363 8.01196C13.5134 8.40741 13.3887 8.87276 13.0377 9.12661L12.2305 9.71036C12.125 9.7867 12.0569 9.90438 12.0436 10.034L11.9417 11.0249C11.8974 11.4559 11.5567 11.7965 11.1258 11.8409L10.1349 11.9428C10.0052 11.9561 9.88755 12.0241 9.8112 12.1296L9.22745 12.9369C8.97362 13.2878 8.50825 13.4126 8.1128 13.2354L7.2037 12.8283C7.08486 12.7751 6.94889 12.7751 6.83003 12.8283ZM4.54689 6.05115L3.7711 6.82695L6.37545 9.43129L10.3734 5.43334L9.59767 4.65755L6.37549 7.8795L4.54689 6.05115Z"
                    fill="#FF6B3B"
                  />
                </svg>
                {{ dataNftToken.creator_id }}
              </p>
              <p
                class="mt-0 mb-3"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 25px;
                  line-height: 30px;
                  display: flex;
                  align-items: center;
                  letter-spacing: -0.04em;
                  mix-blend-mode: normal;
                "
              >
                {{ dataNftToken.metadata.title }}
              </p>
              <p
                class="mx-auto mb-4"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 20px;
                  color: #747a80;
                "
              >
                Owned by:
                <span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 24px;
                    color: #ff6b3b;
                  "
                  >
                  {{ dataNftToken.creator_id }}
                  </span
                >
              </p>
              <div
                class="
                  card
                  shop-list
                  rounded
                  border-0
                  shadow
                  position-relative
                  overflow-hidden
                "
              >
                <div class="row mt-1">
                  <div class="col-md-6">
                    <p
                      class="font-weight-normal text-dark small ml-3 mb-0 mt-2"
                      style="font-size: 14px"
                    >
                      Current Price:
                    </p>
                    <p
                      class="font-weight-bold text-dark small ml-3 mb-0 mt-1"
                      style="font-size: 24px"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mb-1"
                      >
                        <path
                          d="M12.4268 24.237C10.7868 24.237 9.24685 23.927 7.80685 23.307C6.38685 22.707 5.12685 21.867 4.02685 20.787C2.94685 19.687 2.09685 18.417 1.47685 16.977C0.856846 15.537 0.546846 13.997 0.546846 12.357C0.546846 10.717 0.856846 9.17704 1.47685 7.73704C2.09685 6.29704 2.94685 5.03704 4.02685 3.95704C5.12685 2.85704 6.38685 2.00704 7.80685 1.40704C9.24685 0.78704 10.7868 0.477041 12.4268 0.477041C14.0668 0.477041 15.6068 0.78704 17.0468 1.40704C18.4868 2.00704 19.7468 2.85704 20.8268 3.95704C21.9268 5.03704 22.7768 6.29704 23.3768 7.73704C23.9968 9.17704 24.3068 10.717 24.3068 12.357C24.3068 13.997 23.9968 15.537 23.3768 16.977C22.7768 18.417 21.9268 19.687 20.8268 20.787C19.7468 21.867 18.4868 22.707 17.0468 23.307C15.6068 23.927 14.0668 24.237 12.4268 24.237ZM12.4268 22.167C13.7868 22.167 15.0568 21.917 16.2368 21.417C17.4168 20.897 18.4568 20.187 19.3568 19.287C20.2568 18.387 20.9568 17.347 21.4568 16.167C21.9768 14.987 22.2368 13.717 22.2368 12.357C22.2368 10.997 21.9768 9.72704 21.4568 8.54704C20.9568 7.36704 20.2568 6.32704 19.3568 5.42704C18.4568 4.52704 17.4168 3.82704 16.2368 3.32704C15.0568 2.80704 13.7868 2.54704 12.4268 2.54704C11.0668 2.54704 9.79685 2.80704 8.61685 3.32704C7.43685 3.82704 6.39685 4.52704 5.49685 5.42704C4.59685 6.32704 3.88685 7.36704 3.36685 8.54704C2.86685 9.72704 2.61685 10.997 2.61685 12.357C2.61685 13.717 2.86685 14.987 3.36685 16.167C3.88685 17.347 4.59685 18.387 5.49685 19.287C6.39685 20.187 7.43685 20.897 8.61685 21.417C9.79685 21.917 11.0668 22.167 12.4268 22.167ZM12.4268 20.727C11.2668 20.727 10.1768 20.517 9.15685 20.097C8.15685 19.657 7.26685 19.057 6.48685 18.297C5.72685 17.517 5.12685 16.627 4.68685 15.627C4.26685 14.607 4.05685 13.517 4.05685 12.357C4.05685 11.197 4.26685 10.117 4.68685 9.11704C5.12685 8.09704 5.72685 7.20704 6.48685 6.44704C7.26685 5.66704 8.15685 5.06704 9.15685 4.64704C10.1768 4.20704 11.2668 3.98704 12.4268 3.98704C13.5868 3.98704 14.6768 4.20704 15.6968 4.64704C16.7168 5.06704 17.6068 5.66704 18.3668 6.44704C19.1468 7.20704 19.7468 8.09704 20.1668 9.11704C20.6068 10.117 20.8268 11.197 20.8268 12.357C20.8268 13.517 20.6068 14.607 20.1668 15.627C19.7468 16.627 19.1468 17.517 18.3668 18.297C17.6068 19.057 16.7168 19.657 15.6968 20.097C14.6768 20.517 13.5868 20.727 12.4268 20.727ZM12.4268 18.657C13.6068 18.657 14.6668 18.377 15.6068 17.817C16.5668 17.257 17.3268 16.497 17.8868 15.537C18.4668 14.577 18.7568 13.517 18.7568 12.357C18.7568 11.177 18.4668 10.117 17.8868 9.17704C17.3268 8.21704 16.5668 7.45704 15.6068 6.89704C14.6668 6.33704 13.6068 6.05704 12.4268 6.05704C11.2668 6.05704 10.2068 6.33704 9.24685 6.89704C8.28685 7.45704 7.52685 8.21704 6.96685 9.17704C6.40685 10.117 6.12685 11.177 6.12685 12.357C6.12685 13.517 6.40685 14.577 6.96685 15.537C7.52685 16.497 8.28685 17.257 9.24685 17.817C10.2068 18.377 11.2668 18.657 12.4268 18.657Z"
                          fill="#161616"
                        />
                        <path
                          d="M12.4268 24.237C10.7868 24.237 9.24685 23.927 7.80685 23.307C6.38685 22.707 5.12685 21.867 4.02685 20.787C2.94685 19.687 2.09685 18.417 1.47685 16.977C0.856846 15.537 0.546846 13.997 0.546846 12.357C0.546846 10.717 0.856846 9.17704 1.47685 7.73704C2.09685 6.29704 2.94685 5.03704 4.02685 3.95704C5.12685 2.85704 6.38685 2.00704 7.80685 1.40704C9.24685 0.78704 10.7868 0.477041 12.4268 0.477041C14.0668 0.477041 15.6068 0.78704 17.0468 1.40704C18.4868 2.00704 19.7468 2.85704 20.8268 3.95704C21.9268 5.03704 22.7768 6.29704 23.3768 7.73704C23.9968 9.17704 24.3068 10.717 24.3068 12.357C24.3068 13.997 23.9968 15.537 23.3768 16.977C22.7768 18.417 21.9268 19.687 20.8268 20.787C19.7468 21.867 18.4868 22.707 17.0468 23.307C15.6068 23.927 14.0668 24.237 12.4268 24.237ZM12.4268 22.167C13.7868 22.167 15.0568 21.917 16.2368 21.417C17.4168 20.897 18.4568 20.187 19.3568 19.287C20.2568 18.387 20.9568 17.347 21.4568 16.167C21.9768 14.987 22.2368 13.717 22.2368 12.357C22.2368 10.997 21.9768 9.72704 21.4568 8.54704C20.9568 7.36704 20.2568 6.32704 19.3568 5.42704C18.4568 4.52704 17.4168 3.82704 16.2368 3.32704C15.0568 2.80704 13.7868 2.54704 12.4268 2.54704C11.0668 2.54704 9.79685 2.80704 8.61685 3.32704C7.43685 3.82704 6.39685 4.52704 5.49685 5.42704C4.59685 6.32704 3.88685 7.36704 3.36685 8.54704C2.86685 9.72704 2.61685 10.997 2.61685 12.357C2.61685 13.717 2.86685 14.987 3.36685 16.167C3.88685 17.347 4.59685 18.387 5.49685 19.287C6.39685 20.187 7.43685 20.897 8.61685 21.417C9.79685 21.917 11.0668 22.167 12.4268 22.167ZM12.4268 20.727C11.2668 20.727 10.1768 20.517 9.15685 20.097C8.15685 19.657 7.26685 19.057 6.48685 18.297C5.72685 17.517 5.12685 16.627 4.68685 15.627C4.26685 14.607 4.05685 13.517 4.05685 12.357C4.05685 11.197 4.26685 10.117 4.68685 9.11704C5.12685 8.09704 5.72685 7.20704 6.48685 6.44704C7.26685 5.66704 8.15685 5.06704 9.15685 4.64704C10.1768 4.20704 11.2668 3.98704 12.4268 3.98704C13.5868 3.98704 14.6768 4.20704 15.6968 4.64704C16.7168 5.06704 17.6068 5.66704 18.3668 6.44704C19.1468 7.20704 19.7468 8.09704 20.1668 9.11704C20.6068 10.117 20.8268 11.197 20.8268 12.357C20.8268 13.517 20.6068 14.607 20.1668 15.627C19.7468 16.627 19.1468 17.517 18.3668 18.297C17.6068 19.057 16.7168 19.657 15.6968 20.097C14.6768 20.517 13.5868 20.727 12.4268 20.727ZM12.4268 18.657C13.6068 18.657 14.6668 18.377 15.6068 17.817C16.5668 17.257 17.3268 16.497 17.8868 15.537C18.4668 14.577 18.7568 13.517 18.7568 12.357C18.7568 11.177 18.4668 10.117 17.8868 9.17704C17.3268 8.21704 16.5668 7.45704 15.6068 6.89704C14.6668 6.33704 13.6068 6.05704 12.4268 6.05704C11.2668 6.05704 10.2068 6.33704 9.24685 6.89704C8.28685 7.45704 7.52685 8.21704 6.96685 9.17704C6.40685 10.117 6.12685 11.177 6.12685 12.357C6.12685 13.517 6.40685 14.577 6.96685 15.537C7.52685 16.497 8.28685 17.257 9.24685 17.817C10.2068 18.377 11.2668 18.657 12.4268 18.657Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                      </svg>

                      0.75<a
                        class="font-weight-normal text-dark ml-1"
                        style="font-size: 16px"
                        >NEAR</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-md-6"></div>
                <div class="row mt-1">
                  <div class="col-md-6">
                    <div class="mt-4 pt-2 mb-3 ml-3">
                      <button
                        :disabled="sesion==false"
                        class="btn btn-dark btn-block"
                        @click="buy_nft()"
                        >Buy Now</button
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mt-4 pt-2 mb-3 mr-3">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-block"
                        >Make Offer</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="
                  card
                  shop-list
                  border-0
                  shadow
                  position-relative
                  overflow-hidden
                  mt-3
                "
              >
                <div class="row mt-0">
                  <div class="col-md-12">
                    <div
                      class="card-header text-muted small"
                      style="font-size: 14px"
                    >
                      No Offers
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="
                  card
                  shop-list
                  border-0
                  shadow
                  position-relative
                  overflow-hidden
                  mt-3
                "
              >
                <div class="row mt-0">
                  <div class="col-lg-12">
                    <div
                      class="card-header text-bold small font-weight-bold"
                      style="font-size: 14px"
                    >
                      Attributes
                    </div>

                    <div class="row lg-2 mb-2">
                      <div class="col-md-1 ml-0"></div>
                      <div class="col-md-2 ml-0">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-2 mb-2">
                      <div class="col-md-1 ml-0"></div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div
                          class="
                            card
                            shop-list
                            border-0
                            shadow
                            position-relative
                            overflow-hidden
                            mt-2
                            mb-2
                          "
                        >
                          <div class="col-md-12">
                            <p
                              class="font-weight-bold mb-0"
                              style="font-size: 16px"
                            >
                              Role
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              Chimpion
                            </p>
                            <p
                              class="font-weight-normal mb-0"
                              style="font-size: 14px"
                            >
                              47.1%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  card
                  shop-list
                  border-0
                  shadow
                  position-relative
                  overflow-hidden
                  mt-3
                "
              >
                <div class="row mt-0">
                  <div class="col-md-12">
                    <div
                      class="card-header text-bold small font-weight-bold"
                      style="font-size: 14px"
                    >
                      Price History
                    </div>
                    <div class="row mt-3 mb-3">
                      <div class="col-md-12">
                        <div>
                          <img
                            src="images/nft/Graph.png"
                            class="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100">
        <div
          class="
            card
            shop-list
            border-0
            shadow
            position-relative
            overflow-hidden
            mt-3
            mb-3
            bg-white
          "
        >
          <div class="row mt-0">
            <div class="col-md-12">
              <div
                class="card-header text-normal small"
                style="font-size: 14px"
              >
                Activity
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!--end col-->

          <div
            class="
              card
              shop-list
              border-0
              shadow
              position-relative
              overflow-hidden
              mt-3
              ml-3
              mr-3
            "
          >
            <div class="row mt-1 justify-content-center">
              <div class="col-lg-12">
                <div
                  class="card-header font-weight-bold text-dark small"
                  style="font-size: 14px"
                >
                  More from this collection
                </div>
                <carousel
                  id="customer-testi"
                  class="owl-carousel owl-theme"
                  dir="ltr"
                  :per-page="5"
                >
                  <Slide
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
                          m-2
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
                            {{ data.metadata.title }}
                          <div class="d-flex justify-content-between">
                            <p
                              class="text-warning small mb-0 mt-1"
                              style="font-size: 9px"
                            >
                              {{ data.metadata.description }}
                            </p>
                          </div>
                          <div class="row">
                            <div class="col-lg-7 col-md-6 col-12 mt-0 pt-0">
                              <div class="d-flex justify-content-between">
                                <p
                                  class="
                                    font-weight-bold
                                    text-dark
                                    small
                                    mb-0
                                    mt-1
                                  "
                                  style="font-size: 18px"
                                >
                                  0.75<a
                                    class="font-weight-normal text-dark ml-1"
                                    style="font-size: 12px"
                                    >NEAR</a
                                  >
                                </p>
                              </div>
                            </div>
                            <div class="col-lg-5 col-md-6 col-12 mt-0 pt-1">
                              <div class="d-flex justify-content-between">
                                <p
                                  class="
                                    font-weight-normal
                                    text-dark
                                    small
                                    mb-0
                                    mt-1
                                  "
                                  style="font-size: 10px"
                                >
                                  Last<a
                                    class="font-weight-normal text-dark ml-2"
                                    style="font-size: 12px"
                                    >0.55</a
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Slide>
                </carousel>
              </div>
            </div>
          </div>

          <!--end col-->
        </div>
        <!--end row-->
      </div>

      <!--end container-->
    </section>
    <!--end section-->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <!--<Switcher />-->
    <!-- Back to top -->
    <!-- Back to top -->
  </div>
</template>
