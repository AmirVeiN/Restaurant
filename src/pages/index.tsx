import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer/navigation";
import Header from "@/components/header/menu";
import Home from "@/components/home/home";

export default function Main() {
    const [page, pageHandler] = useState(0);
    const [choose, chooseHandler] = useState(-1);

    return (
        <>
            <Header />
            <Home />
            {/* <Footer activeButtonIndex={page} activeButtonIndexHandler={pageHandler} /> */}
        </>
    );
}
