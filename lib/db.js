import fire from './fireBase';

const firestore = fire.firestore();

export function createCar(data) {
  return firestore.collection('bilar').add(data);
}
