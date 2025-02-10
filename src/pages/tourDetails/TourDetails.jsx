import React from "react";
import { HeroSection } from "../../components/tourDetails/HeroSection";
import TourInfo from "../../components/tourDetails/TourInfo";
import SimilarExperiences from "../../components/tourDetails/SimilarExperiences";

export default function TourDetails() {
  return (
    <div className=" w-10/12 m-auto">
      <div className="lg:pt-12"></div>
      {/* Hero Section */}
      <HeroSection />

      {/* Tour Info */}
      <TourInfo />

      {/* Similar Exp */}
      <SimilarExperiences />
    </div>
  );
}
