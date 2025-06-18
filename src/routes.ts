    import { Router }                               from 'express';
    import multer                                   from 'multer';    
    import { CreateUserController }                 from './controllers/user/CreateUserController';
    import { AuthUserController   }                 from './controllers/user/AuthUserController';
    import { UpdateUserController }                 from './controllers/user/UpdateUserController';
    import { DetailUserController }                 from './controllers/user/DetailUserController';
    import { DogapiController     }                 from './controllers/api/DogapiController';
    import { ForgotPassword       }                 from './controllers/api/ForgotPassword';
    import { isAuthenticated      }                 from './middlewares/isAuthenticated.1';
    import { CreatePetController  }                 from './controllers/pets/CreatePetController';
    import { DetailPetController  }                 from  './controllers/pets/DetailPetController';
    import { DetailPetOneController }               from  './controllers/pets/DetailPetOneController';
    import { DeletePetController  }                 from  './controllers/pets/DeletePetController';
    import { CuriosidadeController }                from './controllers/api/CuriosidadeController';
    import { RegisterVaccinesController }           from './controllers/pets/RegisterVaccinesController';
    import { DetailVaccinesController }             from './controllers/pets/DetailVaccinesController';
    import { UpdateUserDataController }             from './controllers/user/UpdateUserDataController';
    import { RegisterExamController }               from './controllers/pets/RegisterExamController';
    import { DetailExamController }                 from "./controllers/pets/DetailExamController";
    import { DetailPetVaccinesOneController }       from "./controllers/pets/DetailPetVaccinesOneController";
    import { DetailPetExamOneController }           from "./controllers/pets/DetailPetExamOneController";
    import { DeleteVaccineController }              from "./controllers/pets/DeleteVaccineController";
    import { DeleExamController }                   from "./controllers/pets/DeleteExamController";
    import { UpdateVaccineController }              from "./controllers/pets/UpdateVaccineController";
    import { UpdateExamController }                 from "./controllers/pets/UpdateExamController";
    import { PublicacoesPetController }             from "./controllers/pets/PublicacoesPetController";
    import { UpdatePetController }                  from "./controllers/pets/UpdatePetController";
    import { DeletePubliController }                from "./controllers/pets/DeletePubliController";
    import { UserDeleteController }                 from "./controllers/user/UserDeleteController";
    import { UpdatePubliController }                from "./controllers/pets/UpdatePubliController";
    import { DetailPublicacoesController }          from './controllers/pets/DetailPublicacoesController';
    import { ServicoController }                    from './clinica-petland/controllers/agendamento/ServicosController';
    import { HorarioController }                    from './clinica-petland/controllers/agendamento/HorariosController';
    import { BuscarServicoController }              from './controllers/clinicas/BuscarServicoController';
    import { BuscarHorarioController }              from './clinica-petland/controllers/agendamento/BuscarHorarioController';
    import { AgendamentoController }                from './controllers/clinicas/AgendamentoController';
    import { AtualizacaoHorarioController }         from './controllers/status/AtualizacaoStatusHorarioController';
    import { StatusAgendamentoController }          from './controllers/status/StatusAgendamentoController';
    import { ChamarAgendamentoController }          from './controllers/clinicas/ChamarAgendamentoController';
    import { BuscarHorarioAllController }           from './clinica-petland/controllers/agendamento/BuscarHorariosAll';
    import { OneAgendamentoController }             from './controllers/clinicas/OneAgendamento';
    import { BuscarTokenController }                from './controllers/notification/buscaTokenController';
    import { RegisterTokenController }              from './controllers/notification/registerTokenController';
    import { TokenAgendamentoController }           from './controllers/notification/ChamarAgendamentoToken';
    import { SendNotificationController }           from './cron/enviarNotificacao';
    import { CadastradoClinicaController }          from './clinica-petland/controllers/user/CadastroClinicaController';    
    import { AuthClinicaController }                from './clinica-petland/controllers/auth/AuthClinicaController';
    import { DetailClinicaController }              from './clinica-petland/controllers/user/DetailClinicaController';
    import { GetHorarioController }                 from './clinica-petland/controllers/horarios/GetHorarioController';
    import { CadastroVeterinarioController }        from './clinica-petland/controllers/veterinarios/CadastroVeterinarioController';
    import { InfosVeterinarioController }           from './clinica-petland/controllers/veterinarios/InfosVeterinarioController';
    import { StatusVeterinarioController }          from './clinica-petland/controllers/veterinarios/StatusVeterinarioController';
    import { PutHorarioController }                 from './clinica-petland/controllers/horarios/PutHorarioController'
    import { UpdateVeterinarioController }          from './clinica-petland/controllers/veterinarios/UpdateVeterinarioController';
    import { EnvioFormularioController }            from './clinica-petland/controllers/email/EnvioFormulario';
    import { CriarConfiguracaoAgendaController }    from './clinica-petland/controllers/agendamento/ConfigAgendaController';
    import { GerarHorariosMensalController }        from './clinica-petland/controllers/agendamento/GerarHorariosMensalController';
    import { ServicoPutStatusController }           from './controllers/status/ServicoPutStatusController';
    import { BuscarTodosServicosController }        from './controllers/buscarServicos/BuscarTodosServicosController'
    import { ReceitasController }                   from './clinica-petland/controllers/receitas/ReceitasController'
    import { BuscarReceitaController }              from './clinica-petland/controllers/receitas/BuscarReceitaController'
    import  uploadConfig                            from './config/multer';

    const router = Router();

    const upload = multer(uploadConfig.upload("./tmp"));

    const buscarTokenController = new BuscarTokenController();
    const buscarHorarioAllController = new BuscarHorarioAllController();
    const envioFormularioController = new EnvioFormularioController();
    const criarConfiguracao = new CriarConfiguracaoAgendaController();
    const gerarHorarios = new GerarHorariosMensalController();
    

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

    router.post('/api/servico', isAuthenticated, new ServicoController().handle);

    router.get('/api/buscarServico',  isAuthenticated, new BuscarServicoController().handle);

    router.post('/api/criarAgendamento', isAuthenticated, new AgendamentoController().handle);

    router.get('/api/chamarAgendamento', isAuthenticated, new ChamarAgendamentoController().handle);

    router.get('/api/chamarAgendamentoOne/:id', isAuthenticated, new OneAgendamentoController().handle);

    router.put('/api/atualizaStatusHora/:id/status', isAuthenticated, new AtualizacaoHorarioController().handle);

    router.put('/api/atualizaStatusAgendamento/:id/status', isAuthenticated, new StatusAgendamentoController().handle);

    router.post('/api/registerToken', isAuthenticated, new RegisterTokenController().handle);
    
    router.get('/api/tokens/:user_id', isAuthenticated, (req, res) => buscarTokenController.getTokenByUserId(req, res));

    router.get('/api/tokenAgendamento', isAuthenticated, new TokenAgendamentoController().handle);

    router.post("/api/sendNotification", new SendNotificationController().handle);

    router.post("/api/cadastroClinica", new CadastradoClinicaController().handle);
    
    router.post('/api/clinicaSession', new AuthClinicaController().handle);

    router.get('/api/clinica', isAuthenticated, new DetailClinicaController().handle);

    router.get('/api/horarios', isAuthenticated, new GetHorarioController().handle);

    router.post('/api/cadastroVeterinario', isAuthenticated, new CadastroVeterinarioController().handle);

    router.get('/api/infosVeterinario', isAuthenticated, new InfosVeterinarioController().handle);

    router.put('/api/statusVeterinario/:id/status', isAuthenticated, new StatusVeterinarioController().handle);

    router.put('/api/statusServico/:id/status', isAuthenticated, new ServicoPutStatusController().handle);

    router.post('/api/agendarHoraio', isAuthenticated, new HorarioController().handle);

    router.get('/api/buscarHorarioPorServico/:servico', isAuthenticated, new BuscarHorarioController().handle);

    router.get('/api/all_horarios', isAuthenticated, new BuscarHorarioAllController().handle);

    router.get('/api/BuscarAgendamentos', isAuthenticated, (req, res) =>
        buscarHorarioAllController.handleAgendamentos(req, res)
    );

    router.get('/api/buscarTodosServicos', isAuthenticated, new BuscarTodosServicosController().handle)

    router.put('/api/updateHora', isAuthenticated, new PutHorarioController().handle)

    router.put('/api/updateVeterinario', isAuthenticated, new UpdateVeterinarioController().handle)

    router.post('/api/envioFormulario', envioFormularioController.handle)

    router.post('/api/configurarAgenda' , criarConfiguracao.handle)

    router.post('/api/gerarHorarios', gerarHorarios.handle);

    router.post('/api/receitas', isAuthenticated, new ReceitasController().gerarReceita)

    router.get('/api/buscarReceita/:id', isAuthenticated, new BuscarReceitaController().handle)



    
    export { router };