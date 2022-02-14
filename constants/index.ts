export const MONGODB_URI = <string>process.env.MONGODB_URI;

export const SERECT_KEY = 'ruweirowurweropqeq';

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI');
}
