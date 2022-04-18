<script>
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;
/**
 * Navbar component
 */
export default {
  data() {
    return {
      isCondensed: false,
      user: "Connect Wallet",
      sesion: false,
      titleButton: "Login",
      darktheme: false,
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
    isIcons: {
      type: Boolean,
    },
  },
  mounted() {
    this.isSigned();
    window.onscroll = function () {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        //document.getElementById("back-to-top").style.display = "inline";
      } else {
        //document.getElementById("back-to-top").style.display = "none";
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
            }
          }
        }
      }
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // console.log(urlParams.get("account_id"));
    localStorage.setItem("user", urlParams.get("account_id"));
    var user = localStorage.getItem("user");
    // console.log(user);
    //this.user = user;
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    },

    async loginNear() {
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      const wallet = new WalletConnection(near);
      if (!this.sesion) {
        wallet.requestSignIn(
          "venix.hrpalencia.testnet", // contract requesting access
          "Example App", // optional
          "http://localhost:8080/venix/", // optional
          "https://yahoo.com" // optional
        );
      } else if (this.sesion) {
        wallet.signOut();
        this.user = "Login NEAR";
        this.sesion = false;
        this.titleButton = "Login";
        this.$router.go();
      }
    },
    async isSigned() {
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      if (wallet.isSignedIn()) {
        this.sesion = true;
        this.titleButton = "Logout";
        // returns account Id as string
        const walletAccountId = wallet.getAccountId();
        this.user = walletAccountId;
      }
    },
  },
};
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <div class="col clearfix">
              <!-- Logo container-->
            <router-link class="logo" to="/" v-if="navLight !== true">
              <img
                src="images/venix/logo-dark-venix.png"
                class="colorlogovenix"
                height="50"
                alt=""
              />
            </router-link>
            <router-link class="logo" to="/" v-else>
              <img
                src="images/venix/logo-dark.png"
                class="l-dark"
                height="50"
                alt=""
              />
              <img
                src="images/venix/logo-ligth.png"
                class="l-light"
                height="50"
                alt=""
              />
            </router-link>
              <!-- End Logo container-->
          </div>
          <div class="col">
            <div class="sidebar vexixSearchBar d-none d-lg-block">
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
                        placeholder="Search for NFTs and Collections..."
                      />
                      <input type="submit" id="searchsubmit" value="Search" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-end">
            <div class="menu-extras">
              <div class="menu-item">
                <!-- Mobile menu toggle-->
                <a
                  class="navbar-toggle"
                  @click="toggleMenu()"
                  :class="{ open: isCondensed === true }"
                >
                  <div class="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
                <!-- End mobile menu toggle-->
              </div>
            </div>

            <div id="navigation">
              <!-- Navigation Menu-->
              <ul
                class="navigation-menu"
                :class="{ 'nav-light': navLight === true }"
              >
                <li>
                  <router-link
                    to="/"
                    class="side-nav-link-ref d-block d-xl-none d-lg-none"
                    >Connect Wallet</router-link
                  >
                </li>
                <li>
                  <router-link to="/" class="side-nav-link-ref"
                    >Activity</router-link
                  >
                </li>
              </ul>
              
              <!--end navigation menu-->

              <!--end login button-->
            </div>
            
            <ul
              class="buy-button d-none d-lg-block"
            >
              <svg v-if="darktheme" @click="darktheme=false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
              </svg>
              <svg v-if="!darktheme" @click="darktheme=true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
              </svg>       
            </ul>
            
            <ul
              class="buy-button d-none d-lg-block"
              v-if="isIcons === true"
            >
              <!--router-link to="/page-services" class="btn btn-dark" style="font-size: 12px">
            Connect Wallet</router-link   -->

              <button
                type="button"
                :title="titleButton"
                class="btn btn-dark mr-3"
                style="font-size: 12px; font-weight: 600;float: center"
                v-on:click="loginNear"
              >
                {{ user }}
              </button>
            </ul>
          </div>
        </div>
      </div>

      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>