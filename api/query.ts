import type { VercelRequest, VercelResponse } from '@vercel/node'
import { UAParser } from 'ua-parser-js'

export default function handler(req: VercelRequest, res: VercelResponse) {
  // 优先获取 query 参数,如果获取不到则获取本次请求的 headers['user-agent']
  const uaStr = req.query?.ua as string ?? req.headers['user-agent']
  const ua = UAParser(uaStr);
  return res.json(ua)
}
