import styled from "styled-components";
import { ButtonStyles } from "../../styles/common.styles";

export const BlogPost = styled.div`
  border-bottom: 1px solid #414141;
  padding-bottom: 64px;
  margin-bottom: 64px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const TextContent = styled.div`
  text-align: justify;
`;

export const DateSpan = styled.span`
  font-size: 16px;
  font-weight: 200;
`;

export const TitleHeading = styled.h2`
  font-size: 36px;
  text-transform: capitalize;
  font-weight: 300;
`;

export const BlogDesc = styled.p`
  color: #bbb;
  font-size: 16px;
  font-weight: 300;
  margin-top: 14px;
`;

export const ButtonContainer = styled.div`
  margin: 14px 0;
`;

export const ButtonLink = styled.a`
  ${ButtonStyles}
`;

export const BlogImage = styled.img`
  width: 100%;
  overflow-y: hidden;
`;
