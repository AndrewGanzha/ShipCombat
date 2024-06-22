import { Field } from './components/UI/Board/Field/Field';
import { ShotStatus } from './types';

export const App = () => {
  return (
    <div>
      <div>
        <Field shotStatus={ShotStatus.NOT_HIT} />
        <Field shotStatus={ShotStatus.MISS} />
        <Field shotStatus={ShotStatus.HIT} />
      </div>
    </div>
  );
};
