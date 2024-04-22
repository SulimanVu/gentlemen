import styled from 'styled-components';
import { UniversityCardMainPage } from '../UniversityCardMainPage/UniversityCardMainPage';

export const UniversityCardsMainPage = () => {
  return (
    <Wrapper>
    <SectionTitleWrapper>
      <SectionTitleContent>
        <SectionTitleText>Сейчас поступают</SectionTitleText>
        <SectionSubtitleText>Все программы</SectionSubtitleText>
      </SectionTitleContent>
      <SectionDescription>We have more thatn 2000 mentro who rowk closely with you to give a realistic viewpoint about your career golas and enable you to build a successful careers</SectionDescription>
    </SectionTitleWrapper>
    <Cards>
      <UniversityCardMainPage universityName='ГГНТУ' location='Грозный' />
      <UniversityCardMainPage universityName='ГГНТУ' location='Грозный' />
      <UniversityCardMainPage universityName='ГГНТУ' location='Грозный' />
    </Cards>

    </Wrapper>
    
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 130px;
  margin-bottom: 130px  
`;

const Cards = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap
`;

const SectionTitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
const SectionTitleContent = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
const SectionTitleText = styled.h2`
  color: #282828;
  letter-spacing: -1.68px;
  flex-grow: 1;
  flex-basis: auto;
  font: 800 56px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;
const SectionSubtitleText = styled.p`
  color: #287dfc;
  text-align: right;
  align-self: start;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 16px/150% Inter, sans-serif;
`;
const SectionDescription = styled.p`
  color: #a8a399;
  margin-top: 36px;
  width: 100%;
  font: 400 24px/36px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
