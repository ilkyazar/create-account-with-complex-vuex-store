import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const PersonalInfoPage = () =>
  import(
    /* webpackChunkName: "personal-info-page" */ `../views/PersonalInfoPage`
  );
const ContactInfoPage = () =>
  import(
    /* webpackChunkName: "contact-info-page" */ `../views/ContactInfoPage`
  );
const StudyInfoPage = () =>
  import(
    /* webpackChunkName: "contact-info-page" */ `../views/StudyInfoPage`
  );
const ResidenceInfoPage = () =>
  import(
    /* webpackChunkName: "contact-info-page" */ `../views/ResidenceInfoPage`
  );
const LegitimationInfoPage = () =>
  import(
    /* webpackChunkName: "contact-info-page" */ `../views/LegitimationInfoPage`
  );
const AboutPage = () =>
  import(/* webpackChunkName: "about-page" */ `../views/AboutPage`);

export default new Router({
  routes: [
    {
      path: `/`,
      name: `personal-info`,
      component: PersonalInfoPage,
    },
    {
      path: `/contact-info`,
      name: `contact-info`,
      component: ContactInfoPage,
    },
    {
      path: `/study-info`,
      name: `study-info`,
      component: StudyInfoPage,
    },
    {
      path: `/residence-info`,
      name: `residence-info`,
      component: ResidenceInfoPage,
    },
    {
      path: `/legitimation-info`,
      name: `legitimation-info`,
      component: LegitimationInfoPage,
    },
    {
      path: `/about`,
      name: `about`,
      component: AboutPage,
    },
  ],
  mode: `history`,
});
