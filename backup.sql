-- MariaDB dump 10.19  Distrib 10.11.6-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: guiadospets.com.br
-- ------------------------------------------------------
-- Server version	10.11.6-MariaDB-0+deb12u1-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `guiadospets.com.br`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `guiadospets.com.br` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `guiadospets.com.br`;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES
('3d90a3bb-899c-4f60-a896-6c78a456a083','aaa4b3f62c31e49efda3eff1f3ba92f6153119dbfeb96a36c67ca878aebe73d1','2024-06-11 19:47:44.288','20240527123230_add_pet_model',NULL,NULL,'2024-06-11 19:47:44.281',1),
('439dafc4-1533-4a9a-8b81-c8c8487df989','f1327462e58621501495baaa5964746dc484da150975daaa86af970a48de1357','2024-06-11 19:47:44.633','20240611194744_add_input_curiosidades',NULL,NULL,'2024-06-11 19:47:44.628',1),
('657f74ef-9020-4459-ba2f-531d3a86c028','d1ed839004896acd77133c26842a9b45c264956bb79d435b9d91d8f18a734d83','2024-06-11 19:47:44.229','20240417185238_',NULL,NULL,'2024-06-11 19:47:44.222',1),
('956148f5-32e4-464b-9faf-6bfd031a05a1','b4cff952ab100059bad8e0c9dc0e3de4b3b097187bac37f55ad1e7b5e1f4c406','2024-06-11 19:47:44.268','20240417201621_',NULL,NULL,'2024-06-11 19:47:44.229',1),
('bd0ee5ff-235b-4c9f-9f31-4518a37b5e55','7300fe6ec3cd32449d0c14f5d5156d531c63210041e1c0d519d693027e0cce36','2024-06-11 19:47:44.281','20240527123013_init',NULL,NULL,'2024-06-11 19:47:44.269',1),
('cabde783-f7a7-4e21-bca3-a2f6e033cf4a','b1673681c645d999c445b3cae0b630b082790fa058f3bacaf9b65143a9531ad0','2024-06-11 19:47:44.221','20240417184917_',NULL,NULL,'2024-06-11 19:47:44.217',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curiosidades`
--

DROP TABLE IF EXISTS `curiosidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curiosidades` (
  `id` varchar(191) NOT NULL,
  `conteudo` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curiosidades`
--

LOCK TABLES `curiosidades` WRITE;
/*!40000 ALTER TABLE `curiosidades` DISABLE KEYS */;
INSERT INTO `curiosidades` VALUES
('d7bb839f-2830-11ef-9522-e97072ee51c9','Ter um cachorro traz diversos benefícios para a saúde humana, incluindo melhora do humor, alívio do estresse, regulação do peso e pressão arterial, aumento da disposição para atividades físicas e auxílio nos relacionamentos amorosos. Esses benefícios são comprovados por estudos científicos de várias universidades.'),
('d7bc2886-2830-11ef-9522-e97072ee51c9','Cada cachorro possui um focinho único, similar às impressões digitais humanas. O veterinário René Monteiro Passos destaca que os focinhos têm características próprias em suas ranhuras, tornando-os incomparáveis.'),
('d7bca913-2830-11ef-9522-e97072ee51c9','Cuidado com o que você oferece para seu cão comer. Alguns alimentos, como chocolate e plantas venenosas, são fatais para eles. Alimentação inadequada é a principal causa da obesidade canina, que pode levar a várias doenças. No entanto, cães podem comer grama à vontade, pois isso ajuda na digestão.'),
('d7bd2fba-2830-11ef-9522-e97072ee51c9','A longevidade dos cachorros varia, com algumas raças vivendo até 30 anos. É importante pesquisar antes de adotar um pet. Cães de raças grandes tendem a viver menos devido à presença de radicais livres, que podem causar danos celulares e doenças. Boas rações, exames periódicos e alimentação balanceada ajudam a garantir uma vida longa e saudável para os cães'),
('d7bdc5ed-2830-11ef-9522-e97072ee51c9','O comportamento do seu cachorro pode ser entendido através dos movimentos do rabo, que comunicam emoções como arrependimento, angústia, energia, insegurança, medo e até ameaça. Embora o movimento rápido do rabo seja frequentemente associado à felicidade, ele também pode indicar estresse. \"Calming signals\" são sinais faciais e posturais que mostram desconforto. Cães sem cauda se expressam de outras maneiras, conforme explica a especialista Katia.'),
('d7be59c4-2830-11ef-9522-e97072ee51c9','Focinho quente quer dizer que o bichinho está febril Mito. Para saber se o animal está com febre é preciso tirar sua temperatura com termômetro via retal. Focinho muito seco ou que começa a descamar pode ser sinal de algum problema de pele, como dermatite e dermatofitose'),
('d7bedbed-2830-11ef-9522-e97072ee51c9','Formigas encontradas perto da urina do cão podem ser um sinal de que ele esteja diabético, Verdade. Um dos indicativos de que há açúcar em excesso no sangue é por meio da urina, que atrai insetos, principalmente a formiga. Caso isso ocorra, leve seu pet ao veterinário para realizar exames de sangue e checar se ele realmente sofre de diabetes.'),
('d7bf6470-2830-11ef-9522-e97072ee51c9','Cachorros levantam a pata para fazer xixi por serem animais territoriais, especialmente os machos. Ao levantar a pata, eles conseguem marcar uma área maior com seu cheiro, afastando predadores e outros machos competidores. Gatos machos também fazem isso, e algumas cadelas podem adotar esse hábito ao conviver com machos, embora seja menos comum.'),
('d7c014be-2830-11ef-9522-e97072ee51c9','O Lundehund norueguês é o único cão com seis dedos em cada pé.'),
('d7c08324-2830-11ef-9522-e97072ee51c9','Cães gostam de roer ossos por razões históricas. Seus ancestrais, os lobos, roíam ossos para aproveitar toda a carne, limpar os dentes e ingerir cálcio. Hoje, porém, os cães domesticados têm dentes mais frágeis. Por isso, é melhor oferecer mordedores de couro ou plástico macio, permitindo que eles se sintam predadores sem danificar os dentes.'),
('d7c118bf-2830-11ef-9522-e97072ee51c9','Newfoundlands são ótimos nadadores por causa de seus pés palmados.'),
('d7c1a035-2830-11ef-9522-e97072ee51c9','Os cães julgam os objetos primeiro pelo seu movimento, depois pelo seu brilho e, por último, pela sua forma.'),
('d7c21713-2830-11ef-9522-e97072ee51c9','Mantenha sempre uma identificação com contato no colar do seu pet'),
('d7c28820-2830-11ef-9522-e97072ee51c9','Os gatos possuem 32 músculos em cada orelha'),
('d7c2f6b3-2830-11ef-9522-e97072ee51c9','Brincar regularmente com seu gato ajuda a reduzir o estresse'),
('d7c35136-2830-11ef-9522-e97072ee51c9','Cachorros podem entender até 250 palavras e gestos'),
('d7c3c104-2830-11ef-9522-e97072ee51c9','Treine seu cão com comandos simples para melhorar o comportamento'),
('d7c432a1-2830-11ef-9522-e97072ee51c9','A maioria dos gatos não tem cílios'),
('d7c4a02d-2830-11ef-9522-e97072ee51c9','Escove os dentes do seu cão regularmente para evitar problemas dentários'),
('d7c53bbc-2830-11ef-9522-e97072ee51c9','Cachorros suam pelas patas'),
('d7c592de-2830-11ef-9522-e97072ee51c9','Ofereça brinquedos de roer seguros para manter os dentes do seu cão saudáveis'),
('d7c600a1-2830-11ef-9522-e97072ee51c9','O ronronar dos gatos pode ter um efeito calmante sobre os humanos'),
('d7c64934-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente tranquilo para seu gato, com esconderijos e áreas elevadas'),
('d7c6b695-2830-11ef-9522-e97072ee51c9','Os peixes podem reconhecer seus donos'),
('d7c7071c-2830-11ef-9522-e97072ee51c9','Mantenha a água do aquário limpa para garantir a saúde dos peixes'),
('d7c77c5c-2830-11ef-9522-e97072ee51c9','Hamsters armazenam comida nas bochechas'),
('d7c7ce30-2830-11ef-9522-e97072ee51c9','Forneça uma roda de exercícios para hamsters, pois eles são ativos à noite'),
('d7c844f2-2830-11ef-9522-e97072ee51c9','Pássaros podem aprender a imitar sons e até palavras'),
('d7c8c549-2830-11ef-9522-e97072ee51c9','Ofereça uma dieta variada para pássaros, incluindo sementes, frutas e vegetais'),
('d7c94ffb-2830-11ef-9522-e97072ee51c9','Coelhos podem girar suas orelhas 180 graus'),
('d7c9b16b-2830-11ef-9522-e97072ee51c9','Forneça feno de qualidade para a dieta diária dos coelhos'),
('d7ca25bc-2830-11ef-9522-e97072ee51c9','Cães têm um olfato cerca de 40 vezes mais sensível que o dos humanos'),
('d7ca9b75-2830-11ef-9522-e97072ee51c9','Leve seu cão para caminhadas regulares para exercitar o corpo e a mente'),
('d7cb085b-2830-11ef-9522-e97072ee51c9','Gatos passam 70% da vida dormindo'),
('d7cb59ef-2830-11ef-9522-e97072ee51c9','Certifique-se de que seu gato tenha uma cama confortável e limpa para dormir'),
('d7cbd063-2830-11ef-9522-e97072ee51c9','Os periquitos são capazes de reconhecer suas próprias imagens em espelhos'),
('d7cc3d28-2830-11ef-9522-e97072ee51c9','Ofereça brinquedos interativos para manter seu periquito mentalmente estimulado'),
('d7ccb3cc-2830-11ef-9522-e97072ee51c9','Porquinhos-da-índia fazem vários tipos de sons para se comunicar'),
('d7cd283e-2830-11ef-9522-e97072ee51c9','Socialize seus porquinhos-da-índia, pois eles são animais sociais que gostam de companhia'),
('d7cda282-2830-11ef-9522-e97072ee51c9','Os olhos dos cães têm uma terceira pálpebra chamada membrana nictitante'),
('d7ce19a3-2830-11ef-9522-e97072ee51c9','Realize check-ups veterinários regulares para garantir a saúde ocular dos pets'),
('d7ce8b02-2830-11ef-9522-e97072ee51c9','A tartaruga pode viver mais de 100 anos'),
('d7ced70f-2830-11ef-9522-e97072ee51c9','Forneça um habitat adequado e alimentação balanceada para tartarugas'),
('d7cf47fc-2830-11ef-9522-e97072ee51c9','Os coelhos podem fazer um barulho chamado \"ronronar\" quando estão felizes'),
('d7cfb933-2830-11ef-9522-e97072ee51c9','Crie um espaço seguro e livre de perigos para os coelhos explorarem'),
('d7d02832-2830-11ef-9522-e97072ee51c9','Cães têm aproximadamente 1'),
('d7d093a0-2830-11ef-9522-e97072ee51c9','700 papilas gustativas, enquanto os humanos têm cerca de 9'),
('d7d101be-2830-11ef-9522-e97072ee51c9','000'),
('d7d14b7b-2830-11ef-9522-e97072ee51c9','Evite alimentar seu cão com restos de comida, pois podem ser prejudiciais'),
('d7d1bb41-2830-11ef-9522-e97072ee51c9','A maioria dos gatos domésticos descende do gato selvagem africano'),
('d7d22a95-2830-11ef-9522-e97072ee51c9','Ofereça arranhadores para gatos para que eles possam afiar suas garras'),
('d7d29bda-2830-11ef-9522-e97072ee51c9','Alguns cães podem detectar certas doenças humanas, como câncer e diabetes'),
('d7d31006-2830-11ef-9522-e97072ee51c9','Ensine comandos básicos de obediência ao seu cão desde cedo'),
('d7d381b4-2830-11ef-9522-e97072ee51c9','Pássaros podem dormir com metade do cérebro acordada'),
('d7d3f329-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente enriquecido e seguro para pássaros, com poleiros e brinquedos'),
('d7d46268-2830-11ef-9522-e97072ee51c9','Os porquinhos-da-índia não podem produzir vitamina C e precisam obtê-la através da dieta'),
('d7d4d1be-2830-11ef-9522-e97072ee51c9','Suplementos de vitamina C podem ser necessários na dieta dos porquinhos-da-índia'),
('d7d54076-2830-11ef-9522-e97072ee51c9','Cães podem ser treinados para ajudar pessoas com deficiência'),
('d7d5b5c4-2830-11ef-9522-e97072ee51c9','Estabeleça uma rotina de alimentação e exercício para seu cão'),
('d7d62ba3-2830-11ef-9522-e97072ee51c9','Gatos têm cinco dedos nas patas dianteiras e quatro nas traseiras'),
('d7d6976e-2830-11ef-9522-e97072ee51c9','Mantenha as unhas do seu gato aparadas para evitar arranhões'),
('d7d7139d-2830-11ef-9522-e97072ee51c9','Hamsters são animais noturnos'),
('d7d788c2-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente silencioso durante o dia para hamsters descansarem'),
('d7d7d183-2830-11ef-9522-e97072ee51c9','Os peixes dourados podem viver até 20 anos com os cuidados adequados'),
('d7d84cad-2830-11ef-9522-e97072ee51c9','Ofereça uma dieta balanceada e evite superalimentar peixes'),
('d7d8c0b8-2830-11ef-9522-e97072ee51c9','Os cães podem expressar várias emoções através dos movimentos da cauda'),
('d7d937e2-2830-11ef-9522-e97072ee51c9','Observe a linguagem corporal do seu cão para entender seus sentimentos'),
('d7d9a4e5-2830-11ef-9522-e97072ee51c9','Gatos têm garras retráteis que ficam escondidas quando não estão em uso'),
('d7da2278-2830-11ef-9522-e97072ee51c9','Proporcione brinquedos para gatos que incentivem o uso das garras'),
('d7da74d5-2830-11ef-9522-e97072ee51c9','Coelhos podem reconhecer seus donos e até responder pelo nome'),
('d7dadfc0-2830-11ef-9522-e97072ee51c9','Socialize seu coelho regularmente para fortalecer o vínculo'),
('d7db5b41-2830-11ef-9522-e97072ee51c9','Cães podem \"sonhar\" enquanto dormem, assim como humanos'),
('d7dbd1a9-2830-11ef-9522-e97072ee51c9','Crie um espaço confortável e tranquilo para o sono do seu cão'),
('d7dc46d7-2830-11ef-9522-e97072ee51c9','Gatos têm a capacidade de girar as orelhas independentemente'),
('d7dcb3b0-2830-11ef-9522-e97072ee51c9','Inspecione regularmente as orelhas do seu gato para evitar infecções'),
('d7dd2930-2830-11ef-9522-e97072ee51c9','Peixes betta são conhecidos por seus comportamentos territoriais'),
('d7dd9b2f-2830-11ef-9522-e97072ee51c9','Mantenha peixes betta em aquários separados para evitar conflitos'),
('d7de0af6-2830-11ef-9522-e97072ee51c9','Hamsters podem correr até 8 km por noite em sua roda de exercício'),
('d7de7da0-2830-11ef-9522-e97072ee51c9','Proporcione uma roda de tamanho adequado para o hamster'),
('d7decc19-2830-11ef-9522-e97072ee51c9','Pássaros canoros têm a capacidade de aprender canções complexas'),
('d7df3c3d-2830-11ef-9522-e97072ee51c9','Ofereça um ambiente estimulante para pássaros canoros, com brinquedos e atividades'),
('d7dfaef1-2830-11ef-9522-e97072ee51c9','Cães possuem glândulas sudoríparas nas almofadas das patas'),
('d7e02130-2830-11ef-9522-e97072ee51c9','Verifique regularmente as patas do seu cão para manter a higiene e saúde'),
('d7e08eeb-2830-11ef-9522-e97072ee51c9','Gatos têm um órgão no céu da boca chamado órgão de Jacobson, que ajuda a detectar feromônios'),
('d7e10214-2830-11ef-9522-e97072ee51c9','Mantenha seu gato entretido com brinquedos e arranhadores'),
('d7e14c4e-2830-11ef-9522-e97072ee51c9','Tartarugas podem respirar através de sua cloaca'),
('d7e1bbd8-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente aquático limpo para as tartarugas'),
('d7e22dfe-2830-11ef-9522-e97072ee51c9','Coelhos podem sofrer de um problema chamado \"síndrome de virar a cabeça\" devido a infecções'),
('d7e29bfe-2830-11ef-9522-e97072ee51c9','Consulte um veterinário especializado em exóticos para cuidar de coelhos'),
('d7e3071e-2830-11ef-9522-e97072ee51c9','Cães têm cerca de 1'),
('d7e36d19-2830-11ef-9522-e97072ee51c9','700 papilas gustativas, enquanto os humanos têm aproximadamente 9'),
('d7e3d71a-2830-11ef-9522-e97072ee51c9','000'),
('d7e41bd4-2830-11ef-9522-e97072ee51c9','Ofereça uma dieta equilibrada e evite alimentos tóxicos para cães'),
('d7e48817-2830-11ef-9522-e97072ee51c9','Gatos têm um excelente senso de equilíbrio devido ao seu aparelho vestibular avançado'),
('d7e4f49d-2830-11ef-9522-e97072ee51c9','Forneça prateleiras e estruturas de escalada para os gatos explorarem'),
('d7e5726e-2830-11ef-9522-e97072ee51c9','Peixes dourados podem ver luz ultravioleta'),
('d7e5c52a-2830-11ef-9522-e97072ee51c9','Mantenha uma iluminação adequada para o aquário dos peixes'),
('d7e639a9-2830-11ef-9522-e97072ee51c9','Hamsters podem armazenar alimentos nas bochechas para comer mais tarde'),
('d7e682e1-2830-11ef-9522-e97072ee51c9','Forneça uma dieta variada e saudável para hamsters'),
('d7e6f9b2-2830-11ef-9522-e97072ee51c9','Pássaros podem aprender truques e tarefas simples através do reforço positivo'),
('d7e77091-2830-11ef-9522-e97072ee51c9','Use recompensas para treinar pássaros e manter a mente deles ativa'),
('d7e7e660-2830-11ef-9522-e97072ee51c9','Cães podem detectar mudanças emocionais em humanos'),
('d7e85002-2830-11ef-9522-e97072ee51c9','Passe tempo de qualidade com seu cão para fortalecer o vínculo emocional'),
('d7e8cfaf-2830-11ef-9522-e97072ee51c9','Gatos têm glândulas odoríferas nas bochechas que usam para marcar território'),
('d7e945e9-2830-11ef-9522-e97072ee51c9','Ofereça postes de arranhar para que os gatos possam marcar sem danificar os móveis'),
('d7e9bf52-2830-11ef-9522-e97072ee51c9','Coelhos podem saltar até um metro de altura'),
('d7ea2952-2830-11ef-9522-e97072ee51c9','Crie um espaço seguro para que os coelhos possam pular e explorar'),
('d7eaa4c9-2830-11ef-9522-e97072ee51c9','Cães podem ouvir sons em frequências muito mais altas que os humanos'),
('d7eb1a24-2830-11ef-9522-e97072ee51c9','Evite expor cães a sons altos e estressantes'),
('d7eb9019-2830-11ef-9522-e97072ee51c9','Gatos são capazes de fazer cerca de 100 sons diferentes'),
('d7ebfed0-2830-11ef-9522-e97072ee51c9','Use brinquedos que emitam sons para manter os gatos entretidos'),
('d7ec509c-2830-11ef-9522-e97072ee51c9','Peixes podem mudar de cor como um mecanismo de camuflagem'),
('d7ec9e8e-2830-11ef-9522-e97072ee51c9','Ofereça esconderijos e plantas no aquário para peixes tímidos'),
('d7ed10bf-2830-11ef-9522-e97072ee51c9','Hamsters são capazes de reconhecer seus donos pelo cheiro'),
('d7ed7f5f-2830-11ef-9522-e97072ee51c9','Manuseie seus hamsters regularmente para fortalecer a confiança e o vínculo'),
('d7edf01b-2830-11ef-9522-e97072ee51c9','Cachorros podem sentir cheiros em concentrações tão baixas quanto uma parte por trilhão, o que os torna excelentes para trabalhos de detecção, como buscar pessoas perdidas ou detectar drogas'),
('d7ee6ebe-2830-11ef-9522-e97072ee51c9','Mantenha sempre uma identificação com contato no colar do seu pet para facilitar a localização caso ele se perca'),
('d7eee498-2830-11ef-9522-e97072ee51c9','Os gatos têm a capacidade de rotacionar as orelhas 180 graus, permitindo-lhes localizar a origem de um som com grande precisão'),
('d7ef5b0c-2830-11ef-9522-e97072ee51c9','Brincar regularmente com seu gato ajuda a reduzir o estresse e a fortalecer o vínculo entre vocês'),
('d7efcea3-2830-11ef-9522-e97072ee51c9','Hamsters possuem uma memória espacial muito boa, o que lhes permite lembrar do layout de sua gaiola ou dos caminhos em um labirinto'),
('d7f0434b-2830-11ef-9522-e97072ee51c9','Treine seu cão com comandos simples para melhorar o comportamento e a comunicação entre vocês'),
('d7f0b85d-2830-11ef-9522-e97072ee51c9','Papagaios cinzentos africanos são conhecidos por sua capacidade de não apenas imitar palavras, mas também usar o vocabulário em contextos adequados, mostrando um nível de compreensão surpreendente'),
('d7f13359-2830-11ef-9522-e97072ee51c9','Escove os dentes do seu cão regularmente para evitar problemas dentários e mau hálito'),
('d7f1a4c4-2830-11ef-9522-e97072ee51c9','Peixes betta são agressivos por natureza e costumam lutar até a morte se colocados com outros bettas machos, o que é um comportamento natural de defesa de território'),
('d7f21f82-2830-11ef-9522-e97072ee51c9','Ofereça brinquedos de roer seguros para manter os dentes do seu cão saudáveis e prevenir o tédio'),
('d7f293f2-2830-11ef-9522-e97072ee51c9','Coelhos têm dentes que nunca param de crescer, e precisam roer constantemente para desgastá-los e evitar problemas dentários'),
('d7f30bc6-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente tranquilo para seu gato, com esconderijos e áreas elevadas para ele se sentir seguro'),
('d7f3810b-2830-11ef-9522-e97072ee51c9','Os cães possuem glândulas de cheiro nas patas que deixam um rastro olfativo onde quer que andem, ajudando-os a marcar território e comunicar sua presença para outros cães'),
('d7f3f904-2830-11ef-9522-e97072ee51c9','Mantenha a água do aquário limpa para garantir a saúde dos peixes e evitar doenças'),
('d7f465ee-2830-11ef-9522-e97072ee51c9','Os gatos possuem um órgão especial chamado órgão de Jacobson, que lhes permite \"provar\" cheiros, especialmente feromônios, que são importantes para a comunicação social'),
('d7f4d9b7-2830-11ef-9522-e97072ee51c9','Forneça uma roda de exercícios para hamsters, pois eles são ativos à noite e precisam de atividade física'),
('d7f54a36-2830-11ef-9522-e97072ee51c9','Hamsters armazenam comida em suas bochechas, que podem se estender até os ombros, permitindo-lhes transportar grandes quantidades de alimento de uma vez'),
('d7f5bde3-2830-11ef-9522-e97072ee51c9','Ofereça uma dieta variada para pássaros, incluindo sementes, frutas e vegetais, para garantir uma nutrição adequada'),
('d7f6301c-2830-11ef-9522-e97072ee51c9','Os periquitos podem reconhecer suas próprias imagens em espelhos, um sinal de autoconsciência que é raro no reino animal'),
('d7f6aa63-2830-11ef-9522-e97072ee51c9','Forneça feno de qualidade para a dieta diária dos coelhos para promover a saúde digestiva'),
('d7f71b16-2830-11ef-9522-e97072ee51c9','Cachorros têm a capacidade de entender gestos humanos, como apontar, melhor do que qualquer outro animal não humano, incluindo os grandes primatas'),
('d7f792ff-2830-11ef-9522-e97072ee51c9','Leve seu cão para caminhadas regulares para exercitar o corpo e a mente, prevenindo o tédio e a obesidade'),
('d7f807eb-2830-11ef-9522-e97072ee51c9','Os gatos têm uma terceira pálpebra, chamada membrana nictitante, que ajuda a proteger e manter os olhos úmidos, especialmente em situações de perigo ou durante a caça'),
('d7f8802f-2830-11ef-9522-e97072ee51c9','Certifique-se de que seu gato tenha uma cama confortável e limpa para dormir, proporcionando um local seguro para descanso'),
('d7f8f486-2830-11ef-9522-e97072ee51c9','Os peixes dourados podem lembrar de rotinas e reconhecer seus donos, respondendo a eles com comportamento animado durante a alimentação'),
('d7f96b6f-2830-11ef-9522-e97072ee51c9','Ofereça brinquedos interativos para manter seu periquito mentalmente estimulado e evitar o tédio'),
('d7f9efeb-2830-11ef-9522-e97072ee51c9','Os coelhos são capazes de aprender truques simples, como vir quando chamados, e podem até responder ao seu nome, mostrando um nível surpreendente de inteligência e sociabilidade'),
('d7fa6911-2830-11ef-9522-e97072ee51c9','Socialize seus porquinhos-da-índia, pois eles são animais sociais que gostam de companhia e interação'),
('d7fadce1-2830-11ef-9522-e97072ee51c9','Papagaios podem formar laços muito fortes com seus donos e podem sofrer de depressão se deixados sozinhos por longos períodos'),
('d7fb52d9-2830-11ef-9522-e97072ee51c9','Realize check-ups veterinários regulares para garantir a saúde ocular dos pets e prevenir problemas de visão'),
('d7fbc61d-2830-11ef-9522-e97072ee51c9','Cães podem detectar mudanças emocionais em humanos e muitas vezes tentam confortá-los, mostrando empatia e um forte vínculo emocional'),
('d7fc4089-2830-11ef-9522-e97072ee51c9','Forneça um habitat adequado e alimentação balanceada para tartarugas para promover uma vida longa e saudável'),
('d7fcc03e-2830-11ef-9522-e97072ee51c9','Os gatos usam seus bigodes para medir a largura de aberturas e evitar ficar presos, um mecanismo de sobrevivência útil para seus ancestrais selvagens'),
('d7fd3c88-2830-11ef-9522-e97072ee51c9','Crie um espaço seguro e livre de perigos para os coelhos explorarem, permitindo que eles exercitem e mantenham-se ativos'),
('d7fdb4ab-2830-11ef-9522-e97072ee51c9','Peixes têm a capacidade de mudar de cor como um mecanismo de camuflagem para se esconder de predadores, um comportamento comum em ambientes naturais'),
('d7fe409d-2830-11ef-9522-e97072ee51c9','Evite alimentar seu cão com restos de comida, pois muitos alimentos humanos podem ser prejudiciais ou tóxicos para eles'),
('d7feb8f7-2830-11ef-9522-e97072ee51c9','Hamsters são noturnos e passam a maior parte do dia dormindo, tornando-se ativos principalmente à noite, um comportamento adaptativo para evitar predadores'),
('d7ff35d5-2830-11ef-9522-e97072ee51c9','Ofereça arranhadores para gatos para que eles possam afiar suas garras de maneira adequada e saudável'),
('d7ffad84-2830-11ef-9522-e97072ee51c9','Os cães têm uma memória associativa, o que significa que eles lembram de eventos com base em associações positivas ou negativas, em vez de detalhes específicos'),
('d8003b54-2830-11ef-9522-e97072ee51c9','Ensine comandos básicos de obediência ao seu cão desde cedo para facilitar a convivência e fortalecer o vínculo'),
('d800d1dc-2830-11ef-9522-e97072ee51c9','Gatos têm garras retráteis que ficam escondidas quando não estão em uso, permitindo-lhes manter as garras afiadas para caça e defesa'),
('d8014c92-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente enriquecido e seguro para pássaros, com poleiros e brinquedos para estimular sua mente'),
('d801c529-2830-11ef-9522-e97072ee51c9','Papagaios podem imitar uma ampla gama de sons, incluindo alarmes de fumaça e toques de telefone, devido à sua capacidade vocal altamente desenvolvida'),
('d80240bb-2830-11ef-9522-e97072ee51c9','Suplementos de vitamina C podem ser necessários na dieta dos porquinhos-da-índia para evitar deficiências'),
('d802b666-2830-11ef-9522-e97072ee51c9','Cachorros podem \"sonhar\" durante o sono REM, e os filhotes e cães mais velhos tendem a sonhar mais do que os cães adultos'),
('d8032ffb-2830-11ef-9522-e97072ee51c9','Estabeleça uma rotina de alimentação e exercício para seu cão para manter a saúde e evitar problemas comportamentais'),
('d803a469-2830-11ef-9522-e97072ee51c9','Os gatos têm um excelente senso de equilíbrio devido ao seu aparelho vestibular avançado, o que lhes permite realizar acrobacias impressionantes ao escalar'),
('d8041b37-2830-11ef-9522-e97072ee51c9','Mantenha as unhas do seu gato aparadas para evitar arranhões e lesões em casa'),
('d8049737-2830-11ef-9522-e97072ee51c9','Peixes betta machos constroem ninhos de bolhas na superfície da água para abrigar os ovos fertilizados, mostrando um comportamento parental raro entre os peixes'),
('d8050fe5-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente silencioso durante o dia para hamsters descansarem, já que são animais noturnos'),
('d8058084-2830-11ef-9522-e97072ee51c9','Os hamsters têm uma visão periférica muito boa, mas não veem bem diretamente na frente deles, dependendo mais de outros sentidos para navegar'),
('d8060681-2830-11ef-9522-e97072ee51c9','Ofereça uma dieta balanceada e evite superalimentar peixes para prevenir problemas de saúde como a obstrução intestinal'),
('d8069680-2830-11ef-9522-e97072ee51c9','Os cães têm um campo de visão de aproximadamente 250 graus, permitindo-lhes detectar movimentos e potenciais ameaças com facilidade'),
('d8070cf5-2830-11ef-9522-e97072ee51c9','Observe a linguagem corporal do seu cão para entender seus sentimentos e necessidades, melhorando a comunicação'),
('d807999c-2830-11ef-9522-e97072ee51c9','Gatos têm a capacidade de girar as orelhas independentemente, o que lhes permite localizar sons com precisão em ambientes complexos'),
('d808107f-2830-11ef-9522-e97072ee51c9','Proporcione brinquedos para gatos que incentivem o uso das garras, ajudando a manter suas garras saudáveis'),
('d8088aac-2830-11ef-9522-e97072ee51c9','Papagaios têm uma estrutura social complexa e muitas vezes formam bandos com hierarquias definidas, similar aos humanos'),
('d8090117-2830-11ef-9522-e97072ee51c9','Socialize seu coelho regularmente para fortalecer o vínculo e proporcionar um ambiente seguro e interativo'),
('d809756d-2830-11ef-9522-e97072ee51c9','Os peixes dourados podem crescer até tamanhos impressionantes se tiverem espaço adequado e cuidados apropriados, desafiando o mito de que eles permanecem pequenos em aquários'),
('d809fec5-2830-11ef-9522-e97072ee51c9','Crie um espaço confortável e tranquilo para o sono do seu cão, garantindo que ele descanse adequadamente'),
('d80a797a-2830-11ef-9522-e97072ee51c9','Os coelhos podem fazer barulhos chamados \"ronronar\" quando estão contentes, semelhante ao som que os gatos fazem quando estão felizes'),
('d80af794-2830-11ef-9522-e97072ee51c9','Inspecione regularmente as orelhas do seu gato para evitar infecções e garantir a saúde auditiva'),
('d80b7367-2830-11ef-9522-e97072ee51c9','Cães têm uma capacidade inata de seguir o rastro olfativo de uma pessoa ou animal por longas distâncias, uma habilidade utilizada em operações de busca e resgate'),
('d80bfaa6-2830-11ef-9522-e97072ee51c9','Mantenha peixes betta em aquários separados para evitar conflitos e garantir um ambiente tranquilo'),
('d80c7a98-2830-11ef-9522-e97072ee51c9','Os gatos têm um senso de olfato altamente desenvolvido que lhes permite detectar presas e predadores à distância'),
('d80cf33f-2830-11ef-9522-e97072ee51c9','Proporcione uma roda de tamanho adequado para o hamster para que ele possa se exercitar de maneira segura'),
('d80d6b38-2830-11ef-9522-e97072ee51c9','Papagaios cinzentos africanos podem viver até 60 anos ou mais, tornando-os companheiros de longa data que exigem compromisso'),
('d80df01b-2830-11ef-9522-e97072ee51c9','Ofereça um ambiente estimulante para pássaros canoros, com brinquedos e atividades para manter sua mente ativa'),
('d80e76c8-2830-11ef-9522-e97072ee51c9','Os peixes betta têm labirintos que lhes permitem respirar ar atmosférico, o que é uma adaptação para viver em águas pouco oxigenadas'),
('d80ef216-2830-11ef-9522-e97072ee51c9','Verifique regularmente as patas do seu cão para manter a higiene e evitar infecções ou irritações'),
('d80f688b-2830-11ef-9522-e97072ee51c9','Hamsters são animais solitários por natureza e podem ser territoriais, muitas vezes lutando se colocados juntos em um espaço confinado'),
('d80fe3c2-2830-11ef-9522-e97072ee51c9','Mantenha seu gato entretido com brinquedos e arranhadores para estimular a atividade física e mental'),
('d8105adc-2830-11ef-9522-e97072ee51c9','Cães têm glândulas de cheiro na base da cauda que são usadas para marcar território e comunicar informações a outros cães'),
('d810d30f-2830-11ef-9522-e97072ee51c9','Proporcione um ambiente aquático limpo para as tartarugas para promover sua saúde e bem-estar'),
('d8114ab2-2830-11ef-9522-e97072ee51c9','Gatos têm uma estrutura óssea flexível que lhes permite espremer através de aberturas surpreendentemente pequenas'),
('d811be06-2830-11ef-9522-e97072ee51c9','Consulte um veterinário especializado em exóticos para cuidar de coelhos e garantir que suas necessidades sejam atendidas'),
('d8122dd8-2830-11ef-9522-e97072ee51c9','Os papagaios têm pés zygodactyl, com dois dedos voltados para frente e dois para trás, proporcionando-lhes uma excelente capacidade de escalada e manipulação de objetos'),
('d812ee42-2830-11ef-9522-e97072ee51c9','Ofereça uma dieta equilibrada e evite alimentos tóxicos para cães para garantir sua saúde e bem-estar'),
('d8137085-2830-11ef-9522-e97072ee51c9','Os peixes dourados têm um sistema digestivo simples que requer uma dieta balanceada para evitar problemas de saúde, como a obstrução intestinal'),
('d813f71c-2830-11ef-9522-e97072ee51c9','Forneça prateleiras e estruturas de escalada para os gatos explorarem, estimulando sua atividade física e mental'),
('d8147a01-2830-11ef-9522-e97072ee51c9','Os coelhos têm uma estrutura social complexa e podem formar laços fortes com outros coelhos e humanos'),
('d814ef18-2830-11ef-9522-e97072ee51c9','Mantenha uma iluminação adequada para o aquário dos peixes para promover um ambiente saudável e natural'),
('d815650e-2830-11ef-9522-e97072ee51c9','Cães podem ser treinados para detectar baixos níveis de açúcar no sangue em pessoas com diabetes, oferecendo uma camada adicional de segurança'),
('d815de10-2830-11ef-9522-e97072ee51c9','Forneça uma dieta variada e saudável para hamsters para garantir uma nutrição adequada e evitar deficiências'),
('d8165298-2830-11ef-9522-e97072ee51c9','Os gatos têm uma membrana especial nos olhos chamada tapetum lucidum, que reflete a luz e melhora sua visão noturna'),
('d816c8ce-2830-11ef-9522-e97072ee51c9','Use recompensas para treinar pássaros e manter sua mente ativa, promovendo comportamentos positivos'),
('d8173c7d-2830-11ef-9522-e97072ee51c9','Papagaios são altamente inteligentes e requerem estimulação mental constante para evitar comportamentos destrutivos'),
('d817b0dc-2830-11ef-9522-e97072ee51c9','Passe tempo de qualidade com seu cão para fortalecer o vínculo emocional e proporcionar conforto mútuo'),
('d81822f1-2830-11ef-9522-e97072ee51c9','Peixes betta são conhecidos por suas cores vibrantes e nadadeiras elaboradas, que são resultado de seleção genética e criação especializada'),
('d8189c16-2830-11ef-9522-e97072ee51c9','Ofereça postes de arranhar para que os gatos possam marcar seu território de forma apropriada e saudável'),
('d81910e0-2830-11ef-9522-e97072ee51c9','Hamsters têm uma expectativa de vida relativamente curta, geralmente de 2 a 3 anos, o que é importante considerar ao adotá-los'),
('d81987ab-2830-11ef-9522-e97072ee51c9','Crie um espaço seguro para que os coelhos possam pular e explorar, promovendo sua saúde física e mental'),
('d819fb82-2830-11ef-9522-e97072ee51c9','Cães podem identificar mudanças emocionais em seus donos e muitas vezes respondem oferecendo conforto ou proteção'),
('d81a80fd-2830-11ef-9522-e97072ee51c9','Evite expor cães a sons altos e estressantes, que podem causar ansiedade e desconforto'),
('d81b029d-2830-11ef-9522-e97072ee51c9','Os gatos usam suas caudas para equilibrar e se comunicar, movendo-as de maneiras específicas para expressar emoções'),
('d81b8dd1-2830-11ef-9522-e97072ee51c9','Use brinquedos que emitam sons para manter os gatos entretidos e estimular sua mente'),
('d81bdeba-2830-11ef-9522-e97072ee51c9','Papagaios têm uma capacidade vocal impressionante e podem aprender uma ampla gama de sons, incluindo música e palavras'),
('d81c5563-2830-11ef-9522-e97072ee51c9','Ofereça esconderijos e plantas no aquário para peixes tímidos, proporcionando um ambiente seguro e natural'),
('d81ccf68-2830-11ef-9522-e97072ee51c9','Os peixes dourados têm um sistema sensorial de linha lateral que lhes permite detectar movimentos e vibrações na água, ajudando na navegação e na caça'),
('d81d4262-2830-11ef-9522-e97072ee51c9','Manuseie seus hamsters regularmente para fortalecer a confiança e o vínculo, promovendo uma interação saudável');
/*!40000 ALTER TABLE `curiosidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` varchar(191) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3),
  `order_id` varchar(191) NOT NULL,
  `product_id` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `items_order_id_fkey` (`order_id`),
  KEY `items_product_id_fkey` (`product_id`),
  CONSTRAINT `items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` varchar(191) NOT NULL,
  `table` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `draft` tinyint(1) NOT NULL DEFAULT 1,
  `name` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pets` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `apelido` varchar(191) NOT NULL,
  `data_nascimento` datetime(3) DEFAULT current_timestamp(3),
  `especie` varchar(191) NOT NULL,
  `idade` varchar(191) NOT NULL,
  `meses` varchar(191) NOT NULL,
  `raca` varchar(191) NOT NULL,
  `chip` varchar(191) NOT NULL,
  `sexo` varchar(191) NOT NULL,
  `temperamento` varchar(191) NOT NULL,
  `tamanho` varchar(191) NOT NULL,
  `detalhes` varchar(191) NOT NULL,
  `user_id` varchar(191) NOT NULL,
  `img_perfil` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pets_user_id_fkey` (`user_id`),
  CONSTRAINT `pets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES
('362b3a82-5372-4e71-8e60-fd79bd019ff7','Antonio','Tonhão ','2024-06-13 14:52:29.884','Canina','0','2','Pincher ','rastreador','Macho','bravo','Porte Pequeno','<p>Muito bravo</p>','fed6a842-f2cb-4266-9336-4f0c9dfc0c63','05d6bfe41d425b81945b85382e98a44c-vega.jpg'),
('e760ecd3-49f0-465a-8099-1dbe2fc003ca','Guia','guicão','2024-06-13 12:44:15.419','Felina','20','22','Luna','23','Macho','Luna','Porte Médio','<p>teste luna</p>','9384f7f6-90f4-4e6f-87c5-eeb8e488486b','6a87ca24c2f73fce516ab9ee3b0150aa-Imagem do WhatsApp de 2024-04-26 Ã (s) 10.51.07_6084f3b8.jpg');
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `price` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `banner` varchar(191) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3),
  `category_id` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_fkey` (`category_id`),
  CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
('9384f7f6-90f4-4e6f-87c5-eeb8e488486b','Leonardo Soldi','leosoldi@icnex.com.br','$2a$08$YWOUWQdiCUYDa8yJLqv3iOle8ecr2KbqkEWNe6GMhaLEkYnqh9FEy','2024-06-11 20:35:18.568','2024-06-11 20:35:18.568'),
('fed6a842-f2cb-4266-9336-4f0c9dfc0c63','Nicolas ','nicolas@icnex.com.br','$2a$08$su8I6by8SHVgiTra3JBKmOWowBOqMsdpSIupBWfHNbsx4Y63YZh2.','2024-06-11 20:35:49.699','2024-06-11 20:35:49.699');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-14 15:00:18
