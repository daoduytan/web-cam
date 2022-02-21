export const MONGODB_URI = <string>process.env.MONGODB_URI;
export const API_URI = <string>process.env.API_URI;
export const PER_PAGE = 10;

export const SERECT_KEY = 'ruweirowurweropqeq';

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI');
}
