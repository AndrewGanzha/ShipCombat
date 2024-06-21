import { FieldInterface } from '../../../../types';

export const Field = (props: FieldInterface) => {
  return (
    <button className={`field ${props.isShoot ? 'field-shoot' : ''}`}></button>
  );
};
