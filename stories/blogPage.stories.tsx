import React from "react";
import { GlobalTypography } from "./typography";
import { BlogPageComponent } from "./BlogPage";

export default {
  title: "BlogPage",
};

export const BlogPageComponents = () => (
  <>
    <GlobalTypography />
    <BlogPageComponent />
  </>
);
