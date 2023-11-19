import { CardList } from '../components';
import { Timer } from '../components';
export const MultiplyGamePage = () => {
  return (
    <>
      <div>
        <h1>Let's play </h1>
        <Timer durationInSeconds={180} />
      </div>
      <CardList />
    </>
  );
};
