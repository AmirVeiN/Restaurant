import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer/navigation";
import Header from "@/components/header/menu";
import Home from "@/components/home/home";

export default function Main() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
