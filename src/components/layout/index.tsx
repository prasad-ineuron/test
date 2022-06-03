import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  bodyClasses?: string;
  isIndex?: boolean;
  isFooterFixed?: boolean;
  hideFooter?: boolean;
  meta?: {
    title: string;
  };
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <Header />
        <main
          className={
            props.bodyClasses +
            `min-h-[calc(100vh-91px)] max-w-[1536px] m-auto px-14 pb-[37px] pt-20 bg-[#FAFDFB]`
          }
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
