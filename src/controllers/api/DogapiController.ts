import { Request, Response } from 'express';
import axios from 'axios';

class DogapiController {
  async handle(req: Request, res: Response) {
    try {
      const response = await axios.get('https://dogapi.dog/api/v2/facts', {
        headers: {}
      });      
      return res.json(response.data);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching data' });
    }
  }
}

export { DogapiController };
