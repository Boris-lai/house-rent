import styled from "styled-components";
import video001 from "../images/rent001.mp4";

const StyledSectionVideo = styled.section``;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`;

const H2 = styled.h2`
  color: var(--color-grey-700);
  font-weight: 700;
  text-align: center;
  font-size: 3.2rem;
  padding: 2.4rem 0;

  @media (max-width: 54rem) {
    font-size: 2.2rem;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

function SectionVideo() {
  return (
    <StyledSectionVideo>
      <Container>
        <H2>全面的物業管理：無憂的租賃和維護解決方案</H2>
        <VideoContainer>
          <Video controls autoPlay="autoplay" muted="muted">
            <source src={video001} type="video/mp4"></source>
          </Video>
        </VideoContainer>
      </Container>
    </StyledSectionVideo>
  );
}

export default SectionVideo;
