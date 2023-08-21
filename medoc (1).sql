-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 19, 2021 at 04:28 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medoc`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('medco143admin', '143password'),
('admin', '0987654321');

-- --------------------------------------------------------

--
-- Table structure for table `appoinment`
--

DROP TABLE IF EXISTS `appoinment`;
CREATE TABLE IF NOT EXISTS `appoinment` (
  `Aid` int(11) NOT NULL AUTO_INCREMENT,
  `Did` int(11) NOT NULL,
  `Pid` int(11) NOT NULL,
  `A_Date` date NOT NULL,
  `A_Time` time(6) NOT NULL,
  `A_status` varchar(50) NOT NULL,
  PRIMARY KEY (`Aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appoinment`
--

INSERT INTO `appoinment` (`Aid`, `Did`, `Pid`, `A_Date`, `A_Time`, `A_status`) VALUES
(1, 56, 4564, '2021-06-16', '19:15:38.000000', 's');

-- --------------------------------------------------------

--
-- Table structure for table `disdictionary`
--

DROP TABLE IF EXISTS `disdictionary`;
CREATE TABLE IF NOT EXISTS `disdictionary` (
  `disid` int(11) NOT NULL AUTO_INCREMENT,
  `Dis_name` varchar(100) NOT NULL,
  `Dis_defination` varchar(20000) NOT NULL,
  `Symptoms` varchar(20000) NOT NULL,
  `Causes` varchar(20000) NOT NULL,
  PRIMARY KEY (`disid`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disdictionary`
--

