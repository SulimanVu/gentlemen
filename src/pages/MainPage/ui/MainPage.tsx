import { AreStillQuestions } from '@/shared/ui/AreStillQuestions/AreStillQuestions';
import { HeroSectionMainPage } from '@/shared/ui/HeroSectionMainPage/HeroSectionMainPage';
import { StatItemMainPage } from '@/shared/ui/StatItemMainPage/StatItemMainPage';
import { WeAreHelpingWith } from '@/shared/ui/WeAreHelpingWith/WeAreHelpingWith';
import styles from './mainPage.module.scss';
import { UniversityCards } from '@/widgets/UniversityCards/UniversityCards';
import { LayoutContent } from '@/widgets/Layout/Layout';
import { Header } from '@/widgets/Header/Header';

export const MainPage = () => {
  return (
    <LayoutContent>
      <Header />
      <HeroSectionMainPage />
      <StatItemMainPage />
      <WeAreHelpingWith />
      <UniversityCards />
      <AreStillQuestions />
    </LayoutContent>

  );
};
