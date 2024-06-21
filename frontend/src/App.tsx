import { Field } from './components/UI/Board/Field/Field';

export const App = () => {
  return (
    <div>
      <Field isShoot={true} />
      <Field isShoot={false} />
      <Field isShoot={true} />
      <Field isShoot={false} />
    </div>
  );
};
