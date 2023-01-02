import filterConfiguration from "./filterConfiguration";
import plpSortConfiguration from "./plpSortConfiguration";
import productList from "./productList";
import { FeatureSchemaDefinition } from "../types";
import productContent from "./pdp/productContent";
import productLabels from "./pdp/productLabels";
import orderTotalDetails from "./cart/orderTotalDetails";
import cartProductList from "./cart/productList";
import totalPayableAmount from "./cart/totalPayableAmount";
import locationConfiguration from "./cart/locationConfiguration";
import emptyCartConfiguration from "./cart/emptyCartConfiguration";
import checkoutTotalPayableAmount from "./checkout/checkoutTotalPayableAmount";

export const nativeCommerce: FeatureSchemaDefinition = {
  pageItems: [
    { type: "nativeCommerce.productList" },
    { type: "nativeCommerce.productLabels" },
    { type: "nativeCommerce.productContent" },
    { type: "flashCommerce.cartOrderTotalDetails" },
    { type: "flashCommerce.cartProductList" },
    { type: "flashCommerce.emptyCartConfiguration" },
  ],
  connectedStores: [
    {
      value: "nativeCommerce.plp.store",
      title: "[Native Commerce] PLP Store",
    },
    {
      value: "nativeCommerce.pdp.store",
      title: "[Native Commerce] PDP Store",
    },
    {
          value: "nativeCommerce.serp.store",
          title: "[Native Commerce] SERP Store",
    }
  ],
  headers: [
    { type: "nativeCommerce.plpSortConfiguration" },
    { type: "nativeCommerce.filterConfiguration" },
    { type: "flashCommerce.cartLocationConfiguration" },
  ],
  footers: [
    { type: "flashCommerce.cartTotalPayableAmount" },
    { type: "flashCommerce.checkoutTotalPayableAmount" },
  ],
  schemas: [
    productList,
    plpSortConfiguration,
    filterConfiguration,
    productLabels,
    productContent,
    orderTotalDetails,
    cartProductList,
    totalPayableAmount,
    locationConfiguration,
    emptyCartConfiguration,
    checkoutTotalPayableAmount,
  ],

  groupItems: [
    {
      type: "nativeCommerce.productLabels",
    },
    {
      type: "nativeCommerce.productContent",
    },
    {
      type: "flashCommerce.emptyCartConfiguration",
    },
    { type: "flashCommerce.cartOrderTotalDetails" },
    { type: "flashCommerce.cartProductList" },
    { type: "flashCommerce.cartTotalPayableAmount" },
    { type: "flashCommerce.checkoutTotalPayableAmount" },
  ],
  variants: {
    navigation: [
      { title: "Native Commerce", value: "nativeCommerce.appbar" },
      { title: "Flash Commerce Search", value: "flashCommerce.searchAppBar" },
      { title: "Flash Commerce Cart", value: "flashCommerce.cartAppbar" },
      { title: "Flash Commerce Titled", value: "flashCommerce.titledAppbar" },
      {
        title: "Flash Commerce Titled Checkout",
        value: "flashCommerce.titledCheckout",
      },
    ],
    placeholder: [
      {
        value: "nativeCommerce.productDescription",
        title: "[Native Commerce] Product Description",
      },
      {
        value: "nativeCommerce.checkoutProductList",
        title: "[Native Commerce] Product listing",
      },
      {
        value: "nativeCommerce.shippingDetails",
        title: "[Native Commerce] Shipping Details",
      },
      {
        value: "nativeCommerce.billingDetails",
        title: "[Native Commerce] Billing Details",
      },
      {
        value: "nativeCommerce.applyCoupon",
        title: "[Native Commerce] Apply Coupon",
      },
      {
        value: "nativeCommerce.neuPassOffers",
        title: "[Native Commerce] Neu Pass Offers",
      },
    ],
    group: [
      {
        value: "nativeCommerce.productInfo",
        title: "[Native Commerce] Product Info",
      },
      {
        value: "flashCommerce.cartInfo",
        title: "[Flash Commerce] Cart Info",
      },
      {
        value: "flashCommerce.checkoutInfo",
        title: "[Flash Commerce] Checkout Info",
      },
    ],
    ifElseBlock: [
      {
        title: "Flash Commerce Content",
        value: "flashCommerce.content",
      },
    ],
  },
};
