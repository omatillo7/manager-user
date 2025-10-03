import { createRouter, createWebHistory } from "vue-router";
import StorageService from "../service/storage.service";

const routes = [
  {
    path: "/",
    name: "landing-page",
    component: import("../landing-page/index.vue"),
  },
  {
    path: "/auth/one-id",
    name: "one-id",
    component: import("../views/auth-one-id.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: import("../layouts/MainLayout.vue"),
    redirect: { name: "admin-profile" },
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "profile",
        name: "admin-profile",
        component: import("../views/Profile.vue"),
      },
      {
        path: "courses",
        name: "admin-courses",
        component: import("../views/Courses.vue"),
      },
      {
        path: "trainingcourse",
        name: "admin-trainingcourse",
        component: import("../views/TrainingCourse.vue"),
      },
      {
        path: "applications",
        name: "admin-applications",
        component: import("../views/Applications.vue"),
      },
      {
        path: "contracts",
        name: "admin-contracts",
        component: import("../views/Contracts.vue"),
      },
      {
        path: "resources",
        name: "admin-resources",
        component: import("../views/Resources.vue"),
      },
      {
        path: "profile/education/add",
        name: "admin-educationadd",
        component: import("../views/EducationAdd.vue"),
      },
      {
        path: "profile/education/edit",
        name: "admin-educationedit",
        component: import("../views/EducationAdd.vue"),
        props: true,
      },

      {
        path: "courses/:id",
        name: "admin-coursedetail",
        component: import("../views/CourseDetail.vue"),
        props: true,
      },
      {
        path: "contracts/payment",
        name: "admin-payment",
        component: import("../views/Payment.vue"),
        props: true,
      },
      {
        path: "trainingcourseview",
        name: "admin-trainingcourseview",
        component: import("../views/TrainingCourseView.vue"),
        props: true,
      },
      {
        path: "trainingcoursereference",
        name: "admin-trainingcoursereference",
        component: import("../views/TrainingCourseReference.vue"),
        meta: { layout: "blank" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = !!StorageService.getToken();

  if (to.meta.requiresAuth && !loggedIn) {
    return next({ name: "landing-page" });
  }

  if (to.name === "landing-page" && loggedIn) {
    return next({ name: "admin" });
  }

  next();
});

export default router;
