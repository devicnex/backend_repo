import { Request, Response } from "express";
import { AuthClinicaService } from "../../services/auth/AuthClinicaService";

class AuthClinicaController {
    async handle(req: Request, res: Response) {
        const { email, password} = req.body;
        console.log(email + " / " + password);
        const authClinicaService = new AuthClinicaService();
        const auth = await authClinicaService.execute({
            email,
            password
        })

        return res.json(auth)
    }
}

export { AuthClinicaController}