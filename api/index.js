import worker from '../cloudflare/worker.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(request, context) {
  return worker.fetch(request, process.env, context);
}
