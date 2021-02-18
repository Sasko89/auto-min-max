import fire from '../../lib/fireBase';

export default async (_, res) => {
  const firestore = fire.firestore();
  const snapshot = await firestore.collection('bilar').get();
  const cars = [];

  snapshot.forEach((doc) => {
    cars.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(cars);
};
