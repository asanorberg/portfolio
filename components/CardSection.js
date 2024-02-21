import React from "react";
import Card from "./Card";
import colorsplash from "../public/colorsplash.jpg";

function CardSection() {
  return (
    <div className="max-w-screen-xl grid grid-cols-3 items-center gap-16 pt-20">
      <Card imgSrc={colorsplash}>Some information about my project.</Card>
      <Card imgSrc={colorsplash}>Some information about my project.</Card>
      <Card imgSrc={colorsplash}>Some information about my project.</Card>
      <Card imgSrc={colorsplash}>Some information about my project.</Card>
      <Card imgSrc={colorsplash}>Some information about my project.</Card>
      <Card imgSrc={colorsplash}>Some information about my project.</Card>
    </div>
  );
}

export default CardSection;
