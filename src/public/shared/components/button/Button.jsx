import React from "react";
import "./button_tailwind.css";

export const ButtonLargeLearnMore = () => {
  return (
    <button
      class=" overflow-hidden px-2 py-3  w-[100px] md:w-[200px] lg:w-[250px] xl:w-[350px] 2xl:w-[450px]
        h-[51px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black"
    >
      Learn More
    </button>
  );
};

export const ButtonLeftArrow = () => {
  return (
    <button
      class=" overflow-hidden px-2 py-3  w-[80px] md:w-[90x] lg:w-[100px] xl:w-[110px] 2xl:w-[120px]
        h-[70px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black"
    >
      L----
    </button>
  );
};

export const ButtonRightArrow = () => {
  return (
    <button
      class=" overflow-hidden px-2 py-3  w-[80px] md:w-[90x] lg:w-[100px] xl:w-[110px] 2xl:w-[120px]
        h-[70px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black"
    >
      ----R
    </button>
  );
};


export const ButtonJoinNow = () => {
  return (
    <button class=" overflow-hidden rounded-md px-2 py-3  w-[282px]  md:w-[300px] lg:w-[350] xl:w-[450px] 2xl:w-[500px]  h-[66px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black">
      Join Now
    </button>
  );
};

export const ButtonSubscribe = () => {
  return (
    <button class=" overflow-hidden px-2 py-3  w-[85px] md:w-[120px] lg:w-[200] xl:w-[300px] 2xl:w-[300px]  h-[31px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black">
      Subscribe
    </button>
  );
};

export const ButtonShopNow = () => {
  return (
    <button class=" overflow-hidden px-2 py-3  w-[205px] md:w-[250px] lg:w-[300] xl:w-[350px] 2xl:w-[400px]  h-[53px] flex items-center justify-center   bg-white   text-black text-sm font-medium   hover:bg-LightBlue hover:text-White">
      Shop Now
    </button>
  );
};

export const ButtonLifeStyle = () => {
  return (
    <button class=" overflow-hidden px-2 py-3  w-[77px] md:w-[120px] lg:w[200] xl:w[280px] 2xl:w-[320px]  h-[30px] flex items-center justify-center   bg-white   text-black text-sm font-medium   hover:bg-LightBlue hover:text-White">
      Life Style
    </button>
  );
};

export const ButtonTagsShirt = ({ children }) => {
  return ( <button class="overflow-hidden bg-white text-Black w-[100px]  md:w-[180px] lg:w-[200px] xl:w-[230px] 2xl:w-[250px] h-[26] px-3 py-4  hover:bg-LightBlue hover:text-white">
    {children}</button>
  );
};

export const ButtonTagsRed = ({ children }) => {
  return ( <button class="overflow-hidden bg-white text-Black w-[60px]  md:w-[100px] lg:w-[130px] xl:w-[160px] 2xl:w-[190px] h-[26] px-3 py-4  hover:bg-LightBlue hover:text-white">
    {children}</button>
  );
};


export const ButtonTrendyTops = ({ children }) => {
  return ( <button class="overflow-hidden bg-white text-Black w-[150px]  md:w-[230px] lg:w-[260px] xl:w-[300px] 2xl:w-[320px] h-[26] px-3 py-4  hover:bg-LightBlue hover:text-white">
    {children}</button>
  );
};


export const ButtonSmallLightBlue = ({ children }) => {
  return ( <button class="overflow-hidden bg-LightBlue text-white w-[64px] h-[43] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px] py-4  hover:bg-white hover:text-Black">
    {children}</button>
  );
};

export const ButtonMediumLightBlue = ({ children }) => {
  return ( <button class="overflow-hidden bg-LightBlue text-white w-[64px] h-[43] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px] py-4  hover:bg-white hover:text-Black">
    {children}</button>
  );
};

export const ButtonLargeLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden bg-LightBlue  text-white w-[64px] h-[43] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px] py-4   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonXLLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden bg-LightBlue   text-white w-[64px] h-[43] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px] py-4   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonXXLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden bg-LightBlue  text-white w-[64px] h-[43] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px] py-4   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonNextPageLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden bg-LightBlue  text-white w-[134px] h-[40px] md:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px]   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonPageNumberLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden bg-LightBlue  text-white w-[64px] h-[64px] md:w-[80px] lg:w-[100px] xl:w-[120px] 2xl:w-[150px]   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};


export const ButtonReactWhite = ({ children }) => {
  return (
  <button class="overflow-hidden bg-white  text-red-600 w-[64px] h-[43] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px] py-4   hover:bg-red-600 hover:text-white">
    {children}
    </button>
  );
};


export const ButtonSubmitLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden rounded-md bg-LightBlue  text-white w-[74px] h-[64px] md:w-[120px] lg:w-[130px] xl:w-[150px] 2xl:w-[180px]   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonApplyCouponLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden rounded-md bg-LightBlue  text-white w-[74px] h-[64px] md:w-[120px] lg:w-[130px] xl:w-[150px] 2xl:w-[180px]   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonUpdateCartLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden rounded-md bg-LightBlue  text-white w-[74px] h-[64px] md:w-[120px] lg:w-[130px] xl:w-[150px] 2xl:w-[180px]   hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonProceedToCheckoutLightBlue = ({ children }) => {
  return (
  <button class="overflow-hidden rounded-md bg-LightBlue  text-white w-[130px] h-[64px] md:w-[130px] lg:w-[150px] xl:w-[220px] 2xl:w-[290px]    hover:bg-white hover:text-Black">
    {children}
    </button>
  );
};

export const ButtonSendMessage = () => {
  return (
    <button class=" overflow-hidden rounded-md  px-2   md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[400px]  h-[66px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black">
      Send Message
    </button>
  );
};

export const ButtonPostComment = () => {
  return (
    <button class=" overflow-hidden rounded-md  px-2   md:w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px]  h-[66px] flex items-center justify-center   bg-LightBlue   text-white  text-sm font-medium   hover:bg-white hover:text-Black">
      Post Comment
    </button>
  );
};


