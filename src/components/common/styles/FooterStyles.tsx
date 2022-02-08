import React from "react";
import { Container, Wrapper, Row, Column, Link, Title } from "./Footer.styles";

interface Props {
  children: any;

  // any props that come into the component
}

interface linkprops {
  children: any;
  href: string;
  // any props that come into the component
}

export default function Footer({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }: Props) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }: Props) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: Props) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: linkprops) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};