INSERT INTO `disdictionary` (`disid`, `Dis_name`, `Dis_defination`, `Symptoms`, `Causes`) VALUES
(19, 'Fever', 'A fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body. For an adult, a fever may be uncomfortable, but usually isnt a cause for concern unless it reaches 103 F (39.4 C) or higher.', 'Sweating Chills and shivering Headache Muscle aches Loss of appetite Irritability Dehydration General weakness', 'A virus A bacterial infection Heat exhaustion Certain inflammatory conditions such as rheumatoid arthritis inflammation of the lining of your joints (synovium)A malignant tumor Some medications, such as antibiotics and drugs used to treat high blood pressure or seizures Some immunizations, such as the diphtheria, tetanus and acellular pertussis (DTaP) or pneumococcal vaccine'),
(20, 'Malaria', 'Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. It is preventable and curable.', 'Pain areas: in the abdomen or muscles\r\nWhole body: chills, fatigue, fever, night sweats, shivering, or sweating\r\nGastrointestinal: diarrhoea, nausea, or vomiting\r\nAlso common: fast heart rate, headache, mental confusion, or pallor', 'Malaria is caused in humans by five species of single-cell, eukaryotic Plasmodium parasites (mainly Plasmodium falciparum and Plasmodium vivax) that are transmitted by the bite of Anopheles mosquitoes.'),
(21, 'skin Allergies', 'Allergies occur when your immune system reacts to a foreign substance — such as pollen, bee venom or pet dander — or a food that doesn\'t cause a reaction in most people. Your immune system produces substances known as antibodies', 'Eye irritation\r\nRunny nose\r\nStuffy nose\r\nPuffy, watery eyes\r\nSneezing\r\nInflamed, itchy nose and throat', 'Airborne allergens, such as pollen, animal dander, dust mites and mold\r\nCertain foods, particularly peanuts, tree nuts, wheat, soy, fish, shellfish, eggs and milk\r\nInsect stings, such as from a bee or wasp\r\nMedications, particularly penicillin or penicillin-based antibiotics\r\nLatex or other substances you touch, which can cause allergic skin reactions'),
(22, 'Headaches', 'Headaches are a common health problem — most people experience them at some time. Factors that lead to headaches may be: emotional, such as stress, depression, or anxiety. medical, such as migraine or high blood pressure. physical, such as an injury.', 'Symptoms of a migraine:\r\n\r\npulsing or throbbing quality\r\nbegins with intense pain on one side of the head, which eventually spreads\r\nfelt on one or both sides of the head\r\nlasts several hours\r\nsevere enough to interfere with routine activities\r\nmay be accompanied by nausea or vomiting\r\nsometimes preceded by visual changes, such as an aura of zigzag lines or flashes of light\r\nlight and noise can make the headache worse, while sleep tends to relieve symptoms\r\nSymptoms of a tension-type headache:\r\n\r\nconstant, dull ache\r\nfelt on both sides of the head\r\na feeling of squeezing or pressure\r\ndoes not usually interfere with routine activities\r\nlasts from 30 minutes to a few days', 'Emotional and physical stress\r\nFatigue\r\nIrregular sleep habits (sleeping too much or too little)\r\nSkipping meals\r\nCaffeine use or withdrawal\r\nHormonal factors, such as menstruation\r\nMonosodium glutamate (MSG)\r\nFoods with nitrates, such as hot dogs\r\nAlcohol\r\nSome medicines\r\nCertain foods, including red wine, chocolate, aged cheeses, pickled foods, nuts, and aspartame\r\nChanges in weather, altitude, or time zone'),
(23, 'Abdominal Pain/Stomach Aches', 'Pain from inside the abdomen or the outer muscle wall, ranging from mild and temporary to severe and requiring emergency care.', '\r\nAbdominal pain or cramping\r\nAbdominal swelling, distension or bloating\r\nBelching\r\nBloody stool (blood may be red, black, or tarry in texture)\r\nChanges in bowel movements\r\nConstipation\r\nCramping\r\nDiarrhea\r\nGas\r\nIndigestion\r\nNausea with or without vomiting\r\nUrgent need to pass stool', 'Irritable bowel syndrome (IBS)\r\nCrohn\'s disease or ulcerative colitis\r\nFood poisoning\r\nFood allergies\r\nGas\r\nUrinary tract infection\r\nAbdominal muscle strain or pull'),
(24, 'Heart attack', 'A heart attack occurs when an artery supplying your heart with blood and oxygen becomes blocked. Fatty deposits build up over time, forming plaques in your heart\'s arteries. If a plaque ruptures, a blood clot can form and block your arteries, causing a heart attack.', 'Pressure, tightness, pain, or a squeezing or aching sensation in your chest or arms that may spread to your neck, jaw or back\r\nNausea, indigestion, heartburn or abdominal pain\r\nShortness of breath\r\nCold sweat\r\nFatigue\r\nLightheadedness or sudden dizziness', 'The misuse of drugs, such as cocaine, which causes the blood vessels to narrow\r\nLow oxygen levels in the blood, due, for example, to carbon monoxide poisoning'),
(25, 'Acne', 'Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples. Acne is most common among teenagers, though it affects people of all ages. Effective acne treatments are available, but acne can be persistent.', 'Faintness\r\nDifficulty breathing\r\nSwelling of the eyes, face, lips or tongue\r\nTightness of the throat', 'Excess oil (sebum) production\r\nHair follicles clogged by oil and dead skin cells\r\nBacteria\r\nInflammation'),
(26, 'Diabetes', 'Diabetes mellitus refers to a group of diseases that affect how your body uses blood sugar (glucose). Glucose is vital to your health because it\'s an important source of energy for the cells that make up your muscles and tissues. It\'s also your brain\'s main source of fuel.', 'Increased thirst\r\nFrequent urination\r\nExtreme hunger\r\nUnexplained weight loss\r\nPresence of ketones in the urine (ketones are a byproduct of the breakdown of muscle and fat that happens when there\'s not enough available insulin)\r\nFatigue\r\nIrritability\r\nBlurred vision\r\nSlow-healing sores\r\nFrequent infections, such as gums or skin infections and vaginal infections', 'Type 1 Diabetes:\r\nDamage to beta cells from type 1 diabetes throws the process off. Glucose doesn’t move into your cells because insulin isn’t there to do the job. Instead, it builds up in your blood, and your cells starve. This causes high blood sugar\r\ntype 2 Diabetes:\r\nCells in muscle, fat and the liver become resistant to insulin. Because these cells don\'t interact in a normal way with insulin, they don\'t take in enough sugar.\r\nThe pancreas is unable to produce enough insulin to manage blood sugar levels.'),
(27, 'Thyroid', 'The thyroid is a butterfly-shaped gland that sits low on the front of the neck. Your thyroid lies below your Adam’s apple, along the front of the windpipe. The thyroid has two side lobes, connected by a bridge (isthmus) in the middle. When the thyroid is its normal size, you can’t feel it.', 'Sudden weight loss even though your appetite is normal or has increased\r\nA pounding heart\r\nTrouble sleeping\r\nMuscle weakness\r\nNervousness or irritability\r\nFeeling cold\r\nFeeling tired more easily\r\nDry skin\r\nMemory problems\r\nDepression\r\nConstipation', 'Overgrowth of normal thyroid tissue\r\nThyroid cyst.\r\nChronic inflammation of the thyroid\r\nMultinodular goiter\r\nThyroid cancer\r\nIodine deficiency'),
(28, 'Diarrhea', 'Diarrhea is characterized by loose, watery stools or a frequent need to have a bowel movement. It usually lasts a few days and often disappears without any treatment. Diarrhea can be acute or chronic. Acute diarrhea occurs when the condition lasts for one to two days.', 'Loose, watery stools\r\nAbdominal cramps\r\nAbdominal pain\r\nFever\r\nBlood in the stool\r\nMucus in the stool\r\nBloating\r\nNausea\r\nUrgent need to have a bowel movement', 'Viruses\r\nBacteria and parasites\r\nMedications\r\nLactose intolerance\r\nFructose\r\nArtificial sweeteners\r\nSurgery\r\nOther digestive disorders'),
(29, 'Pneumonia', 'Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus (purulent material), causing cough with phlegm or pus, fever, chills, and difficulty breathing.', 'Chest pain when you breathe or cough\r\nConfusion or changes in mental awareness (in adults age 65 and older)\r\nCough, which may produce phlegm\r\nFatigue\r\nFever, sweating and shaking chills\r\nLower than normal body temperature (in adults older than age 65 and people with weak immune systems)\r\nNausea, vomiting or diarrhea\r\nShortness of breath', 'Bacterial pneumonia:\r\nMycoplasma pneumoniae\r\nHaemophilus influenzae\r\nLegionella pneumophila\r\nViral pneumonia:\r\ninfluenza (flu)\r\nrespiratory syncytial virus (RSV)\r\nrhinoviruses (common cold)\r\nFungal pneumonia:\r\nPneumocystis jirovecii\r\nCryptococcus species\r\nHistoplasmosis species'),
(30, 'HIV and AIDS', 'Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body\'s ability to fight infection and disease', 'Fever\r\nHeadache\r\nMuscle aches and joint pain\r\nRash\r\nSore throat and painful mouth sores\r\nSwollen lymph glands, mainly on the neck\r\nDiarrhea\r\nWeight loss\r\nCough\r\nNight sweats', 'By having sex: You may become infected if you have vaginal, anal or oral sex with an infected partner whose blood, semen or vaginal secretions enter your body. The virus can enter your body through mouth sores or small tears that sometimes develop in the rectum or vagina during sexual activity.\r\nBy sharing needles: Sharing contaminated IV drug paraphernalia (needles and syringes) puts you at high risk of HIV and other infectious diseases, such as hepatitis.\r\nFrom blood transfusions: In some cases, the virus may be transmitted through blood transfusions. American hospitals and blood banks now screen the blood supply for HIV antibodies, so this risk is very small.\r\nDuring pregnancy or delivery or through breast-feeding: Infected mothers can pass the virus on to their babies. Mothers who are HIV-positive and get treatment for the infection during pregnancy can significantly lower the risk to their babies.'),
(31, 'Conjunctivitis/Pink Eye', 'Conjunctivitis is often called pink eye. It happens when the conjunctiva is irritated by an infection or allergies. Your eyes are red and swollen (inflamed), and sometimes they have a sticky discharge. You can have conjunctivitis in one or both eyes', 'Pain areas: in the eyes\r\nEyes: redness, irritation, redness of eyelid, discharge, dryness, itchiness, puffy eyes, swollen lining of the eye, or watery eyes\r\nNasal: congestion, runny nose, or sneezing\r\nAlso common: sensitivity to light', 'Viruses, including the kind that causes the common cold\r\nBacteria\r\nIrritants such as shampoos, dirt, smoke, and pool chlorine\r\nA reaction to eyedrops\r\nAn allergic reaction to things like pollen, dust, or smoke. Or it could be due to a special type of allergy that affects some people who wear contact lenses.\r\nFungi, amoebas, and parasites'),
(32, 'Glaucoma', 'Glaucoma is a group of eye conditions that damage the optic nerve, the health of which is vital for good vision. This damage is often caused by an abnormally high pressure in your eye. Glaucoma is one of the leading causes of blindness for people over the age of 60.', 'Open-angle glaucoma\r\nPatchy blind spots in your side (peripheral) or central vision, frequently in both eyes\r\nTunnel vision in the advanced stages\r\nAcute angle-closure glaucoma\r\nSevere headache\r\nEye pain\r\nNausea and vomiting\r\nBlurred vision\r\nHalos around lights\r\nEye redness', 'Elevated eye pressure is due to a buildup of a fluid (aqueous humor) that flows throughout the inside of your eye. This internal fluid normally drains out through a tissue called the trabecular meshwork at the angle where the iris and cornea meet. When fluid is overproduced or the drainage system doesn\'t work properly, the fluid can\'t flow out at its normal rate and eye pressure increases.'),
(33, 'Back pain', 'Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling.', 'Persists past a few weeks\r\nIs severe and doesn\'t improve with rest\r\nSpreads down one or both legs, especially if the pain extends below the knee\r\nCauses weakness, numbness or tingling in one or both legs\r\nIs accompanied by unexplained weight loss\r\nCauses new bowel or bladder problems\r\nIs accompanied by a fever\r\nFollows a fall, blow to your back or other injury', 'Muscle or ligament strain. Repeated heavy lifting or a sudden awkward movement can strain back muscles and spinal ligaments. If you\'re in poor physical condition, constant strain on your back can cause painful muscle spasms.\r\nBulging or ruptured disks. Disks act as cushions between the bones (vertebrae) in your spine. The soft material inside a disk can bulge or rupture and press on a nerve. However, you can have a bulging or ruptured disk without back pain. Disk disease is often found incidentally when you have spine X-rays for some other reason.\r\nArthritis. Osteoarthritis can affect the lower back. In some cases, arthritis in the spine can lead to a narrowing of the space around the spinal cord, a condition called spinal stenosis.\r\nOsteoporosis. Your spine\'s vertebrae can develop painful fractures if your bones become porous and brittle.'),
(34, 'Ankle pain', 'Your ankle is an intricate network of bones, ligaments, tendons and muscles. Strong enough to bear your body weight and enable you to move, your ankle can be prone to injury and pain. You might feel the pain on the inside or outside of your ankle or along the Achilles tendon, which connects the muscles in your lower leg to your heel bone. Although mild ankle pain often responds well to home treatments, it can take time to resolve. You should see your doctor for severe ankle pain, especially if it follows an injury.', 'ankle swelling,\r\nbruising,\r\nredness,\r\nnumbness or tingling,\r\ninstability,\r\nburning pain,\r\ninability to bear weight on the affected ankle,\r\nstiffness, and\r\nweakness.', 'Achilles tendinitis\r\nAchilles tendon rupture\r\nAvulsion fracture\r\nBroken foot\r\nBursitis (joint inflammation)\r\nGout (arthritis related to excess uric acid)\r\nOsteoarthritis (disease causing the breakdown of joints)\r\nOsteochondritis dissecans\r\nPlantar fasciitis\r\nPseudogout\r\nPsoriatic arthritis\r\nReactive arthritis\r\nRheumatoid arthritis (inflammatory joint disease)\r\nSeptic arthritis\r\nSprained ankle\r\nStress fractures\r\nTarsal tunnel syndrome'),
(35, 'Asthma', 'Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath.', 'Shortness of breath\r\nChest tightness or pain\r\nWheezing when exhaling, which is a common sign of asthma in children\r\nTrouble sleeping caused by shortness of breath, coughing or wheezing\r\nCoughing or wheezing attacks that are worsened by a respiratory virus, such as a cold or the flu', 'Airborne allergens, such as pollen, dust mites, mold spores, pet dander or particles of cockroach waste\r\nRespiratory infections, such as the common cold\r\nPhysical activity\r\nCold air\r\nAir pollutants and irritants, such as smoke\r\nCertain medications, including beta blockers, aspirin, and nonsteroidal anti-inflammatory drugs, such as ibuprofen (Advil, Motrin IB, others) and naproxen sodium (Aleve)\r\nStrong emotions and stress\r\nSulfites and preservatives added to some types of foods and beverages, including shrimp, dried fruit, processed potatoes, beer and wine\r\nGastroesophageal reflux disease (GERD), a condition in which stomach acids back up into your throat'),
(36, 'Hand pain', 'The human hands are complex and delicate structures that contain 27 bones. The muscles and joints in the hand allow for strong, precise, and dexterous movements, but they are vulnerable to injury.', 'dull or burning pain in joints of fingers or wrist\r\npain after overuse (such as heavy gripping or repetitive motion)\r\nmorning pain and stiffness in joints\r\nswelling around joints\r\nchanges in surrounding thumb joints (overextension)\r\nwarmth at site of the affected joint (resulting from inflammation)\r\nsensations of grinding, grating, or looseness around finger joints\r\nsmall cysts on the end of fingers', 'bones\r\njoints\r\nconnective tissues\r\ntendons\r\nnerves\r\ninflammation\r\nnerve damage\r\nrepetitive motion injuries\r\nsprains and fractures\r\nseveral chronic health conditions'),
(37, 'Covid-19', 'Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China in December 2019. The disease has since spread worldwide, leading to an ongoing pandemic.', 'Most common symptoms:\r\nfever\r\ndry cough\r\ntiredness\r\nLess common symptoms:\r\naches and pains\r\nsore throat\r\ndiarrhoea\r\nconjunctivitis\r\nheadache\r\nloss of taste or smell\r\na rash on skin, or discolouration of fingers or toes\r\nSerious symptoms:\r\ndifficulty breathing or shortness of breath\r\nchest pain or pressure\r\nloss of speech or movement', 'The virus that causes COVID-19 spreads easily among people, and more continues to be discovered over time about how it spreads. Data has shown that it spreads mainly from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone with the virus coughs, sneezes, breathes, sings or talks. These droplets can be inhaled or land in the mouth, nose or eyes of a person nearby.');

