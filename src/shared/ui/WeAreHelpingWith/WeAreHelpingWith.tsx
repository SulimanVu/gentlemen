import styled from 'styled-components';

interface SectionProps {
  title: string;
  items: {
    number: string;
    heading: string;
    description: string;
  }[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {items.map((item, index) => (
        <SectionItem key={index}>
          <ItemNumber>{item.number}</ItemNumber>
          <ItemContent>
            <ItemHeading>{item.heading}</ItemHeading>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemContent>
        </SectionItem>
      ))}
    </SectionWrapper>
  );
};

const AllBlocks = styled.section`
  width: 80%;
  margin: 130px auto;
`;

const SectionWrapper = styled.section`
  border-radius: 32px;
  box-shadow: 0px 12px 20px 0px rgba(124, 117, 104, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 66px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  color: #282828;
  letter-spacing: -1.68px;
  margin-top: 46px;
  font: 800 56px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const SectionItem = styled.div`
  display: flex;
  margin-top: 120px;
  width: 100%;
  max-width: 1030px;
  align-items: start;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const ItemNumber = styled.div`
  color: #e7e7e7;
  letter-spacing: -0.64px;
  font: 500 64px/150% Inter, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ItemHeading = styled.h3`
  color: #282828;
  letter-spacing: -0.28px;
  font: 700 28px/42px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ItemDescription = styled.p`
  color: #a8a399;
  font: 400 20px/30px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const WeAreHelpingWith: React.FC = () => {
  const sectionData = [
    {
      title: 'С чем мы помогаем?',
      items: [
        {
          number: '#1',
          heading: 'Поддержка выбором и поступлением на бакалавр, Мастер и phD',
          description:
            'Всесторонняя поддержка во всех аспектах процесса подачи заявок в США и Англии обеспечивается группой экпертов.',
        },
        {
          number: '#2',
          heading: 'Подготовка к обучению, SAT/ACT и UK Admin Test prep',
          description:
            'Всесторонняя поддержка во всех аспектах процесса подачи заявок в США и Англии обеспечивается группой экпертов.',
        },
        {
          number: '#3',
          heading: 'Организация поступления на языковые программы в зарубежные школы',
          description:
            'Всесторонняя поддержка во всех аспектах процесса подачи заявок в США и Англии обеспечивается группой экпертов.',
        },
        {
          number: '#4',
          heading: 'Медицинские программы в Топовых вузах США',
          description:
            'Всесторонняя поддержка во всех аспектах процесса подачи заявок в США и Англии обеспечивается группой экпертов.',
        },
        {
          number: '#5',
          heading: 'Спортивные программы при университетах',
          description:
            'Всесторонняя поддержка во всех аспектах процесса подачи заявок в США и Англии обеспечивается группой экпертов.',
        },
      ],
    },
  ];

  return (
    <AllBlocks>
      {sectionData.map((section, index) => (
        <Section key={index} title={section.title} items={section.items} />
      ))}
    </AllBlocks>
  );
};
