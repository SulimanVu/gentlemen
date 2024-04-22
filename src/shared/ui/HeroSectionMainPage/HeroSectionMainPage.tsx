import styled from 'styled-components';

export const HeroSectionMainPage = () => {
  return (
    <HeroContainer>
      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0dc3b863d4259034721db7ddc391af1cf7b1a29ad060813ec0bd3aba698a08?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
      />
      <HeroContent>
        <HeroTitle>{`Среднее и высшее образованиев Европе, Англии и США.`}</HeroTitle>
        <HeroSubtitle>{'Повысьте свои шансы на поступление в Западные вузы.'}</HeroSubtitle>
        <HeroButton>{'Поступить'}</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 981px;
  padding: 80px 60px;
  color: #fff;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1131px;
  width: 100%;
  margin: 196px 0 175px;
  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;
const HeroTitle = styled.h1`
  font: 900 72px/108px Inter, sans-serif;
  letter-spacing: -2.16px;
  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 66px;
  }
`;
const HeroSubtitle = styled.p`
  margin-top: 61px;
  font-family: Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
const HeroButton = styled.button`
  margin-top: 66px;
  padding: 23px 44px;
  font-family: Inter, sans-serif;
  font-weight: 800;
  color: #fff;
  background-color: #1c58de;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
    white-space: initial;
  }
`;
