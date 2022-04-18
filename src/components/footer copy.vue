<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
export default {
  data() {
    return {};
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="page-footer font-small teal pt-1 bg-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <div>
              <a href="#" class="logo-footer">
                <img
                  src="images/venix/logo-dark-venix.png"
                  class="colorlogovenix"
                  height="50"
                  alt=""
                />
              </a>
            </div>
            <div>
              <p class="para-desc mt-4" style="font-size: 14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore m
              </p>
            </div>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <p
              class="text footer-head font-weight-bold"
              style="font-size: 18px"
            >
              Company
            </p>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-aboutus" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> About
                  us</router-link
                >
              </li>
              <li>
                <router-link to="/page-services" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Careers</router-link
                >
              </li>
              <li>
                <router-link to="/page-team" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> FAQs</router-link
                >
              </li>
              <li>
                <router-link to="/page-pricing" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Teams</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <p
              class="text footer-head font-weight-bold"
              style="font-size: 18px"
            >
              Go to
            </p>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-terms" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Terms of
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-privacy" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Privacy
                  Policy</router-link
                >
              </li>
              <li>
                <router-link to="/venix-403" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> 403</router-link
                >
              </li>
              <li>
                <router-link to="/venix-404" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> 404</router-link
                >
              </li>
              <li>
                <router-link to="/venix-500" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> 500</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <p
              class="text footer-head font-weight-bold"
              style="font-size: 18px"
            >
              Follow us
            </p>
            <ul class="list-unstyled mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="font-weight text-dark blog">
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="iconovenix2"
                  >
                    <path
                      d="M12.7939 1.12305H9.52122C8.07458 1.12305 6.6872 1.70251 5.66427 2.73396C4.64135 3.76541 4.06667 5.16436 4.06667 6.62305V9.92305H0.793945V14.323H4.06667V23.123H8.43031V14.323H11.703L12.7939 9.92305H8.43031V6.62305C8.43031 6.33131 8.54524 6.05152 8.74983 5.84523C8.95441 5.63894 9.23189 5.52305 9.52122 5.52305H12.7939V1.12305Z"
                      stroke="#161616"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7939 1.12305H9.52122C8.07458 1.12305 6.6872 1.70251 5.66427 2.73396C4.64135 3.76541 4.06667 5.16436 4.06667 6.62305V9.92305H0.793945V14.323H4.06667V23.123H8.43031V14.323H11.703L12.7939 9.92305H8.43031V6.62305C8.43031 6.33131 8.54524 6.05152 8.74983 5.84523C8.95441 5.63894 9.23189 5.52305 9.52122 5.52305H12.7939V1.12305Z"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li class="list-inline-item" style="margin: 0px 0px 0px 16px">
                <a href="javascript:void(0)" class="font-weight text-dark">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="iconovenix2"
                  >
                    <g clip-path="url(#clip0_122_81)">
                      <path
                        d="M16.7939 22.1231V18.2531C16.8315 17.7763 16.767 17.2969 16.605 16.8469C16.4429 16.3969 16.1869 15.9865 15.8539 15.6431C18.9939 15.2931 22.2939 14.1031 22.2939 8.64311C22.2937 7.24693 21.7566 5.90431 20.7939 4.89311C21.2498 3.67161 21.2176 2.32146 20.7039 1.12311C20.7039 1.12311 19.5239 0.773107 16.7939 2.60311C14.502 1.98193 12.0859 1.98193 9.79395 2.60311C7.06395 0.773107 5.88395 1.12311 5.88395 1.12311C5.37032 2.32146 5.33809 3.67161 5.79395 4.89311C4.82407 5.91181 4.28647 7.26657 4.29395 8.67311C4.29395 14.0931 7.59394 15.2831 10.7339 15.6731C10.4049 16.0131 10.1512 16.4185 9.98925 16.863C9.8273 17.3075 9.76075 17.7812 9.79395 18.2531V22.1231M9.79395 19.1231C4.79395 20.6231 4.79395 16.6231 2.79395 16.1231L9.79395 19.1231Z"
                        stroke="#161616"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.7939 22.1231V18.2531C16.8315 17.7763 16.767 17.2969 16.605 16.8469C16.4429 16.3969 16.1869 15.9865 15.8539 15.6431C18.9939 15.2931 22.2939 14.1031 22.2939 8.64311C22.2937 7.24693 21.7566 5.90431 20.7939 4.89311C21.2498 3.67161 21.2176 2.32146 20.7039 1.12311C20.7039 1.12311 19.5239 0.773107 16.7939 2.60311C14.502 1.98193 12.0859 1.98193 9.79395 2.60311C7.06395 0.773107 5.88395 1.12311 5.88395 1.12311C5.37032 2.32146 5.33809 3.67161 5.79395 4.89311C4.82407 5.91181 4.28647 7.26657 4.29395 8.67311C4.29395 14.0931 7.59394 15.2831 10.7339 15.6731C10.4049 16.0131 10.1512 16.4185 9.98925 16.863C9.8273 17.3075 9.76075 17.7812 9.79395 18.2531V22.1231M9.79395 19.1231C4.79395 20.6231 4.79395 16.6231 2.79395 16.1231L9.79395 19.1231Z"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_122_81">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.793945 0.123047)"
                        />
                      </clipPath>
                    </defs></svg
                ></a>
              </li>
              <li class="list-inline-item" style="margin: 0px 0px 0px 16px">
                <a href="javascript:void(0)" class="font-weight text-dark">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="iconovenix2"
                  >
                    <path
                      d="M22.7939 2.12305L11.7939 13.123"
                      stroke="#161616"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.7939 2.12305L11.7939 13.123"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.7939 2.12305L15.7939 22.123L11.7939 13.123L2.79395 9.12305L22.7939 2.12305Z"
                      stroke="#161616"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.7939 2.12305L15.7939 22.123L11.7939 13.123L2.79395 9.12305L22.7939 2.12305Z"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </li>
              <li class="list-inline-item" style="margin: 0px 0px 0px 16px">
                <a href="javascript:void(0)" class="font-weight text-dark">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="iconovenix2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.55597 1.14685C3.93919 1.14685 1.81787 3.26817 1.81787 5.88495V16.3611C1.81787 18.9779 3.93919 21.0992 6.55597 21.0992H17.0322C19.6489 21.0992 21.7703 18.9779 21.7703 16.3611V5.88495C21.7703 3.26817 19.6489 1.14685 17.0322 1.14685H6.55597ZM0.817871 5.88495C0.817871 2.71588 3.3869 0.146851 6.55597 0.146851H17.0322C20.2012 0.146851 22.7703 2.71588 22.7703 5.88495V16.3611C22.7703 19.5302 20.2012 22.0992 17.0322 22.0992H6.55597C3.3869 22.0992 0.817871 19.5302 0.817871 16.3611V5.88495ZM12.3807 7.42696C11.6129 7.3131 10.8287 7.44425 10.1397 7.80177C9.45065 8.15928 8.89191 8.72495 8.54292 9.41832C8.19393 10.1117 8.07246 10.8974 8.19578 11.6638C8.3191 12.4302 8.68094 13.1382 9.22982 13.6871C9.77871 14.236 10.4867 14.5978 11.2531 14.7211C12.0195 14.8444 12.8052 14.723 13.4986 14.374C14.192 14.025 14.7576 13.4663 15.1151 12.7772C15.4727 12.0882 15.6038 11.304 15.4899 10.5362C15.3738 9.75295 15.0088 9.02784 14.4489 8.46796C13.8891 7.90807 13.1639 7.5431 12.3807 7.42696ZM9.67909 6.91414C10.5548 6.45975 11.5515 6.29306 12.5274 6.43778C13.5229 6.58539 14.4445 7.04926 15.1561 7.76085C15.8676 8.47245 16.3315 9.39404 16.4791 10.3895C16.6238 11.3654 16.4571 12.3621 16.0028 13.2378C15.5484 14.1135 14.8294 14.8237 13.9482 15.2672C13.0669 15.7108 12.0683 15.8652 11.0942 15.7084C10.1202 15.5517 9.22033 15.0918 8.52272 14.3942C7.8251 13.6966 7.36522 12.7967 7.20848 11.8227C7.05174 10.8486 7.20613 9.84997 7.64969 8.96873C8.09324 8.08748 8.80338 7.36853 9.67909 6.91414ZM17.556 4.86114C17.2798 4.86114 17.056 5.08499 17.056 5.36114C17.056 5.63728 17.2798 5.86114 17.556 5.86114H17.566C17.8421 5.86114 18.066 5.63728 18.066 5.36114C18.066 5.08499 17.8421 4.86114 17.566 4.86114H17.556Z"
                      fill="#161616"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.55597 1.14685C3.93919 1.14685 1.81787 3.26817 1.81787 5.88495V16.3611C1.81787 18.9779 3.93919 21.0992 6.55597 21.0992H17.0322C19.6489 21.0992 21.7703 18.9779 21.7703 16.3611V5.88495C21.7703 3.26817 19.6489 1.14685 17.0322 1.14685H6.55597ZM0.817871 5.88495C0.817871 2.71588 3.3869 0.146851 6.55597 0.146851H17.0322C20.2012 0.146851 22.7703 2.71588 22.7703 5.88495V16.3611C22.7703 19.5302 20.2012 22.0992 17.0322 22.0992H6.55597C3.3869 22.0992 0.817871 19.5302 0.817871 16.3611V5.88495ZM12.3807 7.42696C11.6129 7.3131 10.8287 7.44425 10.1397 7.80177C9.45065 8.15928 8.89191 8.72495 8.54292 9.41832C8.19393 10.1117 8.07246 10.8974 8.19578 11.6638C8.3191 12.4302 8.68094 13.1382 9.22982 13.6871C9.77871 14.236 10.4867 14.5978 11.2531 14.7211C12.0195 14.8444 12.8052 14.723 13.4986 14.374C14.192 14.025 14.7576 13.4663 15.1151 12.7772C15.4727 12.0882 15.6038 11.304 15.4899 10.5362C15.3738 9.75295 15.0088 9.02784 14.4489 8.46796C13.8891 7.90807 13.1639 7.5431 12.3807 7.42696ZM9.67909 6.91414C10.5548 6.45975 11.5515 6.29306 12.5274 6.43778C13.5229 6.58539 14.4445 7.04926 15.1561 7.76085C15.8676 8.47245 16.3315 9.39404 16.4791 10.3895C16.6238 11.3654 16.4571 12.3621 16.0028 13.2378C15.5484 14.1135 14.8294 14.8237 13.9482 15.2672C13.0669 15.7108 12.0683 15.8652 11.0942 15.7084C10.1202 15.5517 9.22033 15.0918 8.52272 14.3942C7.8251 13.6966 7.36522 12.7967 7.20848 11.8227C7.05174 10.8486 7.20613 9.84997 7.64969 8.96873C8.09324 8.08748 8.80338 7.36853 9.67909 6.91414ZM17.556 4.86114C17.2798 4.86114 17.056 5.08499 17.056 5.36114C17.056 5.63728 17.2798 5.86114 17.556 5.86114H17.566C17.8421 5.86114 18.066 5.63728 18.066 5.36114C18.066 5.08499 17.8421 4.86114 17.566 4.86114H17.556Z"
                      fill="black"
                      fill-opacity="0.2"
                    /></svg
                ></a>
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->

    <!--end footer-->
  </div>
</template>
