import type { VercelRequest, VercelResponse } from '@vercel/node'
import { UAParser } from 'ua-parser-js'

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名请求，生产环境中应设置为特定域名
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 优先获取 query 参数,如果获取不到则获取本次请求的 headers['user-agent']
  const uaStr = req.query?.ua as string ?? req.headers['user-agent']
  const ua = UAParser(uaStr);
  return res.json(ua)
}
