import bot from '../../bot';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await bot.processUpdate(req.body);
      res.status(200).json({ ok: true });
    } catch (error) {
      console.error('Error processing update:', error);
      res.status(500).json({ error: 'Error processing update' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}