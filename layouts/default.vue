<template>
  <div>
    <AppHeader :navItems="navItems" :logo="logo" :isOpen="isOpen" />
    <AboutUs />
    <Business :businessList="businessList" />
    <Collaboration :imgUrl="imgUrl" />
    <Leadership />
    <ContactUs />
    <AppFooter :navItems="navItems" />
    <div id="myBtn" class="button is-primary box" @click="scrollToTop()" title="Go to top">Top</div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AboutUs from "../components/Nav Menu/AboutUs";
import Business from "../components/Nav Menu/Business";
import Collaboration from "../components/Nav Menu/Collaboration";
import Leadership from "../components/Nav Menu/Leadership";
import ContactUs from "../components/Nav Menu/ContactUs";

export default {
  data() {
    return {
      isOpen: false,
      navItems: [
        "about us",
        "our businesses",
        "collaborations",
        "leadership",
        "contact us",
      ],

      imgUrl: [
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
        {
          url: "../assets/images/aboutusimg.png",
        },
      ],

      businessList: [
        {
          id: 1,
          name: "Rumsan",
          img: "../../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
        {
          id: 2,
          name: "LoneTree Nepal",
          img: "../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
        {
          id: 3,
          name: "eSatya",
          img: "../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
        {
          id: 4,
          name: "Rumsan4",
          img: "../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
        {
          id: 5,
          name: "Rumsan5",
          img: "../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
        {
          id: 6,
          name: "Rumsan6",
          img: "../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
        {
          id: 7,
          name: "Rumsan7",
          img: "../assets/logo.png",
          desc:
            "An innovative digital solutions company focusing on Fintech, Regtech, Edtech and Mobile Research tools.",
        },
      ],

      logo: "../assets/logo.png",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  components: {
    AppHeader,
    AboutUs,
    Business,
    Collaboration,
    Leadership,
    ContactUs,
    AppFooter,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
#myBtn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>
