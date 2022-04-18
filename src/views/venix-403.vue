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

/**
 * Shop-product-detail component
 */
export default {
  data() {
    return {
      countval: 1,
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
  methods: {
    increment() {
      this.countval++;
    },
    decrement() {
      if (this.countval > 0) this.countval--;
    },
  },
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
    <section class="bg-half d-table w-100 container-fluid"
      style="background: no-repeat url('images/nft/sorry.png');background-size: contain; background-position: 0% 190px;">

      <div class="container-fluid" >
        <div class="row ">


          <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-md-0">
                    <p class="mt-0 mb-2" 
                        style="font-family: Inter;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 52px;
                        line-height: 63px;
                        letter-spacing: -0.04em;
                        mix-blend-mode: normal;">Something went <br/>WRONG!
                    </p>
            <button 
            type="button" 
            class="btn btn-dark" 
            style="font-size: 12px;font-weight: 600;"
            onclick="location.href='/index-developer'">
                Go Back To Homepage
            </button>

            </div>
          </div>
          <div class="col-md-6 img-texto">
               <center>
                <img
                  src="images/nft/pepe.png"
                  class="card-img-top  rounded-top mt-1"
                  alt=""
                  style="width: 281.39px;
                       height: 565.33px;"
                />
              </center>
              <span class="mt-5 mb-5 text-center ml-0" 
                        style="font-family: Inter;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 52px;
                                line-height: 63px;
                                letter-spacing: -0.04em;
                                color: #3F4446;
                                mix-blend-mode: normal;">403
                    </span>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->



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
