import React, { lazy } from "react";

const Promo = lazy(() => import("../../components/Promo/Promo"));
const WhoIsOurCourseFor = lazy(
  () => import("../../components/WhoIsOurCourseFor/WhoIsOurCourseFor")
);
const CourseProgram = lazy(
  () => import("../../components/CourseProgram/CourseProgram")
);
const WhoWillTeach = lazy(
  () => import("../../components/WhoWillTeach/WhoWillTeach")
);
const HowDoWeTeach = lazy(
  () => import("../../components/HowDoWeTeach/HowDoWeTeach")
);
const CoursePrice = lazy(
  () => import("../../components/CoursePrice/CoursePrice")
);
const FAQ = lazy(() => import("../../components/FAQ/FAQ"));
const ContactForm = lazy(
  () => import("../../components/ContactForm/ContactForm")
);

const Home: React.FC = () => {
  return (
    <>
      <Promo />
      <WhoIsOurCourseFor />
      <CourseProgram />
      <WhoWillTeach />
      <HowDoWeTeach />
      <CoursePrice />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default Home;
