    import { Router }                           from 'express';
    import multer                               from 'multer';    
    import { CreateUserController }             from './controllers/user/CreateUserController';
    import { AuthUserController   }             from './controllers/user/AuthUserController';
    import { UpdateUserController }             from './controllers/user/UpdateUserController';
    import { DetailUserController }             from './controllers/user/DetailUserController';
    import { DogapiController     }             from './controllers/api/DogapiController';
    import { ForgotPassword       }             from './controllers/api/ForgotPassword';
    import { isAuthenticated      }             from './middlewares/isAuthenticated.1';
    import { CreatePetController  }             from './controllers/pets/CreatePetController';
    import { DetailPetController  }             from  './controllers/pets/DetailPetController';
    import { DetailPetOneController }           from  './controllers/pets/DetailPetOneController';
    import { DeletePetController  }             from  './controllers/pets/DeletePetController';
    import { CuriosidadeController }            from './controllers/api/CuriosidadeController';
    import { RegisterVaccinesController }       from './controllers/pets/RegisterVaccinesController';
    import { DetailVaccinesController }         from './controllers/pets/DetailVaccinesController';
    import { UpdateUserDataController }         from './controllers/user/UpdateUserDataController';
    import { RegisterExamController }           from './controllers/pets/RegisterExamController';
    import { DetailExamController }             from "./controllers/pets/DetailExamController";
    import { DetailPetVaccinesOneController }   from "./controllers/pets/DetailPetVaccinesOneController";
    import { DetailPetExamOneController }       from "./controllers/pets/DetailPetExamOneController";
    import { DeleteVaccineController }          from "./controllers/pets/DeleteVaccineController";
    import { DeleExamController }               from "./controllers/pets/DeleteExamController";
    import { UpdateVaccineController }          from "./controllers/pets/UpdateVaccineController";
    import { UpdateExamController }             from "./controllers/pets/UpdateExamController";
    import { PublicacoesPetController }         from "./controllers/pets/PublicacoesPetController";
    import { UpdatePetController }              from "./controllers/pets/UpdatePetController";
    import { DeletePubliController }            from "./controllers/pets/DeletePubliController";
    import { UserDeleteController }             from "./controllers/user/UserDeleteController";
    import { UpdatePubliController }            from "./controllers/pets/UpdatePubliController";
    import { DetailPublicacoesController }      from './controllers/pets/DetailPublicacoesController';
    import { DatasAgendamentosController }      from './controllers/clinicas/DatasAgendamentosController';
    import  uploadConfig                        from './config/multer';

    const router = Router();

    const upload = multer(uploadConfig.upload("./tmp"));
    

    router.post('/api/users', new CreateUserController().handle);

    router.post('/api/session', new AuthUserController().handle);
    
    router.post('/users', new CreateUserController().handle);

    router.put('/api/updatepassword', isAuthenticated, new UpdateUserController().handle);

    router.get('/api/me', isAuthenticated, new DetailUserController().handle);
    
    router.get('/api/dogapi', new DogapiController().handle);

    router.post('/api/pet', upload.single('file'), new CreatePetController().handle);

    router.post('/api/resetpassword', new ForgotPassword().handle);

    router.get('/api/detailpet', isAuthenticated, new DetailPetController().handle);

    router.get('/api/detailpetOne/:id_pet', new DetailPetOneController().handle);

    router.delete('/api/deletePet', isAuthenticated, new DeletePetController().handle);

    router.get('/api/curiosidades', isAuthenticated, new CuriosidadeController().handle);

    router.post('/api/registerVaccine', isAuthenticated, upload.single('file'), new RegisterVaccinesController().handle);

    router.post('/api/registerExam', isAuthenticated, upload.single('img_laudo'), new RegisterExamController().handle);

    router.get('/api/detailVaccines/:pet_id', new DetailVaccinesController().handle);

    router.get('/api/detailExames/:pet_id', new DetailExamController().handle);

    router.post('/api/userUpdate', upload.single('file'), new UpdateUserDataController().handle);

    router.get('/api/VaccineOne/:id_vacinne', isAuthenticated, new DetailPetVaccinesOneController().handle);

    router.get('/api/ExamOne/:id_exame', isAuthenticated, new DetailPetExamOneController().handle);

    router.delete('/api/deleteVaccine' , isAuthenticated, new DeleteVaccineController().handle);

    router.delete('/api/deleteExame', isAuthenticated, new DeleExamController().handle);

    router.put('/api/updatevaccine' , isAuthenticated, new UpdateVaccineController().handle);

    router.put('/api/updateexame', isAuthenticated, new UpdateExamController().handle);

    router.post('/api/postPublicacao', isAuthenticated, upload.single('img_blog'), new PublicacoesPetController().handle);

    router.put('/api/updatePet', isAuthenticated, upload.single('img_perfil'), new UpdatePetController().handle);

    router.delete('/api/deletePubli', isAuthenticated, new DeletePubliController().handle);

    router.delete('/api/deleteUser', isAuthenticated, new UserDeleteController().handle);

    router.put('/api/UpdatePublicao', isAuthenticated, new UpdatePubliController().handle);

    router.get('/api/detailPublicacao', isAuthenticated, new DetailPublicacoesController().handle);

    router.post('/api/dataDisponivel', isAuthenticated, new DatasAgendamentosController().handle);

    export { router };
