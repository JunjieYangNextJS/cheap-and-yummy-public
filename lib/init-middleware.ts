import { NextApiRequest, NextApiResponse } from 'next';

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: (result: unknown) => void
) => void;

export default function initMiddleware(middleware: Middleware) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise<void>((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve();
      });
    });
}