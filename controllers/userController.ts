import { Request, Response } from 'express';
import { users } from '../db';
import { User } from '../models/IUser';

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      console.log(req.body)
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const { email, number }: { email: string; number: string } = req.body;
      
      console.log(`getUsers: email ${email} and number ${number}`)

      const foundUsers: User[] = users.filter((user) => {
        return (
          user.email.toLowerCase() === email.toLowerCase() &&
          (number === '' || user.number === number)
        );
      });

      res.json(foundUsers);
    } catch (e) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // async getAllUsers(req: Request, res: Response) {
  //   res.json(users);
  // }
}

const userController = new UserController();

export default userController;
