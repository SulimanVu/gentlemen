import * as React from "react";
import styled from "styled-components";

interface StatItemProps {
  icon: string;
  value: number;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, description }) => {
  return (
    <StatItemWrapper>
      <StatIcon>{icon}</StatIcon>
      <StatContent>
        <StatValue>{value}</StatValue>
        <StatDescription>{description}</StatDescription>
      </StatContent>
    </StatItemWrapper>
  );
};

const statsData = [
  {
    icon: "🏅",
    value: 267,
    description: "предложений в университеты из мирового топа вузов",
  },
  {
    icon: "⚡️",
    value: 119,
    description: "поступивших в Oxford и Cambridge",
  },
  {
    icon: "🎒",
    value: 324,
    description: "школ со средним образованием",
  },
];

export const StatItemMainPage = () => {
  return (
    <StatsSection>
      <StatsContainer>
        {statsData.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </StatsContainer>
    </StatsSection>
  );
}

const StatsSection = styled.section`
  background-color: #1c58de;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 43px 60px 80px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1086px;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const StatItemWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
`;

const StatIcon = styled.div`
  letter-spacing: -1.2px;
  font: 800 40px Inter, sans-serif;
`;

const StatContent = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

const StatValue = styled.div`
  letter-spacing: -1.2px;
  font: 800 40px Inter, sans-serif;
`;

const StatDescription = styled.div`
  margin-top: 19px;
  font: 400 16px/24px Inter, sans-serif;
`;