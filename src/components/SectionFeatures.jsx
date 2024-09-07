import styled from "styled-components";
import { FaUnlockAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const StyledSectionFeatures = styled.section``;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 64em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 34em) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  padding: 4.2rem 6.8rem;
`;

const FeatureIcon = styled.div`
  color: #e67e22;
  height: 6.2rem;
  width: 6.2rem;
  background-color: #fdf2e9;
  margin-bottom: 3.2rem;
  padding: 1.6rem;
  border-radius: 50%;
`;

const FeatureTitle = styled.p`
  font-size: 2.4rem;
  color: var(--color-silver-700);
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

const FeatureText = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-400);
  line-height: 1.8;
`;

function SectionFeatures() {
  return (
    <StyledSectionFeatures>
      <Container>
        <Feature id="feature">
          <FeatureIcon>
            <FaUnlockAlt size={30} />
          </FeatureIcon>
          <FeatureTitle>安全可靠</FeatureTitle>
          <FeatureText>
            在我們的平台上，每一個房源都經過嚴格審核，確保房客和房東的交易安全。
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <FaHouseUser size={30} />
          </FeatureIcon>
          <FeatureTitle>多元房源</FeatureTitle>
          <FeatureText>
            多樣化的房源選擇，幫助您找到理想的居住空間，輕鬆實現居住夢想。
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <FaUsers size={30} />
          </FeatureIcon>
          <FeatureTitle>專業管理</FeatureTitle>
          <FeatureText>
            我們擁有一支經驗豐富的專業管理團隊，為您提供從簽約到日常維護的一站式服務。
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <RiCustomerService2Fill size={30} />
          </FeatureIcon>
          <FeatureTitle>即刻支援</FeatureTitle>
          <FeatureText>
            無論何時何地，我們都在您身邊，確保您的租住體驗無憂無慮。
          </FeatureText>
        </Feature>
      </Container>
    </StyledSectionFeatures>
  );
}

export default SectionFeatures;
