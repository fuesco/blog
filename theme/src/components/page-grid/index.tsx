import React, {FunctionComponent} from "react";
import {Page} from "../../utils/models";
import {Grid} from "../common";
import {Card} from "../card";

interface PageGridProps {
  pages: Page[];
}

const PageGrid: FunctionComponent<PageGridProps> = ({pages}) => (
  <Grid>
    {pages.map((page, index) => (
      <Card
        title={page.frontmatter.title}
        path={page.frontmatter.path}
        content={page.frontmatter.excerpt}
        featuredImage={page.frontmatter.icon}
        key={index}
      />
    ))}
  </Grid>
);

export default PageGrid;
