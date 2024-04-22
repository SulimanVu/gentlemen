import styled from "styled-components";

export const AreStillQuestions = () => {
  return (
    <Wrapper>
      <Box>
        <Div3>Остались вопросы?</Div3>
        <Div4>
          Ответим на любые! Как поступить в Хогвартс, почему люди не летают и
          какие угодно еще
        </Div4>
        <Div5>или</Div5>
        <Div6>Запросить обратный звонок</Div6>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 32px;
  box-shadow: 0px 12px 20px 0px rgba(124, 117, 104, 0.2);
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #a8a399;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  padding: 73px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 1072px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  color: #282828;
  letter-spacing: -1.2px;
  font: 900 40px Inter, sans-serif;
`;

const Div4 = styled.div`
  font-family: Inter, sans-serif;
  line-height: 190%;
  align-self: stretch;
  margin-top: 36px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  font-family: Inter, sans-serif;
  line-height: 190%;
  margin-top: 141px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  border-radius: 12px;
  background-color: #1c58de;
  margin-top: 37px;
  color: #fff;
  justify-content: center;
  padding: 20px 40px;
  font: 800 20px Inter, sans-serif;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

