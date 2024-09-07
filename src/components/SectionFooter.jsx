import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSectionFooter = styled.section`
  background-color: var(--color-silver-700);
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 0;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;

  p {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  column-gap: 2rem;
  /* align-items: center; */
  justify-content: center;
  /* text-align: center;
  gap: 1rem;  */
  font-size: 4.8rem;

  @media (max-width: 44em) {
    font-size: 3.2rem;
  }
`;

const Footer = styled.footer`
  background-color: var(--color-silver-700);
  color: #fff;
  border-top: 1px solid #384653;
  padding: 1rem 2rem;
`;

const FooterFlex = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.ul`
  display: flex;
  font-size: 1.8rem;
  column-gap: 1.8rem;
  padding: 1rem;
`;

function SectionFooter() {
  return (
    <>
      <StyledSectionFooter>
        <Container>
          <SocialIcons>
            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faLine} />
            </Link>
          </SocialIcons>
        </Container>
      </StyledSectionFooter>
      <Footer>
        <FooterFlex>
          <FooterLinks>
            <li>
              <a href="#">首頁</a>
            </li>
            <li>
              <a href="#">條款</a>
            </li>
            <li>
              <a href="#">隱私權政策</a>
            </li>
            <li>
              <a href="contact.html">聯繫我</a>
            </li>
          </FooterLinks>
          <p>&copy; 2024 Boris Lai All rights reserved</p>
        </FooterFlex>
      </Footer>
    </>
  );
}

export default SectionFooter;
