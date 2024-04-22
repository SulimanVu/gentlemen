import { differenceInDays, parse } from 'date-fns';
import { DogmaColor } from 'dogma-ui-d360';

export function calculateDateDifference(dateStart: string, dateEnd: string) {
  const format = 'dd.MM.yyyy';

  const date1 = parse(dateStart, format, new Date());
  const date2 = parse(dateEnd, format, new Date());

  const daysDifference = differenceInDays(date2, date1);

  let color: DogmaColor = 'textNeutralPrimary';
  if (daysDifference > 0) {
    color = 'green110';
  } else if (daysDifference < 0) {
    color = 'red110';
  } else {
    color = 'textNeutralPrimary';
  }

  return { daysDifference, color };
}