-- --------------------------------------------------------

--
-- Table structure for table `doctorlist`
--

DROP TABLE IF EXISTS `doctorlist`;
CREATE TABLE IF NOT EXISTS `doctorlist` (
  `Did` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Gender` varchar(50) NOT NULL,
  `Licence_no` bigint(50) NOT NULL,
  `Hospital_Name` varchar(50) NOT NULL,
  `Hospital_address` varchar(100) NOT NULL,
  `Specialization` varchar(50) NOT NULL,
  `Phone_no` bigint(20) NOT NULL,
  `E_mail` varchar(50) NOT NULL,
  `Doctor_status` varchar(50) NOT NULL,
  `doc_timings` varchar(100) NOT NULL,
  PRIMARY KEY (`Did`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctorlist`
--

INSERT INTO `doctorlist` (`Did`, `Name`, `Gender`, `Licence_no`, `Hospital_Name`, `Hospital_address`, `Specialization`, `Phone_no`, `E_mail`, `Doctor_status`, `doc_timings`) VALUES
(9, 'Dr Pushavahi', 'female', 9567000033, 'kmc', 'Halemane kalathur po ICHLAMPADY via kumbla kasaragod', 'cardiologist', 8111912956, 'arpiiiarpitha@gmail.com', 'in', 'Mon-Fri(8:00-11:30),(2:00-5:30)');

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

DROP TABLE IF EXISTS `fees`;
CREATE TABLE IF NOT EXISTS `fees` (
  `Fid` int(11) NOT NULL AUTO_INCREMENT,
  `Aid` int(11) NOT NULL,
  `Date` date NOT NULL,
  `F_amount` varchar(50) NOT NULL,
  `F_status` varchar(50) NOT NULL,
  PRIMARY KEY (`Fid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fees`
--

INSERT INTO `fees` (`Fid`, `Aid`, `Date`, `F_amount`, `F_status`) VALUES
(1, 435, '2021-06-08', '34534', 'fd');

-- --------------------------------------------------------

--
-- Table structure for table `patientlist`
--

DROP TABLE IF EXISTS `patientlist`;
CREATE TABLE IF NOT EXISTS `patientlist` (
  `Pid` int(11) NOT NULL AUTO_INCREMENT,
  `Pname` varchar(50) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `Age` int(20) NOT NULL,
  `Phone_no` bigint(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`Pid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patientlist`
--

INSERT INTO `patientlist` (`Pid`, `Pname`, `Gender`, `Age`, `Phone_no`, `address`) VALUES
(1, 'goku', 'male', 38, 8764466482, 'at pushpa villa'),
(2, 'rani manothra', 'female', 29, 9854456672, 'at raj villa');

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
CREATE TABLE IF NOT EXISTS `prescription` (
  `PSid` int(11) NOT NULL AUTO_INCREMENT,
  `Did` int(11) NOT NULL,
  `Pid` int(11) NOT NULL,
  `Disease_name` varchar(100) NOT NULL,
  `Prescription` varchar(20000) NOT NULL,
  PRIMARY KEY (`PSid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`PSid`, `Did`, `Pid`, `Disease_name`, `Prescription`) VALUES
(3, 567567, 675675, 'fghfgh', 'ghdfgh'),
(4, 456456, 456456, 'fgdfg', 'dfgsdfg');

-- --------------------------------------------------------

--
-- Table structure for table `specialist`
--

DROP TABLE IF EXISTS `specialist`;
CREATE TABLE IF NOT EXISTS `specialist` (
  `Sid` int(11) NOT NULL AUTO_INCREMENT,
  `Specialties` varchar(100) NOT NULL,
  `Experties` varchar(20000) NOT NULL,
  PRIMARY KEY (`Sid`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `specialist`
--

INSERT INTO `specialist` (`Sid`, `Specialties`, `Experties`) VALUES
(1, 'Allergists/Immunologists', 'They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases.'),
(2, 'Anesthesiologists', 'These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while youre under anesthesia.'),
(3, 'Cardiologists', 'They are experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.'),
(4, 'Colon and Rectal Surgeons', 'You would see these doctors for problems with your small intestine, colon, and bottom. They can treat colon cancer, hemorrhoids, and inflammatory bowel disease. '),
(5, 'Critical Care Medicine Specialists', 'They care for people who are critically ill or injured, often heading intensive care units in hospitals. You might see them if your heart or other organs are failing or if you have been in an accident. '),
(6, 'Dermatologists', 'Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.'),
(7, 'Endocrinologists', 'These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.'),
(8, 'Emergency Medicine Specialists', 'These doctors make life-or-death decisions for sick and injured people, usually in an emergency room. Their job is to save lives and to avoid or lower the chances of disability.'),
(9, 'Family Physicians', 'They care for the whole family, including children, adults, and the elderly. They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions.'),
(10, 'Gastroenterologists', 'They are specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. You might see them for abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs. They also do a colonoscopy and other tests for colon cancer'),
(11, 'Geriatric Medicine Specialists', 'These doctors care for the elderly. They can treat people in their homes, doctors\' offices, nursing homes, assisted-living centers, and hospitals.'),
(12, 'Hematologists', 'These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.'),
(13, 'Hospice and Palliative Medicine Specialists', 'They work with people who are nearing death. They are experts in pain management. They work with a team of other doctors to keep up your quality of life.'),
(14, 'Internists', 'These primary-care doctors treat both common and complex illnesses, usually only in adults. You wll likely visit them or your family doctor first for any condition. Internists often have advanced training in a host of subspecialties, like heart disease, cancer, or adolescent or sleep medicine. With additional training (called a fellowship), internists can specialize in cardiology, gastroenterology, endocrinology, nephrology, pulmonology, and other medical sub-specialties.'),
(15, 'Medical Geneticists', 'They diagnose and treat hereditary disorders passed down from parents to children. These doctors may also offer genetic counseling and screening tests.'),
(16, 'Nephrologists', 'They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.'),
(17, 'Neurologists', 'These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson\'s disease, and Alzheimer\'s disease.'),
(18, 'Obstetricians and Gynecologists', 'Often called OB/GYNs, these doctors focus on women\'s health, including pregnancy and childbirth. They do Pap smears, pelvic exams, and pregnancy checkups. OB/GYNs are trained in both areas. But some of them may focus on women\'s reproductive health (gynecologists), and others specialize in caring for pregnant women (obstetricians).'),
(19, 'Oncologists', 'These internists are cancer specialists. They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.'),
(20, 'Ophthalmologists', 'You call them eye doctors. They can prescribe glasses or contact lenses and diagnose and treat diseases like glaucoma. Unlike optometrists, they are medical doctors who can treat every kind of eye condition as well as operate on the eyes.'),
(21, 'Osteopaths', 'Doctors of osteopathic medicine (DO) are fully licensed medical doctors just like MDs. Their training stresses a whole body approach. Osteopaths use the latest medical technology but also the body  as natural ability to heal itself.'),
(22, 'Otolaryngologists', 'They treat diseases in the ears, nose, throat, sinuses, head, neck, and respiratory system. They also can do reconstructive and plastic surgery on your head and neck.'),
(23, 'Pathologists', 'These lab doctors identify the causes of diseases by examining body tissues and fluids under microscopes.'),
(24, 'Pediatricians', 'They care for children from birth to young adulthood. Some pediatricians specialize in pre-teens and teens, child abuse, or children\'s developmental issues.'),
(25, 'Physiatrists', 'These specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.'),
(26, 'Plastic Surgeons', 'You might call them cosmetic surgeons. They rebuild or repair your skin, face, hands, breasts, or body. That can happen after an injury or disease or for cosmetic reasons.'),
(27, 'Podiatrists', 'They care for problems in your ankles and feet. That can include injuries from accidents or sports or from ongoing health conditions like diabetes. Some podiatrists have advanced training in other subspecialties of the foot.'),
(28, 'Preventive Medicine Specialists', 'They focus on keeping you well. They may work in public health or at hospitals. Some focus on treating people with addictions, illnesses from exposure to drugs, chemicals, and poisons, and other areas.'),
(29, 'Psychiatrists', 'These doctors work with people with mental, emotional, or addictive disorders. They can diagnose and treat depression, schizophrenia, substance abuse, anxiety disorders, and sexual and gender identity issues. Some psychiatrists focus on children, adolescents, or the elderly.'),
(30, 'Pulmonologists', 'You would see these specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.'),
(31, 'Radiologists', 'They use X-rays, ultrasound, and other imaging tests to diagnose diseases. They can also specialize in radiation oncology to treat conditions like cancer.'),
(32, 'Rheumatologists', 'They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons. You might see them for your osteoporosis (weak bones), back pain, gout, tendinitis from sports or repetitive injuries, and fibromyalgia.'),
(33, 'Sleep Medicine Specialists', 'They find and treat causes behind your poor sleep. They may have sleep labs or give you take-home tests to chart your sleep-wake patterns.'),
(34, 'Sports Medicine Specialists', 'These doctors diagnose, treat, and prevent injuries related to sports and exercise.'),
(35, 'General Surgeons', 'These doctors can operate on all parts of your body. They can take out tumors, appendices, or gallbladders and repair hernias. Many surgeons have subspecialties, like cancer, hand, or vascular surgery.'),
(36, 'Urologists', 'These are surgeons who care for men and women for problems in the urinary tract, like a leaky bladder. They also treat male infertility and do prostate');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
