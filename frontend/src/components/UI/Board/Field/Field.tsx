import { FieldInterface } from '../../../../types';
import './Field.scss';

export const Field = ({ shotStatus }: FieldInterface) => {
  return (
    <button
      className={`field ${shotStatus === 'MISS' ? 'field-miss' : shotStatus === 'HIT' ? 'field-hit' : ''}`}
    ></button>
  );
};
